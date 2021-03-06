import PromotionFormModule from './promotionForm'
import PromotionFormController from './promotionForm.controller';
import PromotionFormComponent from './promotionForm.component';
import PromotionFormTemplate from './promotionForm.html';

describe('PromotionForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PromotionFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PromotionFormController();
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
      expect(PromotionFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PromotionFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PromotionFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PromotionFormController);
      });
  });
});
