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


      })
      .state('layout.myProfile', {
        url: '/myProfile',
        views:{

          layout:{
            template:myProfilePage.template,
            controller:myProfilePage.controller,
            controllerAs: '$ctrl'
          }
        },
        resolve:{
          getCurrentUser:['Customer',(Customer)=>{
              return Customer.getCurrent().$promise
          }]
        }


      });
  })

.name;

export default myProfileModule;
