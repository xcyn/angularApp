'use strict';

describe('Controller: NewbuildTopicCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var NewbuildTopicCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewbuildTopicCtrl = $controller('NewbuildTopicCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewbuildTopicCtrl.awesomeThings.length).toBe(3);
  });
});
