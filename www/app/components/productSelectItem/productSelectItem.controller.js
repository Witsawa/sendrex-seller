import productListModalTemplate from './productListModal.html'

class ProductSelectItemController {
  constructor($ionicModal,$scope,Shop) {
    this.name = 'productSelectItem';
    this.modal = $ionicModal.fromTemplate(productListModalTemplate,{
      scope:$scope
    })
    this._Shop = Shop
    this.fetchProduct()
  }
  openModal(){
    //this.products = angular.copy(this.ngModel)
    let selectedProductIds = this.ngModel.map((product)=>{
      return product.id
    })
    console.log(selectedProductIds)
    this.products = this.products.map((product)=>{
      product.checked = (selectedProductIds.indexOf(product.id) != -1)
      return product
    })

    console.log(this.products)
    this.modal.show()
  }
  fetchProduct(){
    this._Shop.products({id:this.shopId}).$promise.then((products)=>{
      this.products = products
      console.log(products)
    },(error)=>{
      console.log("get product error",error)
    })
  }
  save(products){
    this.ngModel = products.reduce((result,product)=>{
      if(product.checked){
        result.push(product)
      }
      return result
    },[])
    this.modal.hide()
  }
}


ProductSelectItemController.$inject = ["$ionicModal",'$scope','Shop']
export default ProductSelectItemController;
