'use strict';

describe('Service: markdownCompiler', function () {

  // load the service's module
  beforeEach(module('redmineJsApp'));

  // instantiate service
  var markdownCompiler;
  beforeEach(inject(function (_markdownCompiler_) {
    markdownCompiler = _markdownCompiler_;
  }));

  it('should do something', function () {
    expect(!!markdownCompiler).toBe(true);
  });

});
