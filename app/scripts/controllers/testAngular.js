(function () {
	'use strict';

	function testAngular($scope, testAngularService) {
		/* jshint validthis: true */
		/* global alert */
		/* global R */
		//initialize object 'testAngularCtrl' with this keyword
		var testAngularCtrl = this;
		//initialize object with scope
		testAngularCtrl.scope = $scope;
		testAngularCtrl.showIds = [];
		testAngularCtrl.testAngular = [];

		//http get
	testAngularCtrl.gettestAngular = function () {
	  testAngularService.getData(testAngularCtrl.inputValue).then(function (result) {
		testAngularCtrl.testAngular = result;
	  });
	};

		//http delete
    testAngularCtrl.deltestAngular = function () {
      testAngularService.delData(testAngularCtrl.inputValue,testAngularCtrl.toDelete).then(function (result) {
        testAngularCtrl.testAngular = result;
        alert('Item'+testAngularCtrl.toDelete+'is deleted from MongoDB.');
      });
    };

    //http post
    testAngularCtrl.newtestAngular = function () {
      testAngularService.newData(testAngularCtrl.inputValue,testAngularCtrl.contextNew,testAngularCtrl.centerIdNew,testAngularCtrl.activeNew).then(function (result) {
        testAngularCtrl.testAngular = result;
        alert('Successfully uploaded item to MongoDB');
      });
    };

    //Other functions

    testAngularCtrl.clearAll = function () {
      testAngularCtrl.inputValue = ' ';
      testAngularCtrl.toDelete = ' ';
      testAngularCtrl.contextNew = ' ';
      testAngularCtrl.centerIdNew = ' ';
      testAngularCtrl.activeNew = ' ';
      testAngularCtrl.testAngular = ' ';
      testAngularCtrl.showIds = ' ';
    };

    testAngularCtrl.idClicked = function (id, show) {
		    var isEqual = function (item) {
            return item.id === id;
		      },
          index = R.findIndex(isEqual, testAngularCtrl.showIds);

		    if (index === -1) {
		      testAngularCtrl.showIds.push({id: id, show: show});
		      return;
        }
        testAngularCtrl[index] = { id: id, show: show };
    };

    testAngularCtrl.showPane = function (id) {
      var isEqual = function (item) {
            return item.id === id;
        },
        index = R.findIndex(isEqual, testAngularCtrl.showIds);

      if (index === -1) {
        return false;
      }

      return testAngularCtrl.showIds[index].show;
    };

	}

	angular.module('testAngular.controllers').controller('testAngular', testAngular);
	testAngular.$inject = ['$scope', 'testAngularService'];
}());
