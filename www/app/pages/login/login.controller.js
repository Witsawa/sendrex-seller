class LoginController {
  constructor(Customer,$location) {
    this.name = 'login';
    this._Customer = Customer
    this.credential = {}
    this._$location = $location
  }
  login(){
    let self = this
    this._Customer.login(this.credential, function() {
      let next = self._$location.nextAfterLogin || '/tabs/store/products';
      self._$location.nextAfterLogin = null;
      self._$location.path(next);
    });
  }
}

LoginController.$inject = ['Customer','$location']
export default LoginController;
