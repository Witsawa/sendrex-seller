import logoutPage from './logout.page';

let logoutModule = angular.module('logout', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('logout', {
        url: '/logout',
        views:{
          root:{
            template:logoutPage.template,
            controller:logoutPage.controller,
            controllerAs: '$ctrl'
          }
        }


      });
  })

.name;

export default logoutModule;
