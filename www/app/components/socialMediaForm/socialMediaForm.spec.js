import SocialMediaFormModule from './socialMediaForm'
import SocialMediaFormController from './socialMediaForm.controller';
import SocialMediaFormComponent from './socialMediaForm.component';
import SocialMediaFormTemplate from './socialMediaForm.html';

describe('SocialMediaForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SocialMediaFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SocialMediaFormController();
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
      expect(SocialMediaFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SocialMediaFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SocialMediaFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SocialMediaFormController);
      });
  });
});
