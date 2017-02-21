import conditionEditModalTemplate from './conditionEditModalTemplate.html'
class DeliveryMethodFormController {
  constructor($ionicModal,$scope,$ionicActionSheet) {
    this.name = 'deliveryMethodForm';
    this.conditionEditModal = $ionicModal.fromTemplate(conditionEditModalTemplate,{
      scope:$scope
    })
    this.conditions = this.ngModel
    this._$ionicActionSheet = $ionicActionSheet
  }
  editCondition(condition){


    if(condition){
      this.conditionEditModal.scope.selectedIndex = this.conditions.indexOf(condition)
      condition = angular.copy(condition)
    }else{
      this.conditionEditModal.scope.selectedIndex = -1
      //get uppper bound
      var lastCondition = this.conditions[this.conditions.length-1]
      console.log(lastCondition)
      condition = {
        "from": lastCondition.to,
        "to": lastCondition.to+1,
        "service_fee": 0,
        "delivery_time": 30,
        "min_purchase": 0,
        delivery_time_unit:"Minutes"
      }
    }
    this.conditionEditModal.scope.condition = condition

    this.conditionEditModal.show()
  }
  saveCondition(condition){
    let index= this.conditionEditModal.scope.selectedIndex
    if(index != -1){
      this.conditions[index] = condition
    }else{
      this.conditions.push(condition)
    }
    this.conditionEditModal.hide()
  }
  showActions(codition){
    //show edit or delete
    let self = this
    var hideSheet = self._$ionicActionSheet.show({
      buttons: [
      ],
      destructiveText: 'Delete',
      cancelText: 'Cancel',
      cancel: function() {
        // add cancel code..
      },
      buttonClicked: function(index) {
        if(index == 0){
        }
        return true;
      },
      destructiveButtonClicked:function(){
        let index = self.conditions.indexOf(codition)
        self.conditions.splice(index,1)
        hideSheet()
      }
    });

  }
}
DeliveryMethodFormController.$inject = ["$ionicModal","$scope","$ionicActionSheet"]

export default DeliveryMethodFormController;
