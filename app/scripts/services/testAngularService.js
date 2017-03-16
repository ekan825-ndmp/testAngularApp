(function () {
	'use strict';

	function testAngularService ($http, $q) {
		var service = {

		  //http GET
      getData: function (model) {
		var defer = $q.defer(),
          url = 'http://localhost:8090/v1/'+model+'/10/0',
          headers = {
            'Content-Type': 'application/json'
          };
			  $http({
			    method: 'GET',
          url: url,
          headers: headers
        }).then(function (res) {
          defer.resolve(res.data);
        });

			  return defer.promise;
      },
      //http DELETE
      delData: function (model,del) {
        var defer = $q.defer(),
          url = 'http://localhost:8090/v1/'+model+'/',
          headers = {
            'Content-Type': 'application/json'
          };
        $http({
          method: 'DELETE',
          url: url + del,
          headers: headers
        }).then(function (){
          defer.resolve();
        });
        return defer.promise;
      },
      //http POST
      newData: function (model,cont,cenId,act) {
        var defer = $q.defer(),
          url= 'http://localhost:8090/v1/'+model+'/',
          headers = {
          'Content-Type': 'application/json'
          };
        $http({
          method: 'POST',
          url: url,
          headers: headers,
          data: [{
            context: cont,
            centerId: cenId,
            active: act}]
        }).then(function (text) {
          defer.resolve(text);
        });
        return defer.promise;
      }
    };
		return service;
	}
	//registering to angular module
	angular.module('testAngular.services').service('testAngularService', testAngularService);
	//inject data
	testAngularService.$inject = ['$http', '$q'];
}());
