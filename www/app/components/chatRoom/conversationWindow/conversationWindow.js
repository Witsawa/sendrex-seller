import conversationWindowComponent from './conversationWindow.component';
import conversationItem from './conversationItem/conversationItem'
let conversationWindowModule = angular.module('conversationWindow', [
  'ionic',
  conversationItem
])

.component('conversationWindow', conversationWindowComponent)
.directive('followTail',['$timeout',function ($timeout) {
  return {
    restrict: 'A',
    link: function(scope, elm, attr) {
      var isFollow = attr.followTail
      //bind changes from scope to our view: set isTop variable
      //depending on what scope variable is. If scope value
      //changes to true and we aren't at top, go to top
      console.log(attr.followData)
      scope.$watch(attr.followData, function(newValue) {
        console.log('data change')
        if (isFollow) {
          scope.scrollBottom()
        }
      },true);
      scope.scrollBottom = function () {
        $timeout(function () {
          elm[0].scrollTop = elm[0].scrollHeight
        })
      }


    }
  };
}])
.name;

export default conversationWindowModule;
