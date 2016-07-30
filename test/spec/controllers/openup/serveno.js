'use strict';

describe('Controller: OpenupServenoCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var OpenupServenoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OpenupServenoCtrl = $controller('OpenupServenoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OpenupServenoCtrl.awesomeThings.length).toBe(3);
  });
});
