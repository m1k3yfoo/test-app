'use strict';

/**
 * @ngdoc overview
 * @name testAppApp
 * @description
 * # testAppApp
 *
 * Main module of the application.
 */
angular
  .module('testAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/myroute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl',
        controllerAs: 'myroute'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
