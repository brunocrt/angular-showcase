'use strict';

describe('Controller: PasswordCtrl', function () {

  // load the controller's module
  beforeEach(module('angularShowcaseApp'));

  var PasswordCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PasswordCtrl = $controller('PasswordCtrl', {
      $scope: scope
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  //});
});
