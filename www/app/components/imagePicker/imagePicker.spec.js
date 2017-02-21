import ImagePickerModule from './imagePicker'
import ImagePickerController from './imagePicker.controller';
import ImagePickerComponent from './imagePicker.component';
import ImagePickerTemplate from './imagePicker.html';

describe('ImagePicker', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ImagePickerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ImagePickerController();
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
      expect(ImagePickerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ImagePickerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ImagePickerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ImagePickerController);
      });
  });
});
