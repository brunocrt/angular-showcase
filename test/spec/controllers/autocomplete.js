'use strict';

describe('Controller: AutocompleteCtrl', function () {

  // load the controller's module
  beforeEach(module('angularShowcaseApp'));

  var AutocompleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AutocompleteCtrl = $controller('AutocompleteCtrl', {
      $scope: scope
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  //});
});
