'use strict';

var issueDetailController = function($scope,
                                     $http,
                                     $routeParams,
                                     requester,
                                     redmineConfig){
  var issueId = $routeParams.id;
  var url = "http://issues.datenspiel.eu/issues/:id.json";
  url = url.replace(/:id/, issueId);
  var config = {
    params: {
      key: redmineConfig.apiKey,
      include: "journals, children, relations, attachments"
    }
  }
  requester.fetch(url, config, function(data){
    $scope.issue = data.issue;
    $scope.comments = data.issue.journals;
    console.log($scope.comments);
  });

}

issueDetailController.$inject = ["$scope",
                                 "$http",
                                 "$routeParams",
                                 "requester",
                                 "redmineConfig"];
redmineJsApp.controller('IssueDetailController', issueDetailController);
