'use strict';

/**
 * @ngdoc function
 * @name angularShowcaseApp.controller:HeadercontrollerCtrl
 * @description
 * # HeadercontrollerCtrl
 * Controller of the angularShowcaseApp
 */
angular.module('angularShowcaseApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  });
