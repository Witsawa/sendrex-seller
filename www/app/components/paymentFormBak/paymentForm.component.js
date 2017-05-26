import template from './paymentForm.html';
import controller from './paymentForm.controller';
import './paymentForm.scss';

let paymentFormComponent = {
  restrict: 'E',
  bindings: {
    shop:'='
  },
  template,
  controller
};

export default paymentFormComponent;
