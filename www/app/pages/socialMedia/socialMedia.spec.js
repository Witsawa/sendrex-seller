import SocialMediaModule from './socialMedia'
import SocialMediaController from './socialMedia.controller';
import SocialMediaComponent from './socialMedia.component';
import SocialMediaTemplate from './socialMedia.html';

describe('SocialMedia', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SocialMediaModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SocialMediaController();
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
      expect(SocialMediaTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SocialMediaComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SocialMediaTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SocialMediaController);
      });
  });
});
