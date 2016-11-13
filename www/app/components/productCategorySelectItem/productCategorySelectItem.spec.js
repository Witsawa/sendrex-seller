import ProductCategorySelectItemModule from './productCategorySelectItem'
import ProductCategorySelectItemController from './productCategorySelectItem.controller';
import ProductCategorySelectItemComponent from './productCategorySelectItem.component';
import ProductCategorySelectItemTemplate from './productCategorySelectItem.html';

describe('ProductCategorySelectItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProductCategorySelectItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProductCategorySelectItemController();
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
      expect(ProductCategorySelectItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ProductCategorySelectItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ProductCategorySelectItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ProductCategorySelectItemController);
      });
  });
});
