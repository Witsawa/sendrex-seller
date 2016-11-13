import DeliveryModule from './delivery'
import DeliveryController from './delivery.controller';
import DeliveryComponent from './delivery.component';
import DeliveryTemplate from './delivery.html';

describe('Delivery', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DeliveryModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DeliveryController();
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
      expect(DeliveryTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DeliveryComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DeliveryTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DeliveryController);
      });
  });
});
