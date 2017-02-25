import dashboardPage from './dashboard.page';

let dashboardModule = angular.module('dashboard', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.dashboard', {
        url: '/dashboard',
        views:{
              "tab-dashboard-content":{
                  template:dashboardPage.template,
                  controller:dashboardPage.controller,
                  controllerAs: '$ctrl'
              }
          },

      });
  })

.name;

export default dashboardModule;
