'use strict';

describe('Controller: ProjectsControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('redmineJsApp'));

  var ProjectsControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectsControllerCtrl = $controller('ProjectsControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
