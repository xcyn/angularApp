'use strict';

describe('Service: xcyTextLbt', function () {

  // load the service's module
  beforeEach(module('angularAppApp'));

  // instantiate service
  var xcyTextLbt;
  beforeEach(inject(function (_xcyTextLbt_) {
    xcyTextLbt = _xcyTextLbt_;
  }));

  it('should do something', function () {
    expect(!!xcyTextLbt).toBe(true);
  });

});
