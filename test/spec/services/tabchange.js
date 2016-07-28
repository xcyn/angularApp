'use strict';

describe('Service: tabChange', function () {

  // load the service's module
  beforeEach(module('angularAppApp'));

  // instantiate service
  var tabChange;
  beforeEach(inject(function (_tabChange_) {
    tabChange = _tabChange_;
  }));

  it('should do something', function () {
    expect(!!tabChange).toBe(true);
  });

});
