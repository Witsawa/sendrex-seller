// Ionic Starter App
import 'ionic.app.scss';
import Components from './components/components';
import Pages from './pages/pages';
import AppComponent from './app.component';
import Directives from './directives';
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'lbServices',
  'LocalStorageModule',
  Components,
  Pages,
  Directives,
  'ngTagsInput',
  'ionic.wizard',
  'ngCordova',
  'leaflet-directive'
])

.run(function($ionicPlatform,$rootScope,$ionicLoading,LoopBackAuth,$location,$state) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $rootScope.$on('loading:show', function () {
      $ionicLoading.show()
    });

    $rootScope.$on('loading:hide', function () {
      $ionicLoading.hide();
    });

    $rootScope.$on('$stateChangeStart', function () {
      console.log('please wait...');
      $rootScope.$broadcast('loading:show');
    });

    $rootScope.$on('$stateChangeSuccess', function () {
      console.log('done');
      $rootScope.$broadcast('loading:hide');
    });

    $rootScope.$on("$stateChangeError", (event, toState, toParams, fromState, fromParams, error) => {

      console.log('done');
      $rootScope.$broadcast('loading:hide');
      console.error("Error loading the page: %o", error);
      console.log(error)
      if(error.status == 401){
        event.preventDefault()
        LoopBackAuth.clearUser();
        LoopBackAuth.clearStorage();
        $location.nextAfterLogin = $state.href(toState,toParams)
        $location.path('/login');
      }else if(error == "Shop not selected"){
        event.preventDefault()
        console.log('Go to select shop')
        $location.path('/selectShop');
      }else{

        $location.path('/logout');
      }
    });
  });
})
  .config(($urlRouterProvider,$ionicConfigProvider,$httpProvider) => {
    "ngInject";
    $ionicConfigProvider.views.maxCache(0);
    $urlRouterProvider.otherwise('/login');
    $httpProvider.interceptors.push(['$q','$location','LoopBackAuth','localStorageService',function($q, $location, LoopBackAuth,localStorageService) {
      return {
        responseError: function(rejection) {
          if (rejection.status == 401) {
            //Now clearing the loopback values from client browser for safe logout...
            localStorageService.clearAll()
            LoopBackAuth.clearUser();
            LoopBackAuth.clearStorage();
            $location.nextAfterLogin = $location.path();
            $location.path('/login');
          }
          return $q.reject(rejection);
        }
      };
    }]);
  })

  .component('app', AppComponent);
