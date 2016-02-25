(function() {
  'use strict';
  var app = angular.module('app', ['ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/projects', {
        templateUrl: 'partials/projects.html'
      }).
      when('/resume', {
        templateUrl: 'partials/resume.html'
      }).
      when('/skills', {
        templateUrl: 'partials/skills.html'
      })
      .when('/home', {
        templateUrl: 'partials/welcome.html'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }]);
})();
