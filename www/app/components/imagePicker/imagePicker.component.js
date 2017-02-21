import template from './imagePicker.html';
import controller from './imagePicker.controller';
import './imagePicker.scss';

let imagePickerComponent = {
  restrict: 'E',
  bindings: {
    ngModel:"=",
    fileName:"@",
    onImageSelected:"&",
    disableFallback:'<'
  },
  transclude:true,
  template,
  controller
};

export default imagePickerComponent;
