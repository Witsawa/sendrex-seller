class ConversationItemController {
  constructor($scope,ConversationItem) {
    this.name = 'conversationItem';
    this._ConversationItem = ConversationItem
    this.fetchData()
  }
  fetchData(){
    let self = this
    this._ConversationItem.products({id:this.item.id,filter:{include:['productVariants']}}).$promise.then(function (products) {
      self.item.products = products
    })
  }
  
}
ConversationItemController.$inject = ['$scope','ConversationItem']
export default ConversationItemController;
