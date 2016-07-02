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
              templateUrl: '/static/gallery/gallery.tmpl.min.html',
              controller: 'GalleryController',
              controllerAs: 'vm'
            })
            .otherwise({
              redirectTo: '/'
            });
        }
      ]
    );
})()
