import orderPage from './order.page';

let orderModule = angular.module('order', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.order', {
        url: '/order',

          views:{
              "tab-order-content":{
                  template:orderPage.template,
                  controller:orderPage.controller,
                  controllerAs: '$ctrl'
              }
          },
      });
  })

.name;

export default orderModule;
