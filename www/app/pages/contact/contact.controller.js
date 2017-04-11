class ContactController {
  constructor(getCurrentShop) {
    this.name = 'contact';
    this.shop = getCurrentShop
  }
}
ContactController.inject = ['getCurrentShop']
export default ContactController;
