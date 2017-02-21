import deliveryMethodFormComponent from './deliveryMethodForm.component';

let deliveryMethodFormModule = angular.module('deliveryMethodForm', [
  'ionic'
])

.component('deliveryMethodForm', deliveryMethodFormComponent)

.name;

export default deliveryMethodFormModule;
