import template from './valuePackForm.html';
import controller from './valuePackForm.controller';
import './valuePackForm.scss';

let valuePackFormComponent = {
  restrict: 'E',
  bindings: {
    valuePack:"=",
    shopId:"="
  },
  template,
  controller
};

export default valuePackFormComponent;
