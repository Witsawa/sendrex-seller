import TimePickerModule from './timePicker'
import TimePickerController from './timePicker.controller';
import TimePickerComponent from './timePicker.component';
import TimePickerTemplate from './timePicker.html';

describe('TimePicker', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TimePickerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TimePickerController();
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
      expect(TimePickerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TimePickerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TimePickerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TimePickerController);
      });
  });
});
