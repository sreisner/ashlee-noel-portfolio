(function() {
  'use strict';

  angular.module('App')
    .controller('GalleryController', ['$http', function($http) {
      var self = this;
      this.art = [];

      $http.get('/api/art')
        .then(function(response) {
          self.art = JSON.parse(response.data);
          self.art = _.concat(self.art, self.art, self.art, self.art);
          console.log(self.art);
        })
        .catch(function(reason) {
          alert('Error!  See console for details.');
          console.log(reason);
        });

    }]);
})();
