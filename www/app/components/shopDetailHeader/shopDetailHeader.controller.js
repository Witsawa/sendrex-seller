class ShopDetailHeaderController {
  constructor(Shop,$scope) {
    this.name = 'shopDetailHeader';
    this._Shop = Shop
  }
  save(){
    let self = this
    let data = angular.copy(this.shop)
    this._Shop.updateAttributes({id:self.shop.id},data).$promise.then((shop)=>{
      console.log("Shop saved",shop)
      this.shop = shop
      
    },(error)=>{
      console.log("Cannot create shop",error)
    })
  }
  //TODO save cover and image not working due digestion not trigger before save
  updateCover(url){
    console.log(url)
    this.shop.cover = url
    this.save()

  }
  updateImage(url){
    console.log(url)
    this.shop.image = url
    this.save()
  }
}
ShopDetailHeaderController.$inject = ["Shop","$scope"]

export default ShopDetailHeaderController;
