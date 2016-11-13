import ValuePackSelectItemModule from './valuePackSelectItem'
import ValuePackSelectItemController from './valuePackSelectItem.controller';
import ValuePackSelectItemComponent from './valuePackSelectItem.component';
import ValuePackSelectItemTemplate from './valuePackSelectItem.html';

describe('ValuePackSelectItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ValuePackSelectItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ValuePackSelectItemController();
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
      expect(ValuePackSelectItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ValuePackSelectItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ValuePackSelectItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ValuePackSelectItemController);
      });
  });
});
