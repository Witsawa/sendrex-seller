import productListComponent from './productList.component';

let productListModule = angular.module('productList', [
  'ionic',
  'lbServices'
])

.component('productList', productListComponent)

.name;

export default productListModule;
