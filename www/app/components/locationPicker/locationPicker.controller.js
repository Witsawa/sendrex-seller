import LocationPickerModalTempalte from './locationPickerModalTemplate.html'
class LocationPickerController {
  constructor($ionicModal,$scope,$cordovaGeolocation,$http) {
    this.name = 'locationPicker';
    let self = this
    self._$http = $http
    $scope.$ctrl = self
    console.log(self.ngModel)
    self.center = {
      zoom:15,
      lat:self.ngModel.geolocation.lat,
      lng:self.ngModel.geolocation.lng
    }
    self.defaults = {
      maxZoom: 20,
      zoomControl:false
    }
    self.markers = {
        center: {
            lat: self.ngModel.geolocation.lat,
            lng: self.ngModel.geolocation.lng,
            draggable: true
        }
    }
    self.tiles = {
      url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    }
    self.modal = $ionicModal.fromTemplate(LocationPickerModalTempalte,{
      scope:$scope
    })
    self.suggestions = []
    self.showSuggestion = false
    self._$scope = $scope
    self.ngModel = self.ngModel || {geolocation:{lat:0,lng:0},formatted_address:""}


    //TODO UNCOMMENT THIS TO USE DEVICE LOCATION
    /*
     let posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        let lat  = position.coords.latitude
        let long = position.coords.longitude
        self.ngModel.geolocation.lat = lat
        self.ngModel.geolocation.lng = long
      }, function(err) {
        // error
      });*/
    $scope.$watch(()=>{
      return self.ngModel.geolocation
    },(newVal)=>{
      console.log("Location changed",newVal)
      //change map center
      self.center.lat=newVal.lat
      self.center.lng = newVal.lng

      // var geocoder = new google.maps.Geocoder()
      // geocoder.geocode({'location':newVal},function(results,status){
      //   if (status === 'OK') {
      //     console.log(results)
      //   }
      // })

    },true)


    $scope.$on('leafletDirectiveMarker.dragend',function (event,args) {
      console.log(args)
      var marker = args.model
      self.ngModel.geolocation.lat=marker.lat
      self.ngModel.geolocation.lng = marker.lng
    })

  }
  openPicker(){
    let self =this
    self.center = {
      zoom:15,
      lat:self.ngModel.geolocation.lat,
      lng:self.ngModel.geolocation.lng
    }
    this.modal.show()
  }
  querySuggestions(address){
    let self = this
    let service = new google.maps.places.AutocompleteService();
    if(address) {
      service.getPlacePredictions({input: address}, (prediction, status)=> {
        console.log(status)
        console.log(prediction)
        self.suggestions = prediction
        if (self._$scope.$root.$$phase != '$apply' && self._$scope.$root.$$phase != '$digest') {
          self._$scope.$apply();
        }
      });
    }
  }
  clearSuggestion(){
    console.log("CLear suggestion")
    let self = this
    self.suggestions = []
  }
  selectSuggestion(suggestion){
    let self = this
    console.log(suggestion)
    let service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails(suggestion,(result,status)=>{
      console.log(result,status)
      if(status == "OK"){
        self.ngModel.formatted_address = result.formatted_address
        self.ngModel.geolocation.lat = result.geometry.location.lat()
        self.ngModel.geolocation.lng = result.geometry.location.lng()
        if (self._$scope.$root.$$phase != '$apply' && self._$scope.$root.$$phase != '$digest') {
          self._$scope.$apply();
        }
      }
    })
  }
  done(){

    this.modal.hide()
    this.ngChange()
  }

}

LocationPickerController.$inject = ['$ionicModal','$scope','$cordovaGeolocation','$http']

export default LocationPickerController;
