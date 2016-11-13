import productSelectItemComponent from './productSelectItem.component';

let productSelectItemModule = angular.module('productSelectItem', [
  'ionic'
])

.component('productSelectItem', productSelectItemComponent)

.name;

export default productSelectItemModule;
