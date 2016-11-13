import ValuePackFormModule from './valuePackForm'
import ValuePackFormController from './valuePackForm.controller';
import ValuePackFormComponent from './valuePackForm.component';
import ValuePackFormTemplate from './valuePackForm.html';

describe('ValuePackForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ValuePackFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ValuePackFormController();
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
      expect(ValuePackFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ValuePackFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ValuePackFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ValuePackFormController);
      });
  });
});
