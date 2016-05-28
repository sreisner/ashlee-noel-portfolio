(function() {
  'use strict';

  var path = require('path');
  var express = require('express');
  var app = express();

  app.use('/static', express.static(path.join(__dirname, 'app', 'dist')));
  app.use('/images', express.static(path.join(__dirname, 'app', 'images')));

  app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'app', 'dist', 'index.min.html'));
  });

  app.get('/api/art', function(request, response) {
    response.json('[{}, {}, {}]');
  });

  function start(port) {
    var port = port || 80;
    app.listen(port, function() {
      console.log(`App running on port ${port}`);
    });
  }

  if(require.main === module) {
    start(process.argv[2]);
  } else {
    module.exports = {
      start: start
    };
  }
})();
