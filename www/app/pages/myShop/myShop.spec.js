import MyShopModule from './myShop'
import MyShopController from './myShop.controller';
import MyShopComponent from './myShop.component';
import MyShopTemplate from './myShop.html';

describe('MyShop', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyShopModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyShopController();
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
      expect(MyShopTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyShopComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyShopTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyShopController);
      });
  });
});
