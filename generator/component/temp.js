import <%= name %>Component from './<%= name %>.component';

let <%= name %>Module = angular.module('<%= name %>', [
  'ionic'
])

.component('<%= name %>', <%= name %>Component)

.name;

export default <%= name %>Module;
