import OptionSelectModalTemplate from './optionSelectModal.html'
import OptionEditTempalte from './optionEditTemplate.html'
class ProductOptionSelectItemController {
  constructor($filter,$ionicModal,$scope,Shop,$ionicActionSheet,ProductOption) {
    this.name = 'productOptionSelectItem';
    let self = this
    this._Shop = Shop
    this._$ionicActionSheet = $ionicActionSheet
    this._ProductOption = ProductOption
    self.fetchOptions()
    self.modal = $ionicModal.fromTemplate(OptionSelectModalTemplate,{
      scope:$scope
    })
    self.editModal = $ionicModal.fromTemplate(OptionEditTempalte,{
      scope:$scope
    })
    console.log(self.ngModel)
    self.ngModel = self.ngModel || []
    self._$scope = $scope
    self.selectedOptions = self.ngModel.map((option)=>{
      return option.id
    })
  }
  fetchOptions(){
    let self = this
    self._Shop.productOptions({id:self.shopId,filter:{include:["productOptionValues"]}}).$promise.then((options)=>{
      options.map((option)=>{
        if(self.selectedOptions.indexOf(option.id)!=-1){
          option.checked = true
        }
        return option
      })
      self.options = options
    })
  }
  openSelectModal(){
    let self = this
    self.modal.show()
  }

  showActions(option){
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
          self.openEditModal(option)
        }
        return true;
      },
      destructiveButtonClicked:function(){
        self._Shop.productOptions.destroyById({id:self.shopId,fk:option.id}).$promise.then((result)=>{
          hideSheet()
          console.log("Option deleted",result)
          self.fetchOptions()

        },(error)=>{
          console.log("Option delete error",error)
        })
      }
    });

  }
  save(){
    let self = this
    this.ngModel = this.options.reduce((result,option)=>{
      if(option.checked){
        result.push(option)
      }
      return result
    },[])
    self.modal.hide()
    if (self._$scope.$root.$$phase != '$apply' && self._$scope.$root.$$phase != '$digest') {
      self._$scope.$apply();
    }
  }
  openEditModal(option){
    let self = this
    if(!option){
      option = new self._ProductOption({shopId:self.shopId,name:"",multiple_select:"true",require:false,productOptionValues:[{value:"",price:0}]})
    }
    console.log(option)
    self.editModal.scope.option = option
    self.editModal.show()
  }
  addOptionValue(){
    let self = this
    let newOptionValue = {value:"",price:0}
    self.editModal.scope.option.productOptionValues.push(newOptionValue)
  }

  saveOption(option){
    let self = this
    let promise = {}

    let postData = angular.copy(option)
    postData.product_option_values = option.productOptionValues

    if(option.id){
      promise = self._Shop.productOptions.updateById({id:self.shopId,fk:option.id},postData)
    }else{
      promise = self._Shop.productOptions.create({id:self.shopId},postData)
    }
    promise.$promise.then((result)=>{
      console.log("Save option",result)
      self.editModal.hide()
      self.fetchOptions()
    },(error)=>{
      console.log("Save option error",error)
    })
  }
}
ProductOptionSelectItemController.$inject = ['$filter','$ionicModal','$scope','Shop','$ionicActionSheet','ProductOption']

export default ProductOptionSelectItemController;
