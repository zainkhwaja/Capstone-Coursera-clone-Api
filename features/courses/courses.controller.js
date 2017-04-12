var Courses = require('./courses.model.js');
var log = require('tracer').console({ format: "{{message}}  - {{file}}:{{line}}" }).log;


exports.listAll = function(req, res, next) {
    Courses.find({}, function(err, courses) {
        if (err) {
            return res.status(500).json({
                message: 'Could not get courses',
                success: false,
                data: err
            });
        }

        return res.status(200).json({
            message: 'Courses fetched',
            success: true,
            data: courses
        });

    });
};


exports.listOne = function(req, res, next) {
    Courses.findOne({ _id: req.params.cid }, function(err, courses) {
        if (err) {
            return res.status(500).json({
                message: 'Could not get courses',
                success: false,
                data: err
            });
        }

        if (courses == null) {
            return res.status(300).json({
                message: 'Course does not exist',
                success: true,
                data: null
            });
        };

        return res.status(200).json({
            message: 'Course fetched',
            success: true,
            data: courses
        });

    });
};


///Create a Course

exports.create = function(req, res) {

    Courses.create(req.body, function(err, courses) {
        if (err) {
            return res.status(500).json({
                message: 'Could not log in user',
                success: false,
                data: err
            });
        }
        log('Course created!');
        // var id = courses._id;

        return res.status(200).json({
            message: 'Course created',
            success: true,
            data: courses
        });

    });

};

//Remove a course


exports.remove = function(req, res, next) {
    console.log('Course removed');
    Courses.remove({ _id: req.params.id }, function(err, courses) {
        if (err) {
            return res.status(500).json({
                message: 'Could not find course',
                success: false,
                data: err
            });
            res.json({ message: 'Successfully deleted!' });
        }
        return res.status(200).json({
            message: 'Course deleted',
            success: true,
            data: courses
        });

    });

};

// exports.verifyUser = function (req, res) {
//   log(req._user);
//   User.findById(req._user._id, function (err, user) {
//     if (err) {
//       return res.status(500).json({
//         message: 'Something went wrong while finding user',
//         success: false,
//         data: null
//       });
//     }
//     auth.getLoginData(user).then(
//       function (data) {
//         log(data);
//         return res.status(200).json({
//           message: 'User Data',
//           success: true,
//           data: data
//         });
//       },
//       function (err) {
//         console.log(err);
//         return res.status(500).json({
//           message: 'Something went wrong while getting data ',
//           success: false,
//           data: null
//         });
//       }
//     );
//   });
// };

// exports.logout = function (req, res) {
//   req.logout();
//   res.status(200).json({
//     message: 'logout',
//     success: true,
//     data: null
//   });
// };
