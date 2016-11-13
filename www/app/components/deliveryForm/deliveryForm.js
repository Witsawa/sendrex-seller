import deliveryFormComponent from './deliveryForm.component';

let deliveryFormModule = angular.module('deliveryForm', [
  'ionic'
])

.component('deliveryForm', deliveryFormComponent)

.name;

export default deliveryFormModule;
