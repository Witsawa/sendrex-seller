import productFormComponent from './productForm.component';

let productFormModule = angular.module('productForm', [
  'ionic'
])

.component('productForm', productFormComponent)

.name;

export default productFormModule;
