'use strict';

/**
 * @ngdoc function
 * @name angularShowcaseApp.controller:OnemenuCtrl
 * @description
 * # OnemenuCtrl
 * Controller of the angularShowcaseApp
 */
angular.module('angularShowcaseApp')
  .controller('OnemenuCtrl', function ($scope) {
    $scope.items = [
     { id: 1, name: 'foo' },
     { id: 2, name: 'bar' },
     { id: 3, name: 'blah' } 
   ];
  });
