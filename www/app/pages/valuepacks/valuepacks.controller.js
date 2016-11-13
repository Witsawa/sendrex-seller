class ValuepacksController {
  constructor(Shop,getCurrentShopId,$state,$ionicActionSheet) {
    this.name = 'valuepacks';
    this._Shop = Shop
    this.shopId = getCurrentShopId
    this._$state = $state
    this._$ionicActionSheet = $ionicActionSheet
    this.fetchValuePacks()

  }
  fetchValuePacks(){
    let self = this
    this._Shop.productValuePacks({id:this.shopId,filter:{include:["products"]}}).$promise.then((valuePacks)=>{
      console.log("Get value pack",valuePacks)
      self.valuePacks = valuePacks
    },(error)=>{
      console.log("Error getting value pack",valuePacks)
    })
  }
  edit(valuePack){
    if(valuePack) {
      this._$state.go('^.editValuePack', {id: valuePack.id})
    }else{
      this._$state.go('^.newValuePack')
    }
  }
  showActions(valuePack){
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
        self._Shop.productValuePacks.destroyById({id:self.shopId,fk:valuePack.id}).$promise.then((result)=>{
          hideSheet()
          console.log("value pack deleted",result)
          self.fetchValuePacks()

        },(error)=>{
          console.log("value pack delete error",error)
        })
      }
    });
  }
}

ValuepacksController.$inject = ["Shop","getCurrentShopId",'$state','$ionicActionSheet']

export default ValuepacksController;
