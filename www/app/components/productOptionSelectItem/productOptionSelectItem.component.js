import template from './productOptionSelectItem.html';
import controller from './productOptionSelectItem.controller';
import './productOptionSelectItem.scss';

let productOptionSelectItemComponent = {
  restrict: 'E',
  bindings: {
    ngModel:"=",
    shopId:"<",
    enableOptions:"="
  },
  transclude:true,
  template,
  controller
};

export default productOptionSelectItemComponent;
