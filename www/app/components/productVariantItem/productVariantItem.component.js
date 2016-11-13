import template from './productVariantItem.html';
import controller from './productVariantItem.controller';
import './productVariantItem.scss';

let productVariantItemComponent = {
  restrict: 'E',
  bindings: {
    ngModel:"=",
    shopId:"<",
    enableVariants:"="
  },
  transclude:true,
  template,
  controller
};

export default productVariantItemComponent;
