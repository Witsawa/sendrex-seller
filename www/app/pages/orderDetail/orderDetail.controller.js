class OrderDetailController {
  constructor(Shop,getCurrentShopId,$stateParams) {
    this.name = 'orderDetail';
    this.shopId = getCurrentShopId
    this._Shop = Shop
    this._$stateParams = $stateParams
    this.fetchOrder()
  }
  fetchOrder(){
    let self = this
    this._Shop.orders({id:this.shopId,filter: {
      where: {id: this._$stateParams.id},
      include: [
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
}
OrderDetailController.$inject= ['Shop','getCurrentShopId','$stateParams']
export default OrderDetailController;
