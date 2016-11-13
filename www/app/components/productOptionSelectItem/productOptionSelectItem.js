import productOptionSelectItemComponent from './productOptionSelectItem.component';

let productOptionSelectItemModule = angular.module('productOptionSelectItem', [
  'ionic'
])

.component('productOptionSelectItem', productOptionSelectItemComponent)

.name;

export default productOptionSelectItemModule;
