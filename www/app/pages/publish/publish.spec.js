import PublishModule from './publish'
import PublishController from './publish.controller';
import PublishComponent from './publish.component';
import PublishTemplate from './publish.html';

describe('Publish', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PublishModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PublishController();
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
      expect(PublishTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PublishComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PublishTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PublishController);
      });
  });
});
