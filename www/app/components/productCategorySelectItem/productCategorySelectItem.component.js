import template from './productCategorySelectItem.html';
import controller from './productCategorySelectItem.controller';
import './productCategorySelectItem.scss';

let productCategorySelectItemComponent = {
  restrict: 'E',
  bindings: {
    ngModel:"=",
    shopId:"<",
    onSelect:"&"
  },
  transclude:true,
  template,
  controller
};

export default productCategorySelectItemComponent;
