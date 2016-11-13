import newProductPage from './newProduct.page';

let newProductModule = angular.module('newProduct', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.store.newProduct', {
        url: '/newProduct',
          views:{
              'store-products-content':{
                  template:newProductPage.template,
                  controller:newProductPage.controller,
                  controllerAs: '$ctrl'
              }
          }


      });
  })

.name;

export default newProductModule;
