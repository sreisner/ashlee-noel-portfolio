(function() {
  'use strict';

  var app = angular.module('App');
  app.directive('appNav', function() {
    return {
      restrict: 'E',
      templateUrl: '/static/nav/nav.tmpl.min.html',
      controller: 'NavController',
      controllerAs: 'vm',
      link: function(_, element) {
        var img = element.find('#logo-img')[0];
        setLogoImage(img);
        window.onresize = function(event) {
          setLogoImage(img);
        };

        var navLinks = element.find('.site-link');
        Array.prototype.forEach.call(navLinks, function(navLink) {
          console.log(navLink);
          navLink.onclick = function() {
            if(window.innerWidth < 800) {
              var top = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
              $('html,body').animate({ scrollTop: top }, 300);
            }
          };
        });
      }
    };
  });

  function setLogoImage(imgElement) {
    if(window.innerWidth < 800) {
      imgElement.src = '/images/mobile logo black.png';
    } else {
      imgElement.src = '/images/scrolled-logo-black.png';
    }
  }
})();
