import selectShopMorePage from './selectShopMore.page';

let selectShopMoreModule = angular.module('selectShopMore', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('layout.selectShopMore', {
        url: '/selectShopMore',
        views:{
            layout:{
              template:selectShopMorePage.template,
              controller:selectShopMorePage.controller,
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

export default selectShopMoreModule;
