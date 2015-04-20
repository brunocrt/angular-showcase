'use strict';

describe('Controller: OneradioCtrl', function () {

  // load the controller's module
  beforeEach(module('angularShowcaseApp'));

  var OneradioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OneradioCtrl = $controller('OneradioCtrl', {
      $scope: scope
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
  //  expect(scope.awesomeThings.length).toBe(3);
  //});
});
