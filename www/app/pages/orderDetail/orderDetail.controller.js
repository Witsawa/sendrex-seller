class OrderDetailController {
  constructor(Shop,getCurrentShopId,$stateParams,DeliveryJob) {
    this.name = 'orderDetail';
    this.shopId = getCurrentShopId
    this._Shop = Shop
    this._$stateParams = $stateParams
    this._DeliveryJob = DeliveryJob
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
}
OrderDetailController.$inject= ['Shop','getCurrentShopId','$stateParams','DeliveryJob']
export default OrderDetailController;
