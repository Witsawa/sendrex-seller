import conversationItemComponent from './conversationItem.component';

let conversationItemModule = angular.module('conversationItem', [
  'ionic'
])

.component('conversationItem', conversationItemComponent)

.name;

export default conversationItemModule;
