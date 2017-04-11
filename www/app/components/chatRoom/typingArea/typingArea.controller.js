class TypingAreaController {
  constructor(localStorageService,ConversationItem) {
    this.name = 'typingArea';
    this._ConversationItem = ConversationItem
    this.defaultMessage = {
      message: '',
      productIds: [],
      products: [],
      images: []
    }
    this.showMenu = false
    this.showImages = false
    this.message = angular.copy(this.defaultMessage)
    this.shopId = this.conversation.shopId
  }
  sendMessage () {
    let self = this
    this.message.shopId = this.shopId
    this.message.conversationId = this.conversation.id
    this._ConversationItem.create(this.message).$promise.then(function (message) {
      console.log(message)
      self.message = angular.copy(self.defaultMessage)
      self.showImages = false
    }, function (err) {
      console.log(err)
    })
  }
}
TypingAreaController.inject = ['localStorageService','ConversationItem']

export default TypingAreaController;
