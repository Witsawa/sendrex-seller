import ProductsModule from './products'
import ProductsController from './products.controller';
import ProductsComponent from './products.component';
import ProductsTemplate from './products.html';

describe('Products', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProductsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProductsController();
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
      expect(ProductsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ProductsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ProductsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ProductsController);
      });
  });
});
