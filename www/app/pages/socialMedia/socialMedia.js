import socialMediaPage from './socialMedia.page';

let socialMediaModule = angular.module('socialMedia', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.socialMedia', {
        url: '/socialMedia',
        views: {

          "tab-more-content": {
            template: socialMediaPage.template,
            controller: socialMediaPage.controller,
            controllerAs: '$ctrl'
          }
        }

      });
  })

.name;

export default socialMediaModule;
