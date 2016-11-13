import timePickerComponent from './timePicker.component';

let timePickerModule = angular.module('timePicker', [
  'ionic'
])

.component('timePicker', timePickerComponent)
  .directive('myTimepicker', function () {
    return {
      restrict: 'A',
      priority: 1,
      require: 'ngModel',
      link: function (scope, element, attrs, ctrl) {
        ctrl.$formatters.push(function (value) {
          var date = new Date(value);
          console.log(value)
          return date;
        });

        ctrl.$parsers.push(function (value) {
          var date = new Date(value);
          return date
        });
      }
    };
  })
.name;

export default timePickerModule;
