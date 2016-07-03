(function() {
  'use strict';

  angular.module('App')
    .directive('gallery', function() {
      return {
        restrict: 'E',
        templateUrl: '/static/gallery/gallery.tmpl.min.html',
        controller: 'GalleryController',
        controllerAs: 'vm'
      };
    });
})();
