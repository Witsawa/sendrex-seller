import OperationTimeModule from './operationTime'
import OperationTimeController from './operationTime.controller';
import OperationTimeComponent from './operationTime.component';
import OperationTimeTemplate from './operationTime.html';

describe('OperationTime', () => {
  let $rootScope, makeController;

  beforeEach(window.module(OperationTimeModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new OperationTimeController();
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
      expect(OperationTimeTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = OperationTimeComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(OperationTimeTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(OperationTimeController);
      });
  });
});
