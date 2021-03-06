class TabsController {
  constructor($state,$ionicHistory,getCurrentShop) {
    this.name = 'tabs';
    this._$state =$state
    this._$ionicHistory = $ionicHistory
    this.shop = getCurrentShop
    this.showAlert = true
  }
  getStateUrl(stateName,params){
    return this._$state.href(stateName, params || {});
  }
  goBack()
  {
    console.log('go back')
    this._$ionicHistory.goBack();                           //This doesn't work
    //window.history.back();                          //This works
    //alert('code to go back called. Did it work?');  //For testing
  }
}

TabsController.$inject = ['$state','$ionicHistory','getCurrentShop']
export default TabsController;
