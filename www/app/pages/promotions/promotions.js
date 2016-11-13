import promotionsPage from './promotions.page';

let promotionsModule = angular.module('promotions', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.store.promotions', {
        url: '/promotions',

          views:{
              "store-promotions-content":{
                  template:promotionsPage.template,
                  controller:promotionsPage.controller,
                  controllerAs: '$ctrl'
              }
          }
      });
  })

.name;

export default promotionsModule;
