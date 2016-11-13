import deliveryPage from './delivery.page';

let deliveryModule = angular.module('delivery', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.delivery', {
        url: '/delivery',
        views: {

          "tab-more-content": {
            template: deliveryPage.template,
            controller: deliveryPage.controller,
            controllerAs: '$ctrl'
          }
        }

      });
  })

.name;

export default deliveryModule;
