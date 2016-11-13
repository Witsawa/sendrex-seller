import variantListTemplate from './variantListTemplate.html'
class ProductVariantItemController {
  constructor($ionicModal,$scope,$ionicActionSheet) {
    let self = this
    this.name = 'productVariantItem';
    self.modal = $ionicModal.fromTemplate(variantListTemplate,{
      scope:$scope
    })
    this._$scope = $scope
    this._$ionicActionSheet = $ionicActionSheet
  }

  openModal(){
    let self = this
    this.variants = angular.copy(this.ngModel)
    self.modal.show()
  }
  save(){
    let self = this
    this.ngModel = this.variants
    self.modal.hide()
    if (self._$scope.$root.$$phase != '$apply' && self._$scope.$root.$$phase != '$digest') {
      self._$scope.$apply();
    }
  }
  addVariant(){
    let newVariant = {name:"",price:0,stock:0,SKU:"",productId:this.variants[0].productId}
    this.variants.push(newVariant)
  }
  showActions(variant){
    //show edit or delete
    let self = this
    let ops = {
      buttons: [
      ],
      cancelText: 'Cancel',
      cancel: function() {
        // add cancel code..
      },
      buttonClicked: function(index) {
        if(index == 0){
          self.openEditModal(category)
        }
        return true;
      },
      destructiveButtonClicked:function(){

        let index = self.variants.indexOf(variant)
        self.variants.splice(index, 1);
        hideSheet()
      }
    }

    if(self.variants.length > 1){
      ops.destructiveText = 'Delete'
    }
    var hideSheet = self._$ionicActionSheet.show(ops);
  }
}

ProductVariantItemController.$inject = ['$ionicModal','$scope','$ionicActionSheet']

export default ProductVariantItemController;
