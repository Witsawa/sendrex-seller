class NewProductController {
  constructor(Shop,Product,getCurrentShopId,getCurrentShop,$ionicHistory) {
    this.name = 'newProduct';
    this._Shop = Shop
    this.shopId = getCurrentShopId
    this.shop = getCurrentShop
    this._$ionicHistory = $ionicHistory
    this.product = new Product({shopId:this.shopId,shop:this.shop,name:"",images:[],enableVariants:false,enableOptions:false,description:"",productVariants:[{SKU:"",name:"Default",price:0,stock:0}],productOptions:[]})
  }
  save(){
    let self = this
    self._Shop.products.create({id:self.shopId},self.createPostData()).$promise.then((result)=>{
      console.log("Product saved",result)
      self._$ionicHistory.goBack()
    },(error)=>{
      //TODO produt save error
      console.log("Product save error",error)
    })
  }
  createPostData(){
    let self = this
    let data = angular.copy(self.product)
    data.product_variants = self.product.productVariants
    data.product_options = self.product.productOptions.map((option)=>{
      return option.id
    })
    console.log(data)
    return data
  }
}
NewProductController.$inject = ['Shop',"Product","getCurrentShopId","getCurrentShop",'$ionicHistory']

export default NewProductController;
