class ChatListController {
  constructor(getCurrentShop) {
    this.name = 'chatList';
    this.shop = getCurrentShop
  }
}
ChatListController.inject = ['getCurrentShop']
export default ChatListController;
