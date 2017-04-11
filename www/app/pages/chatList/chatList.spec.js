import ChatListModule from './chatList'
import ChatListController from './chatList.controller';
import ChatListComponent from './chatList.component';
import ChatListTemplate from './chatList.html';

describe('ChatList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ChatListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ChatListController();
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
      expect(ChatListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ChatListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ChatListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ChatListController);
      });
  });
});
