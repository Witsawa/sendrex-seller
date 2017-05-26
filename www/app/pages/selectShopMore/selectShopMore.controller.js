class SelectShopMoreController {
  constructor(getCurrentUser,localStorageService,$state) {
    this.name = 'selectShopMore';
    this._localStorageService = localStorageService
    this._$state = $state
    this.user = getCurrentUser
    this.shops = this.user.shopStaffs.reduce((result,staff)=>{
      result = result.concat(staff.shop)
      return result
    },[])
  }
  selectShop(shop){
    this._localStorageService.set("shopId",shop.id)
    this._$state.go('tabs.dashboard')
  }
}
SelectShopMoreController.$inject = ['getCurrentUser','localStorageService','$state']
export default SelectShopMoreController;
