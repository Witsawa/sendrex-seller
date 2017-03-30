
const SocketService = function (LoopBackResource,LoopBackAuth) {
  var url = LoopBackResource.getUrlBase()
  var socket = io(url.substring(0, url.lastIndexOf('/')),{transports:['websocket']})
  var id = LoopBackAuth.accessTokenId;
  var userId = LoopBackAuth.currentUserId;
  console.log('connecging')
  socket.on('connect', function(){
    console.log('User connected')
    socket.emit('authentication', {id: id, userId: userId });
    socket.on('authenticated', function() {
        // use the socket as usual
        console.log('User is authenticated');
    });
  });
  return socket
}
SocketService.$inject = ['LoopBackResource','LoopBackAuth']
export default SocketService