/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _components = __webpack_require__(2);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _pages = __webpack_require__(122);
	
	var _pages2 = _interopRequireDefault(_pages);
	
	var _app = __webpack_require__(254);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _directives = __webpack_require__(257);
	
	var _directives2 = _interopRequireDefault(_directives);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	// the 2nd parameter is an array of 'requires'
	angular.module('starter', ['ionic', 'lbServices', 'LocalStorageModule', _components2.default, _pages2.default, _directives2.default, 'ngTagsInput', 'ionic.wizard', 'ngCordova', 'leaflet-directive']).run(function ($ionicPlatform, $rootScope, $ionicLoading, LoopBackAuth, $location, $state) {
	  $ionicPlatform.ready(function () {
	    if (window.cordova && window.cordova.plugins.Keyboard) {
	      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	      // for form inputs)
	      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	
	      // Don't remove this line unless you know what you are doing. It stops the viewport
	      // from snapping when text inputs are focused. Ionic handles this internally for
	      // a much nicer keyboard experience.
	      cordova.plugins.Keyboard.disableScroll(true);
	    }
	    if (window.StatusBar) {
	      StatusBar.styleDefault();
	    }
	    $rootScope.$on('loading:show', function () {
	      $ionicLoading.show();
	    });
	
	    $rootScope.$on('loading:hide', function () {
	      $ionicLoading.hide();
	    });
	
	    $rootScope.$on('$stateChangeStart', function () {
	      console.log('please wait...');
	      $rootScope.$broadcast('loading:show');
	    });
	
	    $rootScope.$on('$stateChangeSuccess', function () {
	      console.log('done');
	      $rootScope.$broadcast('loading:hide');
	    });
	
	    $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
	
	      console.log('done');
	      $rootScope.$broadcast('loading:hide');
	      console.error("Error loading the page: %o", error);
	      console.log(error);
	      if (error.status == 401) {
	        event.preventDefault();
	        LoopBackAuth.clearUser();
	        LoopBackAuth.clearStorage();
	        $location.nextAfterLogin = $state.href(toState, toParams);
	        $location.path('/login');
	      } else if (error == "Shop not selected") {
	        event.preventDefault();
	        console.log('Go to select shop');
	        $location.path('/selectShop');
	      } else {
	
	        $location.path('/logout');
	      }
	    });
	  });
	}).config(function ($urlRouterProvider, $ionicConfigProvider, $httpProvider) {
	  "ngInject";
	
	  $ionicConfigProvider.views.maxCache(0);
	  $urlRouterProvider.otherwise('/login');
	  $httpProvider.interceptors.push(['$q', '$location', 'LoopBackAuth', 'localStorageService', function ($q, $location, LoopBackAuth, localStorageService) {
	    return {
	      responseError: function responseError(rejection) {
	        if (rejection.status == 401) {
	          //Now clearing the loopback values from client browser for safe logout...
	          localStorageService.clearAll();
	          LoopBackAuth.clearUser();
	          LoopBackAuth.clearStorage();
	          $location.nextAfterLogin = $location.path();
	          $location.path('/login');
	        }
	        return $q.reject(rejection);
	      }
	    };
	  }]);
	}).component('app', _app2.default); // Ionic Starter App

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _productList = __webpack_require__(3);
	
	var _productList2 = _interopRequireDefault(_productList);
	
	var _itemSelectModal = __webpack_require__(8);
	
	var _itemSelectModal2 = _interopRequireDefault(_itemSelectModal);
	
	var _productForm = __webpack_require__(14);
	
	var _productForm2 = _interopRequireDefault(_productForm);
	
	var _productCategorySelectItem = __webpack_require__(19);
	
	var _productCategorySelectItem2 = _interopRequireDefault(_productCategorySelectItem);
	
	var _productVariantItem = __webpack_require__(26);
	
	var _productVariantItem2 = _interopRequireDefault(_productVariantItem);
	
	var _productOptionSelectItem = __webpack_require__(32);
	
	var _productOptionSelectItem2 = _interopRequireDefault(_productOptionSelectItem);
	
	var _valuePackForm = __webpack_require__(39);
	
	var _valuePackForm2 = _interopRequireDefault(_valuePackForm);
	
	var _productSelectItem = __webpack_require__(44);
	
	var _productSelectItem2 = _interopRequireDefault(_productSelectItem);
	
	var _promotionForm = __webpack_require__(50);
	
	var _promotionForm2 = _interopRequireDefault(_promotionForm);
	
	var _valuePackSelectItem = __webpack_require__(55);
	
	var _valuePackSelectItem2 = _interopRequireDefault(_valuePackSelectItem);
	
	var _datePicker = __webpack_require__(61);
	
	var _datePicker2 = _interopRequireDefault(_datePicker);
	
	var _shopForm = __webpack_require__(66);
	
	var _shopForm2 = _interopRequireDefault(_shopForm);
	
	var _deliveryForm = __webpack_require__(71);
	
	var _deliveryForm2 = _interopRequireDefault(_deliveryForm);
	
	var _paymentForm = __webpack_require__(79);
	
	var _paymentForm2 = _interopRequireDefault(_paymentForm);
	
	var _locationPicker = __webpack_require__(84);
	
	var _locationPicker2 = _interopRequireDefault(_locationPicker);
	
	var _scheduleSelectItem = __webpack_require__(90);
	
	var _scheduleSelectItem2 = _interopRequireDefault(_scheduleSelectItem);
	
	var _timePicker = __webpack_require__(97);
	
	var _timePicker2 = _interopRequireDefault(_timePicker);
	
	var _shopDetailHeader = __webpack_require__(102);
	
	var _shopDetailHeader2 = _interopRequireDefault(_shopDetailHeader);
	
	var _myProfileForm = __webpack_require__(107);
	
	var _myProfileForm2 = _interopRequireDefault(_myProfileForm);
	
	var _socialMediaForm = __webpack_require__(112);
	
	var _socialMediaForm2 = _interopRequireDefault(_socialMediaForm);
	
	var _orderList = __webpack_require__(117);
	
	var _orderList2 = _interopRequireDefault(_orderList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var componentModule = angular.module('app.components', [_productList2.default, _itemSelectModal2.default, _productForm2.default, _productCategorySelectItem2.default, _productVariantItem2.default, _productOptionSelectItem2.default, _valuePackForm2.default, _productSelectItem2.default, _promotionForm2.default, _valuePackSelectItem2.default, _datePicker2.default, _shopForm2.default, _deliveryForm2.default, _paymentForm2.default, _locationPicker2.default, _scheduleSelectItem2.default, _timePicker2.default, _shopDetailHeader2.default, _myProfileForm2.default, _socialMediaForm2.default, _orderList2.default]).name;
	
	exports.default = componentModule;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _productList = __webpack_require__(4);
	
	var _productList2 = _interopRequireDefault(_productList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var productListModule = angular.module('productList', ['ionic', 'lbServices']).component('productList', _productList2.default).name;
	
	exports.default = productListModule;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _productList = __webpack_require__(5);
	
	var _productList2 = _interopRequireDefault(_productList);
	
	var _productList3 = __webpack_require__(6);
	
	var _productList4 = _interopRequireDefault(_productList3);
	
	__webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var productListComponent = {
	  restrict: 'E',
	  bindings: {
	    onItemClick: '&',
	    shopId: '<'
	  },
	  template: _productList2.default,
	  controller: _productList4.default
	};
	
	exports.default = productListComponent;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<ion-content>\n  <ion-refresher\n          pulling-text=\"Pull to refresh...\"\n          on-refresh=\"$ctrl.refresh()\">\n  </ion-refresher>\n<ion-list>\n\n  <form>\n    <ion-item class=\"item-input-inset\">\n      <label class=\"item-input-wrapper\">\n        <input type=\"search\" placeholder=\"Search product\" ng-model=\"query\">\n      </label>\n      <button type=\"submit\" class=\"button button-clear button-stable\" ng-click=\"$ctrl.search(query)\"><i class=\"icon ion-search\"></i></button>\n    </ion-item>\n  </form>\n  <item-select-modal item-class=\"item-divider\" ng-model=\"$ctrl.category\" on-select=\"$ctrl.filterChange(value)\" options=\"$ctrl.categories\" text-key=\"name\" value-key=\"id\" title=\"Select category\" default-text=\"All category\">\n    <label class=\"h4\">Filter: </label>\n  </item-select-modal>\n  <ion-list>\n    <ion-item ng-repeat=\"product in $ctrl.products\" ng-click=\"$ctrl.onItemClick({product:product})\">\n      {{product.name}}\n    </ion-item>\n  </ion-list>\n\n\n</ion-list>\n  <ion-infinite-scroll\n          on-infinite=\"$ctrl.loadMore()\"\n          distance=\"1%\"\n          ng-if=\"$ctrl.showLoadmore\"\n  >\n  </ion-infinite-scroll>\n</ion-content>"

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ProductListController = function () {
	  function ProductListController($scope, Product, $ionicLoading, $state, ProductCategory) {
	    _classCallCheck(this, ProductListController);
	
	    this.name = 'productList';
	    var self = this;
	    //injected variable
	    this._$scope = $scope;
	    this._Product = Product;
	    this._$ionicLoading = $ionicLoading;
	    this._$state = $state;
	    this.showLoadmore = true;
	    this.categories = [{ name: 'All category', id: 0 }];
	    ProductCategory.find({}, function (categories) {
	      self.categories = self.categories.concat(categories);
	    });
	    this.category = 0;
	    this.products = [];
	    this.query = '';
	    this.page = 0;
	  }
	
	  _createClass(ProductListController, [{
	    key: 'fetchProduct',
	    value: function fetchProduct(onSuccess, onError, onFinally) {
	      //load product using current query and page
	      var filter = {
	        filter: {
	          skip: this.page * 10,
	          limit: 10,
	          include: ['shop', 'productVariants', 'promotions'],
	          where: {}
	        }
	      };
	      var self = this;
	
	      if (this.shopId != undefined) {
	        filter.filter.where['shopId'] = this.shopId;
	      }
	      if (this.query && this.query != '') {
	        filter.filter.where["name"] = {
	          like: '%' + this.query + '%'
	        };
	      }
	      if (this.category != 0) {
	        filter.filter.where['productCategoryId'] = this.category;
	      }
	      console.log(filter);
	      this._Product.find(filter).$promise.then(function (products) {
	        self.products = self.products.concat(products);
	        self.page += 1;
	        onSuccess(products);
	      }, function () {
	        onError();
	      }).finally(function () {
	        console.log("Load finished");
	        onFinally();
	      });
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh() {
	      //reset page
	      //clear product list
	      this.page = 0;
	      this.products = [];
	      var self = this;
	      this.fetchProduct(function () {
	        self.showLoadmore = true;
	      }, function () {}, function () {
	        self._$scope.$broadcast('scroll.refreshComplete');
	      });
	    }
	  }, {
	    key: 'search',
	    value: function search(query) {
	      //reset page
	      //clear product list
	      //set query terms
	      //show load more
	      this._$ionicLoading.show();
	      this.query = query;
	      this.page = 0;
	      this.products = [];
	      var self = this;
	      this.fetchProduct(function () {
	        self.showLoadmore = true;
	      }, function () {}, function () {
	        self._$ionicLoading.hide();
	      });
	    }
	  }, {
	    key: 'loadMore',
	    value: function loadMore() {
	      //load next page
	      var self = this;
	      this.fetchProduct(function (products) {
	        if (products.length == 0) {
	          self.showLoadmore = false;
	        }
	      }, function () {}, function () {
	        self._$scope.$broadcast('scroll.infiniteScrollComplete');
	      });
	    }
	  }, {
	    key: 'filterChange',
	    value: function filterChange(value) {
	      this.category = value;
	      this.refresh();
	    }
	  }, {
	    key: 'viewProduct',
	    value: function viewProduct(id) {
	      this._$state.go(this.productDetailState, { id: id });
	    }
	  }]);
	
	  return ProductListController;
	}();
	
	ProductListController.$inject = ['$scope', 'Product', '$ionicLoading', '$state', 'ProductCategory'];
	exports.default = ProductListController;

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _itemSelectModal = __webpack_require__(9);
	
	var _itemSelectModal2 = _interopRequireDefault(_itemSelectModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var itemSelectModalModule = angular.module('itemSelectModal', ['ionic']).component('itemSelectModal', _itemSelectModal2.default).name;
	
	exports.default = itemSelectModalModule;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _itemSelectModal = __webpack_require__(10);
	
	var _itemSelectModal2 = _interopRequireDefault(_itemSelectModal);
	
	var _itemSelectModal3 = __webpack_require__(11);
	
	var _itemSelectModal4 = _interopRequireDefault(_itemSelectModal3);
	
	__webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var itemSelectModalComponent = {
	  restrict: 'E',
	  bindings: {
	    title: '@',
	    itemClass: '@',
	    ngModel: '=',
	    options: '<',
	    textKey: '@',
	    valueKey: '@',
	    onSelect: '&'
	  },
	  transclude: true,
	  template: _itemSelectModal2.default,
	  controller: _itemSelectModal4.default
	};
	
	exports.default = itemSelectModalComponent;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<ion-item ng-click=\"$ctrl.openSelectModal()\" ng-class=\"$ctrl.itemClass\">\n  <label ng-transclude=\"\"></label>\n  <span class=\"item-note dark\">{{$ctrl.selectedItem[$ctrl.textKey]}} <i class=\"icon ion-arrow-down-b\"></i></span>\n</ion-item>\n"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _itemSelectModalSelectModal = __webpack_require__(12);
	
	var _itemSelectModalSelectModal2 = _interopRequireDefault(_itemSelectModalSelectModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ItemSelectModalController = function () {
	  function ItemSelectModalController($filter, $ionicModal, $scope) {
	    _classCallCheck(this, ItemSelectModalController);
	
	    this.name = 'itemSelectModal';
	    var self = this;
	    this._$filter = $filter;
	    this._$scope = $scope;
	    this.selectedItem = this.getSelectedItem();
	    console.log(_itemSelectModalSelectModal2.default);
	    $scope.$ctrl = self;
	    self.modal = $ionicModal.fromTemplate(_itemSelectModalSelectModal2.default, {
	      scope: $scope
	    });
	    $scope.$watch(function () {
	      return self.options;
	    }, function () {
	      console.log("Options changes");
	      self.selectedItem = self.getSelectedItem();
	    });
	  }
	
	  _createClass(ItemSelectModalController, [{
	    key: 'getSelectedItem',
	    value: function getSelectedItem() {
	      var self = this;
	      var selectedItem = self._$filter('filter')(self.options, function (option) {
	        return option[self.valueKey] == self.ngModel;
	      });
	      return selectedItem && selectedItem.length > 0 ? selectedItem[0] : undefined;
	    }
	  }, {
	    key: 'openSelectModal',
	    value: function openSelectModal() {
	      var self = this;
	      self.modal.show();
	    }
	  }, {
	    key: 'selectItem',
	    value: function selectItem(option) {
	      var self = this;
	      self.ngModel = option[self.valueKey];
	      self.selectedItem = self.getSelectedItem();
	      console.log(self.selectedItem);
	      self.modal.hide();
	      if (self._$scope.$root.$$phase != '$apply' && self._$scope.$root.$$phase != '$digest') {
	        self._$scope.$apply();
	      }
	      self.onSelect({ value: self.ngModel, selectedOption: self.selectedItem });
	    }
	  }]);
	
	  return ItemSelectModalController;
	}();
	
	ItemSelectModalController.$inject = ['$filter', '$ionicModal', '$scope'];
	exports.default = ItemSelectModalController;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<ion-modal-view>\n  <ion-header-bar class=\"bar-positive\">\n    <h1 class=\"title\">{{$ctrl.title}}</h1>\n  </ion-header-bar>\n  <ion-content>\n   <ion-list>\n     <ion-radio ng-model=\"$ctrl.ngModel\" ng-value=\"option[$ctrl.valueKey]\" ng-repeat=\"option in $ctrl.options\" ng-click=\"$ctrl.selectItem(option)\">\n       {{option[$ctrl.textKey]}}\n     </ion-radio>\n   </ion-list>\n  </ion-content>\n</ion-modal-view>\n"

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _productForm = __webpack_require__(15);
	
	var _productForm2 = _interopRequireDefault(_productForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var productFormModule = angular.module('productForm', ['ionic']).component('productForm', _productForm2.default).name;
	
	exports.default = productFormModule;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _productForm = __webpack_require__(16);
	
	var _productForm2 = _interopRequireDefault(_productForm);
	
	var _productForm3 = __webpack_require__(17);
	
	var _productForm4 = _interopRequireDefault(_productForm3);
	
	__webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var productFormComponent = {
	  restrict: 'E',
	  bindings: {
	    product: "="
	  },
	  template: _productForm2.default,
	  controller: _productForm4.default
	};
	
	exports.default = productFormComponent;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class=\"list list-inset\">\n  <ion-item class=\"item-input item-stacked-label\">\n    <label class=\"input-label\">Name</label>\n    <input type=\"text\" ng-model=\"$ctrl.product.name\">\n  </ion-item>\n  <ion-item class=\"item-input item-stacked-label\">\n    <label class=\"input-label\">SKU</label>\n    <input type=\"text\" ng-model=\"$ctrl.product.productVariants[0].SKU\">\n  </ion-item>\n  <ion-item class=\"item-input item-stacked-label item-input-inset light-bg\">\n    <label class=\"input-label\">Price</label>\n    <div class=\"item-input-wrapper light-bg\">\n    <input type=\"number\" ng-model=\"$ctrl.product.productVariants[0].price\" class=\"light-bg\">\n      <i class=\"item-input-inset\">{{$ctrl.product.shop.currency}}</i>\n    </div>\n  </ion-item>\n  <ion-item class=\"item-input item-stacked-label item-input-inset light-bg\">\n    <label class=\"input-label\">Stock</label>\n    <div class=\"item-input-wrapper light-bg\">\n      <input type=\"number\" ng-model=\"$ctrl.product.productVariants[0].stock\" class=\"light-bg\">\n      <i class=\"item-input-inset\">Units</i>\n    </div>\n  </ion-item>\n</div>\n<div class=\"list list-inset\">\n  <ion-item class=\"item-input item-stacked-label\">\n    <label class=\"input-label\">Description</label>\n    <textarea ng-model=\"$ctrl.product.description\" rows=\"5\"></textarea>\n  </ion-item>\n  <item-select-modal ng-model=\"$ctrl.product.productCategoryId\" options=\"$ctrl.categories\" text-key=\"name\" value-key=\"id\" title=\"Select category\" default-text=\"\">\n    Global cateogry\n  </item-select-modal>\n  <product-category-select-item ng-model=\"$ctrl.product.shopProductCategoryId\" shop-id=\"$ctrl.product.shopId\">\n    Shop Category\n  </product-category-select-item>\n  <product-variant-item ng-model=\"$ctrl.product.productVariants\" shop-id=\"$ctrl.product.shopId\" enable-variants=\"$ctrl.product.enableVariants\">\n    Variant\n  </product-variant-item>\n  <product-option-select-item ng-model=\"$ctrl.product.productOptions\" shop-id=\"$ctrl.product.shopId\" enable-options=\"$ctrl.product.enableOptions\">\n    Option\n  </product-option-select-item>\n\n</div>"

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ProductFormController = function ProductFormController(ProductCategory) {
	  _classCallCheck(this, ProductFormController);
	
	  this.name = 'productForm';
	  var self = this;
	  ProductCategory.find().$promise.then(function (categories) {
	    self.categories = categories;
	  }, function () {
	    //TODO ERROR GET CATEGORY HANDLING
	  });
	};
	
	ProductFormController.$inject = ["ProductCategory"];
	
	exports.default = ProductFormController;

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _productCategorySelectItem = __webpack_require__(20);
	
	var _productCategorySelectItem2 = _interopRequireDefault(_productCategorySelectItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var productCategorySelectItemModule = angular.module('productCategorySelectItem', ['ionic']).component('productCategorySelectItem', _productCategorySelectItem2.default).name;
	
	exports.default = productCategorySelectItemModule;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _productCategorySelectItem = __webpack_require__(21);
	
	var _productCategorySelectItem2 = _interopRequireDefault(_productCategorySelectItem);
	
	var _productCategorySelectItem3 = __webpack_require__(22);
	
	var _productCategorySelectItem4 = _interopRequireDefault(_productCategorySelectItem3);
	
	__webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var productCategorySelectItemComponent = {
	  restrict: 'E',
	  bindings: {
	    ngModel: "=",
	    shopId: "<",
	    onSelect: "&"
	  },
	  transclude: true,
	  template: _productCategorySelectItem2.default,
	  controller: _productCategorySelectItem4.default
	};
	
	exports.default = productCategorySelectItemComponent;

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<ion-item ng-click=\"$ctrl.openSelectModal()\">\n  <label ng-transclude=\"\"></label>\n  <span class=\"item-note dark\">{{$ctrl.selectedCategory.name}} <i class=\"icon ion-arrow-down-b\"></i></span>\n</ion-item>\n"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _itemSelectModalSelectModal = __webpack_require__(23);
	
	var _itemSelectModalSelectModal2 = _interopRequireDefault(_itemSelectModalSelectModal);
	
	var _productCategoryAdd = __webpack_require__(24);
	
	var _productCategoryAdd2 = _interopRequireDefault(_productCategoryAdd);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ProductCategorySelectItemController = function () {
	  function ProductCategorySelectItemController($filter, $ionicModal, $scope, Shop, ShopProductCategory, $ionicActionSheet) {
	    _classCallCheck(this, ProductCategorySelectItemController);
	
	    this.name = 'productCategorySelectItem';
	    var self = this;
	    this._$filter = $filter;
	    this._$scope = $scope;
	    this._ShopProductCategory = ShopProductCategory;
	    this._Shop = Shop;
	    this._$ionicActionSheet = $ionicActionSheet;
	    self.fetchCategory();
	    self.modal = $ionicModal.fromTemplate(_itemSelectModalSelectModal2.default, {
	      scope: $scope
	    });
	    self.editModal = $ionicModal.fromTemplate(_productCategoryAdd2.default, {
	      scope: $scope
	    });
	    self.ngModel = self.ngModel || 0;
	  }
	
	  _createClass(ProductCategorySelectItemController, [{
	    key: 'fetchCategory',
	    value: function fetchCategory() {
	      var self = this;
	      self._Shop.shopProductCategories({ id: self.shopId }).$promise.then(function (categories) {
	        self.categories = [{ name: "Uncategorize", id: 0 }].concat(categories);
	        self.selectedCategory = self.getSelectedItem();
	      });
	    }
	  }, {
	    key: 'getSelectedItem',
	    value: function getSelectedItem() {
	      var self = this;
	      return self._$filter('filter')(self.categories, { id: self.ngModel })[0];
	    }
	  }, {
	    key: 'openSelectModal',
	    value: function openSelectModal() {
	      var self = this;
	      self.modal.show();
	    }
	  }, {
	    key: 'selectItem',
	    value: function selectItem(category) {
	      var self = this;
	      console.log("select item");
	      self.ngModel = category.id;
	      self.selectedCategory = self.getSelectedItem();
	      self.modal.hide();
	      if (self._$scope.$root.$$phase != '$apply' && self._$scope.$root.$$phase != '$digest') {
	        self._$scope.$apply();
	      }
	      self.onSelect({ value: self.ngModel, selectedCategory: self.selectedCategory });
	    }
	  }, {
	    key: 'openEditModal',
	    value: function openEditModal(category) {
	      var self = this;
	      if (!category) {
	        category = new self._ShopProductCategory({ shopId: self.shopId });
	      }
	      console.log(category);
	      self.editModal.scope.category = category;
	      self.editModal.show();
	    }
	  }, {
	    key: 'saveCategory',
	    value: function saveCategory(category) {
	      var self = this;
	      category.$save().then(function (result) {
	        console.log("Save category", result);
	        self.editModal.hide();
	        self.fetchCategory();
	      }, function (error) {
	        console.log("Save category error", error);
	      });
	    }
	  }, {
	    key: 'showActions',
	    value: function showActions(category) {
	      //show edit or delete
	      var self = this;
	      var hideSheet = self._$ionicActionSheet.show({
	        buttons: [{ text: 'Edit' }],
	        destructiveText: 'Delete',
	        cancelText: 'Cancel',
	        cancel: function cancel() {
	          // add cancel code..
	        },
	        buttonClicked: function buttonClicked(index) {
	          if (index == 0) {
	            self.openEditModal(category);
	          }
	          return true;
	        },
	        destructiveButtonClicked: function destructiveButtonClicked() {
	          self._ShopProductCategory.deleteById({ id: category.id }).$promise.then(function (result) {
	            hideSheet();
	            console.log("Category deleted", result);
	            self.fetchCategory();
	          }, function (error) {
	            console.log("Category delete error", error);
	          });
	        }
	      });
	    }
	  }]);
	
	  return ProductCategorySelectItemController;
	}();
	
	ProductCategorySelectItemController.$inject = ["$filter", "$ionicModal", "$scope", "Shop", "ShopProductCategory", '$ionicActionSheet'];
	
	exports.default = ProductCategorySelectItemController;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<ion-modal-view>\n  <ion-header-bar class=\"bar-positive\">\n      <button class=\"button button-clear\" ng-click=\"$ctrl.selectItem($ctrl.getSelectedItem())\">Done</button>\n    <h1 class=\"title\">Category</h1>\n      <button class=\"button button-clear\" ng-click=\"$ctrl.openEditModal()\"><i class=\"ion-android-add icon\"></i></button>\n  </ion-header-bar>\n  <ion-content>\n   <ion-list>\n     <ion-radio ng-repeat=\"category in $ctrl.categories\" ng-model=\"$ctrl.ngModel\" ng-value=\"category.id\" on-hold=\"$ctrl.showActions(category)\">\n       {{category.name}}\n     </ion-radio>\n   </ion-list>\n  </ion-content>\n</ion-modal-view>\n"

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<ion-modal-view>\n    <ion-header-bar class=\"bar-positive\">\n        <button class=\"button button-clear\" ng-click=\"$ctrl.editModal.hide()\">Cancel</button>\n        <h1 class=\"title\">Category</h1>\n        <button class=\"button button-clear\" ng-click=\"$ctrl.saveCategory(category)\">Save</button>\n    </ion-header-bar>\n    <ion-content>\n        <ion-list>\n            <ion-item class=\"item-input item-stacked-label\">\n                <label class=\"input-label\">Name</label>\n                <input type=\"text\" ng-model=\"category.name\">\n            </ion-item>\n        </ion-list>\n    </ion-content>\n</ion-modal-view>\n"

/***/ },
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _productVariantItem = __webpack_require__(27);
	
	var _productVariantItem2 = _interopRequireDefault(_productVariantItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var productVariantItemModule = angular.module('productVariantItem', ['ionic']).component('productVariantItem', _productVariantItem2.default).name;
	
	exports.default = productVariantItemModule;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _productVariantItem = __webpack_require__(28);
	
	var _productVariantItem2 = _interopRequireDefault(_productVariantItem);
	
	var _productVariantItem3 = __webpack_require__(29);
	
	var _productVariantItem4 = _interopRequireDefault(_productVariantItem3);
	
	__webpack_require__(31);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var productVariantItemComponent = {
	  restrict: 'E',
	  bindings: {
	    ngModel: "=",
	    shopId: "<",
	    enableVariants: "="
	  },
	  transclude: true,
	  template: _productVariantItem2.default,
	  controller: _productVariantItem4.default
	};
	
	exports.default = productVariantItemComponent;

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<ion-item ng-click=\"$ctrl.openModal()\">\n  <label ng-transclude=\"\"></label>\n  <span class=\"item-note dark\">{{$ctrl.enableVariants?\"ON\":\"OFF\"}}<i class=\"icon ion-arrow-down-b\"></i></span>\n</ion-item>\n"

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _variantListTemplate = __webpack_require__(30);
	
	var _variantListTemplate2 = _interopRequireDefault(_variantListTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ProductVariantItemController = function () {
	  function ProductVariantItemController($ionicModal, $scope, $ionicActionSheet) {
	    _classCallCheck(this, ProductVariantItemController);
	
	    var self = this;
	    this.name = 'productVariantItem';
	    self.modal = $ionicModal.fromTemplate(_variantListTemplate2.default, {
	      scope: $scope
	    });
	    this._$scope = $scope;
	    this._$ionicActionSheet = $ionicActionSheet;
	  }
	
	  _createClass(ProductVariantItemController, [{
	    key: 'openModal',
	    value: function openModal() {
	      var self = this;
	      this.variants = angular.copy(this.ngModel);
	      self.modal.show();
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      var self = this;
	      this.ngModel = this.variants;
	      self.modal.hide();
	      if (self._$scope.$root.$$phase != '$apply' && self._$scope.$root.$$phase != '$digest') {
	        self._$scope.$apply();
	      }
	    }
	  }, {
	    key: 'addVariant',
	    value: function addVariant() {
	      var newVariant = { name: "", price: 0, stock: 0, SKU: "", productId: this.variants[0].productId };
	      this.variants.push(newVariant);
	    }
	  }, {
	    key: 'showActions',
	    value: function showActions(variant) {
	      //show edit or delete
	      var self = this;
	      var ops = {
	        buttons: [],
	        cancelText: 'Cancel',
	        cancel: function cancel() {
	          // add cancel code..
	        },
	        buttonClicked: function buttonClicked(index) {
	          if (index == 0) {
	            self.openEditModal(category);
	          }
	          return true;
	        },
	        destructiveButtonClicked: function destructiveButtonClicked() {
	
	          var index = self.variants.indexOf(variant);
	          self.variants.splice(index, 1);
	          hideSheet();
	        }
	      };
	
	      if (self.variants.length > 1) {
	        ops.destructiveText = 'Delete';
	      }
	      var hideSheet = self._$ionicActionSheet.show(ops);
	    }
	  }]);
	
	  return ProductVariantItemController;
	}();
	
	ProductVariantItemController.$inject = ['$ionicModal', '$scope', '$ionicActionSheet'];
	
	exports.default = ProductVariantItemController;

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<ion-modal-view>\n    <ion-header-bar class=\"bar-positive\">\n        <button class=\"button button-clear\" ng-click=\"$ctrl.save()\">Done</button>\n        <h1 class=\"title\">Variants</h1>\n    </ion-header-bar>\n    <ion-content>\n        <ion-list>\n            <ion-toggle ng-model=\"$ctrl.enableVariants\">Variant</ion-toggle>\n            <div class=\"padding\">\n                <div class=\"row\">\n                    <div class=\"col-25 \">\n                        SKU\n                    </div>\n                    <div class=\"col-25\">\n                        Variant\n                    </div>\n                    <div class=\"col-25\">\n                        Price\n                    </div>\n                    <div class=\"col-25\">\n                        Stock\n                    </div>\n                </div>\n            </div>\n            <ion-item ng-repeat=\"variant in $ctrl.variants\" on-hold=\"$ctrl.showActions(variant)\">\n                <div class=\"row\">\n                    <div class=\"col-25\">\n                        <input type=\"text\" placeholder=\"SKU\" ng-model=\"variant.SKU\">\n                    </div>\n                    <div class=\"col-25\">\n                        <input type=\"text\" placeholder=\"Variant\" ng-model=\"variant.name\">\n                    </div>\n                    <div class=\"col-25\">\n                        <input type=\"number\" placeholder=\"Price\" ng-model=\"variant.price\">\n                    </div>\n                    <div class=\"col-25\">\n                        <input type=\"number\" placeholder=\"Stock\" ng-model=\"variant.stock\">\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n        <div class=\"padding\">\n            <button class=\"button button-positive\" ng-click=\"$ctrl.addVariant()\"><i class=\"icon ion-android-add\"></i> Add variant</button>\n        </div>\n    </ion-content>\n</ion-modal-view>\n"

/***/ },
/* 31 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _productOptionSelectItem = __webpack_require__(33);
	
	var _productOptionSelectItem2 = _interopRequireDefault(_productOptionSelectItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var productOptionSelectItemModule = angular.module('productOptionSelectItem', ['ionic']).component('productOptionSelectItem', _productOptionSelectItem2.default).name;
	
	exports.default = productOptionSelectItemModule;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _productOptionSelectItem = __webpack_require__(34);
	
	var _productOptionSelectItem2 = _interopRequireDefault(_productOptionSelectItem);
	
	var _productOptionSelectItem3 = __webpack_require__(35);
	
	var _productOptionSelectItem4 = _interopRequireDefault(_productOptionSelectItem3);
	
	__webpack_require__(38);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var productOptionSelectItemComponent = {
	  restrict: 'E',
	  bindings: {
	    ngModel: "=",
	    shopId: "<",
	    enableOptions: "="
	  },
	  transclude: true,
	  template: _productOptionSelectItem2.default,
	  controller: _productOptionSelectItem4.default
	};
	
	exports.default = productOptionSelectItemComponent;

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<ion-item ng-click=\"$ctrl.openSelectModal()\">\n  <label ng-transclude=\"\"></label>\n  <span class=\"item-note dark\">{{$ctrl.enableOptions?\"ON\":\"OFF\"}}<i class=\"icon ion-arrow-down-b\"></i></span>\n</ion-item>\n"

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _optionSelectModal = __webpack_require__(36);
	
	var _optionSelectModal2 = _interopRequireDefault(_optionSelectModal);
	
	var _optionEditTemplate = __webpack_require__(37);
	
	var _optionEditTemplate2 = _interopRequireDefault(_optionEditTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ProductOptionSelectItemController = function () {
	  function ProductOptionSelectItemController($filter, $ionicModal, $scope, Shop, $ionicActionSheet, ProductOption) {
	    _classCallCheck(this, ProductOptionSelectItemController);
	
	    this.name = 'productOptionSelectItem';
	    var self = this;
	    this._Shop = Shop;
	    this._$ionicActionSheet = $ionicActionSheet;
	    this._ProductOption = ProductOption;
	    self.fetchOptions();
	    self.modal = $ionicModal.fromTemplate(_optionSelectModal2.default, {
	      scope: $scope
	    });
	    self.editModal = $ionicModal.fromTemplate(_optionEditTemplate2.default, {
	      scope: $scope
	    });
	    console.log(self.ngModel);
	    self.ngModel = self.ngModel || [];
	    self._$scope = $scope;
	    self.selectedOptions = self.ngModel.map(function (option) {
	      return option.id;
	    });
	  }
	
	  _createClass(ProductOptionSelectItemController, [{
	    key: 'fetchOptions',
	    value: function fetchOptions() {
	      var self = this;
	      self._Shop.productOptions({ id: self.shopId, filter: { include: ["productOptionValues"] } }).$promise.then(function (options) {
	        options.map(function (option) {
	          if (self.selectedOptions.indexOf(option.id) != -1) {
	            option.checked = true;
	          }
	          return option;
	        });
	        self.options = options;
	      });
	    }
	  }, {
	    key: 'openSelectModal',
	    value: function openSelectModal() {
	      var self = this;
	      self.modal.show();
	    }
	  }, {
	    key: 'showActions',
	    value: function showActions(option) {
	      //show edit or delete
	      var self = this;
	      var hideSheet = self._$ionicActionSheet.show({
	        buttons: [{ text: 'Edit' }],
	        destructiveText: 'Delete',
	        cancelText: 'Cancel',
	        cancel: function cancel() {
	          // add cancel code..
	        },
	        buttonClicked: function buttonClicked(index) {
	          if (index == 0) {
	            self.openEditModal(option);
	          }
	          return true;
	        },
	        destructiveButtonClicked: function destructiveButtonClicked() {
	          self._Shop.productOptions.destroyById({ id: self.shopId, fk: option.id }).$promise.then(function (result) {
	            hideSheet();
	            console.log("Option deleted", result);
	            self.fetchOptions();
	          }, function (error) {
	            console.log("Option delete error", error);
	          });
	        }
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      var self = this;
	      this.ngModel = this.options.reduce(function (result, option) {
	        if (option.checked) {
	          result.push(option);
	        }
	        return result;
	      }, []);
	      self.modal.hide();
	      if (self._$scope.$root.$$phase != '$apply' && self._$scope.$root.$$phase != '$digest') {
	        self._$scope.$apply();
	      }
	    }
	  }, {
	    key: 'openEditModal',
	    value: function openEditModal(option) {
	      var self = this;
	      if (!option) {
	        option = new self._ProductOption({ shopId: self.shopId, name: "", multiple_select: "true", require: false, productOptionValues: [{ value: "", price: 0 }] });
	      }
	      console.log(option);
	      self.editModal.scope.option = option;
	      self.editModal.show();
	    }
	  }, {
	    key: 'addOptionValue',
	    value: function addOptionValue() {
	      var self = this;
	      var newOptionValue = { value: "", price: 0 };
	      self.editModal.scope.option.productOptionValues.push(newOptionValue);
	    }
	  }, {
	    key: 'saveOption',
	    value: function saveOption(option) {
	      var self = this;
	      var promise = {};
	
	      var postData = angular.copy(option);
	      postData.product_option_values = option.productOptionValues;
	
	      if (option.id) {
	        promise = self._Shop.productOptions.updateById({ id: self.shopId, fk: option.id }, postData);
	      } else {
	        promise = self._Shop.productOptions.create({ id: self.shopId }, postData);
	      }
	      promise.$promise.then(function (result) {
	        console.log("Save option", result);
	        self.editModal.hide();
	        self.fetchOptions();
	      }, function (error) {
	        console.log("Save option error", error);
	      });
	    }
	  }]);
	
	  return ProductOptionSelectItemController;
	}();
	
	ProductOptionSelectItemController.$inject = ['$filter', '$ionicModal', '$scope', 'Shop', '$ionicActionSheet', 'ProductOption'];
	
	exports.default = ProductOptionSelectItemController;

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<ion-modal-view>\n  <ion-header-bar class=\"bar-positive\">\n      <button class=\"button button-clear\" ng-click=\"$ctrl.save()\">Done</button>\n    <h1 class=\"title\">Options</h1>\n      <button class=\"button button-clear\" ng-click=\"$ctrl.openEditModal()\"><i class=\"ion-android-add icon\"></i></button>\n  </ion-header-bar>\n  <ion-content>\n   <ion-list>\n       <ion-toggle ng-model=\"$ctrl.enableOptions\">Variant</ion-toggle>\n     <ion-checkbox ng-repeat=\"option in $ctrl.options\" ng-model=\"option.checked\"  on-hold=\"$ctrl.showActions(option)\">\n       {{option.name}}\n     </ion-checkbox>\n   </ion-list>\n  </ion-content>\n</ion-modal-view>\n"

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<ion-modal-view>\n    <ion-header-bar class=\"bar-positive\">\n        <button class=\"button button-clear\" ng-click=\"$ctrl.editModal.hide()\">Cancel</button>\n        <h1 class=\"title\">Options</h1>\n        <button class=\"button button-clear\" ng-click=\"$ctrl.saveOption(option)\">Save</button>\n    </ion-header-bar>\n    <ion-content>\n        <ion-list>\n            <ion-item class=\"item-input item-stacked-label\">\n                <label class=\"input-label\">Option name</label>\n                <input type=\"text\" ng-model=\"option.name\" placeholder=\"Option name\">\n            </ion-item>\n            <ion-item class=\"item-divider\">\n                Choices\n            </ion-item>\n            <div class=\"padding\">\n                <div class=\"row\">\n                    <div class=\"col-50\">\n                       Choice value\n                    </div>\n                    <div class=\"col-50\">\n                        Additional price\n                    </div>\n                </div>\n            </div>\n            <ion-item ng-repeat=\"optionValue in option.productOptionValues\">\n                <div class=\"row\">\n                    <div class=\"col-50\">\n                        <input type=\"text\" ng-model=\"optionValue.value\" placeholder=\"Choice value\">\n                    </div>\n                    <div class=\"col-50\">\n                        <input type=\"number\" ng-model=\"optionValue.price\" placeholder=\"Additional price\">\n                    </div>\n                </div>\n\n            </ion-item>\n            <div class=\"padding\">\n                <button class=\"button button-positive\" ng-click=\"$ctrl.addOptionValue()\"><i class=\"icon ion-android-add\"></i> Add choice</button>\n            </div>\n        </ion-list>\n    </ion-content>\n</ion-modal-view>\n"

/***/ },
/* 38 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _valuePackForm = __webpack_require__(40);
	
	var _valuePackForm2 = _interopRequireDefault(_valuePackForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var valuePackFormModule = angular.module('valuePackForm', ['ionic']).component('valuePackForm', _valuePackForm2.default).name;
	
	exports.default = valuePackFormModule;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _valuePackForm = __webpack_require__(41);
	
	var _valuePackForm2 = _interopRequireDefault(_valuePackForm);
	
	var _valuePackForm3 = __webpack_require__(42);
	
	var _valuePackForm4 = _interopRequireDefault(_valuePackForm3);
	
	__webpack_require__(43);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var valuePackFormComponent = {
	  restrict: 'E',
	  bindings: {
	    valuePack: "=",
	    shopId: "="
	  },
	  template: _valuePackForm2.default,
	  controller: _valuePackForm4.default
	};
	
	exports.default = valuePackFormComponent;

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "<ion-list>\n  <ion-item class=\"item-input\">\n    <labe class=\"input-label\">Name</labe>\n    <input type=\"text\" ng-model=\"$ctrl.valuePack.name\">\n  </ion-item>\n  <ion-item class=\"item-input\">\n    <labe class=\"input-label\">Price</labe>\n    <input type=\"text\" ng-model=\"$ctrl.valuePack.price\">\n  </ion-item>\n  <product-select-item ng-model=\"$ctrl.valuePack.products\" shop-id=\"$ctrl.shopId\">\n    Products\n  </product-select-item>\n</ion-list>"

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ValuePackFormController = function ValuePackFormController() {
	  _classCallCheck(this, ValuePackFormController);
	
	  this.name = 'valuePackForm';
	};
	
	exports.default = ValuePackFormController;

/***/ },
/* 43 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _productSelectItem = __webpack_require__(45);
	
	var _productSelectItem2 = _interopRequireDefault(_productSelectItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var productSelectItemModule = angular.module('productSelectItem', ['ionic']).component('productSelectItem', _productSelectItem2.default).name;
	
	exports.default = productSelectItemModule;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _productSelectItem = __webpack_require__(46);
	
	var _productSelectItem2 = _interopRequireDefault(_productSelectItem);
	
	var _productSelectItem3 = __webpack_require__(47);
	
	var _productSelectItem4 = _interopRequireDefault(_productSelectItem3);
	
	__webpack_require__(49);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var productSelectItemComponent = {
	  restrict: 'E',
	  bindings: {
	    ngModel: "=",
	    shopId: "="
	  },
	  transclude: true,
	  template: _productSelectItem2.default,
	  controller: _productSelectItem4.default
	};
	
	exports.default = productSelectItemComponent;

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<ion-item ng-click=\"$ctrl.openModal()\">\n  <label ng-transclude=\"\"></label>\n  <span class=\"item-note dark\"> <i class=\"icon ion-arrow-down-b\"></i></span>\n</ion-item>"

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _productListModal = __webpack_require__(48);
	
	var _productListModal2 = _interopRequireDefault(_productListModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ProductSelectItemController = function () {
	  function ProductSelectItemController($ionicModal, $scope, Shop) {
	    _classCallCheck(this, ProductSelectItemController);
	
	    this.name = 'productSelectItem';
	    this.modal = $ionicModal.fromTemplate(_productListModal2.default, {
	      scope: $scope
	    });
	    this._Shop = Shop;
	    this.fetchProduct();
	  }
	
	  _createClass(ProductSelectItemController, [{
	    key: 'openModal',
	    value: function openModal() {
	      //this.products = angular.copy(this.ngModel)
	      var selectedProductIds = this.ngModel.map(function (product) {
	        return product.id;
	      });
	      console.log(selectedProductIds);
	      this.products = this.products.map(function (product) {
	        product.checked = selectedProductIds.indexOf(product.id) != -1;
	        return product;
	      });
	
	      console.log(this.products);
	      this.modal.show();
	    }
	  }, {
	    key: 'fetchProduct',
	    value: function fetchProduct() {
	      var _this = this;
	
	      this._Shop.products({ id: this.shopId }).$promise.then(function (products) {
	        _this.products = products;
	        console.log(products);
	      }, function (error) {
	        console.log("get product error", error);
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save(products) {
	      this.ngModel = products.reduce(function (result, product) {
	        if (product.checked) {
	          result.push(product);
	        }
	        return result;
	      }, []);
	      this.modal.hide();
	    }
	  }]);
	
	  return ProductSelectItemController;
	}();
	
	ProductSelectItemController.$inject = ["$ionicModal", '$scope', 'Shop'];
	exports.default = ProductSelectItemController;

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<ion-modal-view>\n    <ion-header-bar class=\"bar-positive\">\n        <button class=\"button button-clear\" ng-click=\"$ctrl.save($ctrl.products)\">Done</button>\n        <h1 class=\"title\">Select products</h1>\n    </ion-header-bar>\n    <ion-content>\n        <ion-list>\n            <ion-checkbox ng-repeat=\"product in $ctrl.products\" ng-model=\"product.checked\">\n                {{product.name}}\n            </ion-checkbox>\n        </ion-list>\n    </ion-content>\n</ion-modal-view>\n"

/***/ },
/* 49 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promotionForm = __webpack_require__(51);
	
	var _promotionForm2 = _interopRequireDefault(_promotionForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var promotionFormModule = angular.module('promotionForm', ['ionic']).component('promotionForm', _promotionForm2.default).name;
	
	exports.default = promotionFormModule;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promotionForm = __webpack_require__(52);
	
	var _promotionForm2 = _interopRequireDefault(_promotionForm);
	
	var _promotionForm3 = __webpack_require__(53);
	
	var _promotionForm4 = _interopRequireDefault(_promotionForm3);
	
	__webpack_require__(54);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var promotionFormComponent = {
	  restrict: 'E',
	  bindings: {
	    promotion: "="
	  },
	  template: _promotionForm2.default,
	  controller: _promotionForm4.default
	};
	
	exports.default = promotionFormComponent;

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<ion-list>\n  <ion-item class=\"item-input item-stacked-label\">\n    <label class=\"input-label\">Name</label>\n    <input type=\"text\" ng-model=\"$ctrl.promotion.name\">\n  </ion-item>\n  <ion-item class=\"item-input item-stacked-label\">\n    <label class=\"input-label\">Description</label>\n    <textarea rows=\"4\" ng-model=\"$ctrl.promotion.description\"></textarea>\n  </ion-item>\n  <ion-item>\n    <div>\n      <label class=\"input-label\">Discount</label>\n    </div>\n    <div class=\"row\">\n      <div class=\"col item-input\">\n        <input type=\"number\" ng-model=\"$ctrl.promotion.discount_amount\" class=\"text-right\">\n      </div>\n      <div style=\"width:120px;\" class=\"item-input item-select\" >\n        <select ng-model=\"$ctrl.promotion.discount_percent\"\n                ng-options=\"o.v as o.n for o in [{ n: 'USD', v: false }, { n: 'Percent', v: true }]\"\n                style=\"max-width:100%;\">\n        </select>\n      </div>\n    </div>\n\n  </ion-item>\n  <product-select-item ng-model=\"$ctrl.promotion.products\" shop-id=\"$ctrl.promotion.shopId\">\n    Products\n  </product-select-item>\n  <value-pack-select-item ng-model=\"$ctrl.promotion.productValuePacks\" shop-id=\"$ctrl.promotion.shopId\">\n    Value packs\n  </value-pack-select-item>\n  <ion-item class=\"item-input item-stacked-label\">\n    <label class=\"input-label\">Start date</label>\n    <date-picker ng-model=\"$ctrl.promotion.startDate\"></date-picker>\n  </ion-item>\n  <ion-item class=\"item-input item-stacked-label\">\n    <label class=\"input-label\">End date</label>\n    <date-picker ng-model=\"$ctrl.promotion.endDate\"></date-picker>\n  </ion-item>\n</ion-list>"

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PromotionFormController = function PromotionFormController() {
	  _classCallCheck(this, PromotionFormController);
	
	  this.name = 'promotionForm';
	  console.log(this.promotion);
	};
	
	exports.default = PromotionFormController;

/***/ },
/* 54 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _valuePackSelectItem = __webpack_require__(56);
	
	var _valuePackSelectItem2 = _interopRequireDefault(_valuePackSelectItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var valuePackSelectItemModule = angular.module('valuePackSelectItem', ['ionic']).component('valuePackSelectItem', _valuePackSelectItem2.default).name;
	
	exports.default = valuePackSelectItemModule;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _valuePackSelectItem = __webpack_require__(57);
	
	var _valuePackSelectItem2 = _interopRequireDefault(_valuePackSelectItem);
	
	var _valuePackSelectItem3 = __webpack_require__(58);
	
	var _valuePackSelectItem4 = _interopRequireDefault(_valuePackSelectItem3);
	
	__webpack_require__(60);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var valuePackSelectItemComponent = {
	  restrict: 'E',
	  bindings: {
	    ngModel: "=",
	    shopId: "<"
	  },
	  transclude: true,
	  template: _valuePackSelectItem2.default,
	  controller: _valuePackSelectItem4.default
	};
	
	exports.default = valuePackSelectItemComponent;

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = "<ion-item ng-click=\"$ctrl.openModal()\">\n  <label ng-transclude=\"\"></label>\n  <span class=\"item-note dark\"> <i class=\"icon ion-arrow-down-b\"></i></span>\n</ion-item>\n"

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _valuePackListModal = __webpack_require__(59);
	
	var _valuePackListModal2 = _interopRequireDefault(_valuePackListModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ValuePackSelectItemController = function () {
	  function ValuePackSelectItemController($scope, Shop, $ionicModal) {
	    _classCallCheck(this, ValuePackSelectItemController);
	
	    this.name = 'valuePackSelectItem';
	    this.modal = $ionicModal.fromTemplate(_valuePackListModal2.default, {
	      scope: $scope
	    });
	    this._Shop = Shop;
	    this.fetchValuePacks();
	  }
	
	  _createClass(ValuePackSelectItemController, [{
	    key: 'openModal',
	    value: function openModal() {
	      //this.products = angular.copy(this.ngModel)
	      var selectedValuePackIds = this.ngModel.map(function (valuePack) {
	        return valuePack.id;
	      });
	      this.valuePacks = this.valuePacks.map(function (valuePack) {
	        valuePack.checked = selectedValuePackIds.indexOf(valuePack.id) != -1;
	        return valuePack;
	      });
	      this.modal.show();
	    }
	  }, {
	    key: 'fetchValuePacks',
	    value: function fetchValuePacks() {
	      var _this = this;
	
	      this._Shop.productValuePacks({ id: this.shopId }).$promise.then(function (valuepacks) {
	        _this.valuePacks = valuepacks;
	        console.log(valuepacks);
	      }, function (error) {
	        console.log("get valuepack error", error);
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save(valuepacks) {
	      this.ngModel = valuepacks.reduce(function (result, valuepack) {
	        if (valuepack.checked) {
	          result.push(valuepack);
	        }
	        return result;
	      }, []);
	      this.modal.hide();
	    }
	  }]);
	
	  return ValuePackSelectItemController;
	}();
	
	ValuePackSelectItemController.$inject = ["$scope", "Shop", "$ionicModal"];
	
	exports.default = ValuePackSelectItemController;

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "<ion-modal-view>\n    <ion-header-bar class=\"bar-positive\">\n        <button class=\"button button-clear\" ng-click=\"$ctrl.save($ctrl.valuePacks)\">Done</button>\n        <h1 class=\"title\">Select value packs</h1>\n    </ion-header-bar>\n    <ion-content>\n        <ion-list>\n            <ion-checkbox ng-repeat=\"valuePack in $ctrl.valuePacks\" ng-model=\"valuePack.checked\">\n                {{valuePack.name}}\n            </ion-checkbox>\n        </ion-list>\n    </ion-content>\n</ion-modal-view>\n"

/***/ },
/* 60 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _datePicker = __webpack_require__(62);
	
	var _datePicker2 = _interopRequireDefault(_datePicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var datePickerModule = angular.module('datePicker', ['ionic']).component('datePicker', _datePicker2.default).directive('datepickerTimezone', function () {
	  return {
	    restrict: 'A',
	    priority: 1,
	    require: 'ngModel',
	    link: function link(scope, element, attrs, ctrl) {
	      ctrl.$formatters.push(function (value) {
	        var date = new Date(value);
	        date = new Date(date.getTime() + 60000 * date.getTimezoneOffset());
	        //if (!dateFormat || !modelValue) return "";
	        //var retVal = moment(modelValue).format(dateFormat);
	        console.log(date);
	        return date;
	      });
	
	      ctrl.$parsers.push(function (value) {
	        var date = new Date(value);
	        console.log(date);
	        return date.toString().replace(/(GMT)[\s\S]*/g, "GMT").replace(/(\d{2}:\d{2}:\d{2})/g, "00:00:00");
	      });
	    }
	  };
	}).name;
	
	exports.default = datePickerModule;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _datePicker = __webpack_require__(63);
	
	var _datePicker2 = _interopRequireDefault(_datePicker);
	
	var _datePicker3 = __webpack_require__(64);
	
	var _datePicker4 = _interopRequireDefault(_datePicker3);
	
	__webpack_require__(65);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var datePickerComponent = {
	  restrict: 'E',
	  bindings: {
	    ngModel: '='
	  },
	  require: {
	    ngModelCtrl: 'ngModel'
	  },
	  template: _datePicker2.default,
	  controller: _datePicker4.default
	};
	
	exports.default = datePickerComponent;

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "<input type=\"date\" ng-model=\"$ctrl.ngModel\" datepicker-timezone>\n"

