import ConversationItemModule from './conversationItem'
import ConversationItemController from './conversationItem.controller';
import ConversationItemComponent from './conversationItem.component';
import ConversationItemTemplate from './conversationItem.html';

describe('ConversationItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ConversationItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ConversationItemController();
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
      expect(ConversationItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ConversationItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ConversationItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ConversationItemController);
      });
  });
});
