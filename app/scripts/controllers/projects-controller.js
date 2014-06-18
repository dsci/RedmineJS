'use strict';

var projectsController = function($scope,
                                  $http,
                                  $window,
                                  sharedIssueFetcher,
                                  redmineConfig){
  $scope.currentPage  = 0;
  $scope.pageSize     = 10;
  $scope.projects     = [];
  $scope.numberOfPage = function(){
    return Math.ceil($scope.projects.length/$scope.pageSize);
  }
  $scope.nextPage = function(){
    console.log($scope.numberOfPage());
    if(!($scope.currentPage >= ($scope.projects.length/$scope.pageSize)-1)){
      $scope.currentPage = $scope.currentPage+1;
    }
    console.log($scope.currentPage);
  }

  $scope.previousPage = function(){
    if($scope.currentPage > 0){
      $scope.currentPage = $scope.currentPage-1;
    }
  }

  var url = redmineConfig.route("projects") + "?callback=projectsHandler"
  var config = {
    params: {
      "key" : redmineConfig.apiKey,
      "limit" : 100
    }
  }
  $http.jsonp(url,config);



  $window.projectsHandler = function(data){
    var projectId = data.projects[0].id
    sharedIssueFetcher.prepareWithProjectId(projectId);
    $scope.projects = data.projects;
    setTimeout(function(){
      $('*[data-tt-rel="project_' + projectId + '"]').parent()
                                                       .addClass("active");
    }, 10);

  }
}

projectsController.$inject = ['$scope',
                              '$http',
                              '$window',
                              'sharedIssueFetcher',
                              'redmineConfig'];
redmineJsApp.controller('ProjectsController', projectsController);
