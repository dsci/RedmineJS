## RedmineJS

This is just a playground to get familiar with Angular.js and calling a webservice (in this case any Redmine installation to use JSONP).

It's written in vanilla JavaScript using Yeoman for workflow.

### Usage

It's not production ready. You have to provide your access token and base uri of your Redmine installation in ```app.js```.

```javascript
var RedmineConfig = function(){
  this.apiKey = '12u3uehgsfdfstd626616112292832ejajhsq7371271';
  this.baseUri = 'http://redmine.example.com';
  this.routes = {
    issues: '/issues',
    users: '/users',
    projects: '/projects'
  };
};
```

Run

```
grunt server
```

Author: Daniel Schmidt

:email: dsci@code79.net
:octocat: dsci
