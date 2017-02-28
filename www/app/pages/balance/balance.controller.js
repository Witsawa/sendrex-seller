class BalanceController {
  constructor(Shop,getCurrentShop) {
    this.name = 'balance';
    this._Shop = Shop
    this.shop = getCurrentShop
    this.balance = {
      paid: 0,
      pending: 0,
      total: 0
    }
    this.fetchData()
  }
  fetchData() {
    let self = this
    //Get shop balance 
    this._Shop.prototype$getBalance({id:this.shop.id}).$promise.then(function (balance) {
      self.balance = balance
      console.log(balance)
    }, function (err) {
      //fail to get balance
      console.log(err)
    })
  }
}
BalanceController.$inject = ['Shop','getCurrentShop']
export default BalanceController;
