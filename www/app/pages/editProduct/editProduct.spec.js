import EditProductModule from './editProduct'
import EditProductController from './editProduct.controller';
import EditProductComponent from './editProduct.component';
import EditProductTemplate from './editProduct.html';

describe('EditProduct', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EditProductModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EditProductController();
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
      expect(EditProductTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = EditProductComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(EditProductTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(EditProductController);
      });
  });
});
