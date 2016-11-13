import EditValuePackModule from './editValuePack'
import EditValuePackController from './editValuePack.controller';
import EditValuePackComponent from './editValuePack.component';
import EditValuePackTemplate from './editValuePack.html';

describe('EditValuePack', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EditValuePackModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EditValuePackController();
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
      expect(EditValuePackTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = EditValuePackComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(EditValuePackTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(EditValuePackController);
      });
  });
});
