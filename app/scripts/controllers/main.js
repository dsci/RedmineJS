'use strict';

var mainController = function($scope,
                              $http,
                              requester,
                              sharedIssueFetcher,
                              redmineConfig){
  var config = {
    params: {
      "key" : redmineConfig.apiKey,
      "assigned_to": 6,
      "limit" : 100
    },
    callbackName: 'myHandler'
  };
  var url = redmineConfig.route("issues");
  $scope.$on('handleIssueFetchBroadcast', function(){
    config.params.project_id = sharedIssueFetcher.projectId;
    requester.fetch(url, config, function(data){
      $scope.issues = data.issues;
    });
  });
};

mainController.$inject = ['$scope',
                          '$http',
                          'requester',
                          'sharedIssueFetcher',
                          'redmineConfig'];
redmineJsApp.controller('MainCtrl', mainController);
