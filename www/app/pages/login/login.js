import loginPage from './login.page';

let loginModule = angular.module('login', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('login', {
        url: '/login',
          views:{
              root:{
                  template:loginPage.template,
                  controller:loginPage.controller,
                  controllerAs: '$ctrl'
              }
          }


      });
  })

.name;

export default loginModule;