/***/ },
/* 64 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DatePickerController = function DatePickerController($scope) {
	  _classCallCheck(this, DatePickerController);
	
	  this.name = 'datePicker';
	  var self = this;
	
	  /*$scope.$watch(()=>{
	    return self.ngModel
	  },(date)=>{
	    if(typeof(date) == "string"){
	       date = new Date(date)//this will automatically convert utc to local
	      //create new utc date with local timezone
	      date = new Date(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),0,0,0)
	      self.ngModel = date
	      console.log(date.toString())
	    }else if(typeof(date) == "object"){
	      console.log(typeof(date))
	    }
	  })*/
	};
	
	DatePickerController.$inject = ["$scope"];
	exports.default = DatePickerController;

/***/ },
/* 65 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _shopForm = __webpack_require__(67);
	
	var _shopForm2 = _interopRequireDefault(_shopForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var shopFormModule = angular.module('shopForm', ['ionic']).component('shopForm', _shopForm2.default).name;
	
	exports.default = shopFormModule;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _shopForm = __webpack_require__(68);
	
	var _shopForm2 = _interopRequireDefault(_shopForm);
	
	var _shopForm3 = __webpack_require__(69);
	
	var _shopForm4 = _interopRequireDefault(_shopForm3);
	
	__webpack_require__(70);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var shopFormComponent = {
	  restrict: 'E',
	  bindings: {
	    shop: "="
	  },
	  template: _shopForm2.default,
	  controller: _shopForm4.default
	};
	
	exports.default = shopFormComponent;

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "<ion-list>\n  <ion-item class=\"item-divider\">\n    Information\n  </ion-item>\n  <ion-item class=\"item-input item-stacked-label\">\n    <label class=\"item-stacked-label\">Shop name</label>\n    <input type=\"text\" ng-model=\"$ctrl.shop.name\">\n  </ion-item>\n  <item-select-modal  ng-model=\"$ctrl.shop.businessCategoryId\" options=\"$ctrl.categories\" text-key=\"name\" value-key=\"id\" title=\"Select category\" default-text=\"\">\n    Business category\n  </item-select-modal>\n  <ion-item class=\"item-input item-stacked-label\">\n    <label class=\"item-stacked-label\">Description</label>\n    <textarea rows=\"5\" ng-model=\"$ctrl.shop.description\"></textarea>\n  </ion-item>\n  <location-picker ng-model=\"$ctrl.shop.location\">\n    Shop location\n  </location-picker>\n  <ion-item class=\"item-divider\">\n    Contact\n  </ion-item>\n\n  <ion-item class=\"item-input item-stacked-label\">\n    <label class=\"item-stacked-label\">Contact number</label>\n    <input type=\"text\" ng-model=\"$ctrl.shop.contact_number\">\n  </ion-item>\n  <ion-item class=\"item-input item-stacked-label\">\n    <label class=\"item-stacked-label\">Email</label>\n    <input type=\"text\" ng-model=\"$ctrl.shop.email\">\n  </ion-item>\n  <ion-item class=\"item-input item-stacked-label\">\n    <label class=\"item-stacked-label\">Website</label>\n    <input type=\"text\" ng-model=\"$ctrl.shop.website\">\n  </ion-item>\n  <location-picker ng-model=\"$ctrl.shop.location\">\n    Contact address\n  </location-picker>\n  <ion-item class=\"item-divider\">\n    Service time\n  </ion-item>\n  <schedule-select-item ng-model=\"$ctrl.shop.open_close\">\n    Open-close time\n  </schedule-select-item>\n  <schedule-select-item ng-model=\"$ctrl.shop.delivery_time\">\n    Delivery time\n  </schedule-select-item>\n</ion-list>"

/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ShopFormController = function ShopFormController(BusinessCategory) {
	  var _this = this;
	
	  _classCallCheck(this, ShopFormController);
	
	  this.name = 'shopForm';
	  BusinessCategory.find().$promise.then(function (categories) {
	    _this.categories = [{ name: "Uncategorize", id: 0 }].concat(categories);
	  });
	};
	
	ShopFormController.$inject = ["BusinessCategory"];
	
	exports.default = ShopFormController;

/***/ },
/* 70 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _deliveryForm = __webpack_require__(72);
	
	var _deliveryForm2 = _interopRequireDefault(_deliveryForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var deliveryFormModule = angular.module('deliveryForm', ['ionic']).component('deliveryForm', _deliveryForm2.default).name;
	
	exports.default = deliveryFormModule;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _deliveryForm = __webpack_require__(73);
	
	var _deliveryForm2 = _interopRequireDefault(_deliveryForm);
	
	var _deliveryForm3 = __webpack_require__(74);
	
	var _deliveryForm4 = _interopRequireDefault(_deliveryForm3);
	
	__webpack_require__(78);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var deliveryFormComponent = {
	  restrict: 'E',
	  bindings: {
	    shop: "="
	  },
	  template: _deliveryForm2.default,
	  controller: _deliveryForm4.default
	};
	
	exports.default = deliveryFormComponent;

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<ion-list>\n  <ion-item class=\"item-divider\">\n    Delivery method\n  </ion-item>\n  <ion-item ng-repeat=\"method in $ctrl.shop.delivery_methods\" ng-click=\"$ctrl.edit(method)\">\n    {{method.name}}\n    <span class=\"item-note dark truncate\" style=\"max-width:150px\">{{method.active?\"ON\":\"OFF\"}} <i class=\"icon ion-chevron-right\"></i></span>\n  </ion-item>\n</ion-list>"

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _deliveryModalTemplate = __webpack_require__(75);
	
	var _deliveryModalTemplate2 = _interopRequireDefault(_deliveryModalTemplate);
	
	var _conditionModalTemplate = __webpack_require__(76);
	
	var _conditionModalTemplate2 = _interopRequireDefault(_conditionModalTemplate);
	
	var _conditionEditModalTemplate = __webpack_require__(77);
	
	var _conditionEditModalTemplate2 = _interopRequireDefault(_conditionEditModalTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DeliveryFormController = function () {
	  function DeliveryFormController($ionicModal, $scope) {
	    _classCallCheck(this, DeliveryFormController);
	
	    this.name = 'deliveryForm';
	    this.modal = $ionicModal.fromTemplate(_deliveryModalTemplate2.default, {
	      scope: $scope
	    });
	    this.methodConditionModal = $ionicModal.fromTemplate(_conditionModalTemplate2.default, {
	      scope: $scope
	    });
	    this.conditionEditModal = $ionicModal.fromTemplate(_conditionEditModalTemplate2.default, {
	      scope: $scope
	    });
	  }
	
	  _createClass(DeliveryFormController, [{
	    key: 'edit',
	    value: function edit(method) {
	      this.modal.scope.method = method;
	      this.modal.show();
	    }
	  }, {
	    key: 'saveMethod',
	    value: function saveMethod(method) {
	      this.modal.hide();
	    }
	  }, {
	    key: 'editMethodCondition',
	    value: function editMethodCondition(method) {
	      this.methodConditionModal.scope.method = method;
	      this.methodConditionModal.show();
	    }
	  }, {
	    key: 'saveMethodCondition',
	    value: function saveMethodCondition(method) {
	      this.methodConditionModal.hide();
	    }
	  }, {
	    key: 'editCondition',
	    value: function editCondition(condition) {
	
	      if (condition) {
	        this.conditionEditModal.scope.selectedIndex = this.methodConditionModal.scope.method.conditions.indexOf(condition);
	        condition = angular.copy(condition);
	      } else {
	        this.conditionEditModal.scope.selectedIndex = -1;
	        condition = {
	          "from": 0,
	          "to": 0,
	          "service_fee": 0,
	          "delivery_time": 30,
	          "min_purchase": 0,
	          delivery_time_unit: "Minutes"
	        };
	      }
	      this.conditionEditModal.scope.condition = condition;
	
	      this.conditionEditModal.show();
	    }
	  }, {
	    key: 'saveCondition',
	    value: function saveCondition(condition) {
	      var index = this.conditionEditModal.scope.selectedIndex;
	      if (index != -1) {
	        this.methodConditionModal.scope.method.conditions[index] = condition;
	      } else {
	        this.methodConditionModal.scope.method.conditions.push(condition);
	      }
	      this.conditionEditModal.hide();
	    }
	  }]);
	
	  return DeliveryFormController;
	}();
	
	DeliveryFormController.$inject = ['$ionicModal', '$scope'];
	exports.default = DeliveryFormController;

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "<ion-modal-view>\n    <ion-header-bar class=\"bar-positive\">\n        <button class=\"button button-clear\" ng-click=\"$ctrl.saveMethod(method)\">Done</button>\n        <h1 class=\"title\">{{method.name}}</h1>\n    </ion-header-bar>\n    <ion-content>\n        <ion-list>\n            <ion-toggle ng-model=\"method.active\">{{method.name}}</ion-toggle>\n            <ion-item ng-show=\"method.active && method.enableCondition\" ng-click=\"$ctrl.editMethodCondition(method)\">\n                Delivery condition\n                <span class=\"item-note dark truncate\" style=\"max-width:150px\"><i class=\"icon ion-chevron-right\"></i></span>\n            </ion-item>\n        </ion-list>\n    </ion-content>\n</ion-modal-view>\n"

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "<ion-modal-view>\n    <ion-header-bar class=\"bar-positive\">\n        <button class=\"button button-clear\" ng-click=\"$ctrl.saveMethodCondition(method)\">Done</button>\n        <h1 class=\"title\">{{method.name}}</h1>\n        <button class=\"button button-clear\" ng-click=\"$ctrl.editCondition()\"><i class=\"icon ion-android-add\"></i></button>\n    </ion-header-bar>\n    <ion-content>\n        <ion-list>\n            <ion-item ng-repeat=\"condition in method.conditions track by $index\" ng-click=\"$ctrl.editCondition(condition)\" on-hold=\"$ctrl.showActions(condition)\">\n                {{condition.from}} km - {{condition.to}} km\n                <span class=\"item-note dark\">\n                    {{condition.service_fee==0?\"Free\":(condition.service_fee | currency:\"USD\")}}\n                </span>\n            </ion-item>\n        </ion-list>\n    </ion-content>\n</ion-modal-view>\n"

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "<ion-modal-view>\n    <ion-header-bar class=\"bar-positive\">\n        <button class=\"button button-clear\" ng-click=\"$ctrl.conditionEditModal.hide()\">Cancel</button>\n        <h1 class=\"title\">{{method.name}}</h1>\n        <button class=\"button button-clear\" ng-click=\"$ctrl.saveCondition(condition)\">Save</button>\n    </ion-header-bar>\n    <ion-content>\n        <ion-list>\n            <ion-item class=\"item-input item-stacked-label\">\n                <label class=\"input-label\">From</label>\n                <label class=\"item-input-wrapper light-bg\">\n                    <input type=\"number\" ng-model=\"condition.from\" class=\"text-right\"> Km\n                </label>\n            </ion-item>\n            <ion-item class=\"item-input item-stacked-label\">\n                <label class=\"input-label\">To</label>\n                <label class=\"item-input-wrapper light-bg\">\n                    <input type=\"number\" ng-model=\"condition.to\" class=\"text-right\"> Km\n                </label>\n            </ion-item>\n            <ion-item class=\"item-input item-stacked-label\">\n                <label class=\"input-label\">Fee</label>\n                <label class=\"item-input-wrapper light-bg\">\n                    <input type=\"number\" ng-model=\"condition.service_fee\" class=\"text-right\"> USD\n                </label>\n\n            </ion-item>\n            <ion-item class=\"item-input item-stacked-label\">\n                <div>\n                    <label class=\"input-label\">Estimate delivery time</label>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col item-input\">\n                        <input type=\"number\" ng-model=\"condition.delivery_time\" class=\"text-right\">\n                    </div>\n                    <div style=\"width:120px;\" class=\"item-input item-select\" >\n                        <select ng-model=\"condition.delivery_time_unit\"\n                                style=\"max-width:100%;\">\n                            <option value=\"Minutes\">Minutes</option>\n                            <option value=\"Hours\">Hours</option>\n                            <option value=\"Days\">Days</option>\n                        </select>\n                    </div>\n                </div>\n\n            </ion-item>\n            <ion-item class=\"item-input item-stacked-label\">\n                <label class=\"input-label\">Minimum purchase</label>\n                <label class=\"item-input-wrapper light-bg\">\n                    <input type=\"number\" ng-model=\"condition.min_purchase\" class=\"text-right\"> USD\n                </label>\n\n            </ion-item>\n        </ion-list>\n    </ion-content>\n</ion-modal-view>\n"

/***/ },
/* 78 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _paymentForm = __webpack_require__(80);
	
	var _paymentForm2 = _interopRequireDefault(_paymentForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var paymentFormModule = angular.module('paymentForm', ['ionic']).component('paymentForm', _paymentForm2.default).name;
	
	exports.default = paymentFormModule;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _paymentForm = __webpack_require__(81);
	
	var _paymentForm2 = _interopRequireDefault(_paymentForm);
	
	var _paymentForm3 = __webpack_require__(82);
	
	var _paymentForm4 = _interopRequireDefault(_paymentForm3);
	
	__webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var paymentFormComponent = {
	  restrict: 'E',
	  bindings: {
	    shop: '='
	  },
	  template: _paymentForm2.default,
	  controller: _paymentForm4.default
	};
	
	exports.default = paymentFormComponent;

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "<ion-list>\n  <ion-item class=\"item-divider\">\n    Payment method\n  </ion-item>\n  <ion-toggle ng-repeat=\"method in $ctrl.shop.payment_methods\" ng-model=\"method.active\">\n    {{method.name}}\n  </ion-toggle>\n</ion-list>"

/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PaymentFormController = function PaymentFormController() {
	  _classCallCheck(this, PaymentFormController);
	
	  this.name = 'paymentForm';
	};
	
	exports.default = PaymentFormController;

/***/ },
/* 83 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _locationPicker = __webpack_require__(85);
	
	var _locationPicker2 = _interopRequireDefault(_locationPicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locationPickerModule = angular.module('locationPicker', ['ionic']).component('locationPicker', _locationPicker2.default).name;
	
	exports.default = locationPickerModule;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _locationPicker = __webpack_require__(86);
	
	var _locationPicker2 = _interopRequireDefault(_locationPicker);
	
	var _locationPicker3 = __webpack_require__(87);
	
	var _locationPicker4 = _interopRequireDefault(_locationPicker3);
	
	__webpack_require__(89);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var locationPickerComponent = {
	  restrict: 'E',
	  bindings: {
	    title: '@',
	    ngModel: '=',
	    ngChange: '&'
	  },
	  transclude: true,
	  template: _locationPicker2.default,
	  controller: _locationPicker4.default
	};
	
	exports.default = locationPickerComponent;

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = "<ion-item ng-click=\"$ctrl.openPicker()\">\n  <label ng-transclude=\"\"></label>\n  <span class=\"item-note dark truncate\" style=\"max-width:150px\">{{$ctrl.ngModel.formatted_address}}<i class=\"icon ion-chevron-right\"></i></span>\n</ion-item>\n"

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _locationPickerModalTemplate = __webpack_require__(88);
	
	var _locationPickerModalTemplate2 = _interopRequireDefault(_locationPickerModalTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LocationPickerController = function () {
	  function LocationPickerController($ionicModal, $scope, $cordovaGeolocation, $http) {
	    _classCallCheck(this, LocationPickerController);
	
	    this.name = 'locationPicker';
	    var self = this;
	    self._$http = $http;
	    $scope.$ctrl = self;
	    self.center = {
	      zoom: 15,
	      lat: self.ngModel.geolocation.lat,
	      lng: self.ngModel.geolocation.lng
	    };
	    self.defaults = {
	      maxZoom: 20,
	      zoomControl: false
	    };
	    self.modal = $ionicModal.fromTemplate(_locationPickerModalTemplate2.default, {
	      scope: $scope
	    });
	    self.suggestions = [];
	    self.showSuggestion = false;
	    self._$scope = $scope;
	
	    self.ngModel = self.ngModel || { geolocation: { lat: 0, lng: 0 }, formatted_address: "" };
	
	    //TODO UNCOMMENT THIS TO USE DEVICE LOCATION
	    /*
	     let posOptions = {timeout: 10000, enableHighAccuracy: false};
	    $cordovaGeolocation
	      .getCurrentPosition(posOptions)
	      .then(function (position) {
	        let lat  = position.coords.latitude
	        let long = position.coords.longitude
	        self.ngModel.geolocation.lat = lat
	        self.ngModel.geolocation.lng = long
	      }, function(err) {
	        // error
	      });*/
	    $scope.$watch(function () {
	      return self.ngModel.geolocation;
	    }, function (newVal) {
	      console.log("Location changed", newVal);
	      //change map center
	      self.center.lat = newVal.lat;
	      self.center.lng = newVal.lng;
	
	      var geocoder = new google.maps.Geocoder();
	      geocoder.geocode({ 'location': newVal }, function (results, status) {
	        if (status === 'OK') {
	          console.log(results);
	        }
	      });
	    }, true);
	  }
	
	  _createClass(LocationPickerController, [{
	    key: 'openPicker',
	    value: function openPicker() {
	      var self = this;
	      self.center = {
	        zoom: 8,
	        lat: self.ngModel.geolocation.lat,
	        lng: self.ngModel.geolocation.lng
	      };
	      this.modal.show();
	    }
	  }, {
	    key: 'querySuggestions',
	    value: function querySuggestions(address) {
	      var self = this;
	      var service = new google.maps.places.AutocompleteService();
	      if (address) {
	        service.getPlacePredictions({ input: address }, function (prediction, status) {
	          console.log(status);
	          console.log(prediction);
	          self.suggestions = prediction;
	          if (self._$scope.$root.$$phase != '$apply' && self._$scope.$root.$$phase != '$digest') {
	            self._$scope.$apply();
	          }
	        });
	      }
	    }
	  }, {
	    key: 'clearSuggestion',
	    value: function clearSuggestion() {
	      console.log("CLear suggestion");
	      var self = this;
	      self.suggestions = [];
	    }
	  }, {
	    key: 'selectSuggestion',
	    value: function selectSuggestion(suggestion) {
	      var self = this;
	      console.log(suggestion);
	      var service = new google.maps.places.PlacesService(document.createElement('div'));
	      service.getDetails(suggestion, function (result, status) {
	        console.log(result, status);
	        if (status == "OK") {
	          self.ngModel.formatted_address = result.formatted_address;
	          self.ngModel.geolocation.lat = result.geometry.location.lat();
	          self.ngModel.geolocation.lng = result.geometry.location.lng();
	          if (self._$scope.$root.$$phase != '$apply' && self._$scope.$root.$$phase != '$digest') {
	            self._$scope.$apply();
	          }
	        }
	      });
	    }
	  }, {
	    key: 'done',
	    value: function done() {
	
	      this.modal.hide();
	      this.ngChange();
	    }
	  }]);
	
	  return LocationPickerController;
	}();
	
	LocationPickerController.$inject = ['$ionicModal', '$scope', '$cordovaGeolocation', '$http'];
	
	exports.default = LocationPickerController;

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = "<ion-modal-view>\n  <ion-header-bar class=\"bar-positive\">\n    <button type=\"button\" class=\"button button-clear\" ng-click=\"$ctrl.done()\">Done</button>\n    <h1 class=\"title\">{{$ctrl.title}}</h1>\n  </ion-header-bar>\n  <ion-content scroll=\"false\">\n    <div data-tap-disabled=\"true\" style=\"height:100%;\">\n      <leaflet center=\"$ctrl.center\" defaults=\"$ctrl.defaults\" width=\"100%\" height=\"100%\"></leaflet>\n    </div>\n    <div style=\"position:absolute;width:100%;top:0px;\" class=\"light-bg\">\n      <ion-list>\n        <ion-item class=\"item-input item-stacked-label\">\n          <label class=\"input-label\">Address</label>\n          <textarea rows=\"3\" ng-focus=\"$ctrl.showSuggestion=true\" ng-blur=\"$ctrl.showSuggestion= false\" name=\"placesearch\" ng-model=\"$ctrl.ngModel.formatted_address\" ng-change=\"$ctrl.querySuggestions($ctrl.ngModel.formatted_address)\"></textarea>\n        </ion-item>\n        <div ng-show=\"$ctrl.showSuggestion\">\n          <ion-item ng-repeat=\"suggest in $ctrl.suggestions\" ng-click=\"$ctrl.selectSuggestion(suggest)\">\n            {{suggest.description}}\n          </ion-item>\n        </div>\n\n\n      </ion-list>\n    </div>\n\n\n\n  </ion-content>\n</ion-modal-view>\n\n"

