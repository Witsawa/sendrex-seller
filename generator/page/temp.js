import <%= name %>Page from './<%= name %>.page';

let <%= name %>Module = angular.module('<%= name %>', [
  'ionic'
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('<%= name %>', {
        url: '/<%= name %>',
        template:<%= name %>Page.template,
        controller:<%= name %>Page.controller,
        controllerAs: '$ctrl'

      });
  })

.name;

export default <%= name %>Module;
