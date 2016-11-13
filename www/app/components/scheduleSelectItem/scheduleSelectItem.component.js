import template from './scheduleSelectItem.html';
import controller from './scheduleSelectItem.controller';
import './scheduleSelectItem.scss';

let scheduleSelectItemComponent = {
  restrict: 'E',
  bindings: {
    ngModel:"="
  },
  transclude:true,
  template,
  controller
};

export default scheduleSelectItemComponent;
