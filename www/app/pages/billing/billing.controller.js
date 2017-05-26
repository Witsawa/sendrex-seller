import creditCardModalTemplate from './creditCardModal.html'
import bankAccountModalTemplate from './bankAccountModal.html'
class BillingController {
  constructor(getCurrentShop,Omise,$ionicModal,$scope,Shop) {
    this.name = 'billing';
    this.shop = getCurrentShop
    this._Omise = Omise
    this.creditCardModal = $ionicModal.fromTemplate(creditCardModalTemplate, {
      scope:$scope
    }) 
    this.bankAccountModal = $ionicModal.fromTemplate(bankAccountModalTemplate, {
      scope:$scope
    })
    this._Shop = Shop
    this.cards = []
    this.bankaccount = {}
    this.getCreditCard()
    this.getBankAccount()
  }
  getCreditCard() {
    let self= this
    this._Shop.prototype$getCard({id:self.shop.id}).$promise.then(function (cards) {
      self.cards = cards
    }).catch(function (err) {
      console.log(err)
    })
  }
  getBankAccount() {
    let self= this
    this._Shop.prototype$getBankAccount({id:self.shop.id}).$promise.then(function (bankaccount) {
      self.bankaccount = bankaccount
    }).catch(function (err) {
      console.log(err)
    })
  }
  editCreditCard(e){
    let self = this
    self.creditCardModal.scope.card = {
      name: '',
      number: '',
      expiration_month: '',
      expiration_year: '',
      security_code: '',
      city: 'Bangkok',
      postal_code: ''
    }
    self.creditCardModal.show()
  }
  editBankAccount(e){
    let self = this
    self.bankAccountModal.scope.bank = {
      email: self.shop.email,
      name: self.shop.name,
      type: "individual",
      bank_account: {
        number: "",
        brand: "test",
        name: ""
      }
    }
    self.bankAccountModal.show()
  }
  togglePublish () {
    if(this.cards.length > 0 && this.bankaccount.last_digits){
      this.savePublish()
    }else{
      if(this.cards.length == 0){
        this.editCreditCard()
      }else{
        this.editBankAccount()
      }
    }
  }
  savePublish(){
    let self = this
    let data = angular.copy(this.shop)
    return this._Shop.updateAttributes({id:self.shop.id},{public:data.public}).$promise.then((shop)=>{
      console.log("Shop saved",shop)
      self.shop.public = shop.public
      return Promise.resolve(self.shop)
    },(error)=>{
      console.log("Cannot create shop",error)
      return Promise.reject(error)
    })
  }
  saveCreditCard () {
    let self = this
    let card = self.creditCardModal.scope.card
    console.log(card)
    let createOmiseToken = createOmiseToken = this._Omise.getToken({card:card}).$promise.then(function (omiseResult) {
        return self._Shop.prototype$addCreditCard({id:self.shop.id, token: omiseResult.id}).$promise
      })
    
    createOmiseToken.then(function (resp) {
      console.log(resp)
      return this.savePublish()
    }).then(function () {
      return this.creditCardModal.hide()
    }).catch(function (err) {
      console.log(err)
    })
  }
  cancelCreditCard () {
    this.creditCardModal.hide()
  }
  saveBankAccount () {
    let self = this
    this._Shop.prototype$updateBankAccount({id: this.shop.id,bank:this.bankAccountModal.scope.bank}).$promise.then(function (method) {
      self.bankAccountModal.hide()
    })
  }
  cancelBankAccount () {
    this.bankAccountModal.hide()
  }
}

BillingController.$inject = ['getCurrentShop','Omise','$ionicModal','$scope','Shop']
export default BillingController;
