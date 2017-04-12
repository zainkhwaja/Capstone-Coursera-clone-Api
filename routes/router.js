var express = require('express');
var users = require('../features/users/user.router');
var courses = require('../features/courses/courses.router');
var log = require('tracer').console({ format: "{{message}}  - {{file}}:{{line}}" }).log;
var verify = require('../server/verify');

module.exports = function(app, config, models) {
    var router = express.Router();



    router.use('/users', users);
    // router.use('/courses', courses);

    router.use('/courses', courses);


    app.use('/api', router);
};
