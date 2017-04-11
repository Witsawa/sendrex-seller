import TypingAreaModule from './typingArea'
import TypingAreaController from './typingArea.controller';
import TypingAreaComponent from './typingArea.component';
import TypingAreaTemplate from './typingArea.html';

describe('TypingArea', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TypingAreaModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TypingAreaController();
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
      expect(TypingAreaTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TypingAreaComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TypingAreaTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TypingAreaController);
      });
  });
});
