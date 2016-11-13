class RegisterController {
  constructor(Customer,$state,$ionicHistory) {
    this.name = 'register';
    this.credential = {
      email:"",
      password:"",
      confirmPassword:""
    }
    this._Customer = Customer
    this._$state = $state
    this._$ionicHistory = $ionicHistory
  }
  register(){
    let data = angular.copy(this.credential)
    let self = this
    this._Customer.create(data).$promise.then((user)=>{
      console.log("Register success",user)
      self._$state.go('login')
    },(error)=>{
      console.log("REgister error",error)
      })
  }
  goBack()
  {
    console.log('go back')
    this._$ionicHistory.goBack();                           //This doesn't work
    //window.history.back();                          //This works
    //alert('code to go back called. Did it work?');  //For testing
  }
}
RegisterController.$inject = ['Customer','$state','$ionicHistory']
export default RegisterController;
