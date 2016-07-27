'use strict';

describe('Controller: FooterCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var FooterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FooterCtrl = $controller('FooterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FooterCtrl.awesomeThings.length).toBe(3);
  });
});
