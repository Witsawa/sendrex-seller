class PromotionsController {
  constructor(Shop,getCurrentShopId,getCurrentShop,$state,$ionicActionSheet) {
    this.name = 'promotions';
    this._Shop = Shop
    this.shopId = getCurrentShopId
    this.shop = getCurrentShop
    this._$state = $state
    this._$ionicActionSheet = $ionicActionSheet
    this.fetchPromotions()
  }
  fetchPromotions(){
    let self = this
    this._Shop.promotions({id:this.shopId,filter:{
      include:["all","products","productValuePacks"]
    }}).$promise.then((promotions)=>{
      self.promotions = promotions
      console.log("Get promotion",promotions)
    },(error)=>{
      console.log("Get promotion error",error)
    })
  }
  edit(promotion){
    if(promotion) {
      this._$state.go('^.editPromotion', {id: promotion.id})
    }else{
      this._$state.go('^.newPromotion')
    }
  }
  showActions(promotion){
    //show edit or delete
    let self = this
    var hideSheet = self._$ionicActionSheet.show({
      buttons: [
      ],
      destructiveText: 'Delete',
      cancelText: 'Cancel',
      cancel: function() {
        // add cancel code..
      },
      buttonClicked: function(index) {
        if(index == 0){
          self.openEditModal(option)
        }
        return true;
      },
      destructiveButtonClicked:function(){
        self._Shop.promotions.destroyById({id:self.shopId,fk:promotion.id}).$promise.then((result)=>{
          hideSheet()
          console.log("promotion deleted",result)
          self.fetchPromotions()

        },(error)=>{
          console.log("promotion delete error",error)
        })
      }
    });
  }
}

PromotionsController.$inject = ['Shop','getCurrentShopId','getCurrentShop','$state','$ionicActionSheet']
export default PromotionsController;
