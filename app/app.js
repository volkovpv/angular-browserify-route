'use strict';
//
var angular = require('angular');
require('angular-route');

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute']).config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/view1', {
        templateUrl: '/view1/view1.html'
    });
    $routeProvider.when('/view2', {
        templateUrl: '/view2/view2.html'
    });

    $routeProvider.otherwise({redirectTo: '/view1'});
});