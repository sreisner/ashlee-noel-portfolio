(function() {
  'use strict';

  angular.module('App')
    .config(
      [
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
          $urlRouterProvider.otherwise('/');
          $stateProvider
            .state('landing', {
              url: '/',
              templateUrl: '/static/landing/landing.tmpl.min.html'
            })
            .state('gallery', {
              url: '/gallery',
              templateUrl: '/static/gallery/gallery.tmpl.min.html',
              controller: 'GalleryController',
              controllerAs: 'vm'
            })
            .state('about', {
              url: '/about',
              templateUrl: '/static/about/about.tmpl.min.html'
            });
        }
      ]
    );
})()
