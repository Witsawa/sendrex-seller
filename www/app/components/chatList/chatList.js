import chatListComponent from './chatList.component';

let chatListModule = angular.module('chatListComponent', [
  'ionic'
])

.component('chatList', chatListComponent)

.name;

export default chatListModule;
