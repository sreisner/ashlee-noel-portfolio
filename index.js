(function() {
  'use strict';

  var path = require('path');
  var express = require('express');
  var app = express();

  app.use('/', express.static(path.join(__dirname, 'app')));

  app.get('/app.js', function(request, response) {
    response.sendFile(path.join(__dirname, 'app', 'app.js'));
  });

  app.get('/api/art', function(request, response) {
    response.json('[{}, {}, {}]');
  });

  function start(port) {
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
