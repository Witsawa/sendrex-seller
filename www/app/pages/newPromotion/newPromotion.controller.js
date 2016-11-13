class NewPromotionController {
  constructor(Shop,getCurrentShopId,Promotion,getCurrentShop) {
    this.name = 'newPromotion';
    this._Shop = Shop
    this.shopId = getCurrentShopId
    let startDate = new Date(Date.now())
    let endDate = new Date(Date.now())
    endDate.setMonth(endDate.getMonth() + 1);
    this.promotion = new Promotion({shopId:this.shopId,free_delivery:false,description:"",name:"",endDate:endDate,startDate:startDate,discount_amount:0,discount_percent:true,products:[],productValuePacks:[]})
  }
  save(){
    let self = this
    self._Shop.promotions.create({id:self.shopId},self.createPostData()).$promise.then((result)=>{
      console.log("promotion saved",result)
    },(error)=>{
      //TODO produt save error
      console.log("promotion save error",error)
    })
  }
  createPostData(){
    let self = this
    let data = angular.copy(self.promotion)
    data.productIds = self.promotion.products.map((product)=>{
      return product.id
    })
    data.productValuePackIds = self.promotion.productValuePacks.map((valuePack)=>{
      return valuePack.id
    })
    console.log(data)
    return data
  }
}

NewPromotionController.$inject = ["Shop","getCurrentShopId","Promotion"]

export default NewPromotionController;
