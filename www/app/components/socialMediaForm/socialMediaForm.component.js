import template from './socialMediaForm.html';
import controller from './socialMediaForm.controller';
import './socialMediaForm.scss';

let socialMediaFormComponent = {
  restrict: 'E',
  bindings: {
    shop:"="
  },
  template,
  controller
};

export default socialMediaFormComponent;
