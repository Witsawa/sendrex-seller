import tabsPage from './tabs.page';

let tabsModule = angular.module('tabs', [
  'ionic'
])

  .config(($stateProvider,$ionicConfigProvider) => {
    "ngInject";
      $ionicConfigProvider.tabs.position('bottom');
      $stateProvider
      .state('tabs', {
        url: '/tabs',

          views:{
              root:{
                  template:tabsPage.template,
                  controller:tabsPage.controller,
                  controllerAs: '$ctrl'
              }
          },
          abstract:true,
          resolve:{
              getCurrentUser:['Customer',(Customer)=>{
                  return Customer.getCurrent().$promise
              }],
              getCurrentShopId:['Shop','localStorageService','$q',(Shop,localStorageService,$q)=>{
                  let deferred = $q.defer()
                  let shopId = localStorageService.get('shopId')
                  if(shopId){
                    deferred.resolve(shopId)
                  }else{
                      deferred.reject("Shop not selected")
                  }
                  return deferred.promise
              }],
            getCurrentShop:['Shop','getCurrentShopId','$q',(Shop,getCurrentShopId,$q)=>{

              return Shop.findById({id:getCurrentShopId,filter:{ where: {includeNonPublic:true}}}).$promise
            }]
          }

      })

  })
  .directive('showRootTabs', function($rootScope) {
    return {
      restrict: 'A',
      link: function($scope, $el) {

        $scope.$on('$ionicView.beforeEnter', function() {
          console.log("beforeenter")
          $rootScope.showroottab = true;
        });
        $scope.$on('$ionicView.afterEnter',function(){
          var removeListener = $scope.$on('$stateChangeSuccess',function() {
            removeListener()
            console.log("beforeleave")
            $rootScope.showroottab = false;
          })
        })
      }
    };
  })

.name;

export default tabsModule;
