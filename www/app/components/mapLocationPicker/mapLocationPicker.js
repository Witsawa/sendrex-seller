import mapLocationPickerComponent from './mapLocationPicker.component';

let mapLocationPickerModule = angular.module('mapLocationPicker', [
  'ionic'
])

.component('mapLocationPicker', mapLocationPickerComponent)

.name;

export default mapLocationPickerModule;
