'use strict';

/**
 * @ngdoc function
 * @name angularShowcaseApp.controller:OneradioCtrl
 * @description
 * # OneradioCtrl
 * Controller of the angularShowcaseApp
 */
angular.module('angularShowcaseApp')
  .controller('OneradioCtrl', function ($scope) {
	$scope.color = {
        name: 'blue'
      };
      $scope.specialValue = {
        'id': '12345',
        'value': 'green'
    };
});
