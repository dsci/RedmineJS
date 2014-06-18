'use strict';

var trackerButtonColor = function(){
  return{
    restrict: 'A',
    template: '<div class="btn btn-{{btnClass}}">{{trackerName}}</div>',
    link:function($scope, element, attrs){
      $scope.trackerName = $scope.issue.tracker.name;
      $scope.btnClass = "primary";
      if($scope.trackerName === "Bug"){
        $scope.btnClass = "danger";
      }else if($scope.trackerName === "Feature"){
        $scope.btnClass = "info";
      }
    }
  }
}

redmineJsApp.directive('ngButtonColor', trackerButtonColor);
/*
angular.module('redmineJsApp')
  .directive('buttonColor', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the buttonColor directive');
      }
    };
  });
*/