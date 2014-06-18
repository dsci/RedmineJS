'use strict';

describe('Directive: markdowned', function () {

  // load the directive's module
  beforeEach(module('redmineJsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<markdowned></markdowned>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the markdowned directive');
  }));
});
