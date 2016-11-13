import promotionFormComponent from './promotionForm.component';

let promotionFormModule = angular.module('promotionForm', [
  'ionic'
])

.component('promotionForm', promotionFormComponent)

.name;

export default promotionFormModule;
