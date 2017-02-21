import template from './multiImagePicker.html';
import controller from './multiImagePicker.controller';
import './multiImagePicker.scss';

let multiImagePickerComponent = {
  restrict: 'E',
  bindings: {
    width:'@',
    height:"@",
    ngModel:'=',
    fileNamePrefix:'@'
  },
  template,
  controller
};

export default multiImagePickerComponent;