/***/ },
/* 89 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _scheduleSelectItem = __webpack_require__(91);
	
	var _scheduleSelectItem2 = _interopRequireDefault(_scheduleSelectItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var scheduleSelectItemModule = angular.module('scheduleSelectItem', ['ionic']).component('scheduleSelectItem', _scheduleSelectItem2.default).name;
	
	exports.default = scheduleSelectItemModule;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _scheduleSelectItem = __webpack_require__(92);
	
	var _scheduleSelectItem2 = _interopRequireDefault(_scheduleSelectItem);
	
	var _scheduleSelectItem3 = __webpack_require__(93);
	
	var _scheduleSelectItem4 = _interopRequireDefault(_scheduleSelectItem3);
	
	__webpack_require__(96);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var scheduleSelectItemComponent = {
	  restrict: 'E',
	  bindings: {
	    ngModel: "="
	  },
	  transclude: true,
	  template: _scheduleSelectItem2.default,
	  controller: _scheduleSelectItem4.default
	};
	
	exports.default = scheduleSelectItemComponent;

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "<ion-item ng-click=\"$ctrl.openPicker()\">\n  <label ng-transclude=\"\" class=\"\"></label>\n  <span class=\"item-note dark truncate\" style=\"max-width:150px\">{{$ctrl.formattedDay}}<i class=\"icon ion-chevron-right\"></i></span>\n</ion-item>\n"

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _scheduleModalTemplate = __webpack_require__(94);
	
	var _scheduleModalTemplate2 = _interopRequireDefault(_scheduleModalTemplate);
	
	var _scheduleEditModalTemplate = __webpack_require__(95);
	
	var _scheduleEditModalTemplate2 = _interopRequireDefault(_scheduleEditModalTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScheduleSelectItemController = function () {
	  function ScheduleSelectItemController($ionicModal, $scope, $ionicActionSheet) {
	    _classCallCheck(this, ScheduleSelectItemController);
	
	    this.name = 'scheduleSelectItem';
	    this.modal = $ionicModal.fromTemplate(_scheduleModalTemplate2.default, {
	      scope: $scope
	    });
	    this.editModal = $ionicModal.fromTemplate(_scheduleEditModalTemplate2.default, {
	      scope: $scope
	    });
	    this._$ionicActionSheet = $ionicActionSheet;
	    console.log(this.ngModel);
	  }
	
	  _createClass(ScheduleSelectItemController, [{
	    key: 'openPicker',
	    value: function openPicker() {
	      this.schedules = angular.copy(this.ngModel);
	      this.modal.show();
	    }
	  }, {
	    key: 'edit',
	    value: function edit(schedule) {
	
	      if (!schedule) {
	        schedule = {
	          days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	          from: new Date(1970, 0, 1, 8, 0),
	          to: new Date(1970, 0, 1, 17, 0)
	        };
	        this.editModal.scope.editIndex = -1;
	      } else {
	        this.editModal.scope.editIndex = this.schedules.indexOf(schedule);
	      }
	
	      var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	      days = days.map(function (day) {
	        return { name: day, checked: schedule.days.indexOf(day) != -1 };
	      });
	      this.editModal.scope.days = days;
	      this.editModal.scope.schedule = schedule;
	      this.editModal.show();
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	
	      this.ngModel = angular.copy(this.schedules);
	      this.modal.hide();
	    }
	  }, {
	    key: 'saveSchedule',
	    value: function saveSchedule(schedule) {
	      //push schedule to schedules
	      var days = this.editModal.scope.days.reduce(function (result, day) {
	        if (day.checked) {
	          result.push(day.name);
	        }
	        return result;
	      }, []);
	      schedule.days = days;
	      var index = this.editModal.scope.editIndex;
	      if (index == -1) {
	        this.schedules.push(schedule);
	      } else {
	        this.schedules[index] = schedule;
	      }
	
	      this.editModal.hide();
	    }
	  }, {
	    key: 'showActions',
	    value: function showActions(schedule) {
	      //show edit or delete
	      var self = this;
	      var hideSheet = self._$ionicActionSheet.show({
	        buttons: [],
	        destructiveText: 'Delete',
	        cancelText: 'Cancel',
	        cancel: function cancel() {
	          // add cancel code..
	        },
	        buttonClicked: function buttonClicked(index) {
	          if (index == 0) {}
	          return true;
	        },
	        destructiveButtonClicked: function destructiveButtonClicked() {
	          var index = self.schedules.indexOf(schedule);
	          self.schedules.splice(index, 1);
	          hideSheet();
	        }
	      });
	    }
	  }]);
	
	  return ScheduleSelectItemController;
	}();
	
	ScheduleSelectItemController.$inject = ["$ionicModal", "$scope", '$ionicActionSheet'];
	exports.default = ScheduleSelectItemController;

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = "<ion-modal-view>\n    <ion-header-bar class=\"bar-positive\">\n        <button class=\"button button-clear\" ng-click=\"$ctrl.save()\">Done</button>\n        <h1 class=\"title\">Schedule</h1>\n        <button class=\"button button-clear\" ng-click=\"$ctrl.edit()\"><i class=\"icon ion-android-add\"></i></button>\n    </ion-header-bar>\n    <ion-content>\n        <ion-item ng-repeat=\"schedule in $ctrl.schedules track by $index\" ng-click=\"$ctrl.edit(schedule)\" on-hold=\"$ctrl.showActions(schedule)\">\n            <div>\n                {{schedule.from|date:'h:mma'}} - {{schedule.to|date:'h:mma'}}\n            </div>\n            <div>\n                <span ng-repeat=\"day in schedule.days\">\n                    <span ng-if=\"$index!=0\">, </span><span>{{day}}</span>\n                </span>\n            </div>\n        </ion-item>\n    </ion-content>\n</ion-modal-view>\n"

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = "<ion-modal-view>\n    <ion-header-bar class=\"bar-positive\">\n        <button class=\"button button-clear\" ng-click=\"$ctrl.editModal.hide()\">Cancel</button>\n        <h1 class=\"title\">Edit</h1>\n        <button class=\"button button-clear\" ng-click=\"$ctrl.saveSchedule(schedule)\">Save</button>\n    </ion-header-bar>\n    <ion-content>\n        <ion-list>\n            <ion-item class=\"item-input\">\n                <label class=\"input-label\">From</label>\n                <time-picker ng-model=\"schedule.from\"></time-picker>\n            </ion-item>\n            <ion-item class=\"item-input\">\n                <label class=\"input-label\">To</label>\n                <time-picker ng-model=\"schedule.to\"></time-picker>\n            </ion-item>\n            <ion-item class=\"item-divider\">\n                Repeat\n            </ion-item>\n            <ion-checkbox ng-repeat=\"day in days\" ng-model=\"day.checked\">\n                {{day.name}}\n            </ion-checkbox>\n        </ion-list>\n    </ion-content>\n</ion-modal-view>\n"

/***/ },
/* 96 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _timePicker = __webpack_require__(98);
	
	var _timePicker2 = _interopRequireDefault(_timePicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var timePickerModule = angular.module('timePicker', ['ionic']).component('timePicker', _timePicker2.default).directive('myTimepicker', function () {
	  return {
	    restrict: 'A',
	    priority: 1,
	    require: 'ngModel',
	    link: function link(scope, element, attrs, ctrl) {
	      ctrl.$formatters.push(function (value) {
	        var date = new Date(value);
	        console.log(value);
	        return date;
	      });
	
	      ctrl.$parsers.push(function (value) {
	        var date = new Date(value);
	        return date;
	      });
	    }
	  };
	}).name;
	
	exports.default = timePickerModule;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _timePicker = __webpack_require__(99);
	
	var _timePicker2 = _interopRequireDefault(_timePicker);
	
	var _timePicker3 = __webpack_require__(100);
	
	var _timePicker4 = _interopRequireDefault(_timePicker3);
	
	__webpack_require__(101);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var timePickerComponent = {
	  restrict: 'E',
	  bindings: {
	    ngModel: '='
	  },
	  template: _timePicker2.default,
	  controller: _timePicker4.default
	};
	
	exports.default = timePickerComponent;

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "<input type=\"time\" ng-model=\"$ctrl.ngModel\" my-timepicker>\n"

/***/ },
/* 100 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TimePickerController = function TimePickerController() {
	  _classCallCheck(this, TimePickerController);
	
	  this.name = 'timePicker';
	};
	
	exports.default = TimePickerController;

/***/ },
/* 101 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _shopDetailHeader = __webpack_require__(103);
	
	var _shopDetailHeader2 = _interopRequireDefault(_shopDetailHeader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var shopDetailHeaderModule = angular.module('shopDetailHeader', ['ionic']).component('shopDetailHeader', _shopDetailHeader2.default).name;
	
	exports.default = shopDetailHeaderModule;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _shopDetailHeader = __webpack_require__(104);
	
	var _shopDetailHeader2 = _interopRequireDefault(_shopDetailHeader);
	
	var _shopDetailHeader3 = __webpack_require__(105);
	
	var _shopDetailHeader4 = _interopRequireDefault(_shopDetailHeader3);
	
	__webpack_require__(106);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var shopDetailHeaderComponent = {
	  restrict: 'E',
	  bindings: {
	    shop: '<'
	  },
	  template: _shopDetailHeader2.default,
	  controller: _shopDetailHeader4.default
	};
	
	exports.default = shopDetailHeaderComponent;

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row shop-cover row-bottom\" style=\"background-image:url({{$ctrl.shop.cover}}),url(http://placehold.it/600x400);\">\n  <div class=\"shop-image\" style=\"background-image:url({{$ctrl.shop.logo}}),url(http://placehold.it/200x200);\">\n\n  </div>\n  <div class=\"col\">\n    <div>{{$ctrl.shop.name}}</div>\n    <div>{{$ctrl.shop.location.formatted_address || \"Unknown\"}}</div>\n  </div>\n</div>\n<div class=\"row positive-bg light text-center\">\n  <div class=\"col\">\n    <div>12,120</div>\n    <div>Followers</div>\n  </div>\n  <div class=\"col\">\n    <div>$ 12,120</div>\n    <div>Revenues</div>\n  </div>\n  <div class=\"col\">\n    <div>4.5/5</div>\n    <div>Rating</div>\n  </div>\n</div>\n"

/***/ },
/* 105 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ShopDetailHeaderController = function ShopDetailHeaderController() {
	  _classCallCheck(this, ShopDetailHeaderController);
	
	  this.name = 'shopDetailHeader';
	};
	
	exports.default = ShopDetailHeaderController;

/***/ },
/* 106 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _myProfileForm = __webpack_require__(108);
	
	var _myProfileForm2 = _interopRequireDefault(_myProfileForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var myProfileFormModule = angular.module('myProfileForm', ['ionic']).component('myProfileForm', _myProfileForm2.default).name;
	
	exports.default = myProfileFormModule;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _myProfileForm = __webpack_require__(109);
	
	var _myProfileForm2 = _interopRequireDefault(_myProfileForm);
	
	var _myProfileForm3 = __webpack_require__(110);
	
	var _myProfileForm4 = _interopRequireDefault(_myProfileForm3);
	
	__webpack_require__(111);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var myProfileFormComponent = {
	  restrict: 'E',
	  bindings: {
	    profile: "="
	  },
	  template: _myProfileForm2.default,
	  controller: _myProfileForm4.default
	};
	
	exports.default = myProfileFormComponent;

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = "<ion-list>\n  <ion-item>\n    <div class=\"row\">\n      <image-picker class=\"profile-image\" ng-model=\"$ctrl.profile.image\"></image-picker>\n      <div class=\"col\">\n        <div>{{$ctrl.profile.displayname || $ctrl.profile.email}}</div>\n      </div>\n    </div>\n  </ion-item>\n  <ion-item class=\"item-input item-stacked-label\">\n    <label class=\"input-label\">Display name</label>\n    <input type=\"text\" ng-model=\"$ctrl.profile.displayname\">\n  </ion-item>\n  <ion-item class=\"item-input item-stacked-label\">\n    <label class=\"input-label\">Firstname</label>\n    <input type=\"text\" ng-model=\"$ctrl.profile.firstname\">\n  </ion-item>\n  <ion-item class=\"item-input item-stacked-label\">\n    <label class=\"input-label\">Lastname</label>\n    <input type=\"text\" ng-model=\"$ctrl.profile.lastname\">\n  </ion-item>\n\n  <ion-item class=\"item-input item-stacked-label\">\n    <label class=\"input-label\">Date of birth</label>\n    <date-picker ng-model=\"$ctrl.profile.date_of_birth\"></date-picker>\n  </ion-item>\n</ion-list>\n"

/***/ },
/* 110 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MyProfileFormController = function MyProfileFormController() {
	  _classCallCheck(this, MyProfileFormController);
	
	  this.name = 'myProfileForm';
	  console.log(this.profile);
	};
	
	exports.default = MyProfileFormController;

/***/ },
/* 111 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _socialMediaForm = __webpack_require__(113);
	
	var _socialMediaForm2 = _interopRequireDefault(_socialMediaForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var socialMediaFormModule = angular.module('socialMediaForm', ['ionic']).component('socialMediaForm', _socialMediaForm2.default).name;
	
	exports.default = socialMediaFormModule;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _socialMediaForm = __webpack_require__(114);
	
	var _socialMediaForm2 = _interopRequireDefault(_socialMediaForm);
	
	var _socialMediaForm3 = __webpack_require__(115);
	
	var _socialMediaForm4 = _interopRequireDefault(_socialMediaForm3);
	
	__webpack_require__(116);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var socialMediaFormComponent = {
	  restrict: 'E',
	  bindings: {
	    shop: "="
	  },
	  template: _socialMediaForm2.default,
	  controller: _socialMediaForm4.default
	};
	
	exports.default = socialMediaFormComponent;

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "<ion-list>\n  <ion-item>\n    <label class=\"input-label\">Facebook</label>\n  </ion-item>\n</ion-list>"

/***/ },
/* 115 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SocialMediaFormController = function SocialMediaFormController() {
	  _classCallCheck(this, SocialMediaFormController);
	
	  this.name = 'socialMediaForm';
	};
	
	exports.default = SocialMediaFormController;

/***/ },
/* 116 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _orderList = __webpack_require__(118);
	
	var _orderList2 = _interopRequireDefault(_orderList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var orderListModule = angular.module('orderList', ['ionic']).component('orderList', _orderList2.default).name;
	
	exports.default = orderListModule;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _orderList = __webpack_require__(119);
	
	var _orderList2 = _interopRequireDefault(_orderList);
	
	var _orderList3 = __webpack_require__(120);
	
	var _orderList4 = _interopRequireDefault(_orderList3);
	
	__webpack_require__(121);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var orderListComponent = {
	  restrict: 'E',
	  bindings: {},
	  template: _orderList2.default,
	  controller: _orderList4.default
	};
	
	exports.default = orderListComponent;

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = "<div>\n  <h1>{{ $ctrl.name }}</h1>\n</div>\n"

/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var OrderListController = function OrderListController() {
	  _classCallCheck(this, OrderListController);
	
	  this.name = 'orderList';
	};
	
	exports.default = OrderListController;

/***/ },
/* 121 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tabs = __webpack_require__(123);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _store = __webpack_require__(128);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _order = __webpack_require__(133);
	
	var _order2 = _interopRequireDefault(_order);
	
	var _contact = __webpack_require__(138);
	
	var _contact2 = _interopRequireDefault(_contact);
	
	var _more = __webpack_require__(143);
	
	var _more2 = _interopRequireDefault(_more);
	
	var _login = __webpack_require__(148);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _logout = __webpack_require__(153);
	
	var _logout2 = _interopRequireDefault(_logout);
	
	var _selectShop = __webpack_require__(158);
	
	var _selectShop2 = _interopRequireDefault(_selectShop);
	
	var _products = __webpack_require__(163);
	
	var _products2 = _interopRequireDefault(_products);
	
	var _valuepacks = __webpack_require__(168);
	
	var _valuepacks2 = _interopRequireDefault(_valuepacks);
	
	var _promotions = __webpack_require__(173);
	
	var _promotions2 = _interopRequireDefault(_promotions);
	
	var _newShop = __webpack_require__(178);
	
	var _newShop2 = _interopRequireDefault(_newShop);
	
	var _newProduct = __webpack_require__(183);
	
	var _newProduct2 = _interopRequireDefault(_newProduct);
	
	var _editProduct = __webpack_require__(188);
	
	var _editProduct2 = _interopRequireDefault(_editProduct);
	
	var _newValuePack = __webpack_require__(193);
	
	var _newValuePack2 = _interopRequireDefault(_newValuePack);
	
	var _editValuePack = __webpack_require__(198);
	
	var _editValuePack2 = _interopRequireDefault(_editValuePack);
	
	var _newPromotion = __webpack_require__(203);
	
	var _newPromotion2 = _interopRequireDefault(_newPromotion);
	
	var _editPromotion = __webpack_require__(208);
	
	var _editPromotion2 = _interopRequireDefault(_editPromotion);
	
	var _register = __webpack_require__(213);
	
	var _register2 = _interopRequireDefault(_register);
	
	var _myProfile = __webpack_require__(218);
	
	var _myProfile2 = _interopRequireDefault(_myProfile);
	
	var _myShop = __webpack_require__(223);
	
	var _myShop2 = _interopRequireDefault(_myShop);
	
	var _socialMedia = __webpack_require__(228);
	
	var _socialMedia2 = _interopRequireDefault(_socialMedia);
	
	var _payment = __webpack_require__(233);
	
	var _payment2 = _interopRequireDefault(_payment);
	
	var _delivery = __webpack_require__(238);
	
	var _delivery2 = _interopRequireDefault(_delivery);
	
	var _staff = __webpack_require__(243);
	
	var _staff2 = _interopRequireDefault(_staff);
	
	var _orderDetail = __webpack_require__(249);
	
	var _orderDetail2 = _interopRequireDefault(_orderDetail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pageModule = angular.module('app.pages', [_tabs2.default, _store2.default, _order2.default, _contact2.default, _more2.default, _products2.default, _valuepacks2.default, _promotions2.default, _newProduct2.default, _login2.default, _logout2.default, _selectShop2.default, _newShop2.default, _editProduct2.default, _newValuePack2.default, _editValuePack2.default, _newPromotion2.default, _editPromotion2.default, _register2.default, _myProfile2.default, _myShop2.default, _socialMedia2.default, _payment2.default, _delivery2.default, _staff2.default, _orderDetail2.default]).name;
	
	exports.default = pageModule;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tabs = __webpack_require__(124);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tabsModule = angular.module('tabs', ['ionic']).config(function ($stateProvider, $ionicConfigProvider) {
	  "ngInject";
	
	  $ionicConfigProvider.tabs.position('bottom');
	  $stateProvider.state('tabs', {
	    url: '/tabs',
	
	    views: {
	      root: {
	        template: _tabs2.default.template,
	        controller: _tabs2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    },
	    abstract: true,
	    resolve: {
	      getCurrentUser: ['Customer', function (Customer) {
	        return Customer.getCurrent().$promise;
	      }],
	      getCurrentShopId: ['Shop', 'localStorageService', '$q', function (Shop, localStorageService, $q) {
	        var deferred = $q.defer();
	        var shopId = localStorageService.get('shopId');
	        if (shopId) {
	          deferred.resolve(shopId);
	        } else {
	          deferred.reject("Shop not selected");
	        }
	        return deferred.promise;
	      }],
	      getCurrentShop: ['Shop', 'getCurrentShopId', '$q', function (Shop, getCurrentShopId, $q) {
	
	        return Shop.findById({ id: getCurrentShopId }).$promise;
	      }]
	    }
	
	  });
	}).directive('showRootTabs', function ($rootScope) {
	  return {
	    restrict: 'A',
	    link: function link($scope, $el) {
	
	      $scope.$on('$ionicView.beforeEnter', function () {
	        console.log("beforeenter");
	        $rootScope.showroottab = true;
	      });
	      $scope.$on('$ionicView.afterEnter', function () {
	        var removeListener = $scope.$on('$stateChangeSuccess', function () {
	          removeListener();
	          console.log("beforeleave");
	          $rootScope.showroottab = false;
	        });
	      });
	    }
	  };
	}).name;
	
	exports.default = tabsModule;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tabs = __webpack_require__(125);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _tabs3 = __webpack_require__(126);
	
	var _tabs4 = _interopRequireDefault(_tabs3);
	
	__webpack_require__(127);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tabsPage = {
	  template: _tabs2.default,
	  controller: _tabs4.default
	};
	
	exports.default = tabsPage;

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = "<ion-nav-bar class=\"bar-positive\">\n  <ion-nav-back-button ng-click=\"$ctrl.goBack()\"></ion-nav-back-button>\n</ion-nav-bar>\n<ion-tabs class=\"tabs-positive {{$root.showroottab?'':'tabs-item-hide'}}\">\n\n  <ion-tab title=\"Store\" href=\"{{$ctrl.getStateUrl('tabs.store.products')}}\">\n    <!-- Tab 1 content -->\n\n    <ion-nav-view name=\"tab-store-content\">\n\n    </ion-nav-view>\n\n  </ion-tab>\n\n  <ion-tab title=\"Order\" href=\"{{$ctrl.getStateUrl('tabs.order')}}\">\n    <!-- Tab 2 content -->\n\n    <ion-nav-view name=\"tab-order-content\">\n\n    </ion-nav-view>\n\n  </ion-tab>\n\n  <ion-tab title=\"Contact\" href=\"{{$ctrl.getStateUrl('tabs.contact')}}\">\n    <!-- Tab 3 content -->\n\n    <ion-nav-view name=\"tab-contact-content\">\n\n    </ion-nav-view>\n\n  </ion-tab>\n  <ion-tab title=\"More\" href=\"{{$ctrl.getStateUrl('tabs.more')}}\">\n    <!-- Tab 3 content -->\n\n    <ion-nav-view name=\"tab-more-content\">\n\n    </ion-nav-view>\n\n  </ion-tab>\n\n</ion-tabs>"

/***/ },
/* 126 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TabsController = function () {
	  function TabsController($state, $ionicHistory) {
	    _classCallCheck(this, TabsController);
	
	    this.name = 'tabs';
	    this._$state = $state;
	    this._$ionicHistory = $ionicHistory;
	  }
	
	  _createClass(TabsController, [{
	    key: 'getStateUrl',
	    value: function getStateUrl(stateName, params) {
	      return this._$state.href(stateName, params || {});
	    }
	  }, {
	    key: 'goBack',
	    value: function goBack() {
	      console.log('go back');
	      this._$ionicHistory.goBack(); //This doesn't work
	      //window.history.back();                          //This works
	      //alert('code to go back called. Did it work?');  //For testing
	    }
	  }]);
	
	  return TabsController;
	}();
	
	TabsController.$inject = ['$state', '$ionicHistory'];
	exports.default = TabsController;

/***/ },
/* 127 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _store = __webpack_require__(129);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var storeModule = angular.module('store', ['ionic']).config(function ($stateProvider) {
	    "ngInject";
	
	    $stateProvider.state('tabs.store', {
	        url: '/store',
	        views: {
	            "tab-store-content": {
	                template: _store2.default.template,
	                controller: _store2.default.controller,
	                controllerAs: '$ctrl'
	            }
	        },
	        abstract: true
	
	    });
	}).directive('showStoreTabs', function ($rootScope) {
	    return {
	        restrict: 'A',
	        link: function link($scope, $el) {
	
	            $scope.$on('$ionicView.beforeEnter', function () {
	                console.log("beforeenter");
	                $rootScope.showtabbar = true;
	            });
	            $scope.$on('$ionicView.afterEnter', function () {
	                var removeListener = $scope.$on('$stateChangeSuccess', function () {
	                    removeListener();
	                    console.log("beforeleave");
	                    $rootScope.showtabbar = false;
	                });
	            });
	        }
	    };
	}).name;
	
	exports.default = storeModule;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _store = __webpack_require__(130);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _store3 = __webpack_require__(131);
	
	var _store4 = _interopRequireDefault(_store3);
	
	__webpack_require__(132);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var storePage = {
	  template: _store2.default,
	  controller: _store4.default
	};
	
	exports.default = storePage;

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = "\n<ion-tabs class=\"tabs-stable tabs-top {{$root.showtabbar?'':'tabs-item-hide'}}\">\n\n  <ion-tab title=\"Products\" href=\"{{$ctrl.getStateUrl('tabs.store.products')}}\">\n    <!-- Tab 1 content -->\n\n    <ion-nav-view name=\"store-products-content\" >\n\n    </ion-nav-view>\n\n  </ion-tab>\n  <ion-tab title=\"Value packs\" href=\"{{$ctrl.getStateUrl('tabs.store.valuepacks')}}\">\n    <!-- Tab 3 content -->\n\n    <ion-nav-view name=\"store-valuepacks-content\">\n\n    </ion-nav-view>\n\n  </ion-tab>\n  <ion-tab title=\"Promotions\" href=\"{{$ctrl.getStateUrl('tabs.store.promotions')}}\">\n    <!-- Tab 2 content -->\n\n    <ion-nav-view name=\"store-promotions-content\">\n\n    </ion-nav-view>\n\n  </ion-tab>\n\n\n\n</ion-tabs>"

/***/ },
/* 131 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var StoreController = function () {
	  function StoreController($state) {
	    _classCallCheck(this, StoreController);
	
	    this.name = 'store';
	    this._$state = $state;
	  }
	
	  _createClass(StoreController, [{
	    key: 'getStateUrl',
	    value: function getStateUrl(stateName, params) {
	      return this._$state.href(stateName, params || {});
	    }
	  }]);
	
	  return StoreController;
	}();
	
	StoreController.$inject = ['$state'];
	exports.default = StoreController;

/***/ },
/* 132 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _order = __webpack_require__(134);
	
	var _order2 = _interopRequireDefault(_order);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var orderModule = angular.module('order', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.order', {
	    url: '/order',
	
	    views: {
	      "tab-order-content": {
	        template: _order2.default.template,
	        controller: _order2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	  });
	}).name;
	
	exports.default = orderModule;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _order = __webpack_require__(135);
	
	var _order2 = _interopRequireDefault(_order);
	
	var _order3 = __webpack_require__(136);
	
	var _order4 = _interopRequireDefault(_order3);
	
	__webpack_require__(137);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var orderPage = {
	  template: _order2.default,
	  controller: _order4.default
	};
	
	exports.default = orderPage;

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"Order\" show-root-tabs>\n  <div class=\"tabs tabs-top\" >\n    <a class=\"tab-item {{$ctrl.statusFilter=='pending'&&'active'}}\" ng-click=\"$ctrl.statusFilter='pending'\">\n      New order\n    </a>\n    <a class=\"tab-item {{$ctrl.statusFilter=='processing'&&'active'}}\" ng-click=\"$ctrl.statusFilter='processing'\">\n      On process\n    </a>\n    <a class=\"tab-item {{$ctrl.statusFilter=='delivering'&&'active'}}\" ng-click=\"$ctrl.statusFilter='delivering'\">\n      Delivering\n    </a>\n    <a class=\"tab-item {{$ctrl.statusFilter=='delivered'&&'active'}}\" ng-click=\"$ctrl.statusFilter='delivered'\">\n      Completed\n    </a>\n    <a class=\"tab-item {{$ctrl.statusFilter=='cancel'&&'active'}}\" ng-click=\"$ctrl.statusFilter='cancel'\">\n      Cancelled\n    </a>\n    <a class=\"tab-item {{$ctrl.statusFilter=='issued'&&'active'}}\" ng-click=\"$ctrl.statusFilter='issued'\">\n      Issued\n    </a>\n  </div>\n\n  <ion-content class=\"has-tabs-top\">\n    <ion-list>\n      <ion-item ng-repeat=\"order in filteredOrders = ($ctrl.orders | filter:{status:$ctrl.statusFilter})\" ui-sref=\"^.orderDetail({id:order.id})\">\n        <span class=\"h4\">\n          Order ID: {{order.id}}\n        </span>\n\n        <span style=\"float:right;\">\n          <span>{{order.status}}</span>\n        </span>\n        <div class=\"h4\">\n          Items\n        </div>\n        <div>\n                <span ng-repeat=\"item in order.orderItems\">\n                  {{$index!=0?\", \":\"\"}}\n                  <span ng-if=\"item.product\">\n                    {{item.product.name}}\n                  </span>\n                  <span ng-if=\"item.productValuePack\">\n                    {{item.productValuePack.name}} (Value pack)\n                  </span>\n                </span>\n        </div>\n        <div class=\"h4\">\n          Total price: {{(order.total_price - order.total_discount) | currency:order.shop.currency}}\n        </div>\n\n      </ion-item>\n      <ion-item ng-if=\"filteredOrders.length==0\">\n        You don't have any {{$ctrl.statusFilter?$ctrl.statusFilter+\" \":\"\"}}order\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 136 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var OrderController = function () {
	  function OrderController(Shop, getCurrentShopId) {
	    _classCallCheck(this, OrderController);
	
	    this.name = 'order';
	    this.shopId = getCurrentShopId;
	    this._Shop = Shop;
	    this.statusFilter = 'pending';
	    this.orders = [];
	    this.fetchOrders();
	  }
	
	  _createClass(OrderController, [{
	    key: 'fetchOrders',
	    value: function fetchOrders() {
	      var self = this;
	      this._Shop.orders({ id: this.shopId, filter: { include: ['shop', { orderItems: ['product', 'productValuePack'] }] } }).$promise.then(function (orders) {
	        self.orders = orders;
	        console.log(orders);
	      }, function (error) {
	        console.log("cannot get orders", error);
	      });
	    }
	  }]);
	
	  return OrderController;
	}();
	
	OrderController.$inject = ['Shop', 'getCurrentShopId'];
	exports.default = OrderController;

/***/ },
/* 137 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _contact = __webpack_require__(139);
	
	var _contact2 = _interopRequireDefault(_contact);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var contactModule = angular.module('contact', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.contact', {
	    url: '/contact',
	
	    views: {
	      "tab-contact-content": {
	        template: _contact2.default.template,
	        controller: _contact2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	  });
	}).name;
	
	exports.default = contactModule;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _contact = __webpack_require__(140);
	
	var _contact2 = _interopRequireDefault(_contact);
	
	var _contact3 = __webpack_require__(141);
	
	var _contact4 = _interopRequireDefault(_contact3);
	
	__webpack_require__(142);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var contactPage = {
	  template: _contact2.default,
	  controller: _contact4.default
	};
	
	exports.default = contactPage;

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"Contact\">\n  <ion-content>\n    contact\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 141 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ContactController = function ContactController() {
	  _classCallCheck(this, ContactController);
	
	  this.name = 'contact';
	};
	
	exports.default = ContactController;

/***/ },
/* 142 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _more = __webpack_require__(144);
	
	var _more2 = _interopRequireDefault(_more);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moreModule = angular.module('more', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.more', {
	    url: '/more',
	
	    views: {
	      "tab-more-content": {
	        template: _more2.default.template,
	        controller: _more2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	  });
	}).name;
	
	exports.default = moreModule;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _more = __webpack_require__(145);
	
	var _more2 = _interopRequireDefault(_more);
	
	var _more3 = __webpack_require__(146);
	
	var _more4 = _interopRequireDefault(_more3);
	
	__webpack_require__(147);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var morePage = {
	  template: _more2.default,
	  controller: _more4.default
	};
	
	exports.default = morePage;

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"More\" show-root-tabs>\n  <ion-content>\n    <shop-detail-header shop=\"$ctrl.shop\"></shop-detail-header>\n    <ion-list>\n      <ion-item ui-sref=\"^.myProfile\">\n        My profile\n      </ion-item>\n      <ion-item ui-sref=\"^.myShop\">\n        My shop\n      </ion-item>\n      <!--<ion-item ui-sref=\"^.socialMedia\">\n        Social media\n      </ion-item>-->\n      <ion-item ui-sref=\"^.payment\">\n        Payment\n      </ion-item>\n      <ion-item ui-sref=\"^.delivery\">\n        Delivery\n      </ion-item>\n      <ion-item ui-sref=\"^.staff\">\n        Staff\n      </ion-item>\n      <ion-item ui-sref=\"selectShop\">\n        Change shop\n      </ion-item>\n      <ion-item ui-sref=\"logout\">\n        Logout\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 146 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MoreController = function MoreController(getCurrentShop) {
	  _classCallCheck(this, MoreController);
	
	  this.name = 'more';
	  this.shop = getCurrentShop;
	};
	
	MoreController.$inject = ["getCurrentShop"];
	
	exports.default = MoreController;

/***/ },
/* 147 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _login = __webpack_require__(149);
	
	var _login2 = _interopRequireDefault(_login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var loginModule = angular.module('login', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('login', {
	    url: '/login',
	    views: {
	      root: {
	        template: _login2.default.template,
	        controller: _login2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	
	  });
	}).name;
	
	exports.default = loginModule;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _login = __webpack_require__(150);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _login3 = __webpack_require__(151);
	
	var _login4 = _interopRequireDefault(_login3);
	
	__webpack_require__(152);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var loginPage = {
	  template: _login2.default,
	  controller: _login4.default
	};
	
	exports.default = loginPage;

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "\n<ion-view view-title=\"Login\">\n  <ion-nav-bar class=\"bar-positive\"></ion-nav-bar>\n  <ion-content>\n    <form ng-submit=\"$ctrl.login()\">\n      <ion-list>\n        <ion-item class=\"item-input\">\n          <label class=\"input-label\">Email</label>\n          <input type=\"email\" ng-model=\"$ctrl.credential.email\">\n        </ion-item>\n        <ion-item class=\"item-input\">\n          <label class=\"input-label\">Password</label>\n          <input type=\"password\" ng-model=\"$ctrl.credential.password\">\n        </ion-item>\n        <div class=\"padding\">\n          <button type=\"submit\" class=\"button button-positive button-block\">Login</button>\n        </div>\n        <div class=\"padding text-center\">\n          <button class=\"button button-positive\" ui-sref=\"register\">Create your account</button>\n        </div>\n      </ion-list>\n    </form>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 151 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LoginController = function () {
	  function LoginController(Customer, $location) {
	    _classCallCheck(this, LoginController);
	
	    this.name = 'login';
	    this._Customer = Customer;
	    this.credential = {};
	    this._$location = $location;
	  }
	
	  _createClass(LoginController, [{
	    key: 'login',
	    value: function login() {
	      var self = this;
	      this._Customer.login(this.credential, function () {
	        var next = self._$location.nextAfterLogin || '/tabs/store/products';
	        self._$location.nextAfterLogin = null;
	        self._$location.path(next);
	      });
	    }
	  }]);
	
	  return LoginController;
	}();
	
	LoginController.$inject = ['Customer', '$location'];
	exports.default = LoginController;

/***/ },
/* 152 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _logout = __webpack_require__(154);
	
	var _logout2 = _interopRequireDefault(_logout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var logoutModule = angular.module('logout', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('logout', {
	    url: '/logout',
	    views: {
	      root: {
	        template: _logout2.default.template,
	        controller: _logout2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	
	  });
	}).name;
	
	exports.default = logoutModule;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _logout = __webpack_require__(155);
	
	var _logout2 = _interopRequireDefault(_logout);
	
	var _logout3 = __webpack_require__(156);
	
	var _logout4 = _interopRequireDefault(_logout3);
	
	__webpack_require__(157);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var logoutPage = {
	  template: _logout2.default,
	  controller: _logout4.default
	};
	
	exports.default = logoutPage;

/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"Logout\">\n  <ion-content>\n    logout\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 156 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LogoutController = function LogoutController(Customer, LoopBackAuth, $state, localStorageService) {
	  _classCallCheck(this, LogoutController);
	
	  this.name = 'logout';
	  localStorageService.clearAll();
	  if (!Customer.isAuthenticated()) {
	    $state.go('home');
	  } else {
	    Customer.logout(function () {
	      LoopBackAuth.clearUser();
	      LoopBackAuth.clearStorage();
	      console.log("Logged out");
	      $state.go('login');
	    }, function (response) {
	      console.log("Log out failed");
	      console.log(response);
	    });
	  }
	};
	
	LogoutController.$inject = ['Customer', 'LoopBackAuth', '$state', 'localStorageService'];
	
	exports.default = LogoutController;

/***/ },
/* 157 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _selectShop = __webpack_require__(159);
	
	var _selectShop2 = _interopRequireDefault(_selectShop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var selectShopModule = angular.module('selectShop', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('selectShop', {
	    url: '/selectShop',
	    views: {
	      root: {
	        template: _selectShop2.default.template,
	        controller: _selectShop2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    },
	    resolve: {
	      getCurrentUser: ['Customer', function (Customer) {
	        return Customer.findById({ id: Customer.getCurrentId(), filter: {
	            include: [{ shopStaffs: ['shop'] }]
	          } }).$promise;
	      }]
	    }
	
	  });
	}).name;
	
	exports.default = selectShopModule;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _selectShop = __webpack_require__(160);
	
	var _selectShop2 = _interopRequireDefault(_selectShop);
	
	var _selectShop3 = __webpack_require__(161);
	
	var _selectShop4 = _interopRequireDefault(_selectShop3);
	
	__webpack_require__(162);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var selectShopPage = {
	  template: _selectShop2.default,
	  controller: _selectShop4.default
	};
	
	exports.default = selectShopPage;

/***/ },
/* 160 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"SelectShop\" class=\"select-shop\">\n  <ion-content padding=\"true\">\n    <div class=\"row row-center\">\n      <div class=\"col col-center\">\n        <div class=\"profile-image\" style=\"background-image:url({{$ctrl.user.display_image}}),url(http://placehold.it/200x200);\"></div>\n      </div>\n    </div>\n    <div class=\"row row-center\">\n      <div class=\"col col-center\">\n        Welcome {{$ctrl.user.username || $ctrl.user.email}}\n      </div>\n    </div>\n    <div class=\"row row-center\" ng-show=\"$ctrl.shops.length>0\">\n      <div class=\"col col-center\">\n        Continue with\n      </div>\n    </div>\n    <div class=\"row row-center\" ng-show=\"$ctrl.shops.length>0\">\n      <div class=\"col col-center\">\n        <ion-list>\n          <ion-item ng-repeat=\"shop in $ctrl.shops | limitTo:3\" ng-click=\"$ctrl.selectShop(shop)\">\n            {{shop.name}}\n          </ion-item>\n          <ion-item ng-show=\"$ctrl.shops.length>3\">\n            More shops\n          </ion-item>\n        </ion-list>\n\n      </div>\n    </div>\n    <div class=\"row row-center\">\n      <div class=\"col col-center\">\n        <button class=\"button button-positive button-block\" ui-sref=\"newShop\">New shop</button>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 161 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SelectShopController = function () {
	  function SelectShopController(getCurrentUser, localStorageService, $state) {
	    _classCallCheck(this, SelectShopController);
	
	    this.name = 'selectShop';
	    this.user = getCurrentUser;
	    this.shops = this.user.shopStaffs.reduce(function (result, staff) {
	      result = result.concat(staff.shop);
	      return result;
	    }, []);
	    this._localStorageService = localStorageService;
	    this._$state = $state;
	  }
	
	  _createClass(SelectShopController, [{
	    key: 'selectShop',
	    value: function selectShop(shop) {
	      this._localStorageService.set("shopId", shop.id);
	      this._$state.go('tabs.store.products');
	    }
	  }]);
	
	  return SelectShopController;
	}();
	
	SelectShopController.$inject = ['getCurrentUser', 'localStorageService', '$state'];
	
	exports.default = SelectShopController;

/***/ },
/* 162 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _products = __webpack_require__(164);
	
	var _products2 = _interopRequireDefault(_products);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var productsModule = angular.module('products', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.store.products', {
	    url: '/products',
	    views: {
	      "store-products-content": {
	        template: _products2.default.template,
	        controller: _products2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	
	  });
	}).name;
	
	exports.default = productsModule;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _products = __webpack_require__(165);
	
	var _products2 = _interopRequireDefault(_products);
	
	var _products3 = __webpack_require__(166);
	
	var _products4 = _interopRequireDefault(_products3);
	
	__webpack_require__(167);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var productsPage = {
	  template: _products2.default,
	  controller: _products4.default
	};
	
	exports.default = productsPage;

/***/ },
/* 165 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"Products\" show-store-tabs show-root-tabs>\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button button-clear\" ng-click=\"$ctrl.newProduct()\"><i class=\"icon ion-android-add\"></i></button>\n  </ion-nav-buttons>\n  <ion-content scroll=\"false\">\n\n    <product-list shop-id=\"$ctrl.shopId\" on-item-click=\"$ctrl.editProduct(product)\"></product-list>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 166 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ProductsController = function () {
	  function ProductsController(getCurrentShopId, $state) {
	    _classCallCheck(this, ProductsController);
	
	    this.name = 'products';
	    this.shopId = getCurrentShopId;
	    this._$state = $state;
	  }
	
	  _createClass(ProductsController, [{
	    key: 'editProduct',
	    value: function editProduct(product) {
	      console.log(product);
	      this._$state.go('^.editProduct', { id: product.id });
	    }
	  }, {
	    key: 'newProduct',
	    value: function newProduct() {
	
	      this._$state.go('^.newProduct');
	    }
	  }]);
	
	  return ProductsController;
	}();
	
	ProductsController.$inject = ['getCurrentShopId', '$state'];
	exports.default = ProductsController;

/***/ },
/* 167 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _valuepacks = __webpack_require__(169);
	
	var _valuepacks2 = _interopRequireDefault(_valuepacks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var valuepacksModule = angular.module('valuepacks', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.store.valuepacks', {
	    url: '/valuepacks',
	
	    views: {
	      "store-valuepacks-content": {
	        template: _valuepacks2.default.template,
	        controller: _valuepacks2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	  });
	}).name;
	
	exports.default = valuepacksModule;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _valuepacks = __webpack_require__(170);
	
	var _valuepacks2 = _interopRequireDefault(_valuepacks);
	
	var _valuepacks3 = __webpack_require__(171);
	
	var _valuepacks4 = _interopRequireDefault(_valuepacks3);
	
	__webpack_require__(172);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var valuepacksPage = {
	  template: _valuepacks2.default,
	  controller: _valuepacks4.default
	};
	
	exports.default = valuepacksPage;

/***/ },
/* 170 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"Valuepacks\" show-store-tabs show-root-tabs>\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button button-clear\" ng-click=\"$ctrl.edit()\"><i class=\"icon ion-android-add\"></i></button>\n  </ion-nav-buttons>\n  <ion-content>\n    <ion-list>\n      <ion-item ng-repeat=\"valuePack in $ctrl.valuePacks\" on-hold=\"$ctrl.showActions(valuePack)\" ng-click=\"$ctrl.edit(valuePack)\">\n        <div class=\"h4\">{{valuePack.name}}</div>\n        <div>\n          <span ng-repeat=\"product in valuePack.products\">\n            {{$index!=0?\", \":\"\"}}{{product.name}}\n          </span>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 171 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ValuepacksController = function () {
	  function ValuepacksController(Shop, getCurrentShopId, $state, $ionicActionSheet) {
	    _classCallCheck(this, ValuepacksController);
	
	    this.name = 'valuepacks';
	    this._Shop = Shop;
	    this.shopId = getCurrentShopId;
	    this._$state = $state;
	    this._$ionicActionSheet = $ionicActionSheet;
	    this.fetchValuePacks();
	  }
	
	  _createClass(ValuepacksController, [{
	    key: "fetchValuePacks",
	    value: function fetchValuePacks() {
	      var self = this;
	      this._Shop.productValuePacks({ id: this.shopId, filter: { include: ["products"] } }).$promise.then(function (valuePacks) {
	        console.log("Get value pack", valuePacks);
	        self.valuePacks = valuePacks;
	      }, function (error) {
	        console.log("Error getting value pack", valuePacks);
	      });
	    }
	  }, {
	    key: "edit",
	    value: function edit(valuePack) {
	      if (valuePack) {
	        this._$state.go('^.editValuePack', { id: valuePack.id });
	      } else {
	        this._$state.go('^.newValuePack');
	      }
	    }
	  }, {
	    key: "showActions",
	    value: function showActions(valuePack) {
	      //show edit or delete
	      var self = this;
	      var hideSheet = self._$ionicActionSheet.show({
	        buttons: [],
	        destructiveText: 'Delete',
	        cancelText: 'Cancel',
	        cancel: function cancel() {
	          // add cancel code..
	        },
	        buttonClicked: function buttonClicked(index) {
	          if (index == 0) {
	            self.openEditModal(option);
	          }
	          return true;
	        },
	        destructiveButtonClicked: function destructiveButtonClicked() {
	          self._Shop.productValuePacks.destroyById({ id: self.shopId, fk: valuePack.id }).$promise.then(function (result) {
	            hideSheet();
	            console.log("value pack deleted", result);
	            self.fetchValuePacks();
	          }, function (error) {
	            console.log("value pack delete error", error);
	          });
	        }
	      });
	    }
	  }]);
	
	  return ValuepacksController;
	}();
	
	ValuepacksController.$inject = ["Shop", "getCurrentShopId", '$state', '$ionicActionSheet'];
	
	exports.default = ValuepacksController;

/***/ },
/* 172 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promotions = __webpack_require__(174);
	
	var _promotions2 = _interopRequireDefault(_promotions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var promotionsModule = angular.module('promotions', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.store.promotions', {
	    url: '/promotions',
	
	    views: {
	      "store-promotions-content": {
	        template: _promotions2.default.template,
	        controller: _promotions2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	  });
	}).name;
	
	exports.default = promotionsModule;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promotions = __webpack_require__(175);
	
	var _promotions2 = _interopRequireDefault(_promotions);
	
	var _promotions3 = __webpack_require__(176);
	
	var _promotions4 = _interopRequireDefault(_promotions3);
	
	__webpack_require__(177);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var promotionsPage = {
	  template: _promotions2.default,
	  controller: _promotions4.default
	};
	
	exports.default = promotionsPage;

/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"Promotions\" show-store-tabs show-root-tabs>\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button button-clear\" ng-click=\"$ctrl.edit()\"><i class=\"icon ion-android-add\"></i></button>\n  </ion-nav-buttons>\n  <ion-content>\n    <ion-list>\n      <ion-item ng-repeat=\"promotion in $ctrl.promotions\" ng-click=\"$ctrl.edit(promotion)\" on-hold=\"$ctrl.showActions(promotion)\">\n        <div class=\"h4\">{{promotion.name}}</div>\n        <div>{{promotion.discount_amount}}{{promotion.discount_percent?\"%\":$ctrl.shop.currency}} Off{{promotion.free_delivery?\", Free delivery\":\"\"}}</div>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-view>\n"

/***/ },
/* 176 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PromotionsController = function () {
	  function PromotionsController(Shop, getCurrentShopId, getCurrentShop, $state, $ionicActionSheet) {
	    _classCallCheck(this, PromotionsController);
	
	    this.name = 'promotions';
	    this._Shop = Shop;
	    this.shopId = getCurrentShopId;
	    this.shop = getCurrentShop;
	    this._$state = $state;
	    this._$ionicActionSheet = $ionicActionSheet;
	    this.fetchPromotions();
	  }
	
	  _createClass(PromotionsController, [{
	    key: "fetchPromotions",
	    value: function fetchPromotions() {
	      var self = this;
	      this._Shop.promotions({ id: this.shopId, filter: {
	          include: ["all", "products", "productValuePacks"]
	        } }).$promise.then(function (promotions) {
	        self.promotions = promotions;
	        console.log("Get promotion", promotions);
	      }, function (error) {
	        console.log("Get promotion error", error);
	      });
	    }
	  }, {
	    key: "edit",
	    value: function edit(promotion) {
	      if (promotion) {
	        this._$state.go('^.editPromotion', { id: promotion.id });
	      } else {
	        this._$state.go('^.newPromotion');
	      }
	    }
	  }, {
	    key: "showActions",
	    value: function showActions(promotion) {
	      //show edit or delete
	      var self = this;
	      var hideSheet = self._$ionicActionSheet.show({
	        buttons: [],
	        destructiveText: 'Delete',
	        cancelText: 'Cancel',
	        cancel: function cancel() {
	          // add cancel code..
	        },
	        buttonClicked: function buttonClicked(index) {
	          if (index == 0) {
	            self.openEditModal(option);
	          }
	          return true;
	        },
	        destructiveButtonClicked: function destructiveButtonClicked() {
	          self._Shop.promotions.destroyById({ id: self.shopId, fk: promotion.id }).$promise.then(function (result) {
	            hideSheet();
	            console.log("promotion deleted", result);
	            self.fetchPromotions();
	          }, function (error) {
	            console.log("promotion delete error", error);
	          });
	        }
	      });
	    }
	  }]);
	
	  return PromotionsController;
	}();
	
	PromotionsController.$inject = ['Shop', 'getCurrentShopId', 'getCurrentShop', '$state', '$ionicActionSheet'];
	exports.default = PromotionsController;

/***/ },
/* 177 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _newShop = __webpack_require__(179);
	
	var _newShop2 = _interopRequireDefault(_newShop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var newShopModule = angular.module('newShop', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('newShop', {
	    url: '/newShop',
	    views: {
	      root: {
	        template: _newShop2.default.template,
	        controller: _newShop2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	
	  });
	}).name;
	
	exports.default = newShopModule;

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _newShop = __webpack_require__(180);
	
	var _newShop2 = _interopRequireDefault(_newShop);
	
	var _newShop3 = __webpack_require__(181);
	
	var _newShop4 = _interopRequireDefault(_newShop3);
	
	__webpack_require__(182);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var newShopPage = {
	  template: _newShop2.default,
	  controller: _newShop4.default
	};
	
	exports.default = newShopPage;

/***/ },
/* 180 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"New Shop\">\n  <ion-nav-bar class=\"bar-positive\">\n    <ion-nav-back-button ng-click=\"$ctrl.goBack()\"></ion-nav-back-button>\n  </ion-nav-bar>\n  <ion-content scroll=\"false\">\n    <ion-slides ion-wizard slider=\"swiper\" options=\"swiperOptions\">\n      <ion-slide-page ion-wizard-step >\n        <ion-content>\n          <shop-form shop=\"$ctrl.shop\"></shop-form>\n        </ion-content>\n      </ion-slide-page>\n      <ion-slide-page ion-wizard-step>\n        <payment-form shop=\"$ctrl.shop\"></payment-form>\n      </ion-slide-page>\n      <ion-slide-page ion-wizard-step>\n        <delivery-form shop=\"$ctrl.shop\"></delivery-form>\n      </ion-slide-page>\n      <ion-slide-page ion-wizard-step>\n        <h1>Finish, let's start selling</h1>\n      </ion-slide-page>\n    </ion-slides>\n  </ion-content>\n  <ion-footer-bar class=\"bar-positive\">\n    <button class=\"button button-clear\" ion-wizard-previous >Back</button>\n    <h1 class=\"title\"></h1>\n    <button class=\"button button-clear pull-right\" ion-wizard-next >Next</button>\n    <button class=\"button button-clear pull-right\" ion-wizard-start=\"$ctrl.createShop($ctrl.shop)\">Create shop</button>\n  </ion-footer-bar>\n</ion-view>\n"

/***/ },
/* 181 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NewShopController = function () {
	  function NewShopController($ionicHistory, Shop, $state, localStorageService) {
	    _classCallCheck(this, NewShopController);
	
	    this.name = 'newShop';
	    this._$ionicHistory = $ionicHistory;
	    this._Shop = Shop;
	    this._$state = $state;
	    this._localStorageService = localStorageService;
	    this.shop = new Shop({
	      "name": "",
	      "description": "",
	      "contact_location": {
	        "geolocation": {
	          "lat": 0,
	          "lng": 0
	        },
	        "formatted_address": ""
	      },
	      "open_close": [{
	        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	        from: new Date(1970, 0, 1, 8, 0),
	        to: new Date(1970, 0, 1, 17, 0)
	      }],
	      "delivery_time": [{
	        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	        from: new Date(1970, 0, 1, 8, 0),
	        to: new Date(1970, 0, 1, 17, 0)
	      }],
	      "contact_number": "",
	      "website": "",
	      "currency": "USD",
	      "location": {
	        "geolocation": {
	          "lat": 0,
	          "lng": 0
	        },
	        "formatted_address": "",
	        "id": 0
	      },
	      "email": "",
	      "businessCategoryId": 0,
	      "delivery_methods": [{
	        "name": "Take away",
	        "active": true,
	        "conditions": [],
	        "enableCondition": false
	      }, {
	        "name": "Delivery",
	        "active": false,
	        "conditions": [{
	          "from": 0,
	          "to": 0,
	          "service_fee": 0,
	          "delivery_time": 30,
	          "min_purchase": 0,
	          delivery_time_unit: "Minutes"
	        }],
	        "enableCondition": true
	      }],
	      "payment_methods": [{
	        "name": "Pay on arrival",
	        "active": false
	      }, {
	        "name": "Pay on delivery",
	        "active": false
	      }]
	    });
	  }
	
	  _createClass(NewShopController, [{
	    key: "goBack",
	    value: function goBack() {
	      console.log('go back');
	      this._$ionicHistory.goBack(); //This doesn't work
	      //window.history.back();                          //This works
	      //alert('code to go back called. Did it work?');  //For testing
	    }
	  }, {
	    key: "createShop",
	    value: function createShop(s) {
	      var self = this;
	      var data = angular.copy(s);
	      this._Shop.create(data).$promise.then(function (shop) {
	        console.log("Shop created", shop);
	        self._localStorageService.set('shopId', shop.id);
	        self._$state.go('tabs.store.products');
	      }, function (error) {
	        console.log("Cannot create shop", error);
	      });
	    }
	  }]);
	
	  return NewShopController;
	}();
	
	NewShopController.$inject = ["$ionicHistory", 'Shop', '$state', 'localStorageService'];
	
	exports.default = NewShopController;

/***/ },
/* 182 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _newProduct = __webpack_require__(184);
	
	var _newProduct2 = _interopRequireDefault(_newProduct);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var newProductModule = angular.module('newProduct', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.store.newProduct', {
	    url: '/newProduct',
	    views: {
	      'store-products-content': {
	        template: _newProduct2.default.template,
	        controller: _newProduct2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	
	  });
	}).name;
	
	exports.default = newProductModule;

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _newProduct = __webpack_require__(185);
	
	var _newProduct2 = _interopRequireDefault(_newProduct);
	
	var _newProduct3 = __webpack_require__(186);
	
	var _newProduct4 = _interopRequireDefault(_newProduct3);
	
	__webpack_require__(187);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var newProductPage = {
	  template: _newProduct2.default,
	  controller: _newProduct4.default
	};
	
	exports.default = newProductPage;

/***/ },
/* 185 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"New Product\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button button-clear\" ng-click=\"$ctrl.save()\">Save</button>\n  </ion-nav-buttons>\n  <ion-content>\n    <form>\n      <product-form product=\"$ctrl.product\"></product-form>\n    </form>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 186 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NewProductController = function () {
	  function NewProductController(Shop, Product, getCurrentShopId, getCurrentShop) {
	    _classCallCheck(this, NewProductController);
	
	    this.name = 'newProduct';
	    this._Shop = Shop;
	    this.shopId = getCurrentShopId;
	    this.shop = getCurrentShop;
	    this.product = new Product({ shopId: this.shopId, shop: this.shop, name: "", enableVariants: false, enableOptions: false, description: "", productVariants: [{ SKU: "", name: "Default", price: 0, stock: 0 }], productOptions: [] });
	  }
	
	  _createClass(NewProductController, [{
	    key: "save",
	    value: function save() {
	      var self = this;
	      self._Shop.products.create({ id: self.shopId }, self.createPostData()).$promise.then(function (result) {
	        console.log("Product saved", result);
	      }, function (error) {
	        //TODO produt save error
	        console.log("Product save error", error);
	      });
	    }
	  }, {
	    key: "createPostData",
	    value: function createPostData() {
	      var self = this;
	      var data = angular.copy(self.product);
	      data.product_variants = self.product.productVariants;
	      data.product_options = self.product.productOptions.map(function (option) {
	        return option.id;
	      });
	      console.log(data);
	      return data;
	    }
	  }]);
	
	  return NewProductController;
	}();
	
	NewProductController.$inject = ['Shop', "Product", "getCurrentShopId", "getCurrentShop"];
	
	exports.default = NewProductController;

/***/ },
/* 187 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _editProduct = __webpack_require__(189);
	
	var _editProduct2 = _interopRequireDefault(_editProduct);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var editProductModule = angular.module('editProduct', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.store.editProduct', {
	    url: '/editProduct/:id',
	    views: {
	      "store-products-content": {
	        template: _editProduct2.default.template,
	        controller: _editProduct2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    },
	    resolve: {
	      getProduct: ['Shop', 'getCurrentShopId', '$stateParams', function (Shop, getCurrentShopId, $stateParams) {
	        console.log($stateParams);
	        return Shop.products({ id: getCurrentShopId, filter: {
	            include: ['productVariants', 'shop', 'productOptions'],
	            where: { id: $stateParams.id }
	          } }).$promise;
	      }]
	    }
	
	  });
	}).name;
	
	exports.default = editProductModule;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _editProduct = __webpack_require__(190);
	
	var _editProduct2 = _interopRequireDefault(_editProduct);
	
	var _editProduct3 = __webpack_require__(191);
	
	var _editProduct4 = _interopRequireDefault(_editProduct3);
	
	__webpack_require__(192);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var editProductPage = {
	  template: _editProduct2.default,
	  controller: _editProduct4.default
	};
	
	exports.default = editProductPage;

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"EditProduct\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button button-clear\" ng-click=\"$ctrl.save()\">Save</button>\n  </ion-nav-buttons>\n  <ion-content>\n    <form>\n      <product-form product=\"$ctrl.product\"></product-form>\n    </form>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 191 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EditProductController = function () {
	  function EditProductController(getProduct, Shop, getCurrentShopId) {
	    _classCallCheck(this, EditProductController);
	
	    this.name = 'editProduct';
	    console.log(getProduct);
	    this.product = getProduct[0];
	    this._Shop = Shop;
	    this.shopId = getCurrentShopId;
	  }
	
	  _createClass(EditProductController, [{
	    key: "save",
	    value: function save() {
	      var self = this;
	      self._Shop.products.updateById({ id: self.shopId, fk: self.product.id }, self.createPostData()).$promise.then(function (result) {
	        console.log("Product saved", result);
	      }, function (error) {
	        //TODO produt save error
	        console.log("Product save error", error);
	      });
	    }
	  }, {
	    key: "createPostData",
	    value: function createPostData() {
	      var self = this;
	      var data = angular.copy(self.product);
	      data.product_variants = self.product.productVariants;
	      data.product_options = self.product.productOptions.map(function (option) {
	        return option.id;
	      });
	      console.log(data);
	      return data;
	    }
	  }]);
	
	  return EditProductController;
	}();
	
	EditProductController.$inject = ['getProduct', 'Shop', 'getCurrentShopId'];
	exports.default = EditProductController;

/***/ },
/* 192 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _newValuePack = __webpack_require__(194);
	
	var _newValuePack2 = _interopRequireDefault(_newValuePack);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var newValuePackModule = angular.module('newValuePack', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.store.newValuePack', {
	    url: '/newValuePack',
	    views: {
	      "store-valuepacks-content": {
	        template: _newValuePack2.default.template,
	        controller: _newValuePack2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	
	  });
	}).name;
	
	exports.default = newValuePackModule;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _newValuePack = __webpack_require__(195);
	
	var _newValuePack2 = _interopRequireDefault(_newValuePack);
	
	var _newValuePack3 = __webpack_require__(196);
	
	var _newValuePack4 = _interopRequireDefault(_newValuePack3);
	
	__webpack_require__(197);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var newValuePackPage = {
	  template: _newValuePack2.default,
	  controller: _newValuePack4.default
	};
	
	exports.default = newValuePackPage;

/***/ },
/* 195 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"NewValuePack\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button button-clear\" ng-click=\"$ctrl.save()\">Save</button>\n  </ion-nav-buttons>\n  <ion-content>\n    <value-pack-form value-pack=\"$ctrl.valuePack\" shop-id=\"$ctrl.shopId\"></value-pack-form>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 196 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NewValuePackController = function () {
	  function NewValuePackController(ProductValuePack, Shop, getCurrentShopId) {
	    _classCallCheck(this, NewValuePackController);
	
	    this.name = 'newValuePack';
	    this.valuePack = new ProductValuePack({
	      "name": "",
	      "price": 0,
	      "products": [],
	      "shopId": getCurrentShopId
	    });
	    this.shopId = getCurrentShopId;
	    this._Shop = Shop;
	  }
	
	  _createClass(NewValuePackController, [{
	    key: "save",
	    value: function save() {
	      console.log(this.valuePack);
	      var data = this.createPostData();
	      this._Shop.productValuePacks.create({ id: this.shopId }, data).$promise.then(function (valuePack) {
	        console.log('Value pack saved', valuePack);
	      }, function (err) {
	        console.log("Error save value pack", err);
	      });
	    }
	  }, {
	    key: "createPostData",
	    value: function createPostData() {
	      var data = angular.copy(this.valuePack);
	      data.productIds = data.products.map(function (product) {
	        return product.id;
	      });
	      return data;
	    }
	  }]);
	
	  return NewValuePackController;
	}();
	
	NewValuePackController.$inject = ["ProductValuePack", "Shop", "getCurrentShopId"];
	
	exports.default = NewValuePackController;

/***/ },
/* 197 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _editValuePack = __webpack_require__(199);
	
	var _editValuePack2 = _interopRequireDefault(_editValuePack);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var editValuePackModule = angular.module('editValuePack', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.store.editValuePack', {
	    url: '/editValuePack/:id',
	    views: {
	      "store-valuepacks-content": {
	        template: _editValuePack2.default.template,
	        controller: _editValuePack2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    },
	    resolve: {
	      getValuePack: ['$stateParams', 'Shop', 'getCurrentShopId', function ($stateParams, Shop, getCurrentShopId) {
	        console.log($stateParams);
	        return Shop.productValuePacks({ id: getCurrentShopId, filter: {
	            include: ['products', 'shop'],
	            where: { id: $stateParams.id }
	          } }).$promise;
	      }]
	    }
	
	  });
	}).name;
	
	exports.default = editValuePackModule;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _editValuePack = __webpack_require__(200);
	
	var _editValuePack2 = _interopRequireDefault(_editValuePack);
	
	var _editValuePack3 = __webpack_require__(201);
	
	var _editValuePack4 = _interopRequireDefault(_editValuePack3);
	
	__webpack_require__(202);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var editValuePackPage = {
	  template: _editValuePack2.default,
	  controller: _editValuePack4.default
	};
	
	exports.default = editValuePackPage;

/***/ },
/* 200 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"EditValuePack\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button button-clear\" ng-click=\"$ctrl.save()\">Save</button>\n  </ion-nav-buttons>\n  <ion-content>\n    <value-pack-form value-pack=\"$ctrl.valuePack\" shop-id=\"$ctrl.shopId\"></value-pack-form>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 201 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EditValuePackController = function () {
	  function EditValuePackController(getValuePack, getCurrentShopId, Shop) {
	    _classCallCheck(this, EditValuePackController);
	
	    this.name = 'editValuePack';
	    this.valuePack = getValuePack[0];
	    this.shopId = getCurrentShopId;
	    console.log(getValuePack);
	    this._Shop = Shop;
	  }
	
	  _createClass(EditValuePackController, [{
	    key: 'save',
	    value: function save() {
	      console.log(this.valuePack);
	      var data = this.createPostData();
	      this._Shop.productValuePacks.updateById({ id: this.shopId, fk: data.id }, data).$promise.then(function (valuePack) {
	        console.log('Value pack saved', valuePack);
	      }, function (err) {
	        console.log("Error save value pack", err);
	      });
	    }
	  }, {
	    key: 'createPostData',
	    value: function createPostData() {
	      var data = angular.copy(this.valuePack);
	      data.productIds = data.products.map(function (product) {
	        return product.id;
	      });
	      return data;
	    }
	  }]);
	
	  return EditValuePackController;
	}();
	
	EditValuePackController.$inject = ['getValuePack', 'getCurrentShopId', 'Shop'];
	exports.default = EditValuePackController;

/***/ },
/* 202 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _newPromotion = __webpack_require__(204);
	
	var _newPromotion2 = _interopRequireDefault(_newPromotion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var newPromotionModule = angular.module('newPromotion', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.store.newPromotion', {
	    url: '/newPromotion',
	    views: {
	      "store-promotions-content": {
	        template: _newPromotion2.default.template,
	        controller: _newPromotion2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	
	  });
	}).name;
	
	exports.default = newPromotionModule;

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _newPromotion = __webpack_require__(205);
	
	var _newPromotion2 = _interopRequireDefault(_newPromotion);
	
	var _newPromotion3 = __webpack_require__(206);
	
	var _newPromotion4 = _interopRequireDefault(_newPromotion3);
	
	__webpack_require__(207);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var newPromotionPage = {
	  template: _newPromotion2.default,
	  controller: _newPromotion4.default
	};
	
	exports.default = newPromotionPage;

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"NewPromotion\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button button-clear\" ng-click=\"$ctrl.save()\">Save</button>\n  </ion-nav-buttons>\n  <ion-content>\n    <promotion-form promotion=\"$ctrl.promotion\"></promotion-form>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 206 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NewPromotionController = function () {
	  function NewPromotionController(Shop, getCurrentShopId, Promotion, getCurrentShop) {
	    _classCallCheck(this, NewPromotionController);
	
	    this.name = 'newPromotion';
	    this._Shop = Shop;
	    this.shopId = getCurrentShopId;
	    var startDate = new Date(Date.now());
	    var endDate = new Date(Date.now());
	    endDate.setMonth(endDate.getMonth() + 1);
	    this.promotion = new Promotion({ shopId: this.shopId, free_delivery: false, description: "", name: "", endDate: endDate, startDate: startDate, discount_amount: 0, discount_percent: true, products: [], productValuePacks: [] });
	  }
	
	  _createClass(NewPromotionController, [{
	    key: "save",
	    value: function save() {
	      var self = this;
	      self._Shop.promotions.create({ id: self.shopId }, self.createPostData()).$promise.then(function (result) {
	        console.log("promotion saved", result);
	      }, function (error) {
	        //TODO produt save error
	        console.log("promotion save error", error);
	      });
	    }
	  }, {
	    key: "createPostData",
	    value: function createPostData() {
	      var self = this;
	      var data = angular.copy(self.promotion);
	      data.productIds = self.promotion.products.map(function (product) {
	        return product.id;
	      });
	      data.productValuePackIds = self.promotion.productValuePacks.map(function (valuePack) {
	        return valuePack.id;
	      });
	      console.log(data);
	      return data;
	    }
	  }]);
	
	  return NewPromotionController;
	}();
	
	NewPromotionController.$inject = ["Shop", "getCurrentShopId", "Promotion"];
	
	exports.default = NewPromotionController;

/***/ },
/* 207 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _editPromotion = __webpack_require__(209);
	
	var _editPromotion2 = _interopRequireDefault(_editPromotion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var editPromotionModule = angular.module('editPromotion', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.store.editPromotion', {
	    url: '/editPromotion/:id',
	    views: {
	      "store-promotions-content": {
	        template: _editPromotion2.default.template,
	        controller: _editPromotion2.default.controller,
	        controllerAs: '$ctrl'
	
	      }
	    },
	    resolve: {
	      getPromotions: ['Shop', 'getCurrentShopId', '$stateParams', function (Shop, getCurrentShopId, $stateParams) {
	        console.log($stateParams);
	        return Shop.promotions({ id: getCurrentShopId, filter: {
	            include: ['all', 'products', 'productValuePacks'],
	            where: { id: $stateParams.id }
	          } }).$promise;
	      }]
	    }
	
	  });
	}).name;
	
	exports.default = editPromotionModule;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _editPromotion = __webpack_require__(210);
	
	var _editPromotion2 = _interopRequireDefault(_editPromotion);
	
	var _editPromotion3 = __webpack_require__(211);
	
	var _editPromotion4 = _interopRequireDefault(_editPromotion3);
	
	__webpack_require__(212);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var editPromotionPage = {
	  template: _editPromotion2.default,
	  controller: _editPromotion4.default
	};
	
	exports.default = editPromotionPage;

/***/ },
/* 210 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"EditPromotion\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button button-clear\" ng-click=\"$ctrl.save()\">Save</button>\n  </ion-nav-buttons>\n  <ion-content>\n    <promotion-form promotion=\"$ctrl.promotion\"></promotion-form>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 211 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EditPromotionController = function () {
	  function EditPromotionController(getPromotions, getCurrentShopId, Shop) {
	    _classCallCheck(this, EditPromotionController);
	
	    this.name = 'editPromotion';
	    this.promotion = getPromotions[0];
	    this.shopId = getCurrentShopId;
	    this._Shop = Shop;
	  }
	
	  _createClass(EditPromotionController, [{
	    key: "save",
	    value: function save() {
	      var self = this;
	      var data = self.createPostData();
	      self._Shop.promotions.updateById({ id: self.shopId, fk: data.id }, data).$promise.then(function (result) {
	        console.log("Product saved", result);
	      }, function (error) {
	        //TODO produt save error
	        console.log("Product save error", error);
	      });
	    }
	  }, {
	    key: "createPostData",
	    value: function createPostData() {
	      var self = this;
	      var data = angular.copy(self.promotion);
	      data.productIds = self.promotion.products.map(function (product) {
	        return product.id;
	      });
	      data.productValuePackIds = self.promotion.productValuePacks.map(function (valuePack) {
	        return valuePack.id;
	      });
	      console.log(data);
	      return data;
	    }
	  }]);
	
	  return EditPromotionController;
	}();
	
	EditPromotionController.$inject = ["getPromotions", 'getCurrentShopId', "Shop"];
	exports.default = EditPromotionController;

/***/ },
/* 212 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _register = __webpack_require__(214);
	
	var _register2 = _interopRequireDefault(_register);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var registerModule = angular.module('register', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('register', {
	    url: '/register',
	    views: {
	      root: {
	        template: _register2.default.template,
	        controller: _register2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	
	  });
	}).name;
	
	exports.default = registerModule;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _register = __webpack_require__(215);
	
	var _register2 = _interopRequireDefault(_register);
	
	var _register3 = __webpack_require__(216);
	
	var _register4 = _interopRequireDefault(_register3);
	
	__webpack_require__(217);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var registerPage = {
	  template: _register2.default,
	  controller: _register4.default
	};
	
	exports.default = registerPage;

/***/ },
/* 215 */
/***/ function(module, exports) {

	module.exports = "\n<ion-view view-title=\"Register\">\n  <ion-nav-bar class=\"bar-positive\">\n    <ion-nav-back-button ng-click=\"$ctrl.goBack()\"></ion-nav-back-button>\n  </ion-nav-bar>\n  <ion-content>\n    <form ng-submit=\"$ctrl.register()\">\n      <ion-list>\n        <ion-item class=\"item-input\">\n          <label class=\"input-label\">Email</label>\n          <input type=\"email\" ng-model=\"$ctrl.credential.email\">\n        </ion-item>\n        <ion-item class=\"item-input\">\n          <label class=\"input-label\">Password</label>\n          <input type=\"password\" ng-model=\"$ctrl.credential.password\">\n        </ion-item>\n        <ion-item class=\"item-input\">\n          <label class=\"input-label\">Confirm password</label>\n          <input type=\"password\" ng-model=\"$ctrl.credential.confirmPassword\">\n        </ion-item>\n        <div class=\"padding\">\n          <button type=\"submit\" class=\"button button-positive button-block\" ng-disabled=\"($ctrl.credential.password!=$ctrl.credential.confirmPassword) || $ctrl.credential.password.length < 6\">Register</button>\n        </div>\n      </ion-list>\n    </form>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 216 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RegisterController = function () {
	  function RegisterController(Customer, $state, $ionicHistory) {
	    _classCallCheck(this, RegisterController);
	
	    this.name = 'register';
	    this.credential = {
	      email: "",
	      password: "",
	      confirmPassword: ""
	    };
	    this._Customer = Customer;
	    this._$state = $state;
	    this._$ionicHistory = $ionicHistory;
	  }
	
	  _createClass(RegisterController, [{
	    key: "register",
	    value: function register() {
	      var data = angular.copy(this.credential);
	      var self = this;
	      this._Customer.create(data).$promise.then(function (user) {
	        console.log("Register success", user);
	        self._$state.go('login');
	      }, function (error) {
	        console.log("REgister error", error);
	      });
	    }
	  }, {
	    key: "goBack",
	    value: function goBack() {
	      console.log('go back');
	      this._$ionicHistory.goBack(); //This doesn't work
	      //window.history.back();                          //This works
	      //alert('code to go back called. Did it work?');  //For testing
	    }
	  }]);
	
	  return RegisterController;
	}();
	
	RegisterController.$inject = ['Customer', '$state', '$ionicHistory'];
	exports.default = RegisterController;

