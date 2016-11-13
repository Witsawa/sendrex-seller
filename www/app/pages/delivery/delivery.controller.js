class DeliveryController {
  constructor(getCurrentShop,Shop) {
    this.name = 'delivery';
    this.shop = getCurrentShop
    this._Shop = Shop
  }
  save(){
    let self = this
    let data = angular.copy(this.shop)
    this._Shop.updateAttributes({id:self.shop.id},data).$promise.then((shop)=>{
      console.log("Shop saved",shop)

    },(error)=>{
      console.log("Cannot save shop",error)
    })
  }
}

DeliveryController.$inject = ['getCurrentShop','Shop']

export default DeliveryController;
