import template from './productList.html';
import controller from './productList.controller';
import './productList.scss';

let productListComponent = {
  restrict: 'E',
  bindings: {
    onItemClick:'&',
    shopId:'<'
  },
  template,
  controller
};

export default productListComponent;
