class MyProfileController {
  constructor(getCurrentUser,Customer,$ionicHistory) {
    this.name = 'myProfile';
    this.user = getCurrentUser
    this._Customer = Customer
    this._$ionicHistory = $ionicHistory
  }
  save(){
    //this._$rootScope.$broadcast('loading:show');
    let self = this
    let data = angular.copy(this.user)
    this._Customer.updateAttributes({id:this.user.id},data).$promise.then((result)=>{
      console.log("Save profile success",result)
      self._$ionicHistory.goBack();
    },(error)=>{
      console.log("Save profile error",error)
    }).finally(()=>{
      //this._$rootScope.$broadcast('loading:hide');
      
    })
  }
}
MyProfileController.$inject = ['getCurrentUser','Customer','$ionicHistory']
export default MyProfileController;
