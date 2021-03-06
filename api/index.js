(function() {
    'use strict';

    /* global require */
    var express = require('express'),
        app = module.exports = express(),
        v1 = require('./v1');

    /**
     * @api {get} / APi entry point
     * @apiName GetRoot
     * @apiGroup API
     *
     * @apiSuccess (200) 200 OK
     *
     * @apiSuccessExample {json} Success-Response:
     *       HTTP/1.1 OK
     *       {
     *            "_links": {
     *                  "self": {
     *                    "href": "/api"
     *                }
     *            },
     *            "v1": {
     *                "href": "/api/v1"
     *           }
     *       }
     */
    app.get('/api/', function(req, res) {
        res.status = 200;
        res.send({
            '_links': {
                'self': {
                    'href': '/api/'
                },
                'v1': {
                    'href': '/api/v1'
                }
            }
        });
    });

    app.use(v1); /* API version 1 */
})();
