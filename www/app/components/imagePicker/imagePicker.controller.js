class ImagePickerController {
  constructor($scope,Upload,apiRoot,$rootScope,ionicToast,$timeout) {
    this.name = 'imagePicker';
    this._$scope = $scope
    this._Upload =Upload
    this.apiRoot = apiRoot
    this._$rootScope = $rootScope
    this._ionicToast = ionicToast
    this._$timeout = $timeout
    console.log($scope.$id)
  }
  openFilePicker($event){
    $event.stopImmediatePropagation();
    
    console.log($event)
    let fileInput = document.getElementById("imagePickerFileInput-"+this._$scope.$id)
    
    console.log(fileInput)
    this._$timeout(function(){
      fileInput.click()
    })
    return false
    
  }
  upload(files){
    this._$rootScope.$broadcast("loading:show")
    let self = this
    let file = files[0]
    if(self.ngModel!=undefined && self.ngModel!=""){//if existing image -> replace image
      let filename = self.ngModel.substring(self.ngModel.lastIndexOf('/')+1);
      filename = filename.replace(/_ts\d*/,"_ts"+new Date().getTime())
      file = this._Upload.rename(file, filename)
    }else if(self.fileName!=undefined) {
      file = this._Upload.rename(file, self.fileName+"_ts"+new Date().getTime())
    }
    let url = this.apiRoot
    let options = {
      width:1000,
      height:1000,
      resizeIf:function(width,height){return width > 1000 || height > 1000}
    }
    
    this._Upload.resize(file, options).then(function(resizedFile){
      self._Upload.applyExifRotation(resizedFile).then(function(fixedOrientationFile){
        self._Upload.upload({
          url: url + '/Containers/witsawa-sendrex/upload',
          data: {file: fixedOrientationFile}
        }).then(function (resp) {
          if(self.ngModel!=undefined) {
            self.ngModel = resp.data.result.files.file[0].providerResponse.location
          }
          
          self.onImageSelected({url:resp.data.result.files.file[0].providerResponse.location})
          self._ionicToast.show("Image uploaded", "bottom", false, 2500)
        }, function (resp) {
          console.log('Error status: ' + resp.status);
          self._ionicToast.show("Cannot upload image", "bottom", false, 2500)
        }, function (evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        }).finally(()=> {
          self._$rootScope.$broadcast("loading:hide")
          if (self._$scope.$root.$$phase != '$apply' && self._$scope.$root.$$phase != '$digest') {
            self._$scope.$apply();
          }
        })

      })
      
    });


  }
}

ImagePickerController.$inject = ["$scope",'Upload',"apiRoot",'$rootScope','ionicToast','$timeout']

export default ImagePickerController;
