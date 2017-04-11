import chatRoomComponent from './chatRoom.component';
import conversationWindow from './conversationWindow/conversationWindow';
import typingArea from './typingArea/typingArea'
let chatRoomModule = angular.module('chatRoom', [
  'ionic',
  conversationWindow,
  typingArea
])

.component('chatRoom', chatRoomComponent)

.name;

export default chatRoomModule;
