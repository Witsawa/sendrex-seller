import paymentPage from './payment.page';

let paymentModule = angular.module('payment', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.payment', {
        url: '/payment',
        views: {

          "tab-more-content": {
            template: paymentPage.template,
            controller: paymentPage.controller,
            controllerAs: '$ctrl'
          }
        }

      });
  })

.name;

export default paymentModule;
