'use strict';

describe('Directive: buttonColor', function () {

  // load the directive's module
  beforeEach(module('redmineJsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<button-color></button-color>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the buttonColor directive');
  }));
});
