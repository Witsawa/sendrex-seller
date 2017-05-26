import publishPage from './publish.page';

let publishModule = angular.module('publish', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.publish', {
        url: '/publish',
        views: {

          "tab-more-content": {
            template:publishPage.template,
            controller:publishPage.controller,
            controllerAs: '$ctrl'
          }
        }

      });
  })

.name;

export default publishModule;
