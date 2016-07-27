(function() {
  'use strict';

  angular.module('App')
    .controller('GalleryController', ['$http', '$scope', function($http, $scope) {
      this.setCurrentlyDisplayedImage = function(image) {
        this.displayModal = true;
        this.selectedImage = image;
      };

      var vm = this;
      this.art = [];
      this.displayModal = false;
      this.selectedImage = {};

      $http.get('/api/art')
        .then(function(response) {
          vm.art = JSON.parse(response.data);
        })
        .catch(function(reason) {
          alert('Error!  See console for details.');
          console.log(reason);
        });
    }]);
})();
