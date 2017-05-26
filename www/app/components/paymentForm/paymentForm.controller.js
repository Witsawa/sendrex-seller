import CreditCardModalTemplate from './creditCardModal.html'
class PaymentFormController {
  constructor($ionicModal,$scope,Shop) {
    this.name = 'paymentForm';
    this.creditCardModal = $ionicModal.fromTemplate(CreditCardModalTemplate,{
      scope:$scope
    })
    this._Shop = Shop
  }
  checkMeta(e,method){
    let self = this
    console.log(method)
    if(method.name == "Credit card" && method.active){
      console.log(method)
      console.log(self.creditCardModal)
      self.creditCardModal.scope.method = method
      self.creditCardModal.scope.bank = {
        email: self.shop.email,
        name: self.shop.name,
        type: "individual",
        bank_account: {
          number: "",
          brand: "test",
          name: ""
        }
      }
      self.creditCardModal.scope.isReplace = false
      self.creditCardModal.show()
    }
  }
  saveCreditCard(){
    //console.log(this.creditCardModal.scope.bank)
    let self = this
    this._Shop.prototype$updateBankAccount({id: this.shop.id,bank:this.creditCardModal.scope.bank,isReplace: this.creditCardModal.scope.isReplace}).$promise.then(function (method) {
      self.creditCardModal.scope.method.meta = method.meta
      self.creditCardModal.hide()
    })

  }
  cancelCreditCard () {
    this.creditCardModal.scope.method.active = false
    this.creditCardModal.hide()
  }
}

PaymentFormController.$inject = ['$ionicModal','$scope','Shop']
export default PaymentFormController;
