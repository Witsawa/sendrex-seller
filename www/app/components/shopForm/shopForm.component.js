import template from './shopForm.html';
import controller from './shopForm.controller';
import './shopForm.scss';

let shopFormComponent = {
  restrict: 'E',
  bindings: {
    shop:"="
  },
  template,
  controller
};

export default shopFormComponent;
