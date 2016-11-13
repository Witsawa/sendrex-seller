import template from './productForm.html';
import controller from './productForm.controller';
import './productForm.scss';

let productFormComponent = {
  restrict: 'E',
  bindings: {
    product:"="
  },
  template,
  controller
};

export default productFormComponent;
