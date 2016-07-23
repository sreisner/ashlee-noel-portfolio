(function() {
  'use strict';

  var app = angular.module('App');
  app.directive('divider', function() {
    return {
      restrict: 'E',
      templateUrl: '/static/divider/divider.tmpl.min.html',
      scope: {
        top: '@',
        bottom: '@',
        width: '@',
        thickness: '@',
        color: '@'
      },
      link: function(scope, element, attrs, ctrl) {
        var divider = element.find('.divider');
        divider.css('width', scope.width);
        divider.css('height', scope.thickness);
        divider.css('margin-top', scope.top);
        divider.css('margin-bottom', scope.bottom);
        divider.css('background-color', scope.color);
      }
    };
  });
})();
