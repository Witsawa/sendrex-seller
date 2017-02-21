import multiImagePickerComponent from './multiImagePicker.component';

let multiImagePickerModule = angular.module('multiImagePicker', [
  'ionic'
])

.component('multiImagePicker', multiImagePickerComponent)

.name;

export default multiImagePickerModule;
