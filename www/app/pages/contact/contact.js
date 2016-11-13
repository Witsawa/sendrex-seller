import contactPage from './contact.page';

let contactModule = angular.module('contact', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.contact', {
        url: '/contact',

          views:{
              "tab-contact-content":{
                  template:contactPage.template,
                  controller:contactPage.controller,
                  controllerAs: '$ctrl'
              }
          },
      });
  })

.name;

export default contactModule;
