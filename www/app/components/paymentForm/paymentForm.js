import paymentFormComponent from './paymentForm.component';

let paymentFormModule = angular.module('paymentForm', [
  'ionic'
])

.component('paymentForm', paymentFormComponent)

.name;

export default paymentFormModule;
