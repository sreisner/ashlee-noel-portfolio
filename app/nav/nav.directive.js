(function() {
  'use strict';

  var app = angular.module('App');
  app.directive('appNav', function() {
    return {
      restrict: 'E',
      templateUrl: '/static/nav/nav.tmpl.min.html'
    };
  });
})();
