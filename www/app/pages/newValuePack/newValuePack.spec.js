import NewValuePackModule from './newValuePack'
import NewValuePackController from './newValuePack.controller';
import NewValuePackComponent from './newValuePack.component';
import NewValuePackTemplate from './newValuePack.html';

describe('NewValuePack', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NewValuePackModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NewValuePackController();
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
      expect(NewValuePackTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NewValuePackComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NewValuePackTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NewValuePackController);
      });
  });
});
