import orderListComponent from './orderList.component';

let orderListModule = angular.module('orderList', [
  'ionic'
])

.component('orderList', orderListComponent)

.name;

export default orderListModule;
