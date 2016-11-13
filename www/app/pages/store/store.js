import storePage from './store.page';

let storeModule = angular.module('store', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.store', {
        url: '/store',
          views:{
              "tab-store-content":{
                  template:storePage.template,
                  controller:storePage.controller,
                  controllerAs: '$ctrl'
              }
          },
          abstract:true

      });
  })
    .directive('showStoreTabs', function($rootScope) {
        return {
            restrict: 'A',
            link: function($scope, $el) {

                $scope.$on('$ionicView.beforeEnter', function() {
                    console.log("beforeenter")
                    $rootScope.showtabbar = true;
                });
                $scope.$on('$ionicView.afterEnter',function(){
                    var removeListener = $scope.$on('$stateChangeSuccess',function() {
                        removeListener()
                        console.log("beforeleave")
                        $rootScope.showtabbar = false;
                    })
                })
            }
        };
    })
.name;

export default storeModule;
