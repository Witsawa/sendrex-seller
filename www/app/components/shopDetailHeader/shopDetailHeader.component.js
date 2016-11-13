import template from './shopDetailHeader.html';
import controller from './shopDetailHeader.controller';
import './shopDetailHeader.scss';

let shopDetailHeaderComponent = {
  restrict: 'E',
  bindings: {
    shop:'<'
  },
  template,
  controller
};

export default shopDetailHeaderComponent;
