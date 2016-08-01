'use strict';

describe('Controller: ManageManagesubscribeCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var ManageManagesubscribeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManageManagesubscribeCtrl = $controller('ManageManagesubscribeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ManageManagesubscribeCtrl.awesomeThings.length).toBe(3);
  });
});
