class ChatListController {
  constructor(Conversation) {
    this.name = 'chatList';
    this._Conversation = Conversation
    this.conversations = []
    this.fetchData()
  }
  fetchData () {
    let self = this
    this._Conversation.find({
      filter:{
        where: {
          shopId: self.shop.id
        },
        include: [{
          relation: 'conversationItems',
          scope: {
            limit:1,
            order: 'created DESC'
          }
        },
        {
          relation: 'customer',
        }]
      }
    }).$promise.then(function (conversations) {
      self.conversations = conversations
    }, function (err) {
      console.log(err)
    })
  }
}
ChatListController.inject = ['Conversation']
export default ChatListController;
