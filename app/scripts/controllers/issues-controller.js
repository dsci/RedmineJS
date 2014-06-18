'use strict';

var issuesController = function($scope,
                                $http,
                                $routeParams,
                                requester,
                                redmineConfig){

  this.getIssuesFromServer = function(projectId){
    var url = redmineConfig.route("issues");
    var config = {
      params: {
        "key" : redmineConfig.apiKey,
        "assigned_to": 6,
        "limit" : 100,
        "project_id" : projectId
      },
      // should not be created by hand.
      callbackName: "issuesHandler"
    }
    requester.fetch(url, config, function(data){
      $scope.issues = data.issues;
      var rootId = $('*[data-tt-rel="project_' + projectId + '"]').parent()
                                                                  .parent()
                                                                  .attr('id');
      console.log(rootId);
      $('#' + rootId + ' li.active').each(function(){
        $(this).removeClass('active');
      });
      $('*[data-tt-rel="project_' + projectId + '"]').parent().addClass("active");

    });
  };
  this.getIssuesFromServer($routeParams.id);
}

issuesController.$inject = ["$scope",
                            "$http",
                            "$routeParams",
                            "requester",
                            "redmineConfig"];
redmineJsApp.controller('IssuesController', issuesController);
