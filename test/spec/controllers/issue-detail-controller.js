'use strict';

describe('Controller: IssueDetailControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('redmineJsApp'));

  var IssueDetailControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IssueDetailControllerCtrl = $controller('IssueDetailControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
