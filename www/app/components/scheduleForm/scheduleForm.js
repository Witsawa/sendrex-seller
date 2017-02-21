import scheduleFormComponent from './scheduleForm.component';

let scheduleFormModule = angular.module('scheduleForm', [
  'ionic'
])

.component('scheduleForm', scheduleFormComponent)

.name;

export default scheduleFormModule;
