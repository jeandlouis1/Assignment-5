var //config = require('../config/config'), 
    request = require('request');
    var key = process.env.KEY;

module.exports = function(req, res, next) {
  if(req.body.address) {
    var options = {
      key: key, 
      address: req.body.address
    }
    request({
      url: 'https://maps.googleapis.com/maps/api/geocode/json', 
      qs: options
      }, function(error, response, body) {
        if(error) {
          res.status(400).send(err);
        } 

        var data = JSON.parse(body);
        req.results = data.results[0].geometry.location;
        next();
    });
  } else {
    next();
  }
};  