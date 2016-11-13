import myProfilePage from './myProfile.page';

let myProfileModule = angular.module('myProfile', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.myProfile', {
        url: '/myProfile',
        views:{

          "tab-more-content":{
            template:myProfilePage.template,
            controller:myProfilePage.controller,
            controllerAs: '$ctrl'
          }
        }


      });
  })

.name;

export default myProfileModule;
