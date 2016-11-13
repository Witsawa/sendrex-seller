import newPromotionPage from './newPromotion.page';

let newPromotionModule = angular.module('newPromotion', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.store.newPromotion', {
        url: '/newPromotion',
        views: {
          "store-promotions-content": {
            template: newPromotionPage.template,
            controller: newPromotionPage.controller,
            controllerAs: '$ctrl'
          }
        }

      });
  })

.name;

export default newPromotionModule;
