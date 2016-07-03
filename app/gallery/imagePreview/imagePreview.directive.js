(function() {
  'use strict';

  var DEFAULT_HOVER_ZOOM_SCALE = '1.1';
  var DEFAULT_HOVER_ZOOM_SPEED = '0.5';
  var DEFAULT_HOVER_ZOOM_FUNCTION = 'ease';
  var DEFAULT_DISPLAY = 'center';
  var DEFAULT_TRANSFORM_ORIGIN = '50% 50%';

  angular.module('App')
    .directive('imagePreview', function() {
      return {
        restrict: 'E',
        scope: {
          url: '@',
          hoverZoomScale: '@',
          hoverZoomSpeed: '@',
          hoverZoomFunction: '@',
          display: '@'
        },
        templateUrl: '/static/gallery/imagePreview/imagePreview.tmpl.min.html',
        link: function(scope, element, attrs) {
          var hoverZoomScale = attrs.hoverZoomScale || DEFAULT_HOVER_ZOOM_SCALE;
          var hoverZoomSpeed = attrs.hoverZoomSpeed || DEFAULT_HOVER_ZOOM_SPEED;
          var hoverZoomFunction = attrs.hoverZoomFunction || DEFAULT_HOVER_ZOOM_FUNCTION;
          var display = attrs.display || DEFAULT_DISPLAY;

          var image = element.find('img');

          var transitionCss = 'all ' + hoverZoomSpeed + 's ' + hoverZoomFunction;
          var transformCss = 'scale(' + hoverZoomScale + ')';

          image.bind('load', function(img) {
            var imgElement = angular.element(img.target);
            var width = imgElement[0].naturalWidth;
            var height = imgElement[0].naturalHeight;
            if(width > height) {
              imgElement.innerHeight(element.height());
              if(display === 'start') {
                element.css('align-items', 'flex-start');
                imgElement.css('transform-origin', '25% 50%');
              } else if(display === 'center') {
                element.css('align-items', 'center');
                imgElement.css('transform-origin', '50% 50%');
              } else if(display === 'end') {
                element.css('align-items', 'flex-end');
                imgElement.css('transform-origin', '75% 50%');
              } else {
                element.css('align-items', 'center');
                imgElement.css('transform-origin', DEFAULT_TRANSFORM_ORIGIN);
              }
            } else {
              imgElement.innerWidth(element.width());
              if(display === 'start') {
                element.css('align-items', 'flex-start');
                imgElement.css('transform-origin', '50% 25%');
              } else if(display === 'center') {
                element.css('align-items', 'center');
                imgElement.css('transform-origin', '50% 50%');
              } else if(display === 'end') {
                element.css('align-items', 'flex-end');
                imgElement.css('transform-origin', '50% 75%');
              } else {
                element.css('align-items', 'center');
                imgElement.css('transform-origin', DEFAULT_TRANSFORM_ORIGIN);
              }
            }
          });

          image.css('transition', transitionCss);
          image.hover(function() {
            image.css('transform', transformCss);
          }, function() {
            image.css('transform', 'scale(1)');
          });

        }
      };
    });
})();
