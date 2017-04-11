import ChatRoomModule from './chatRoom'
import ChatRoomController from './chatRoom.controller';
import ChatRoomComponent from './chatRoom.component';
import ChatRoomTemplate from './chatRoom.html';

describe('ChatRoom', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ChatRoomModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ChatRoomController();
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
      expect(ChatRoomTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ChatRoomComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ChatRoomTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ChatRoomController);
      });
  });
});
