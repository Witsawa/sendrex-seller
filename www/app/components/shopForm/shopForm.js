import shopFormComponent from './shopForm.component';

let shopFormModule = angular.module('shopForm', [
  'ionic'
])

.component('shopForm', shopFormComponent)

.name;

export default shopFormModule;
