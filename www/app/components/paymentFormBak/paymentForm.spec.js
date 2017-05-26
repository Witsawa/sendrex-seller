import PaymentFormModule from './paymentForm'
import PaymentFormController from './paymentForm.controller';
import PaymentFormComponent from './paymentForm.component';
import PaymentFormTemplate from './paymentForm.html';

describe('PaymentForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PaymentFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PaymentFormController();
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
      expect(PaymentFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PaymentFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PaymentFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PaymentFormController);
      });
  });
});
