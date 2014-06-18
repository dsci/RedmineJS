'use strict';

var newCommentController = function($scope, $http,$window,Compiler,redmineConfig){
  $scope.issue = $scope.$parent.issue;

  $scope.postNewComment = function(){
    console.log($scope.$parent.issue);
    var config = {
      params:{
        key : redmineConfig.apiKey
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
      }
    }
    var data = {
      issue:
        {
          journals: [
            {
              notes: "Hello boy!"
            }
          ]
        }
    }
    var url = redmineConfig.baseUri + "/issues/1493.json?callback=mCall&key=68acc5be725dcbb1553fa82d899e75690bb1e4b9"
    //$http.put(url, data, config)
    $http({method: 'PUT', url: url, config: config, data:data});
    console.log($scope.comment_form);
    $window.mCall = function(data){
      console.log("callback");
      console.log(data);
    }
  }
}

newCommentController.$inject = ["$scope", "$http", "$window", "Compiler"];
redmineJsApp.controller("NewCommentController", newCommentController);
