import ShopDetailHeaderModule from './shopDetailHeader'
import ShopDetailHeaderController from './shopDetailHeader.controller';
import ShopDetailHeaderComponent from './shopDetailHeader.component';
import ShopDetailHeaderTemplate from './shopDetailHeader.html';

describe('ShopDetailHeader', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ShopDetailHeaderModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ShopDetailHeaderController();
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
      expect(ShopDetailHeaderTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ShopDetailHeaderComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ShopDetailHeaderTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ShopDetailHeaderController);
      });
  });
});
