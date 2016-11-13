class ProductFormController {
  constructor(ProductCategory) {
    this.name = 'productForm';
    let self = this
    ProductCategory.find().$promise.then((categories)=>{
      self.categories = categories
    },()=>{
      //TODO ERROR GET CATEGORY HANDLING
    })
  }
}

ProductFormController.$inject = ["ProductCategory"]

export default ProductFormController;
