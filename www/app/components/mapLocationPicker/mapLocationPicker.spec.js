import MapLocationPickerModule from './mapLocationPicker'
import MapLocationPickerController from './mapLocationPicker.controller';
import MapLocationPickerComponent from './mapLocationPicker.component';
import MapLocationPickerTemplate from './mapLocationPicker.html';

describe('MapLocationPicker', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MapLocationPickerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MapLocationPickerController();
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
      expect(MapLocationPickerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MapLocationPickerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MapLocationPickerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MapLocationPickerController);
      });
  });
});
