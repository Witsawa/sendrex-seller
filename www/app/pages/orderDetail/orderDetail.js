import orderDetailPage from './orderDetail.page';

let orderDetailModule = angular.module('orderDetail', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.orderDetail', {
        url: '/orderDetail/:id',
        views: {
          "tab-order-content": {
            template: orderDetailPage.template,
            controller: orderDetailPage.controller,
            controllerAs: '$ctrl'
          }
        }

      })
      .state('tabs.balanceOrderDetail', {
        url: '/balanceOrderDetail/:id',
        views: {
          "tab-balance-content":{
              template:orderDetailPage.template,
              controller:orderDetailPage.controller,
              controllerAs: '$ctrl'
          }
        }
      })
  })

.name;

export default orderDetailModule;
