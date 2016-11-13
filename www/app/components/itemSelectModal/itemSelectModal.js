import itemSelectModalComponent from './itemSelectModal.component';

let itemSelectModalModule = angular.module('itemSelectModal', [
  'ionic'
])

.component('itemSelectModal', itemSelectModalComponent)

.name;

export default itemSelectModalModule;
