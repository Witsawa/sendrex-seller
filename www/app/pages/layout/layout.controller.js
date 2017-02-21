class LayoutController {
  constructor($ionicHistory) {
    this.name = 'layout';
    this._$ionicHistory = $ionicHistory
  }
  goBack()
  {
    console.log('go back')
    this._$ionicHistory.goBack();                           //This doesn't work
    //window.history.back();                          //This works
    //alert('code to go back called. Did it work?');  //For testing
  }
}

LayoutController.$inject = ["$ionicHistory"]
export default LayoutController;
