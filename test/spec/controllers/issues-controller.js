'use strict';

describe('Controller: IssuesControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('redmineJsApp'));

  var IssuesControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IssuesControllerCtrl = $controller('IssuesControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
