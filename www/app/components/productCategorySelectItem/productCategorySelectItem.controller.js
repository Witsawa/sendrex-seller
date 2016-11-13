import SelectModalTemplate from './itemSelectModalSelectModal.html'
import editModalTemplate from './productCategoryAdd.html'
class ProductCategorySelectItemController {
  constructor($filter,$ionicModal,$scope,Shop,ShopProductCategory,$ionicActionSheet) {
    this.name = 'productCategorySelectItem';
    let self = this
    this._$filter = $filter;
    this._$scope  = $scope;
    this._ShopProductCategory = ShopProductCategory;
    this._Shop = Shop
    this._$ionicActionSheet = $ionicActionSheet
    self.fetchCategory()
    self.modal = $ionicModal.fromTemplate(SelectModalTemplate,{
      scope:$scope
    })
    self.editModal = $ionicModal.fromTemplate(editModalTemplate,{
      scope:$scope
    })
    self.ngModel = self.ngModel || 0
  }
  fetchCategory(){
    let self = this
    self._Shop.shopProductCategories({id:self.shopId}).$promise.then((categories)=>{
      self.categories = [{name:"Uncategorize",id:0}].concat(categories)
      self.selectedCategory = self.getSelectedItem()
    })
  }
  getSelectedItem(){
    let self = this
    return self._$filter('filter')(self.categories,{id:self.ngModel})[0]
  }
  openSelectModal(){
    let self = this
    self.modal.show()
  }
  selectItem(category){
    let self = this
    console.log("select item")
    self.ngModel = category.id
    self.selectedCategory = self.getSelectedItem()
    self.modal.hide()
    if (self._$scope.$root.$$phase != '$apply' && self._$scope.$root.$$phase != '$digest') {
      self._$scope.$apply();
    }
    self.onSelect({value:self.ngModel,selectedCategory:self.selectedCategory})
  }
  openEditModal(category){
    let self = this
    if(!category){
      category = new self._ShopProductCategory({shopId:self.shopId})
    }
    console.log(category)
    self.editModal.scope.category = category
    self.editModal.show()

  }
  saveCategory(category){
    let self = this
    category.$save().then((result)=>{
      console.log("Save category",result)
      self.editModal.hide()
      self.fetchCategory()
    },(error)=>{
      console.log("Save category error",error)
    })

  }
  showActions(category){
    //show edit or delete
    let self = this
    var hideSheet = self._$ionicActionSheet.show({
      buttons: [
        { text: 'Edit' }
      ],
      destructiveText: 'Delete',
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
        self._ShopProductCategory.deleteById({id:category.id}).$promise.then((result)=>{
          hideSheet()
          console.log("Category deleted",result)
          self.fetchCategory()

        },(error)=>{
          console.log("Category delete error",error)
        })
      }
    });

  }
}
ProductCategorySelectItemController.$inject = ["$filter","$ionicModal","$scope","Shop","ShopProductCategory",'$ionicActionSheet']

export default ProductCategorySelectItemController;
