import template from './valuePackSelectItem.html';
import controller from './valuePackSelectItem.controller';
import './valuePackSelectItem.scss';

let valuePackSelectItemComponent = {
  restrict: 'E',
  bindings: {
    ngModel:"=",
    shopId:"<"
  },
  transclude:true,
  template,
  controller
};

export default valuePackSelectItemComponent;
