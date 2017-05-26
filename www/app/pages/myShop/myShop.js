import myShopPage from './myShop.page';

let myShopModule = angular.module('myShop', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.myShop', {
        url: '/myShop',
        views: {

          "tab-more-content": {
            template: myShopPage.template,
            controller: myShopPage.controller,
            controllerAs: '$ctrl'
          }
        },
        resolve: {
          getCurrentShop:['Shop','getCurrentShopId','$q',(Shop,getCurrentShopId,$q)=>{
            return Shop.findById({id:getCurrentShopId}).$promise
          }]
        }

      });
  })

.name;

export default myShopModule;
