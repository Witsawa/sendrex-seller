class PaymentFormController {
  constructor(PaymentMethod) {
    this.name = 'paymentForm';
    this._PaymentMethod = PaymentMethod
    this.paymentMethods = []
    this.fetchPaymentMethod()
  }
  fetchPaymentMethod() {
    this._PaymentMethod.find({},(paymentMethods)=>{
      this.paymentMethods = angular.copy(paymentMethods).map((method)=>{
        method.active = true
        return method
      })
    })
  }
}

PaymentFormController.$inject = ["PaymentMethod"]
export default PaymentFormController;
