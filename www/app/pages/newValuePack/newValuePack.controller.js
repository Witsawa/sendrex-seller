class NewValuePackController {
  constructor(ProductValuePack,Shop,getCurrentShopId) {
    this.name = 'newValuePack';
    this.valuePack = new ProductValuePack({
      "name":"",
      "price":0,
      "products":[],
      "shopId":getCurrentShopId
    })
    this.shopId = getCurrentShopId
    this._Shop = Shop
  }
  save(){
    console.log(this.valuePack)
    let data = this.createPostData()
    this._Shop.productValuePacks.create({id:this.shopId},data).$promise.then((valuePack)=>{
      console.log('Value pack saved',valuePack)
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

NewValuePackController.$inject = ["ProductValuePack","Shop","getCurrentShopId"]

export default NewValuePackController;
