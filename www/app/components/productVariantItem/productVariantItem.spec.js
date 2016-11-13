import ProductVariantItemModule from './productVariantItem'
import ProductVariantItemController from './productVariantItem.controller';
import ProductVariantItemComponent from './productVariantItem.component';
import ProductVariantItemTemplate from './productVariantItem.html';

describe('ProductVariantItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProductVariantItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProductVariantItemController();
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
      expect(ProductVariantItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ProductVariantItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ProductVariantItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ProductVariantItemController);
      });
  });
});
