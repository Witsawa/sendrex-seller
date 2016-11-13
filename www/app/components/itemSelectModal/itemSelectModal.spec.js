import ItemSelectModalModule from './itemSelectModal'
import ItemSelectModalController from './itemSelectModal.controller';
import ItemSelectModalComponent from './itemSelectModal.component';
import ItemSelectModalTemplate from './itemSelectModal.html';

describe('ItemSelectModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ItemSelectModalModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ItemSelectModalController();
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
      expect(ItemSelectModalTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ItemSelectModalComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ItemSelectModalTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ItemSelectModalController);
      });
  });
});
