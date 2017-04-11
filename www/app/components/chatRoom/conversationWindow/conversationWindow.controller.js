class ConversationWindowController {
  constructor(ConversationItem,PubSub,$timeout) {
    this.name = 'conversationWindow';
    this._ConversationItem = ConversationItem
    this._$timeout = $timeout
    this.shop = this.conversation.shop
    this.user = this.conversation.customer
    this.isFollow = true
    this.conversationItems = []

    this.fetchData()
    PubSub.subscribe({
      collectionName:'Conversation/'+this.conversation.id+'/ConversationItem',
      method:'POST'
    },this.messageCreated.bind(this))
  }
  fetchData() {
    let self = this
    this._ConversationItem.find({
      filter:{
        where:{
          conversationId: self.conversation.id
        },
        limit: 20,
        order: 'created DESC'
      }
    }).$promise.then(function (conversationItems) {
      self.conversationItems = conversationItems.slice().reverse()
    }, function (err) {
      console.log(err)
    })
  }
  messageCreated(message){
    let self = this
    self._$timeout(function () {
      self.conversationItems.push(message)
      console.log(message,'message received')
    })
    
  }
}
ConversationWindowController.inject = ['ConversationItem','PubSub','$timeout']
export default ConversationWindowController;
