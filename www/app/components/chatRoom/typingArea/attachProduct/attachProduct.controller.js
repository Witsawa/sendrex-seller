import modalTemplate from './editProductModal.html'
class AttachProductController {
  constructor(Product,$ionicModal,$scope) {
    this.name = 'attachProduct';
    this._Product =Product
    this.products = []
    this.modal = $ionicModal.fromTemplate(modalTemplate,{
      scope: $scope
    })
    this.fetchData()
  }
  fetchData() {
    let self = this
    this._Product.find({filter:{
      where: {
        shopId: this.conversation.shopId
      }
    }}).$promise.then(function (products) {
      self.products = products.map(function (product) {
        product.checked = self.ngModel.indexOf(product.id)>=0
        return product
      })
    },function (err) {
      console.log(err)
    })
  }
  editProduct(){
    this.modal.show()
  }
  done(){
    this.selectedProducts = this.products.reduce(function (result,product) {
      if(product.checked){
        result.push(product)
      }
      return result
    },[])
    this.ngModel = this.selectedProducts.map(function (product) {
      return product.id
    })
    this.modal.hide()
  }
}
AttachProductController.$inject = ['Product','$ionicModal','$scope']
export default AttachProductController;
