import MoreModule from './more'
import MoreController from './more.controller';
import MoreComponent from './more.component';
import MoreTemplate from './more.html';

describe('More', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MoreModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MoreController();
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
      expect(MoreTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MoreComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MoreTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MoreController);
      });
  });
});
