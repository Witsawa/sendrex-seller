import attachProductComponent from './attachProduct.component';

let attachProductModule = angular.module('attachProduct', [
  'ionic'
])

.component('attachProduct', attachProductComponent)

.name;

export default attachProductModule;
