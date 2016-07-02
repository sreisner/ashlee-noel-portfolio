(function() {
  'use strict';

  var fs = require('fs');
  var path = require('path');
  var express = require('express');
  var app = express();

  app.use('/static', express.static(path.join(__dirname, 'app', 'dist')));
  app.use('/images', express.static(path.join(__dirname, 'app', 'images')));

  app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'app', 'dist', 'index.min.html'));
  });

  app.get('/api/art', function(request, response) {
    fs.readdir('./app/images/art', function(err, files) {
      if(err) {
        console.log(error);
        return;
      }
      var data = files.map(function(file) {
        return {
          preview_url: '/images/art/' + file,
          full_url: '/images/art/' + file,
          name: file,
          width: 100,
          height: 100,
          medium: 'Unknown'
        };
      });

      response.json(JSON.stringify(data));
    });
  });

  app.listen(80);

  module.exports = app;
})();
