import valuepacksPage from './valuepacks.page';

let valuepacksModule = angular.module('valuepacks', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.store.valuepacks', {
        url: '/valuepacks',

          views:{
              "store-valuepacks-content":{
                  template:valuepacksPage.template,
                  controller:valuepacksPage.controller,
                  controllerAs: '$ctrl'
              }
          }
      });
  })

.name;

export default valuepacksModule;
