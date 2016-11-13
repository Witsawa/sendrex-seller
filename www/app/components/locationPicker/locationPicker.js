import locationPickerComponent from './locationPicker.component';

let locationPickerModule = angular.module('locationPicker', [
  'ionic'
])

.component('locationPicker', locationPickerComponent)

.name;

export default locationPickerModule;
