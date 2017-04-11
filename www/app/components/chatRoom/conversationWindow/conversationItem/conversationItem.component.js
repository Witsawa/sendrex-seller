import template from './conversationItem.html';
import controller from './conversationItem.controller';
import './conversationItem.scss';

let conversationItemComponent = {
  restrict: 'E',
  bindings: {
    item:'='
  },
  template,
  controller
};

export default conversationItemComponent;
