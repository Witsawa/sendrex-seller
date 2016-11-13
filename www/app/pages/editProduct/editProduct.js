import editProductPage from './editProduct.page';

let editProductModule = angular.module('editProduct', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.store.editProduct', {
        url: '/editProduct/:id',
        views: {
          "store-products-content": {
            template: editProductPage.template,
            controller: editProductPage.controller,
            controllerAs: '$ctrl'
          }
        },
        resolve:{
          getProduct:['Shop','getCurrentShopId','$stateParams',(Shop,getCurrentShopId,$stateParams)=>{
            console.log($stateParams)
            return Shop.products({id:getCurrentShopId,filter:{
              include:['productVariants','shop','productOptions'],
              where:{id:$stateParams.id}
            }}).$promise
          }]
        }

      });
  })

.name;

export default editProductModule;
