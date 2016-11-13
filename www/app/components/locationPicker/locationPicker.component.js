import template from './locationPicker.html';
import controller from './locationPicker.controller';
import './locationPicker.scss';

let locationPickerComponent = {
  restrict: 'E',
  bindings: {
    title:'@',
    ngModel:'=',
    ngChange:'&'
  },
  transclude:true,
  template,
  controller
};

export default locationPickerComponent;
