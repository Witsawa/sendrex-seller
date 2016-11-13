import template from './timePicker.html';
import controller from './timePicker.controller';
import './timePicker.scss';

let timePickerComponent = {
  restrict: 'E',
  bindings: {
    ngModel:'='
  },
  template,
  controller
};

export default timePickerComponent;
