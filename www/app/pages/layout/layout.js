import layoutPage from './layout.page';

let layoutModule = angular.module('layout', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('layout', {
        url: '/layout',
        views:{
          root:{
            template:layoutPage.template,
            controller:layoutPage.controller,
            controllerAs: '$ctrl'
          }
        }
        

      });
  })

.name;

export default layoutModule;
