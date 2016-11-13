import ProductSelectItemModule from './productSelectItem'
import ProductSelectItemController from './productSelectItem.controller';
import ProductSelectItemComponent from './productSelectItem.component';
import ProductSelectItemTemplate from './productSelectItem.html';

describe('ProductSelectItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProductSelectItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProductSelectItemController();
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
      expect(ProductSelectItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ProductSelectItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ProductSelectItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ProductSelectItemController);
      });
  });
});
