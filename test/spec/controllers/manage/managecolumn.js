'use strict';

describe('Controller: ManageManagecolumnCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var ManageManagecolumnCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManageManagecolumnCtrl = $controller('ManageManagecolumnCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ManageManagecolumnCtrl.awesomeThings.length).toBe(3);
  });
});
