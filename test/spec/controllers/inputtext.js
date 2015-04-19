'use strict';

describe('Controller: InputtextCtrl', function () {

  // load the controller's module
  beforeEach(module('angularShowcaseApp'));

  var InputtextCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InputtextCtrl = $controller('InputtextCtrl', {
      $scope: scope
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
  //  expect(scope.awesomeThings.length).toBe(3);
  //});
});
