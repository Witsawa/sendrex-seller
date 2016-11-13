import productCategorySelectItemComponent from './productCategorySelectItem.component';

let productCategorySelectItemModule = angular.module('productCategorySelectItem', [
  'ionic'
])

.component('productCategorySelectItem', productCategorySelectItemComponent)

.name;

export default productCategorySelectItemModule;
