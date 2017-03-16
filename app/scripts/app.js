'use strict';

/**
 * @ngdoc overview
 * @name testAngularApp
 * @description
 * # testAngularApp
 *
 * Main module of the application.
 */

 angular.module('testAngular.controllers', []);
 angular.module('testAngular.services', []);


angular
  .module('testAngularApp', [
	'testAngular.controllers',
	'testAngular.services',
    'ngAnimate',
    'ngAria',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	  .when('/testAngular', {
		  templateUrl: 'views/testAngular.html',
		  controller: 'testAngular',
		  controllerAs: 'testAngularCtrl'
	  })
      .otherwise({
        redirectTo: '/'
      });
  });
