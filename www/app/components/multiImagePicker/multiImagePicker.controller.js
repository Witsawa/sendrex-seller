class MultiImagePickerController {
  constructor($scope) {
    this.name = 'multiImagePicker';
    this.guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});
    let self = this
  }
  addImage(url){
    this.ngModel.push(url)
    this.guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});
  }
  onDropComplete(index,obj,event){
    console.log(event)
    var otherObj = this.ngModel[index];
    var otherIndex = this.ngModel.indexOf(obj);
    this.ngModel[index] = obj;
    this.ngModel[otherIndex] = otherObj;

  }
  chooseImage(){
    let el = angular.element(document.getElementById(this.guid))
    console.log(el)
  }
}

MultiImagePickerController.$inject = ['$scope']
export default MultiImagePickerController;
