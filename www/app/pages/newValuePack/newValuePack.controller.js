class NewValuePackController {
  constructor(ProductValuePack,Shop,getCurrentShopId,$ionicHistory) {
    this.name = 'newValuePack';
    this.valuePack = new ProductValuePack({
      "name":"",
      "price":0,
      "products":[],
      "shopId":getCurrentShopId
    })
    this.shopId = getCurrentShopId
    this._Shop = Shop
    this._$ionicHistory = $ionicHistory
  }
  save(){
    let self = this
    console.log(this.valuePack)
    let data = this.createPostData()
    this._Shop.productValuePacks.create({id:this.shopId},data).$promise.then((valuePack)=>{
      console.log('Value pack saved',valuePack)
      self._$ionicHistory.goBack()
    },(err)=>{
      console.log("Error save value pack",err)
    })
  }
  createPostData(){
    let data = angular.copy(this.valuePack)
    data.productIds = data.products.map((product)=>{
      return product.id
    })
    return data
  }
}

NewValuePackController.$inject = ["ProductValuePack","Shop","getCurrentShopId",'$ionicHistory']

export default NewValuePackController;
