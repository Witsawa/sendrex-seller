class ProductsController {
  constructor(getCurrentShopId,$state) {
    this.name = 'products';
    this.shopId = getCurrentShopId
    this._$state = $state
  }
  editProduct(product){
    console.log(product)
    this._$state.go('^.editProduct',{id:product.id})
  }
  newProduct(){

    this._$state.go('^.newProduct')
  }
}

ProductsController.$inject = ['getCurrentShopId','$state']
export default ProductsController;
