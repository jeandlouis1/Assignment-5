var config = require('./config'), 
    mongoose = require('mongoose'),   
    express = require('./express');
    var port = process.env.PORT || 8080;


// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));
module.exports.start = function() {
  var app = express.init();
  app.listen(port, function() {
    console.log('App listening on port', port);
  });
};