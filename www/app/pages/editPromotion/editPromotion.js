import editPromotionPage from './editPromotion.page';

let editPromotionModule = angular.module('editPromotion', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.store.editPromotion', {
        url: '/editPromotion/:id',
        views: {
          "store-promotions-content": {
            template: editPromotionPage.template,
            controller: editPromotionPage.controller,
            controllerAs: '$ctrl'

          }
        },
        resolve:{
          getPromotions:['Shop','getCurrentShopId','$stateParams',(Shop,getCurrentShopId,$stateParams)=>{
            console.log($stateParams)
            return Shop.promotions({id:getCurrentShopId,filter:{
              include:['all','products','productValuePacks'],
              where:{id:$stateParams.id}
            }}).$promise
          }]
        }


      });
  })

.name;

export default editPromotionModule;
