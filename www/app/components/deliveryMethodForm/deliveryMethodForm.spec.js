import DeliveryMethodFormModule from './deliveryMethodForm'
import DeliveryMethodFormController from './deliveryMethodForm.controller';
import DeliveryMethodFormComponent from './deliveryMethodForm.component';
import DeliveryMethodFormTemplate from './deliveryMethodForm.html';

describe('DeliveryMethodForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DeliveryMethodFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DeliveryMethodFormController();
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
      expect(DeliveryMethodFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DeliveryMethodFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DeliveryMethodFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DeliveryMethodFormController);
      });
  });
});
