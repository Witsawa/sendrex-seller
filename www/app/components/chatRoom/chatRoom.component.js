import template from './chatRoom.html';
import controller from './chatRoom.controller';
import './chatRoom.scss';

let chatRoomComponent = {
  restrict: 'E',
  bindings: {
    conversation: '<'
  },
  template,
  controller
};

export default chatRoomComponent;
