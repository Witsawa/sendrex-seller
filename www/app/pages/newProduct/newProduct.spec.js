import NewProductModule from './newProduct'
import NewProductController from './newProduct.controller';
import NewProductComponent from './newProduct.component';
import NewProductTemplate from './newProduct.html';

describe('NewProduct', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NewProductModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NewProductController();
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
      expect(NewProductTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NewProductComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NewProductTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NewProductController);
      });
  });
});
