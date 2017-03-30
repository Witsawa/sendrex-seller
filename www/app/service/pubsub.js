
const PubSubService = function (socket) {
  var container =  [];
    return {
        subscribe: function(options, callback, preventDuplicate){
            
            if(options){
                var collectionName = options.collectionName;
                var modelId = options.modelId;
                var method = options.method;
                var name = ""
                if(method === 'POST'){
                    name = '/' + collectionName + '/' + method;
                }
                else{
                    name = '/' + collectionName + '/' + modelId + '/' + method;
                    
                }
                if(preventDuplicate){
                    if(container.indexOf(name)!=-1){
                        return
                    }
                }
                socket.on(name, callback);
                //Push the container..
                this.pushContainer(name);
            }else{
                throw 'Error: Option must be an object';
            }
        }, //end subscribe

        pushContainer : function(subscriptionName){
            container.push(subscriptionName);
        },

        //Unsubscribe all containers..
        unSubscribeAll: function(){
            for(var i=0; i<container.length; i++){
                socket.removeAllListeners(container[i]);   
            }
            //Now reset the container..
            container = [];
        }

    };
}
PubSubService.$inject = ['socket']
export default PubSubService