import SelectShopModule from './selectShop'
import SelectShopController from './selectShop.controller';
import SelectShopComponent from './selectShop.component';
import SelectShopTemplate from './selectShop.html';

describe('SelectShop', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SelectShopModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SelectShopController();
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
      expect(SelectShopTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SelectShopComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SelectShopTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SelectShopController);
      });
  });
});
