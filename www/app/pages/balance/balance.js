import balancePage from './balance.page';

let balanceModule = angular.module('balance', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.balance', {
        url: '/balance',
        views:{
            "tab-balance-content":{
                template:balancePage.template,
                controller:balancePage.controller,
                controllerAs: '$ctrl'
            }
        },
        

      });
  })

.name;

export default balanceModule;
