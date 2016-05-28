(function() {
  'use strict';

  var app = angular.module('App', ['ui.router']);

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: '/landing/landing.tmpl.html'
      })
      .state('gallery', {
        url: '/gallery',
        templateUrl: '/gallery/gallery.tmpl.html',
        controller: '/gallery/galleryController.js',
        controllerAs: 'vm'
      })
      .state('about', {
        url: '/about',
        templateUrl: '/about/about.tmpl.html'
      });
  });
})();
