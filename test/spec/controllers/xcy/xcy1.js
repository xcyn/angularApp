'use strict';

describe('Controller: XcyXcy1Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var XcyXcy1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    XcyXcy1Ctrl = $controller('XcyXcy1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(XcyXcy1Ctrl.awesomeThings.length).toBe(3);
  });
});
