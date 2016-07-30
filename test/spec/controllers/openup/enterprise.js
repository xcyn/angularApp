'use strict';

describe('Controller: OpenupEnterpriseCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var OpenupEnterpriseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OpenupEnterpriseCtrl = $controller('OpenupEnterpriseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OpenupEnterpriseCtrl.awesomeThings.length).toBe(3);
  });
});
