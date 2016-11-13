import ProductOptionSelectItemModule from './productOptionSelectItem'
import ProductOptionSelectItemController from './productOptionSelectItem.controller';
import ProductOptionSelectItemComponent from './productOptionSelectItem.component';
import ProductOptionSelectItemTemplate from './productOptionSelectItem.html';

describe('ProductOptionSelectItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProductOptionSelectItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProductOptionSelectItemController();
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
      expect(ProductOptionSelectItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ProductOptionSelectItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ProductOptionSelectItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ProductOptionSelectItemController);
      });
  });
});
