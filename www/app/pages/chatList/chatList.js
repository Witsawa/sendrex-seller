import chatListPage from './chatList.page';

let chatListModule = angular.module('chatList', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.contact.chatList', {
        url: '/chatList',
        views:{
            "contact-content":{
              template:chatListPage.template,
              controller:chatListPage.controller,
              controllerAs: '$ctrl'
            }
        }

      });
  })

.name;

export default chatListModule;
