import ProductFormModule from './productForm'
import ProductFormController from './productForm.controller';
import ProductFormComponent from './productForm.component';
import ProductFormTemplate from './productForm.html';

describe('ProductForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProductFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProductFormController();
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
      expect(ProductFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ProductFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ProductFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ProductFormController);
      });
  });
});
