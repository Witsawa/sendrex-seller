import angular from 'angular';
import ngResource from 'angular-resource'
var host = 'https://vault.omise.co'
let omiseService = angular.module('omiseService', [
  ngResource
])
.factory('APIConfig',function(){
    return {
        host:host
    }
})


.factory('Omise',['$resource','$httpParamSerializerJQLike','$httpParamSerializer',function($resource,$httpParamSerializerJQLike,$httpParamSerializer){
    return $resource(host+'/tokens',{},{
        getToken: {
          method: 'POST',
          headers: {
                    'Authorization': 'Basic '+btoa('pkey_test_56r0g7a2gkoj1xglzfn:')
                }
        }
    });
}])



.name



export default omiseService;