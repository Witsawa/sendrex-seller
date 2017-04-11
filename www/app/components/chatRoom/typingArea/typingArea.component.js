import template from './typingArea.html';
import controller from './typingArea.controller';
import './typingArea.scss';

let typingAreaComponent = {
  restrict: 'E',
  bindings: {
    conversation: '<',
    shop: '<'
  },
  template,
  controller
};

export default typingAreaComponent;
