import template from './deliveryMethodForm.html';
import controller from './deliveryMethodForm.controller';
import './deliveryMethodForm.scss';

let deliveryMethodFormComponent = {
  restrict: 'E',
  bindings: {
    ngModel:"="
  },
  template,
  controller
};

export default deliveryMethodFormComponent;
