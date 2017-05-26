class MoreController {
  constructor(getCurrentShop) {
    this.name = 'more';
    this.shop = getCurrentShop
  }
}

MoreController.$inject = ["getCurrentShop","Shop"]

export default MoreController;
