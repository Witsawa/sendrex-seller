import datePickerComponent from './datePicker.component';

let datePickerModule = angular.module('datePicker', [
  'ionic'
])

.component('datePicker', datePickerComponent)
.directive('datepickerTimezone', function () {
  return {
    restrict: 'A',
    priority: 1,
    require: 'ngModel',
    link: function (scope, element, attrs, ctrl) {
      ctrl.$formatters.push(function (value) {
        var date = new Date(value);
        date = new Date(date.getTime() + (60000 * date.getTimezoneOffset()));
        //if (!dateFormat || !modelValue) return "";
        //var retVal = moment(modelValue).format(dateFormat);
        console.log(date)
        return date;
      });

      ctrl.$parsers.push(function (value) {
        var date = new Date(value);
        console.log(date)
        return date.toString().replace(/(GMT)[\s\S]*/g,"GMT").replace(/(\d{2}:\d{2}:\d{2})/g,"00:00:00")
      });
    }
  };
})
.name;

export default datePickerModule;
