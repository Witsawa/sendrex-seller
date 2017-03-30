import CodeModal from './codeModal.html'
class OrderDetailController {
  constructor(Shop,getCurrentShopId,$stateParams,DeliveryJob,$ionicModal,$scope,Order,PubSub,$ionicPopup) {
    this.name = 'orderDetail';
    this.shopId = getCurrentShopId
    this._Shop = Shop
    this._$stateParams = $stateParams
    this._DeliveryJob = DeliveryJob
    this.codeModal = $ionicModal.fromTemplate(CodeModal,{
      scope:$scope
    })
    this._Order = Order
    this._$ionicPopup = $ionicPopup
    PubSub.subscribe({
      collectionName: 'Order',
      method: 'PUT',
      modelId: this._$stateParams.id
    }, this.onOrderUpdate.bind(this))
    this._PubSub = PubSub
    this.fetchOrder()
  }
  fetchOrder(){
    let self = this
    this._Shop.orders({id:this.shopId,filter: {
      where: {id: this._$stateParams.id},
      include: [
        'transaction',
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
      if(self.order.deliveryJobs) {
        self._PubSub.subscribe({
          collectionName: 'DeliveryJob',
          method: 'PUT',
          modelId: self.order.deliveryJobs.id
        }, self.onOrderUpdate.bind(self),true)
      }
      
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
    let self = this
    this._DeliveryJob.calculatePrice({},{pickup_address:this.order.shop.location,delivery_address:this.order.delivery_address}).$promise.then(function ({distance,fee}) {
      self._$ionicPopup.confirm({
        title: 'Get sendrex deliver',
        template: `Delivery fee is THB${fee}. Do you want to continue?`
      }).then(function (res) {
        if(res){
          self._DeliveryJob.createJob({orderId:self.order.id}).$promise.then(function (rsp) {
            console.log(rsp)
            self.fetchOrder()
          }, function (err) {
            console.log(err)
          })
        }
      })
      
    },function (err) {
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
  onOrderUpdate(){
    this.codeModal.hide()
    this.fetchOrder()
  }
}
OrderDetailController.$inject= ['Shop','getCurrentShopId','$stateParams','DeliveryJob','$ionicModal','$scope','Order','PubSub','$ionicPopup']
export default OrderDetailController;
