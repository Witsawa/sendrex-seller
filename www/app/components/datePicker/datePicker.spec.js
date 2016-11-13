import DatePickerModule from './datePicker'
import DatePickerController from './datePicker.controller';
import DatePickerComponent from './datePicker.component';
import DatePickerTemplate from './datePicker.html';

describe('DatePicker', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DatePickerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DatePickerController();
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
      expect(DatePickerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DatePickerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DatePickerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DatePickerController);
      });
  });
});
