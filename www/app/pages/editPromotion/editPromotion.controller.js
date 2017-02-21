class EditPromotionController {
  constructor(getPromotions,getCurrentShopId,Shop,$ionicHistory) {
    this.name = 'editPromotion';
    this.promotion = getPromotions[0]
    this.shopId = getCurrentShopId
    this._Shop = Shop
    this._$ionicHistory = $ionicHistory
  }
  save(){
    let self = this
    let data = self.createPostData()
    self._Shop.promotions.updateById({id:self.shopId,fk:data.id},data).$promise.then((result)=>{
      console.log("Product saved",result)
      self._$ionicHistory.goBack()
    },(error)=>{
      //TODO produt save error
      console.log("Product save error",error)
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

EditPromotionController.$inject = ["getPromotions",'getCurrentShopId',"Shop",'$ionicHistory']
export default EditPromotionController;
