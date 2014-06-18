'use strict';

describe('Service: markdowned', function () {

  // load the service's module
  beforeEach(module('redmineJsApp'));

  // instantiate service
  var markdowned;
  beforeEach(inject(function (_markdowned_) {
    markdowned = _markdowned_;
  }));

  it('should do something', function () {
    expect(!!markdowned).toBe(true);
  });

});
