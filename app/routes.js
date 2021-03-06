(function() {
  'use strict';

  angular.module('App')
    .config(
      [
        '$routeProvider',
        function($routeProvider) {
          $routeProvider
            .when('/', {
              template: '<gallery></gallery>'
            })
            .when('/about', {
              templateUrl: '/static/about/about.tmpl.min.html',
            })
            .otherwise({
              redirectTo: '/'
            });
        }
      ]
    );
})()
