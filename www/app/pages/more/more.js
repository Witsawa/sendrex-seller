import morePage from './more.page';

let moreModule = angular.module('more', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.more', {
        url: '/more',

          views:{
              "tab-more-content":{
                  template:morePage.template,
                  controller:morePage.controller,
                  controllerAs: '$ctrl'
              }
          },
      });
  })

.name;

export default moreModule;
