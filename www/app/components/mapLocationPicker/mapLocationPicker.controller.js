class MapLocationPickerController {
  constructor($scope,$timeout) {
    let self = this
    self._$timeout = $timeout
    self._$scope = $scope
    this.name = 'mapLocationPicker';
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
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    }
    self.showSuggestion = false;
    self.suggestions = []
    $scope.$watch(()=>{
      return self.ngModel.geolocation
    },(newVal)=>{
      self.center.lat=newVal.lat
      self.center.lng = newVal.lng

    },true)
    $scope.$watch(()=>{
      return self.center
    },(newVal)=>{
      console.log("Location changed",newVal)
      //change map center
      self.markers.center.lat=newVal.lat
      self.markers.center.lng = newVal.lng

    },true)

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
}

MapLocationPickerController.$inject = ['$scope','$timeout']
export default MapLocationPickerController;
