import chatPage from './chat.page';

let chatModule = angular.module('chat', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('tabs.contact.chat', {
        url: '/chat/:id',
        views:{
            "contact-content":{
              template:chatPage.template,
              controller:chatPage.controller,
              controllerAs: '$ctrl'
            }
        },
        resolve: {
          getConversation: ['Conversation','$stateParams',function (Conversation,$stateParams) {
            console.log($stateParams)
            return Conversation.findById({id:$stateParams.id}).$promise
          }]
        }

      });
  })

.name;

export default chatModule;
