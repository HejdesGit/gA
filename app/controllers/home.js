var express = require('express'),
  router = express.Router(),
    ga = require('../helper/ga')

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
     ga.getAnalyticsData(req, function(analyticsData) {
        res.json(analyticsData);
    });

});