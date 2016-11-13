import ShopFormModule from './shopForm'
import ShopFormController from './shopForm.controller';
import ShopFormComponent from './shopForm.component';
import ShopFormTemplate from './shopForm.html';

describe('ShopForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ShopFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ShopFormController();
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
      expect(ShopFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ShopFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ShopFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ShopFormController);
      });
  });
});
