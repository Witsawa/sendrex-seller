import AddStaffModalTemplate from './addStaffModal.html'
class StaffController {
  constructor(Shop,getCurrentShopId,$ionicModal,$scope,Customer,ShopRole) {
    this.name = 'staff';
    this.shopId = getCurrentShopId
    this._Shop = Shop
    this.query = ""
    this._Customer = Customer
    this.modal = $ionicModal.fromTemplate(AddStaffModalTemplate,{
      scope:$scope
    })
    ShopRole.find().$promise.then((roles)=>{
      this.roles = roles
    },()=>{

    })
    this.fetchStaffs()
  }
  fetchStaffs(){
    let self = this
    this._Shop.staffs({id:this.shopId,filter:{
      include:{
        relation:"shopStaffs",
        scope:{
          where:{shopId:self.shopId}
        }
      }
    }}).$promise.then((staffs)=>{
      this.staffs = staffs
      console.log(staffs)
    },(error)=>{
      console.log("Error getting staff",error)
    })
  }
  addStaff(){
    this.modal.scope.email = ""
    this.roleId = 0
    this.modal.scope.searchResult = undefined
    this.modal.show()
  }
  searchCustomer(email){
    let self = this
    this._Customer.findByEmail({email:email}).$promise.then((result)=>{
      console.log(result)
      if(result.id){
        self.modal.scope.searchResult = result
      }else{
        self.modal.scope.searchResult = undefined
      }
    },(error)=>{
      console.log("Search by email error",error)
    })
  }
  addToShopStaff(roleId,userId){
    this._Shop.shopStaffs.create({id:this.shopId},{shopRoleId:roleId,customerId:userId}).$promise.then((shopstaff)=>{
      console.log("Add staff to role",shopstaff)
    },(error)=>{
      console.log("Add staff to role error",error)
    })
  }
}

StaffController.$inject = ['Shop','getCurrentShopId','$ionicModal','$scope','Customer','ShopRole']

export default StaffController;
