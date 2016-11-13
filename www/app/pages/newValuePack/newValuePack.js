import newValuePackPage from './newValuePack.page';

let newValuePackModule = angular.module('newValuePack', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.store.newValuePack', {
        url: '/newValuePack',
        views: {
          "store-valuepacks-content": {
            template: newValuePackPage.template,
            controller: newValuePackPage.controller,
            controllerAs: '$ctrl'
          }
        }

      });
  })

.name;

export default newValuePackModule;
