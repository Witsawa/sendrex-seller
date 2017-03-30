import SocketService from './socket'
import PubSub from './pubsub'
let servicesModule = angular.module('MyServices', ['lbServices'])
.factory('socket', SocketService)
.factory('PubSub', PubSub)
.name;

export default servicesModule;
