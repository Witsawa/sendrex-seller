import ConversationWindowModule from './conversationWindow'
import ConversationWindowController from './conversationWindow.controller';
import ConversationWindowComponent from './conversationWindow.component';
import ConversationWindowTemplate from './conversationWindow.html';

describe('ConversationWindow', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ConversationWindowModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ConversationWindowController();
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
      expect(ConversationWindowTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ConversationWindowComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ConversationWindowTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ConversationWindowController);
      });
  });
});
