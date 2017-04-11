import template from './conversationWindow.html';
import controller from './conversationWindow.controller';
import './conversationWindow.scss';

let conversationWindowComponent = {
  restrict: 'E',
  bindings: {
    conversation:'<'
  },
  template,
  controller
};

export default conversationWindowComponent;
