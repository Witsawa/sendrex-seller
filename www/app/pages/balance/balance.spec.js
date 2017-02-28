import BalanceModule from './balance'
import BalanceController from './balance.controller';
import BalanceComponent from './balance.component';
import BalanceTemplate from './balance.html';

describe('Balance', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BalanceModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BalanceController();
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
      expect(BalanceTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BalanceComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BalanceTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BalanceController);
      });
  });
});
