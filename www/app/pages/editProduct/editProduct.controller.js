class EditProductController {
  constructor(getProduct,Shop,getCurrentShopId) {
    this.name = 'editProduct';
    console.log(getProduct)
    this.product =getProduct[0]
    this._Shop = Shop
    this.shopId = getCurrentShopId
  }
  save(){
    let self = this
    self._Shop.products.updateById({id:self.shopId,fk:self.product.id},self.createPostData()).$promise.then((result)=>{
      console.log("Product saved",result)
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

EditProductController.$inject = ['getProduct','Shop','getCurrentShopId']
export default EditProductController;
