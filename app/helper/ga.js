//TODO: incorporate update field for playlist

'use strict';

var GA = require('googleanalytics'),
    util = require('util');

module.exports = (function () {
    var getAnalyticsData = function (req, callback) {
       var config = {
            'user': 'hejdes@gmail.com',
            'password': ''
        };
        var ga = new GA.GA(config);

        //req.query.id
        ga.login(function (err, token) {
            var options = {
                'ids': 'ga:98252558',
                'start-date': req.query.startDate,
                'end-date': req.query.endDate,
                'dimensions': 'ga:dimension1,ga:dimension2',
                'metrics': 'ga:totalEvents',
                'sort': '-ga:totalEvents'
            };

            ga.get(options, function (err, entries) {
                util.debug(JSON.stringify(entries));
                callback(entries);
            });
        });
    };
    return {
        getAnalyticsData: getAnalyticsData
    };
}());