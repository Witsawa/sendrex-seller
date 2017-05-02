import template from './mapLocationPicker.html';
import controller from './mapLocationPicker.controller';
import './mapLocationPicker.scss';

let mapLocationPickerComponent = {
  restrict: 'E',
  bindings: {
    ngModel:"="
  },
  template,
  controller
};

export default mapLocationPickerComponent;
