import ValuePackModalTemplate from './valuePackListModal.html'


class ValuePackSelectItemController {
  constructor($scope,Shop,$ionicModal) {
    this.name = 'valuePackSelectItem';
    this.modal = $ionicModal.fromTemplate(ValuePackModalTemplate,{
      scope:$scope
    })
    this._Shop = Shop
    this.fetchValuePacks()
  }
  openModal(){
    //this.products = angular.copy(this.ngModel)
    let selectedValuePackIds = this.ngModel.map((valuePack)=>{
      return valuePack.id
    })
    this.valuePacks = this.valuePacks.map((valuePack)=>{
      valuePack.checked = (selectedValuePackIds.indexOf(valuePack.id) != -1)
      return valuePack
    })
    this.modal.show()
  }
  fetchValuePacks(){
    this._Shop.productValuePacks({id:this.shopId}).$promise.then((valuepacks)=>{
      this.valuePacks = valuepacks
      console.log(valuepacks)
    },(error)=>{
      console.log("get valuepack error",error)
    })
  }
  save(valuepacks){
    this.ngModel = valuepacks.reduce((result,valuepack)=>{
      if(valuepack.checked){
        result.push(valuepack)
      }
      return result
    },[])
    this.modal.hide()
  }
}
ValuePackSelectItemController.$inject = ["$scope","Shop","$ionicModal"]

export default ValuePackSelectItemController;
