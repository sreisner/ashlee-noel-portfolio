(function() {
  'use strict';

  angular.module('App')
    .controller('NavController', [
        '$scope',
        '$route',
        function($scope, $route) {
          this.setSelectedTab = function() {
            this.selectedTab = $route.current.$$route.originalPath;
          };

          this.setSelectedTab();

          var vm = this;
          $scope.$on('$routeChangeSuccess', function() {
            vm.setSelectedTab();
          });
        }
      ]
    );
})();
