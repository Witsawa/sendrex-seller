import socialMediaFormComponent from './socialMediaForm.component';

let socialMediaFormModule = angular.module('socialMediaForm', [
  'ionic'
])

.component('socialMediaForm', socialMediaFormComponent)

.name;

export default socialMediaFormModule;
