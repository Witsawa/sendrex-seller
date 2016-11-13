import EditPromotionModule from './editPromotion'
import EditPromotionController from './editPromotion.controller';
import EditPromotionComponent from './editPromotion.component';
import EditPromotionTemplate from './editPromotion.html';

describe('EditPromotion', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EditPromotionModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EditPromotionController();
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
      expect(EditPromotionTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = EditPromotionComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(EditPromotionTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(EditPromotionController);
      });
  });
});
