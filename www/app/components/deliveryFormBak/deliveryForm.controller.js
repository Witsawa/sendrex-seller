import methodModalTemplate from './deliveryModalTemplate.html'
import conditionModalTemplate from './conditionModalTemplate.html'
import conditionEditModalTemplate from './conditionEditModalTemplate.html'
class DeliveryFormController {
  constructor($ionicModal,$scope) {
    this.name = 'deliveryForm';
    this.modal = $ionicModal.fromTemplate(methodModalTemplate,{
      scope:$scope
    })
    this.methodConditionModal = $ionicModal.fromTemplate(conditionModalTemplate,{
      scope:$scope
    })
    this.conditionEditModal = $ionicModal.fromTemplate(conditionEditModalTemplate,{
      scope:$scope
    })
  }
  edit(method){
    this.modal.scope.method = method
    this.modal.show()
  }
  saveMethod(method){
    this.modal.hide()
  }
  editMethodCondition(method){
    this.methodConditionModal.scope.method = method
    this.methodConditionModal.show()
  }
  saveMethodCondition(method){
    this.methodConditionModal.hide()
  }
  editCondition(condition){


    if(condition){
      this.conditionEditModal.scope.selectedIndex = this.methodConditionModal.scope.method.conditions.indexOf(condition)
      condition = angular.copy(condition)
    }else{
      this.conditionEditModal.scope.selectedIndex = -1
      condition = {
        "from": 0,
        "to": 0,
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
      this.methodConditionModal.scope.method.conditions[index] = condition
    }else{
      this.methodConditionModal.scope.method.conditions.push(condition)
    }
    this.conditionEditModal.hide()
  }
}

DeliveryFormController.$inject = ['$ionicModal','$scope']
export default DeliveryFormController;
