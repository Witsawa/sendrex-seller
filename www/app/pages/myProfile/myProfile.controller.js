class MyProfileController {
  constructor(getCurrentUser,Customer) {
    this.name = 'myProfile';
    this.user = getCurrentUser
    this._Customer = Customer
  }
  save(){
    //this._$rootScope.$broadcast('loading:show');
    let data = angular.copy(this.user)
    this._Customer.updateAttributes({id:this.user.id},data).$promise.then((result)=>{
      console.log("Save profile success",result)
    },(error)=>{
      console.log("Save profile error",error)
    }).finally(()=>{
      //this._$rootScope.$broadcast('loading:hide');
    })
  }
}
MyProfileController.$inject = ['getCurrentUser','Customer']
export default MyProfileController;
