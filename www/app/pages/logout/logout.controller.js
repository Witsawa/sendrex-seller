class LogoutController {
  constructor(Customer,LoopBackAuth,$state,localStorageService) {
    this.name = 'logout';
    localStorageService.clearAll()
    if(!Customer.isAuthenticated()){
      $state.go('home')
    }else {
      Customer.logout(function () {
        LoopBackAuth.clearUser();
        LoopBackAuth.clearStorage();
        console.log("Logged out")
        $state.go('login')
      },function(response){
        console.log("Log out failed")
        console.log(response)
      })
    }
  }
}
LogoutController.$inject = ['Customer','LoopBackAuth','$state','localStorageService']

export default LogoutController;
