import template from './itemSelectModal.html';
import controller from './itemSelectModal.controller';
import './itemSelectModal.scss';

let itemSelectModalComponent = {
  restrict: 'E',
  bindings: {
    title:'@',
    itemClass:'@',
    ngModel:'=',
    options:'<',
    textKey:'@',
    valueKey:'@',
    onSelect:'&'
  },
  transclude:true,
  template,
  controller
};

export default itemSelectModalComponent;
