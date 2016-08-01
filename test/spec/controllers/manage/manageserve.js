'use strict';

describe('Controller: ManageManageserveCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var ManageManageserveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManageManageserveCtrl = $controller('ManageManageserveCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ManageManageserveCtrl.awesomeThings.length).toBe(3);
  });
});
