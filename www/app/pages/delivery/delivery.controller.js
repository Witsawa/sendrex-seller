class DeliveryController {
  constructor(getCurrentShop,Shop,$ionicHistory) {
    this.name = 'delivery';
    this.shop = getCurrentShop
    this._Shop = Shop
    this._$ionicHistory = $ionicHistory
  }
  save(){
    let self = this
    let data = angular.copy(this.shop)
    this._Shop.updateAttributes({id:self.shop.id},data).$promise.then((shop)=>{
      console.log("Shop saved",shop)
      self._$ionicHistory.goBack();
    },(error)=>{
      console.log("Cannot save shop",error)
    })
  }
}

DeliveryController.$inject = ['getCurrentShop','Shop','$ionicHistory']

export default DeliveryController;
