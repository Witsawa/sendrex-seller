import billingPage from './billing.page';

let billingModule = angular.module('billing', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.billing', {
        url: '/billing',
        views:{
              "tab-more-content":{
              template:billingPage.template,
              controller:billingPage.controller,
              controllerAs: '$ctrl'
            }
        }

      });
  })

.name;

export default billingModule;
