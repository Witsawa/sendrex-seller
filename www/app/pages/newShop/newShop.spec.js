import NewShopModule from './newShop'
import NewShopController from './newShop.controller';
import NewShopComponent from './newShop.component';
import NewShopTemplate from './newShop.html';

describe('NewShop', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NewShopModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NewShopController();
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
      expect(NewShopTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NewShopComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NewShopTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NewShopController);
      });
  });
});
