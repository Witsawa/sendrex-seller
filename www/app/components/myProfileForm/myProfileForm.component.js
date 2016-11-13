import template from './myProfileForm.html';
import controller from './myProfileForm.controller';
import './myProfileForm.scss';

let myProfileFormComponent = {
  restrict: 'E',
  bindings: {
    profile:"="
  },
  template,
  controller
};

export default myProfileFormComponent;
