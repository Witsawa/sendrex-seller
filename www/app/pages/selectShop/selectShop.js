import selectShopPage from './selectShop.page';

let selectShopModule = angular.module('selectShop', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('selectShop', {
        url: '/selectShop',
          views:{
            root:{
              template:selectShopPage.template,
              controller:selectShopPage.controller,
              controllerAs: '$ctrl'
            }
          },
          resolve:{
            getCurrentUser:['Customer',(Customer)=>{
              return Customer.findById({id:Customer.getCurrentId(),filter:{
                include:[
                  {shopStaffs:[{
                    relation: 'shop', 
                    scope: {
                      where: {
                        includeNonPublic: true
                      }
                    }
                  }]}
                ]
              }}).$promise
            }]
          }

      });
  })

.name;

export default selectShopModule;
