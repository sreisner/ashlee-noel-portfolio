(function() {
  'use strict';

  angular.module('App')
    .controller('ImageModalController', [
      '$scope',
      function($scope) {
        this.image = JSON.parse($scope.image);

        this.close = function() {
          $scope.$emit('modalClose');
        };
      }
    ]);
})();
