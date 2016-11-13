import template from './productSelectItem.html';
import controller from './productSelectItem.controller';
import './productSelectItem.scss';

let productSelectItemComponent = {
  restrict: 'E',
  bindings: {
    ngModel:"=",
    shopId:"="
  },
  transclude:true,
  template,
  controller
};

export default productSelectItemComponent;
