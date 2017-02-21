import newShopPage from './newShop.page';

let newShopModule = angular.module('newShop', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('newShop', {
        url: '/newShop',
        views:{
          root:{
            template:newShopPage.template,
            controller:newShopPage.controller,
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

export default newShopModule;
