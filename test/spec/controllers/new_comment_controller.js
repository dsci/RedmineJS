'use strict';

describe('Controller: NewCommentControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('redmineJsApp'));

  var NewCommentControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewCommentControllerCtrl = $controller('NewCommentControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
