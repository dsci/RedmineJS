'use strict';

var markdowned = function(Compiler, $timeout){
  return{
    restrict: 'A',
    require: 'ngModel',
    template: "<div ng-bind-html='description'></div",
    //replace: true,
    link: function($scope, element, attrs, ngModel){
      $timeout(function() {
        var value = (attrs.value || ngModel.$modelValue || ngModel.$viewValue );
        if (value) {
          console.log(value);
          $scope.description = Compiler.compile(value);
        }
      }, 150);
    }
  }
}

markdowned.$inject = ['Compiler', '$timeout'];
redmineJsApp.directive('ngMarkdowned', markdowned);
