'use strict';

var relativeTime = function($timeout){
  return{
    restrict: 'A',
    template: '<span>{{relativeDate}}</span>',
    require: 'ngModel',
    link: function($scope, element, attrs, ngModel){
      $timeout(function(){
        var value = (attrs.value || ngModel.$modelValue || ngModel.$viewValue );
        if(value){
          var date = Date.parse(value);
          var momentDate = moment.unix(date/1000);
          $scope.relativeDate = momentDate.fromNow();
        }
      }, 200);
    }
  }
};

relativeTime.$inject = ['$timeout'];
redmineJsApp.directive('ngRelativeTime', relativeTime);