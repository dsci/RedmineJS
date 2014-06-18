'use strict';

var usersController = function($scope, requester, redmineConfig){
  var url = redmineConfig.route("users");
  var config = {
    params: {
      "key"   : redmineConfig.apiKey,
      "limit" : 100
    }
  }
  requester.fetch(url,config, function(data){
    $scope.users = data.users;
  });
}

usersController.$inject = ["$scope", "requester", "redmineConfig"];
redmineJsApp.controller("UsersController", usersController);
