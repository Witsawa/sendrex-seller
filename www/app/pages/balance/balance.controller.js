class BalanceController {
  constructor(Shop,getCurrentShop,$ionicPopup,$scope) {
    this.name = 'balance';
    this._Shop = Shop
    this.shop = getCurrentShop
    this._$ionicPopup = $ionicPopup
    this._$scope = $scope
    this.balance = {
      total: 0
    }
    this.transactions = []
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
    this._Shop.prototype$__get__transactions({id:this.shop.id},{filter:{where:{status:{inq:['success']}}}}).$promise.then(function (transactions) {
      self.transactions = transactions
    })
  }
  withdraw() {
    let self = this
    self._amount = 0
    var myPopup = this._$ionicPopup.show({
      template: '<input type="number" ng-model="$ctrl._amount">',
      title: 'Enter Amount',
      subTitle: 'Please enter amount to withdraw',
      scope: self._$scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          type: 'button-positive',
          onTap: function(e) {
            //withdraw
            self._Shop.prototype$withdraw({id:self.shop.id},{amount:self._amount}).$promise.then(function (rsp) {
              console.log(rsp)
            },function (err) {
              console.log(err)
              e.preventDefault();
            })
          }
        }
      ]
    })
    myPopup.then(function(res) {
      console.log('Tapped!', res);
    });
  }
  
}
BalanceController.$inject = ['Shop','getCurrentShop','$ionicPopup','$scope']
export default BalanceController;
