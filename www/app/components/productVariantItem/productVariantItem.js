import productVariantItemComponent from './productVariantItem.component';

let productVariantItemModule = angular.module('productVariantItem', [
  'ionic'
])

.component('productVariantItem', productVariantItemComponent)

.name;

export default productVariantItemModule;
