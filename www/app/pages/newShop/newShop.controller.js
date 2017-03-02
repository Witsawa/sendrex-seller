class NewShopController {
  constructor($ionicHistory,Shop,$state,localStorageService,getCurrentUser) {
    this.name = 'newShop';
    this._$ionicHistory = $ionicHistory
    this._Shop  = Shop
    this._$state = $state
    this.user = getCurrentUser
    this._localStorageService = localStorageService
    this.shop = new Shop({
      "name": "",
      "description": "",
      "contact_location": {
        "geolocation": {
          "lat": 0,
          "lng": 0
        },
        "formatted_address": ""
      },
      "open_close": [
        {
          days:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
          from:new Date(1970,0,1,8,0),
          to:new Date(1970,0,1,17,0)
        }
      ],
      "delivery_time": [
        {
          days:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
          from:new Date(1970,0,1,8,0),
          to:new Date(1970,0,1,17,0)
        }
      ],
      "delivery_conditions": [
        {
          "from": 0,
          "to": 2,
          "service_fee": 0,
          "delivery_time": 30,
          "min_purchase": 0,
          delivery_time_unit:"Minutes"
        }
      ],
      "contact_number": "",
      "website": "",
      "currency": "THB",
      "bank_account":{
        "type":"individual",
        "bank_account":{
          
          'brand':'',
          'number':'',
          'name':''
          
        }
      },
      "location": {
        "geolocation": {
          "lat": 0,
          "lng": 0
        },
        "formatted_address": "",
        "id": 0
      },
      "email": this.user.email,
      "businessCategoryId":0
    })

  }
  goBack() {
    console.log('go back')
    this._$ionicHistory.goBack();                           //This doesn't work
    //window.history.back();                          //This works
    //alert('code to go back called. Did it work?');  //For testing
  }
  createShop(s){
    let self = this
    let data = angular.copy(s)
    this._Shop.create(data).$promise.then((shop)=>{
      console.log("Shop created",shop)
      self._localStorageService.set('shopId',shop.id)
      self._$state.go('tabs.store.products')
    },(error)=>{
      console.log("Cannot create shop",error)
    })
  }
}

NewShopController.$inject = ["$ionicHistory",'Shop','$state','localStorageService','getCurrentUser']

export default NewShopController;
