'use strict';

/**
 * @ngdoc overview
 * @name angularShowcaseApp
 * @description
 * # angularShowcaseApp
 *
 * Main module of the application.
 */
angular
  .module('angularShowcaseApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
	'validation.match'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/autocomplete', {
        templateUrl: 'views/autocomplete.html',
        controller: 'AutocompleteCtrl'
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl'
      })
      .when('/oneMenu', {
        templateUrl: 'views/onemenu.html',
        controller: 'OnemenuCtrl'
      })
      .when('/inputText', {
        templateUrl: 'views/inputtext.html',
        controller: 'InputtextCtrl'
      })
      .when('/oneRadio', {
        templateUrl: 'views/oneradio.html',
        controller: 'OneradioCtrl'
      })
      .when('/password', {
        templateUrl: 'views/password.html',
        controller: 'PasswordCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).directive('prism', [function() {
        return {
            restrict: 'A',
            link: function ($scope, element) {
                element.ready(function() {
                    Prism.highlightElement(element[0]);
                });
            }
        };
    }]
);
