class OperationTimeController {
  constructor(getCurrentShop,Shop,$ionicHistory) {
    this.name = 'operationTime';
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
OperationTimeController.$inject = ['getCurrentShop','Shop','$ionicHistory']
export default OperationTimeController;
