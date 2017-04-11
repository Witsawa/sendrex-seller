class ChatController {
  constructor(getConversation) {
    this.name = 'chat';
    this.conversation = getConversation
    console.log(getConversation)
  }
}
ChatController.$inject = ['getConversation']

export default ChatController;
