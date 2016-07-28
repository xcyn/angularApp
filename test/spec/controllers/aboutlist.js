'use strict';

describe('Controller: AboutlistCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var AboutlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutlistCtrl = $controller('AboutlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutlistCtrl.awesomeThings.length).toBe(3);
  });
});
