(function() {
  'use strict';

  angular.module('App')
    .config(
      [
        '$routeProvider',
        function($routeProvider) {
          $routeProvider
            .when('/', {
              templateUrl: '/static/landing/landing.tmpl.min.html'
            })
            .when('/gallery', {
              template: '<gallery></gallery>',
            })
            .otherwise({
              redirectTo: '/'
            });
        }
      ]
    );
})()
