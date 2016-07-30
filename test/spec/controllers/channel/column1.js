'use strict';

describe('Controller: ChannelColumn1Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var ChannelColumn1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChannelColumn1Ctrl = $controller('ChannelColumn1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChannelColumn1Ctrl.awesomeThings.length).toBe(3);
  });
});
