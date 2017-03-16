import CodeModal from './codeModal.html'
class OrderDetailController {
  constructor(Shop,getCurrentShopId,$stateParams,DeliveryJob,$ionicModal,$scope,Order) {
    this.name = 'orderDetail';
    this.shopId = getCurrentShopId
    this._Shop = Shop
    this._$stateParams = $stateParams
    this._DeliveryJob = DeliveryJob
    this.codeModal = $ionicModal.fromTemplate(CodeModal,{
      scope:$scope
    })
    this._Order =Order
    this.fetchOrder()
  }
  fetchOrder(){
    let self = this
    this._Shop.orders({id:this.shopId,filter: {
      where: {id: this._$stateParams.id},
      include: [
        'deliveryJobs',
        'shop',
        {
          orderItems: [
            {
              product:['promotions']
            },
            'productVariant',
            {
              productValuePack:['promotions']
            },
            {
              productOptionValues:['productOption']
            },
            {
              orderItems: [
                {
                  product:['promotions']
                },
                'productVariant',
                {
                  productValuePack:['promotions']
                },
                {
                  productOptionValues:['productOption']
                }

              ]
            }
          ]
        }
      ]
    }
    }).$promise.then((orders)=>{
      self.order = orders[0]
      console.log(self.order)
    },(error)=>{
      console.log("Error getting order",error)
    })
  }
  updateOrderStatus(order,status){
    let self = this
    order.status = status
    order.$save().then((result)=>{
      self.fetchOrder()
    },(err)=>{
      //TODO error cancel order
    })

  }
  findDeliver(){
    console.log(this._DeliveryJob)
    this._DeliveryJob.createJob({orderId:this.order.id}).$promise.then(function (rsp) {
      console.log(rsp)
    }, function (err) {
      console.log(err)
    })
  }
  showCode(){
    let self = this
    self._Order.prototype$deliveryCode({id:self.order.id}).$promise.then(function (code) {
      self.codeModal.scope.code = code.code
      self.codeModal.show()
    },function (err) {
      console.log("Cannot get code")
    })
   
  }
}
OrderDetailController.$inject= ['Shop','getCurrentShopId','$stateParams','DeliveryJob','$ionicModal','$scope','Order']
export default OrderDetailController;
