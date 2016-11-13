class ProductListController {
  constructor($scope,Product,$ionicLoading,$state,ProductCategory) {
    this.name = 'productList';
    let self = this
    //injected variable
    this._$scope = $scope
    this._Product = Product
    this._$ionicLoading = $ionicLoading
    this._$state = $state
    this.showLoadmore = true
    this.categories = [
      {name:'All category',id:0}
    ]
    ProductCategory.find({},function(categories){
      self.categories = self.categories.concat(categories)
    })
    this.category = 0;
    this.products = [];
    this.query = '';
    this.page = 0;
  }
  fetchProduct(onSuccess,onError,onFinally){
    //load product using current query and page
    let filter = {
      filter:{
        skip:this.page * 10,
        limit:10,
        include:['shop','productVariants','promotions'],
        where:{}
      }
    }
    let self = this

    if(this.shopId != undefined){
      filter.filter.where['shopId'] = this.shopId
    }
    if(this.query && this.query != ''){
      filter.filter.where["name"] = {
        like:'%'+this.query+'%'
      }
    }
    if(this.category!=0){
      filter.filter.where['productCategoryId'] = this.category
    }
    console.log(filter)
    this._Product.find(filter).$promise.then(function(products){
      self.products = self.products.concat(products)
      self.page += 1
      onSuccess(products)
    },function(){
      onError()
    }).finally(function(){
      console.log("Load finished")
      onFinally()
    })
  }

  refresh(){
    //reset page
    //clear product list
    this.page = 0
    this.products = []
    let self = this
    this.fetchProduct(()=>{
      self.showLoadmore = true
    },()=>{

    },()=>{
      self._$scope.$broadcast('scroll.refreshComplete');
    })

  }
  search(query){
    //reset page
    //clear product list
    //set query terms
    //show load more
    this._$ionicLoading.show()
    this.query = query
    this.page = 0
    this.products = []
    let self = this
    this.fetchProduct(()=>{
      self.showLoadmore = true
    },()=>{

    },()=>{
      self._$ionicLoading.hide()
    })

  }
  loadMore(){
    //load next page
    let self = this
    this.fetchProduct((products)=>{
      if(products.length==0){
        self.showLoadmore = false
      }
    },()=>{

    },()=>{
      self._$scope.$broadcast('scroll.infiniteScrollComplete');
    })

  }
  filterChange(value){
    this.category = value
    this.refresh()
  }
  viewProduct(id){
    this._$state.go(this.productDetailState,{id:id})
  }
}

ProductListController.$inject = ['$scope','Product','$ionicLoading','$state','ProductCategory']
export default ProductListController;
