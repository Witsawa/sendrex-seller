import SelectModalTemplate from './itemSelectModalSelectModal.html'

class ItemSelectModalController {
  constructor($filter,$ionicModal,$scope) {
    this.name = 'itemSelectModal';
    let self = this
    this._$filter = $filter;
    this._$scope  = $scope;
    this.selectedItem = this.getSelectedItem();
    console.log(SelectModalTemplate)
    $scope.$ctrl = self
    self.modal = $ionicModal.fromTemplate(SelectModalTemplate,{
      scope:$scope
    })
    $scope.$watch(()=>{
      return self.options
    },()=>{
      console.log("Options changes")
      self.selectedItem = self.getSelectedItem();
    })
  }
  getSelectedItem(){
    let self = this
    let selectedItem = self._$filter('filter')(self.options, (option)=>{return option[self.valueKey] == self.ngModel});
    return (selectedItem&&selectedItem.length>0)?selectedItem[0]:undefined
  }
  openSelectModal(){
    let self = this
    self.modal.show()
  }
  selectItem(option){
    let self = this
    self.ngModel = option[self.valueKey]
    self.selectedItem = self.getSelectedItem()
    console.log(self.selectedItem)
    self.modal.hide()
    if (self._$scope.$root.$$phase != '$apply' && self._$scope.$root.$$phase != '$digest') {
      self._$scope.$apply();
    }
    self.onSelect({value:self.ngModel,selectedOption:self.selectedItem})
  }

}
ItemSelectModalController.$inject = ['$filter','$ionicModal','$scope']
export default ItemSelectModalController;
