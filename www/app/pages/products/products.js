import productsPage from './products.page';

let productsModule = angular.module('products', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.store.products', {
        url: '/products',
          views:{
              "store-products-content":{
                  template:productsPage.template,
                  controller:productsPage.controller,
                  controllerAs: '$ctrl'
              }
          }

      });
  })

.name;



export default productsModule;