/***/ },
/* 217 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _myProfile = __webpack_require__(219);
	
	var _myProfile2 = _interopRequireDefault(_myProfile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var myProfileModule = angular.module('myProfile', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.myProfile', {
	    url: '/myProfile',
	    views: {
	
	      "tab-more-content": {
	        template: _myProfile2.default.template,
	        controller: _myProfile2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	
	  });
	}).name;
	
	exports.default = myProfileModule;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _myProfile = __webpack_require__(220);
	
	var _myProfile2 = _interopRequireDefault(_myProfile);
	
	var _myProfile3 = __webpack_require__(221);
	
	var _myProfile4 = _interopRequireDefault(_myProfile3);
	
	__webpack_require__(222);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var myProfilePage = {
	  template: _myProfile2.default,
	  controller: _myProfile4.default
	};
	
	exports.default = myProfilePage;

/***/ },
/* 220 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"MyProfile\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button button-clear\" ng-click=\"$ctrl.save()\">Save</button>\n  </ion-nav-buttons>\n  <ion-content>\n    <my-profile-form profile=\"$ctrl.user\"></my-profile-form>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 221 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MyProfileController = function () {
	  function MyProfileController(getCurrentUser, Customer) {
	    _classCallCheck(this, MyProfileController);
	
	    this.name = 'myProfile';
	    this.user = getCurrentUser;
	    this._Customer = Customer;
	  }
	
	  _createClass(MyProfileController, [{
	    key: "save",
	    value: function save() {
	      //this._$rootScope.$broadcast('loading:show');
	      var data = angular.copy(this.user);
	      this._Customer.updateAttributes({ id: this.user.id }, data).$promise.then(function (result) {
	        console.log("Save profile success", result);
	      }, function (error) {
	        console.log("Save profile error", error);
	      }).finally(function () {
	        //this._$rootScope.$broadcast('loading:hide');
	      });
	    }
	  }]);
	
	  return MyProfileController;
	}();
	
	MyProfileController.$inject = ['getCurrentUser', 'Customer'];
	exports.default = MyProfileController;

/***/ },
/* 222 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _myShop = __webpack_require__(224);
	
	var _myShop2 = _interopRequireDefault(_myShop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var myShopModule = angular.module('myShop', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.myShop', {
	    url: '/myShop',
	    views: {
	
	      "tab-more-content": {
	        template: _myShop2.default.template,
	        controller: _myShop2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	
	  });
	}).name;
	
	exports.default = myShopModule;

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _myShop = __webpack_require__(225);
	
	var _myShop2 = _interopRequireDefault(_myShop);
	
	var _myShop3 = __webpack_require__(226);
	
	var _myShop4 = _interopRequireDefault(_myShop3);
	
	__webpack_require__(227);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var myShopPage = {
	  template: _myShop2.default,
	  controller: _myShop4.default
	};
	
	exports.default = myShopPage;

/***/ },
/* 225 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"MyShop\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button button-clear\" ng-click=\"$ctrl.save()\">Save</button>\n  </ion-nav-buttons>\n  <ion-content>\n    <shop-form shop=\"$ctrl.shop\"></shop-form>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 226 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MyShopController = function () {
	  function MyShopController(getCurrentShop, Shop) {
	    _classCallCheck(this, MyShopController);
	
	    this.name = 'myShop';
	    this.shop = getCurrentShop;
	    this._Shop = Shop;
	  }
	
	  _createClass(MyShopController, [{
	    key: "save",
	    value: function save() {
	      var self = this;
	      var data = angular.copy(this.shop);
	      this._Shop.updateAttributes({ id: self.shop.id }, data).$promise.then(function (shop) {
	        console.log("Shop saved", shop);
	      }, function (error) {
	        console.log("Cannot create shop", error);
	      });
	    }
	  }]);
	
	  return MyShopController;
	}();
	
	MyShopController.$inject = ['getCurrentShop', 'Shop'];
	
	exports.default = MyShopController;

/***/ },
/* 227 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _socialMedia = __webpack_require__(229);
	
	var _socialMedia2 = _interopRequireDefault(_socialMedia);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var socialMediaModule = angular.module('socialMedia', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.socialMedia', {
	    url: '/socialMedia',
	    views: {
	
	      "tab-more-content": {
	        template: _socialMedia2.default.template,
	        controller: _socialMedia2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	
	  });
	}).name;
	
	exports.default = socialMediaModule;

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _socialMedia = __webpack_require__(230);
	
	var _socialMedia2 = _interopRequireDefault(_socialMedia);
	
	var _socialMedia3 = __webpack_require__(231);
	
	var _socialMedia4 = _interopRequireDefault(_socialMedia3);
	
	__webpack_require__(232);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var socialMediaPage = {
	  template: _socialMedia2.default,
	  controller: _socialMedia4.default
	};
	
	exports.default = socialMediaPage;

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"SocialMedia\">\n  <ion-content>\n    socialMedia\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 231 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SocialMediaController = function SocialMediaController() {
	  _classCallCheck(this, SocialMediaController);
	
	  this.name = 'socialMedia';
	};
	
	exports.default = SocialMediaController;

/***/ },
/* 232 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _payment = __webpack_require__(234);
	
	var _payment2 = _interopRequireDefault(_payment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var paymentModule = angular.module('payment', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.payment', {
	    url: '/payment',
	    views: {
	
	      "tab-more-content": {
	        template: _payment2.default.template,
	        controller: _payment2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	
	  });
	}).name;
	
	exports.default = paymentModule;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _payment = __webpack_require__(235);
	
	var _payment2 = _interopRequireDefault(_payment);
	
	var _payment3 = __webpack_require__(236);
	
	var _payment4 = _interopRequireDefault(_payment3);
	
	__webpack_require__(237);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var paymentPage = {
	  template: _payment2.default,
	  controller: _payment4.default
	};
	
	exports.default = paymentPage;

/***/ },
/* 235 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"Payment\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button button-clear\" ng-click=\"$ctrl.save()\">Save</button>\n  </ion-nav-buttons>\n  <ion-content>\n    <payment-form shop=\"$ctrl.shop\"></payment-form>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 236 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PaymentController = function () {
	  function PaymentController(getCurrentShop, Shop) {
	    _classCallCheck(this, PaymentController);
	
	    this.name = 'payment';
	    this.shop = getCurrentShop;
	    this._Shop = Shop;
	  }
	
	  _createClass(PaymentController, [{
	    key: "save",
	    value: function save() {
	      var self = this;
	      var data = angular.copy(this.shop);
	      this._Shop.updateAttributes({ id: self.shop.id }, data).$promise.then(function (shop) {
	        console.log("Shop saved", shop);
	      }, function (error) {
	        console.log("Cannot save shop", error);
	      });
	    }
	  }]);
	
	  return PaymentController;
	}();
	
	PaymentController.$inject = ['getCurrentShop', 'Shop'];
	
	exports.default = PaymentController;

/***/ },
/* 237 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _delivery = __webpack_require__(239);
	
	var _delivery2 = _interopRequireDefault(_delivery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var deliveryModule = angular.module('delivery', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.delivery', {
	    url: '/delivery',
	    views: {
	
	      "tab-more-content": {
	        template: _delivery2.default.template,
	        controller: _delivery2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	
	  });
	}).name;
	
	exports.default = deliveryModule;

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _delivery = __webpack_require__(240);
	
	var _delivery2 = _interopRequireDefault(_delivery);
	
	var _delivery3 = __webpack_require__(241);
	
	var _delivery4 = _interopRequireDefault(_delivery3);
	
	__webpack_require__(242);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var deliveryPage = {
	  template: _delivery2.default,
	  controller: _delivery4.default
	};
	
	exports.default = deliveryPage;

/***/ },
/* 240 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"Delivery\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button button-clear\" ng-click=\"$ctrl.save()\">Save</button>\n  </ion-nav-buttons>\n  <ion-content>\n    <delivery-form shop=\"$ctrl.shop\"></delivery-form>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 241 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DeliveryController = function () {
	  function DeliveryController(getCurrentShop, Shop) {
	    _classCallCheck(this, DeliveryController);
	
	    this.name = 'delivery';
	    this.shop = getCurrentShop;
	    this._Shop = Shop;
	  }
	
	  _createClass(DeliveryController, [{
	    key: "save",
	    value: function save() {
	      var self = this;
	      var data = angular.copy(this.shop);
	      this._Shop.updateAttributes({ id: self.shop.id }, data).$promise.then(function (shop) {
	        console.log("Shop saved", shop);
	      }, function (error) {
	        console.log("Cannot save shop", error);
	      });
	    }
	  }]);
	
	  return DeliveryController;
	}();
	
	DeliveryController.$inject = ['getCurrentShop', 'Shop'];
	
	exports.default = DeliveryController;

/***/ },
/* 242 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _staff = __webpack_require__(244);
	
	var _staff2 = _interopRequireDefault(_staff);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var staffModule = angular.module('staff', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.staff', {
	    url: '/staff',
	    views: {
	
	      "tab-more-content": {
	        template: _staff2.default.template,
	        controller: _staff2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	
	  });
	}).name;
	
	exports.default = staffModule;

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _staff = __webpack_require__(245);
	
	var _staff2 = _interopRequireDefault(_staff);
	
	var _staff3 = __webpack_require__(246);
	
	var _staff4 = _interopRequireDefault(_staff3);
	
	__webpack_require__(248);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var staffPage = {
	  template: _staff2.default,
	  controller: _staff4.default
	};
	
	exports.default = staffPage;

/***/ },
/* 245 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"Staff\">\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button button-clear\" ng-click=\"$ctrl.addStaff()\"><i class=\"icon ion-android-add\"></i></button>\n  </ion-nav-buttons>\n  <ion-content>\n    <ion-list>\n      <!--<ion-item class=\"item-input-inset\">\n        <label class=\"item-input-wrapper\">\n          <i class=\"icon ion-search\"></i> <input type=\"text\" ng-model=\"$ctrl.query\">\n        </label>\n      </ion-item>-->\n      <ion-item ng-repeat=\"staff in $ctrl.staffs\">\n        <span ng-if=\"staff.firstname && staff.lastname\">\n          {{staff.firstname}} {{staff.lastname}}\n        </span>\n        <span ng-if=\"!(staff.firstname && staff.lastname)\">\n          {{staff.email}}\n        </span>\n        <span>({{staff.shopStaffs[0].shopRole.name}})</span>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _addStaffModal = __webpack_require__(247);
	
	var _addStaffModal2 = _interopRequireDefault(_addStaffModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var StaffController = function () {
	  function StaffController(Shop, getCurrentShopId, $ionicModal, $scope, Customer, ShopRole) {
	    var _this = this;
	
	    _classCallCheck(this, StaffController);
	
	    this.name = 'staff';
	    this.shopId = getCurrentShopId;
	    this._Shop = Shop;
	    this.query = "";
	    this._Customer = Customer;
	    this.modal = $ionicModal.fromTemplate(_addStaffModal2.default, {
	      scope: $scope
	    });
	    ShopRole.find().$promise.then(function (roles) {
	      _this.roles = roles;
	    }, function () {});
	    this.fetchStaffs();
	  }
	
	  _createClass(StaffController, [{
	    key: 'fetchStaffs',
	    value: function fetchStaffs() {
	      var _this2 = this;
	
	      var self = this;
	      this._Shop.staffs({ id: this.shopId, filter: {
	          include: {
	            relation: "shopStaffs",
	            scope: {
	              where: { shopId: self.shopId }
	            }
	          }
	        } }).$promise.then(function (staffs) {
	        _this2.staffs = staffs;
	        console.log(staffs);
	      }, function (error) {
	        console.log("Error getting staff", error);
	      });
	    }
	  }, {
	    key: 'addStaff',
	    value: function addStaff() {
	      this.modal.scope.email = "";
	      this.roleId = 0;
	      this.modal.scope.searchResult = undefined;
	      this.modal.show();
	    }
	  }, {
	    key: 'searchCustomer',
	    value: function searchCustomer(email) {
	      var self = this;
	      this._Customer.findByEmail({ email: email }).$promise.then(function (result) {
	        console.log(result);
	        if (result.id) {
	          self.modal.scope.searchResult = result;
	        } else {
	          self.modal.scope.searchResult = undefined;
	        }
	      }, function (error) {
	        console.log("Search by email error", error);
	      });
	    }
	  }, {
	    key: 'addToShopStaff',
	    value: function addToShopStaff(roleId, userId) {
	      this._Shop.shopStaffs.create({ id: this.shopId }, { shopRoleId: roleId, customerId: userId }).$promise.then(function (shopstaff) {
	        console.log("Add staff to role", shopstaff);
	      }, function (error) {
	        console.log("Add staff to role error", error);
	      });
	    }
	  }]);
	
	  return StaffController;
	}();
	
	StaffController.$inject = ['Shop', 'getCurrentShopId', '$ionicModal', '$scope', 'Customer', 'ShopRole'];
	
	exports.default = StaffController;

/***/ },
/* 247 */
/***/ function(module, exports) {

	module.exports = "<ion-modal-view class=\"staff-modal\">\n    <ion-header-bar class=\"bar-positive\">\n        <button class=\"button button-clear\" ng-click=\"$ctrl.modal.hide()\">Cancel</button>\n        <h1 class=\"title\">Add staff</h1>\n    </ion-header-bar>\n    <ion-content>\n        <div class=\"list\">\n            <div class=\"item item-input-inset\">\n                <label class=\"item-input-wrapper\">\n                    <input type=\"text\" placeholder=\"Search email\" ng-model=\"email\">\n                </label>\n                <button class=\"button button-small\" ng-click=\"$ctrl.searchCustomer(email)\">\n                    Search\n                </button>\n            </div>\n        </div>\n        <div class=\"text-center\" ng-if=\"searchResult\">\n            <div class=\"profile-image\" style=\"background-image:url({{searchResult.image}}),url(http://placehold.it/200x200)\"></div>\n            <div ng-if=\"searchResult.firstname && searchResult.lastname\">{{searchResult.firstname}} {{searchResult.lastname}}</div>\n            <div ng-if=\"!(searchResult.firstname && searchResult.lastname)\">{{searchResult.email}}</div>\n            <div class=\"row\">\n                <div class=\"col col-50 col-offset-25\">\n                    <ion-list>\n                        <ion-item class=\"input-item item-select\">\n                            <select style=\"max-width:100%;\" ng-model=\"$ctrl.roleId\" >\n                                <option value=\"\" disabled selected hidden>Assign staff role</option>\n                                <option value={{role.id}} ng-repeat=\"role in $ctrl.roles\">{{role.name}}</option>\n                            </select>\n                        </ion-item>\n                    </ion-list>\n\n                    <div class=\"padding\">\n                        <button class=\"button button-positive\" ng-disabled ng-click=\"$ctrl.addToShopStaff($ctrl.roleId,searchResult.id)\">Done</button>\n                    </div>\n                </span>\n\n            </div>\n        </div>\n    </ion-content>\n</ion-modal-view>"

/***/ },
/* 248 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _orderDetail = __webpack_require__(250);
	
	var _orderDetail2 = _interopRequireDefault(_orderDetail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var orderDetailModule = angular.module('orderDetail', ['ionic']).config(function ($stateProvider) {
	  "ngInject";
	
	  $stateProvider.state('tabs.orderDetail', {
	    url: '/orderDetail/:id',
	    views: {
	      "tab-order-content": {
	        template: _orderDetail2.default.template,
	        controller: _orderDetail2.default.controller,
	        controllerAs: '$ctrl'
	      }
	    }
	
	  });
	}).name;
	
	exports.default = orderDetailModule;

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _orderDetail = __webpack_require__(251);
	
	var _orderDetail2 = _interopRequireDefault(_orderDetail);
	
	var _orderDetail3 = __webpack_require__(252);
	
	var _orderDetail4 = _interopRequireDefault(_orderDetail3);
	
	__webpack_require__(253);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var orderDetailPage = {
	  template: _orderDetail2.default,
	  controller: _orderDetail4.default
	};
	
	exports.default = orderDetailPage;

/***/ },
/* 251 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"OrderDetail\">\n  <ion-content>\n    <div class=\"row\" ng-if=\"$ctrl.order.status=='pending'\">\n      <div class=\"col\">\n        <button class=\"button button-calm button-block\" ng-click=\"$ctrl.updateOrderStatus($ctrl.order,'processing')\">Accept</button>\n      </div>\n      <div class=\"col\">\n        <button class=\"button button-assertive button-block\" ng-click=\"$ctrl.updateOrderStatus($ctrl.order,'cancel')\">Decline</button>\n      </div>\n    </div>\n    <div class=\"row\" ng-if=\"$ctrl.order.status!='pending'\">\n      <div class=\"col-50 col-offset-50\">\n        <ion-list>\n          <ion-item class=\"item-input item-select\">\n            <label class=\"input-label\">Status</label>\n            <select ng-model=\"$ctrl.order.status\" ng-change=\"$ctrl.updateOrderStatus($ctrl.order,$ctrl.order.status)\">\n              <option value=\"{{option}}\" ng-repeat=\"option in ['processing','delivering','delivered','issued','cancel']\">{{option}}</option>\n            </select>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n    <ion-list>\n      <ion-item>\n        <ion-list>\n          <ion-item class=\"item-divider\">\n            <div class=\"row\">\n              <div class=\"col\" style=\"width:50%;\">\n                <div>Delivery</div>\n              </div>\n              <div class=\"col\" style=\"width:50%;\">\n                <div>Payment</div>\n              </div>\n            </div>\n          </ion-item>\n          <ion-item class=\"item-text-wrap\">\n            <div class=\"row\">\n              <div class=\"col\" style=\"width:50%;\">\n                <div>{{$ctrl.order.delivery_address.formatted_address}}</div>\n              </div>\n              <div class=\"col\" style=\"width:50%;\">\n              </div>\n            </div>\n          </ion-item>\n        </ion-list>\n\n      </ion-item>\n      <ion-item ng-repeat=\"item in $ctrl.order.orderItems\">\n\n        <!--orderitem (product)-->\n        <div ng-if=\"item.product\">\n          <div>\n            {{item.product.name}} ({{item.productVariant.name}})\n            <span style=\"float:right;\"> {{item.productVariant.price | currency:$ctrl.currency}}</span>\n          </div>\n          <div class=\"padding-top\">\n            <h3 ng-if=\"item.productOptionValues.length\">Options</h3>\n            <div class=\"padding-left\" ng-repeat=\"option in item.productOptionValues\">\n              {{option.productOption.name}} ({{option.value}})\n              <span style=\"float:right;\">+ {{option.price | currency:$ctrl.currency}}</span>\n            </div>\n          </div>\n          <div class=\"padding-top\">\n            <h3>Promotions</h3>\n            <div class=\"padding-left\" ng-repeat=\"promotion in item.product.promotions\">\n              {{promotion.name}} ({{promotion.discount_amount}}{{promotion.discount_percent?\"%\":\"\"}} Off)\n            </div>\n          </div>\n        </div>\n        <!--orderitem (value pack)-->\n        <div ng-if=\"item.productValuePack\">\n          <div>\n            {{item.productValuePack.name}} (Value pack)\n            <span style=\"float:right;\"> {{item.productValuePack.price | currency:$ctrl.currency}}</span>\n          </div>\n          <div class=\"padding-top\">\n            <h3>Items</h3>\n            <div class=\"padding-left\" ng-repeat=\"subitem in item.orderItems\">\n              <div class=\"padding-top\">\n                {{subitem.product.name}} ({{subitem.productVariant.name}})\n                <span style=\"float:right;\">+ {{subitem.productVariant.price - subitem.unitDiscount | currency:$ctrl.currency}}</span>\n              </div>\n              <div class=\"padding-left padding-top\">\n                <h3 ng-if=\"subitem.productOptionValues.length\">Options</h3>\n                <div class=\"padding-left\" ng-repeat=\"option in subitem.productOptionValues\">\n                  {{option.productOption.name}} ({{option.value}})\n                  <span style=\"float:right;\">+ {{option.price | currency:$ctrl.currency}}</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"padding-top\">\n            <h3>Promotions</h3>\n            <div class=\"padding-left\" ng-repeat=\"promotion in item.productValuePack.promotions\">\n              {{promotion.name}} ({{promotion.discount_amount}}{{promotion.discount_percent?\"%\":\"\"}} Off)\n            </div>\n          </div>\n        </div>\n\n\n\n        <div>\n          <div class=\"padding-top\">\n            Unit price\n                  <span style=\"float:right\">\n                    {{item.unitPrice | currency:$ctrl.currency}}\n                  </span>\n          </div>\n\n          <div >\n            Unit discount\n                  <span style=\"float:right\">\n                    - {{item.unitDiscount | currency:$ctrl.currency}}\n                  </span>\n          </div>\n          <div>\n            Quantity\n                  <span style=\"float:right\">\n                    {{item.quantity}}\n                  </span>\n          </div>\n          <div>\n            Total\n                  <span style=\"float:right;font-weight: bolder\">\n                    {{(item.unitPrice - item.unitDiscount) * item.quantity | currency:$ctrl.currency}}\n                  </span>\n          </div>\n        </div>\n\n      </ion-item>\n      <ion-item>\n        <span class=\"h5\">Total price</span>\n            <span style=\"float:right\">\n              {{($ctrl.order.total_price- $ctrl.order.total_discount) | currency:$ctrl.currency}}\n            </span>\n      </ion-item>\n      <ion-item>\n        <span class=\"h5\">Order status</span>\n            <span style=\"float:right\">\n              {{$ctrl.order.status }}\n            </span>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-view>\n"

/***/ },
/* 252 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var OrderDetailController = function () {
	  function OrderDetailController(Shop, getCurrentShopId, $stateParams) {
	    _classCallCheck(this, OrderDetailController);
	
	    this.name = 'orderDetail';
	    this.shopId = getCurrentShopId;
	    this._Shop = Shop;
	    this._$stateParams = $stateParams;
	    this.fetchOrder();
	  }
	
	  _createClass(OrderDetailController, [{
	    key: 'fetchOrder',
	    value: function fetchOrder() {
	      var self = this;
	      this._Shop.orders({ id: this.shopId, filter: {
	          where: { id: this._$stateParams.id },
	          include: ['shop', {
	            orderItems: [{
	              product: ['promotions']
	            }, 'productVariant', {
	              productValuePack: ['promotions']
	            }, {
	              productOptionValues: ['productOption']
	            }, {
	              orderItems: [{
	                product: ['promotions']
	              }, 'productVariant', {
	                productValuePack: ['promotions']
	              }, {
	                productOptionValues: ['productOption']
	              }]
	            }]
	          }]
	        }
	      }).$promise.then(function (orders) {
	        self.order = orders[0];
	      }, function (error) {
	        console.log("Error getting order", error);
	      });
	    }
	  }, {
	    key: 'updateOrderStatus',
	    value: function updateOrderStatus(order, status) {
	      var self = this;
	      order.status = status;
	      order.$save().then(function (result) {
	        self.fetchOrder();
	      }, function (err) {
	        //TODO error cancel order
	      });
	    }
	  }]);
	
	  return OrderDetailController;
	}();
	
	OrderDetailController.$inject = ['Shop', 'getCurrentShopId', '$stateParams'];
	exports.default = OrderDetailController;

/***/ },
/* 253 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _app = __webpack_require__(255);
	
	var _app2 = _interopRequireDefault(_app);
	
	__webpack_require__(256);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appComponent = {
	  template: _app2.default,
	  restrict: 'E'
	};
	
	exports.default = appComponent;

/***/ },
/* 255 */
/***/ function(module, exports) {

	module.exports = "<ion-nav-view name=\"root\">\n\n</ion-nav-view>\n"

/***/ },
/* 256 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 257 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var directivesModule = angular.module('directives', []).directive('uiSrefAnimate', function ($ionicConfig, $state) {
	  return {
	    restrict: 'A',
	    link: function link($scope, element, attrs) {
	      element.bind('click', function () {
	        $ionicConfig.views.transition('platform');
	        $state.go(attrs.uiSrefAnimate);
	      });
	    }
	  };
	}).name;
	
	exports.default = directivesModule;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map