import ProductListModule from './productList'
import ProductListController from './productList.controller';
import ProductListComponent from './productList.component';
import ProductListTemplate from './productList.html';

describe('ProductList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProductListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProductListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ProductListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ProductListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ProductListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ProductListController);
      });
  });
});
