import BillingModule from './billing'
import BillingController from './billing.controller';
import BillingComponent from './billing.component';
import BillingTemplate from './billing.html';

describe('Billing', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BillingModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BillingController();
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
      expect(BillingTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BillingComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BillingTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BillingController);
      });
  });
});
