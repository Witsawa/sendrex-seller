import PromotionsModule from './promotions'
import PromotionsController from './promotions.controller';
import PromotionsComponent from './promotions.component';
import PromotionsTemplate from './promotions.html';

describe('Promotions', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PromotionsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PromotionsController();
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
      expect(PromotionsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PromotionsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PromotionsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PromotionsController);
      });
  });
});
