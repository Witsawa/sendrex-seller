import template from './scheduleForm.html';
import controller from './scheduleForm.controller';
import './scheduleForm.scss';

let scheduleFormComponent = {
  restrict: 'E',
  bindings: {
    ngModel:"="
  },
  transclude:true,
  template,
  controller
};


export default scheduleFormComponent;
