import template from './attachProduct.html';
import controller from './attachProduct.controller';
import './attachProduct.scss';

let attachProductComponent = {
  restrict: 'E',
  bindings: {
    ngModel:'=',
    conversation: '<',
    selectedProducts:'='
  },
  template,
  controller
};

export default attachProductComponent;
