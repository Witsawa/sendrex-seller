import typingAreaComponent from './typingArea.component';
import attachProduct from './attachProduct/attachProduct'
let typingAreaModule = angular.module('typingArea', [
  'ionic',
  attachProduct
])

.component('typingArea', typingAreaComponent)

.name;

export default typingAreaModule;
