(function() {
  'use strict';

  angular.module('App')
    .directive('imageModal', function() {
      return {
        restrict: 'E',
        templateUrl: '/static/gallery/imageModal/imageModal.tmpl.min.html',
        controller: 'ImageModalController',
        controllerAs: 'vm',
        scope: {
          image: '@'
        },
        link: function(scope, element, attrs) {
          angular.element(element).context.firstChild.style.top = window.scrollY + 'px';
          $("body").css("overflow", "hidden");
          scope.$on('modalClose', function() {
            $("body").css("overflow", "visible");
          });
        }
      };
    });
})();
