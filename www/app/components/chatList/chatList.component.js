import template from './chatList.html';
import controller from './chatList.controller';
import './chatList.scss';

let chatListComponent = {
  restrict: 'E',
  bindings: {
    shop: '<'
  },
  template,
  controller
};

export default chatListComponent;
