import NewPromotionModule from './newPromotion'
import NewPromotionController from './newPromotion.controller';
import NewPromotionComponent from './newPromotion.component';
import NewPromotionTemplate from './newPromotion.html';

describe('NewPromotion', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NewPromotionModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NewPromotionController();
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
      expect(NewPromotionTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NewPromotionComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NewPromotionTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NewPromotionController);
      });
  });
});
