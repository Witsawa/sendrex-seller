import editValuePackPage from './editValuePack.page';

let editValuePackModule = angular.module('editValuePack', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.store.editValuePack', {
        url: '/editValuePack/:id',
        views:{
          "store-valuepacks-content":{
            template:editValuePackPage.template,
            controller:editValuePackPage.controller,
            controllerAs: '$ctrl'
          }
        },
        resolve:{
          getValuePack:['$stateParams','Shop','getCurrentShopId',($stateParams,Shop,getCurrentShopId)=>{
            console.log($stateParams)
            return Shop.productValuePacks({id:getCurrentShopId,filter:{
              include:['products','shop'],
              where:{id:$stateParams.id}
            }}).$promise
          }]
        }


      });
  })

.name;

export default editValuePackModule;
