class DashboardController {
  constructor(Shop,getCurrentShop,$q) {
    this.name = 'dashboard';
    this._Shop = Shop
    this.shop = getCurrentShop
    this._$q = $q
    this.balance = {
      total: 0
    }
    this.pendingOrders  = {count:0}
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

    //Count new order
    this._Shop.prototype$__count__orders({id:this.shop.id,where:{status:'pending'}}).$promise.then(function (count) {
      
      self.pendingOrders = count
      console.log(count)
    })
  }
}

DashboardController.$inject = ['Shop','getCurrentShop','$q']
export default DashboardController;
