'use strict';

var RedmineConfig = function(){
  this.apiKey = '<API KEY HERE>';
  this.baseUri = '<BASE URI HERE >';
  this.routes = {
    issues: '/issues',
    users: '/users',
    projects: '/projects'
  };
};

RedmineConfig.prototype.route = function(routeName){
  var route = "";
  if(this.routes.hasOwnProperty(routeName)){
    route = this.baseUri;
    route += this.routes[routeName];
    route += ".json";
  }
  return route;
}

/*
var module = angular.module("configs");
module.value("RedmineConfig", RedmineConfig);
*/
var markdownCompilerModule = angular.module('mdown', []);

markdownCompilerModule.factory('Compiler', function(){
  return{
    compile: function(source){
      return window.marked(source);
    }
  }
});

window.redmineJsApp = angular.module('redmineJsApp', ['ngRoute', 'mdown', 'ngSanitize']);
window.redmineJsApp.value("redmineConfig", new RedmineConfig());

var authorizationInterceptor = function(redmineConfig){
  return{
    request: function(config){
      config.headers = {'X-Redmine-API-Key': redmineConfig.apiKey};
      return config;
    }
  }
}

redmineJsApp.factory('authInterceptor', authorizationInterceptor);

var jsonpCallbackProvider = function(){
  this.$get = function(){
    return {
      initAngularCallbacks: function($window){
        var c = $window.angular.callbacks.counter.toString(36);

        $window['angularcallbacks_' + c] = function (data) {
          $window.angular.callbacks['_' + c](data);
          delete $window['angularcallbacks_' + c];
        };
      }
    }
  }
}
//jsonpCallbackProvider.$inject
redmineJsApp.provider('jsonpCallbackProvider', jsonpCallbackProvider);

var requester = function($http,$window){
  this.fetch = function(url, config, cb){
    var callbackName = "angular_mine_cb_";
    callbackName += parseInt(Math.random(999999)*100).toString();
    //var callbackName = config.callbackName;
    if(config.callbackName){
      delete config.callbackName;
    }
    url += "?callback=" + callbackName;
    $window[callbackName] = function(data){
      cb(data);
    }
    $http.jsonp(url, config);
  }
}

requester.inject = ['$http','$window'];
redmineJsApp.service('requester',requester);

// There is also a way without injecting:
// redmineJSApp.service('fetchIssuesService', ['$http', '$window', fetchIssuesService]);

// http://stackoverflow.com/questions/9293423/can-one-controller-call-another-in-angularjs
var sharedIssueFetcher = function($rootScope){
  var sharedService = {};

  sharedService.prepareWithProjectId = function(id){
    this.projectId = id;
    this.broadcastIssueFetch();
  };

  sharedService.broadcastIssueFetch = function(){
    $rootScope.$broadcast('handleIssueFetchBroadcast');
  }

  return sharedService;
}

sharedIssueFetcher.$inject = ['$rootScope'];
redmineJsApp.factory('sharedIssueFetcher', sharedIssueFetcher);

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
redmineJsApp.filter('startFrom', function() {
    return function(input, start) {
      if(typeof(input) != "undefined"){

        start = +start; //parse to int
        return input.slice(start);
      }
    }
});

redmineJsApp.config(["$routeProvider", "$httpProvider",
                    function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/issues.html',
      controller: 'MainCtrl'
    }).
    when('/projects/:id', {
      templateUrl: 'views/issues.html',
      controller: 'IssuesController'
    }).
    when('/issues/:id', {
      templateUrl: 'views/issues/show.html',
      controller: 'IssueDetailController'
    }).
    when('/users', {
      templateUrl: 'views/users/index.html',
      controller: 'UsersController'
    })
    .otherwise({
      redirectTo: '/'
    });
  $httpProvider.interceptors.push('authInterceptor');
}]);
