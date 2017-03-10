class OrderController {
  constructor(Shop,getCurrentShopId,$scope) {
    this.name = 'order';
    this.shopId = getCurrentShopId
    this._Shop = Shop
    this.statusFilter = 'pending'
    this._$scope = $scope
    this.orders = []
    this.fetchOrders()
  }
  fetchOrders(){
    let self = this
    this._Shop.orders({id:this.shopId,filter:{include:['shop',
      {orderItems:[
        'product',
        'productValuePack'
      ]}]}}).$promise.then((orders)=>{
      self.orders = orders
      console.log(orders)
    },(error)=>{
      console.log("cannot get orders",error)
    }).finally(function () {
      self._$scope.$broadcast('scroll.refreshComplete');
    })
  }
}
OrderController.$inject = ['Shop','getCurrentShopId','$scope']
export default OrderController;