import imagePickerComponent from './imagePicker.component';

let imagePickerModule = angular.module('imagePicker', [
  'ionic'
])

.component('imagePicker', imagePickerComponent)
.directive('imagePickerBackgroudUrl', function(){

  return {
    restrict:'A',
    scope:{
      imagePickerBackgroudUrl:'=',
      disableFallback:'<'
    },
    link:function(scope, element, attrs){
      scope.$watch('imagePickerBackgroudUrl',function(){
        var url = scope.imagePickerBackgroudUrl;
        var fallbackUrl = 'url(http://placehold.it/200x200)'
        if(url){
          url = "url("+url+"),"
        }else{
          url = ""
        }
        if(scope.disableFallback){
          fallbackUrl = ''
        }
        console.log(url)
        element.css({
          'background-image': url+fallbackUrl,
        });
      },true);

    }
  }
})
.name;

export default imagePickerModule;
