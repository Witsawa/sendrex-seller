import registerPage from './register.page';

let registerModule = angular.module('register', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('register', {
        url: '/register',
        views:{
          root:{
            template:registerPage.template,
            controller:registerPage.controller,
            controllerAs: '$ctrl'
          }
        }


      });
  })

.name;

export default registerModule;
