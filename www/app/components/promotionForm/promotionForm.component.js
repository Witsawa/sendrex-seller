import template from './promotionForm.html';
import controller from './promotionForm.controller';
import './promotionForm.scss';

let promotionFormComponent = {
  restrict: 'E',
  bindings: {
    promotion:"="
  },
  template,
  controller
};

export default promotionFormComponent;
