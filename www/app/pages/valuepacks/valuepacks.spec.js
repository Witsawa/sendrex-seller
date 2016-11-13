import ValuepacksModule from './valuepacks'
import ValuepacksController from './valuepacks.controller';
import ValuepacksComponent from './valuepacks.component';
import ValuepacksTemplate from './valuepacks.html';

describe('Valuepacks', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ValuepacksModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ValuepacksController();
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
      expect(ValuepacksTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ValuepacksComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ValuepacksTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ValuepacksController);
      });
  });
});
