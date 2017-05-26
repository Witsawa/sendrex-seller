
class MyShopController {
  constructor(getCurrentShop,Shop,$ionicModal,$scope,Omise) {
    this.name = 'myShop';
    this.shop = getCurrentShop
    this._Shop = Shop
    this._Omise = Omise
  }
  save(){
    let self = this
    let data = angular.copy(this.shop)
    this._Shop.updateAttributes({id:self.shop.id},data).$promise.then((shop)=>{
      console.log("Shop saved",shop)

    },(error)=>{
      console.log("Cannot create shop",error)
    })
  }
}

MyShopController.$inject = ['getCurrentShop','Shop','$ionicModal','$scope','Omise']

export default MyShopController;
