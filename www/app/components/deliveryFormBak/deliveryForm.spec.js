import DeliveryFormModule from './deliveryForm'
import DeliveryFormController from './deliveryForm.controller';
import DeliveryFormComponent from './deliveryForm.component';
import DeliveryFormTemplate from './deliveryForm.html';

describe('DeliveryForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DeliveryFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DeliveryFormController();
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
      expect(DeliveryFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DeliveryFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DeliveryFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DeliveryFormController);
      });
  });
});
