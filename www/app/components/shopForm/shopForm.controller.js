class ShopFormController {
  constructor(BusinessCategory) {
    this.name = 'shopForm';
    BusinessCategory.find().$promise.then((categories)=>{
      this.categories = [{name:"Uncategorize",id:0}].concat(categories)
    })
  }
}

ShopFormController.$inject = ["BusinessCategory"]

export default ShopFormController;
