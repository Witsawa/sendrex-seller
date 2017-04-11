import AttachProductModule from './attachProduct'
import AttachProductController from './attachProduct.controller';
import AttachProductComponent from './attachProduct.component';
import AttachProductTemplate from './attachProduct.html';

describe('AttachProduct', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AttachProductModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AttachProductController();
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
      expect(AttachProductTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AttachProductComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AttachProductTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AttachProductController);
      });
  });
});
