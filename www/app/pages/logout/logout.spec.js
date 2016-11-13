import LogoutModule from './logout'
import LogoutController from './logout.controller';
import LogoutComponent from './logout.component';
import LogoutTemplate from './logout.html';

describe('Logout', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LogoutModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LogoutController();
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
      expect(LogoutTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LogoutComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LogoutTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LogoutController);
      });
  });
});
