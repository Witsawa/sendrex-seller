import SocketService from './socket'
import PubSub from './pubsub'
import Omise from './omiseService'
let servicesModule = angular.module('MyServices', ['lbServices',Omise])
.factory('socket', SocketService)
.factory('PubSub', PubSub)
.name;

export default servicesModule;
