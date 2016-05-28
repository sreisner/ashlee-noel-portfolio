(function() {
  'use strict';

  angular.module('App')
    .controller('GalleryController', ['$http', function($http) {
      var self = this;
      var art = [];

      $http.get('/api/art')
        .then(function(response) {
          self.art = JSON.parse(response.data);
        })
        .catch(function(reason) {
          alert('Error!  See console for details.');
          console.log(reason);
        });
    }]);
})();
