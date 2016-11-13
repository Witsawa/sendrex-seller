import myProfileFormComponent from './myProfileForm.component';

let myProfileFormModule = angular.module('myProfileForm', [
  'ionic'
])

.component('myProfileForm', myProfileFormComponent)

.name;

export default myProfileFormModule;
