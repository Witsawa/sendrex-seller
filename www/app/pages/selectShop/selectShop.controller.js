class SelectShopController {
  constructor(getCurrentUser,localStorageService,$state) {
    this.name = 'selectShop';
    this.user = getCurrentUser
    
    this.shops = this.user.shopStaffs.reduce((result,staff)=>{
      result = result.concat(staff.shop)
      return result
    },[])
    this._localStorageService = localStorageService
    this._$state = $state
  }
  selectShop(shop){
    this._localStorageService.set("shopId",shop.id)
    this._$state.go('tabs.store.products')
  }
}
SelectShopController.$inject = ['getCurrentUser','localStorageService','$state']

export default SelectShopController;
