class EditValuePackController {
  constructor(getValuePack,getCurrentShopId,Shop) {
    this.name = 'editValuePack';
    this.valuePack = getValuePack[0]
    this.shopId = getCurrentShopId
    console.log(getValuePack)
    this._Shop = Shop
  }
  save(){
    console.log(this.valuePack)
    let data = this.createPostData()
    this._Shop.productValuePacks.updateById({id:this.shopId,fk:data.id},data).$promise.then((valuePack)=>{
      console.log('Value pack saved',valuePack)
    },(err)=>{
      console.log("Error save value pack",err)
    })
  }
  createPostData(){
    let data = angular.copy(this.valuePack)
    data.productIds = data.products.map((product)=>{
      return product.id
    })
    return data
  }
}

EditValuePackController.$inject = ['getValuePack','getCurrentShopId','Shop']
export default EditValuePackController;
