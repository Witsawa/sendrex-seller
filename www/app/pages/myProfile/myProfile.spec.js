import MyProfileModule from './myProfile'
import MyProfileController from './myProfile.controller';
import MyProfileComponent from './myProfile.component';
import MyProfileTemplate from './myProfile.html';

describe('MyProfile', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyProfileModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyProfileController();
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
      expect(MyProfileTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyProfileComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyProfileTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyProfileController);
      });
  });
});
