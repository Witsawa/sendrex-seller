class StoreController {
  constructor($state) {
    this.name = 'store';
    this._$state = $state
  }
  getStateUrl(stateName,params){
    return this._$state.href(stateName, params || {});
  }
}
StoreController.$inject = ['$state']
export default StoreController;
