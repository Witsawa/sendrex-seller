import operationTimePage from './operationTime.page';

let operationTimeModule = angular.module('operationTime', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.operationTime', {
        url: '/operationTime',
        views:{
          "tab-more-content": {
              
              template:operationTimePage.template,
              controller:operationTimePage.controller,
              controllerAs: '$ctrl'
            }
        }

      });
  })

.name;

export default operationTimeModule;
