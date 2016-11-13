
let directivesModule = angular.module('directives', [])
  .directive('uiSrefAnimate', function($ionicConfig,$state) {
    return {
      restrict: 'A',
      link: function($scope, element,attrs) {
        element.bind('click',function(){
          $ionicConfig.views.transition('platform');
          $state.go(attrs.uiSrefAnimate);
        })


      }
    };
  })

  .name;

export default directivesModule;
