(function() {
  'use strict';

  var DEFAULT_HOVER_ZOOM_SCALE = '1.1';
  var DEFAULT_HOVER_ZOOM_SPEED = '0.5';
  var DEFAULT_HOVER_ZOOM_FUNCTION = 'ease';
  var DEFAULT_PREVIEW_POSITION = '0';

  angular.module('App')
    .directive('imagePreview', function() {
      return {
        restrict: 'E',
        scope: {
          url: '@',
          hoverZoomScale: '@',
          hoverZoomSpeed: '@',
          hoverZoomFunction: '@',
          previewPosition: '@'
        },
        templateUrl: '/static/gallery/imagePreview/imagePreview.tmpl.min.html',
        link: function(scope, element, attrs) {
          var hoverZoomScale = attrs.hoverZoomScale || DEFAULT_HOVER_ZOOM_SCALE;
          var hoverZoomSpeed = attrs.hoverZoomSpeed || DEFAULT_HOVER_ZOOM_SPEED;
          var hoverZoomFunction = attrs.hoverZoomFunction || DEFAULT_HOVER_ZOOM_FUNCTION;
          var previewPosition = attrs.previewPosition || DEFAULT_PREVIEW_POSITION;

          var frame = angular.element(element.context.firstChild);
          var image = angular.element(frame.context.firstChild);
          image.bind('load', function(event) {
            var width = image.context.naturalWidth;
            var height = image.context.naturalHeight;

            var centerTransformCss;
            var previewPositionPercentage = previewPosition / 100;
            if(width > height) {
              image.addClass('wide');
              var originOffset = (previewPositionPercentage * image.width()) - (previewPositionPercentage * frame.width() - frame.width() / 2);
              image.context.style.transformOrigin = '' + originOffset + 'px ' + frame.height() / 2 + 'px';
              image.context.style.left = previewPosition + '%';
              centerTransformCss = 'translateX(-' + previewPosition + '%)';
            } else {
              image.addClass('tall');
              var originOffset = (previewPositionPercentage * image.height()) - (previewPositionPercentage * frame.height() - frame.height() / 2);
              image.context.style.transformOrigin = '' + frame.height() / 2 + 'px ' + originOffset + 'px';
              image.context.style.top = previewPosition + '%';
              centerTransformCss = 'translateY(-' + previewPosition + '%)';
            }

            image.context.style.transform = centerTransformCss;

            var zoomCss = 'scale(' + hoverZoomScale + ')';

            image.hover(function() {
              image.context.style.transform = centerTransformCss + ' ' + zoomCss;
            }, function() {
              image.context.style.transform = centerTransformCss;
            });

            image.context.style.transition = 'all ' + hoverZoomSpeed + 's ' + hoverZoomFunction;
          });
        }
      };
    });
})();
