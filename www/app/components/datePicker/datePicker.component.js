import template from './datePicker.html';
import controller from './datePicker.controller';
import './datePicker.scss';

let datePickerComponent = {
  restrict: 'E',
  bindings: {
    ngModel:'='
  },
  require:{
    ngModelCtrl:'ngModel'
  },
  template,
  controller
};

export default datePickerComponent;
