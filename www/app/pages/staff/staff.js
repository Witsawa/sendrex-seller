import staffPage from './staff.page';

let staffModule = angular.module('staff', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.staff', {
        url: '/staff',
        views: {

          "tab-more-content": {
            template: staffPage.template,
            controller: staffPage.controller,
            controllerAs: '$ctrl'
          }
        }

      });
  })

.name;

export default staffModule;
