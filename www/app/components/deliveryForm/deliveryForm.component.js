import template from './deliveryForm.html';
import controller from './deliveryForm.controller';
import './deliveryForm.scss';

let deliveryFormComponent = {
  restrict: 'E',
  bindings: {
    shop:'='
  },
  template,
  controller
};

export default deliveryFormComponent;
