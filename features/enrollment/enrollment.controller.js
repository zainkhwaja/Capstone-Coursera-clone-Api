var Courses = require('../courses/courses.model.js');
var log = require('tracer').console({ format: "{{message}}  -  {{file}} : {{line}}" }).log;


exports.createEnrl = function(req, res) {

    Courses.findOne({ _id: req.params.cid, 'enrollment.student': { $ne: req._user._id } }, function(err, course) {
        if (err) {
            return res.status(500).json({
                message: 'Could not log in user',
                success: false,
                data: err
            });
        }
        if (!course || course == null) {
            return res.status(200).json({
                message: 'user with this Id already exists in the course!',
                success: true,
                data: null
            });
        }
        var objEnr = {
            student: req._user._id,
            completedLessons: [],
        };

        log(objEnr);

        //if (studentId == )
        course.enrollment.push(objEnr);

        course.save(function(err, enrolledStudent) {
            if (err) {
                return res.status(500).json({
                    message: 'Something went wrong',
                    success: false,
                    data: err
                });
            }
            return res.status(200).json({
                message: 'You are now enrolled',
                success: true,
                data: enrolledStudent
            });
        })

    });

}

exports.listSingleEnrl = function(req, res) {

    Courses.findById(req.params.cid, function(err, course, enrollment) {
        if (err) {
            return res.status(500).json({
                message: 'Could not get enrollment',
                success: false,
                data: err
            });
        }
        var obj;

        for (var i = 0; i < course.enrollment.length; i++) {
            if (course.enrollment[i]._id == req.params.eid) {
                obj = course.enrollment[i];
            }
        }
        return res.status(200).json({
            message: 'enrollment Fetched',
            success: true,
            data: obj
        });
    });

};


exports.listAllEnrl = function(req, res) {

    Courses.findById(req.params.cid, function(err, course) {
        if (err) {
            return res.status(500).json({
                message: 'Could not get lesson',
                success: false,
                data: err
            });
        }
        if (!course || course == null) {
            return res.status(200).json({
                message: 'Course Not Found. Please check course Id',
                success: true,
                data: null
            });
        }

        return res.status(200).json({
            message: 'All Enrollments fetched of single course',
            success: true,
            data: course.enrollment
        });

    });

}

exports.removeSingleEnrl = function(req, res, next) {

    Courses.findByIdAndUpdate(req.params.cid, { $pull: { enrollment: { _id: req.params.eid } } }, { new: true },
        function(err, enrollmentResponse) {
            if (err) {
                return res.status(500).json({
                    message: 'Could not find enrollment',
                    success: false,
                    data: err
                });
            }
            return res.status(200).json({
                message: 'Enrollment Deleted',
                success: true,
                data: enrollmentResponse
            });
        });


};

exports.removeAllEnrl = function(req, res) {

    Courses.findByIdAndUpdate(req.params.cid, { enrollment: [] }, { new: true },
        function(err, updateResponse) {
            if (err) {
                return res.status(500).json({
                    message: 'Could not find course',
                    success: false,
                    data: err
                });
            }
            return res.status(200).json({
                message: 'Enrollments Deleted',
                success: true,
                data: updateResponse
            });
        });

}




// exports.removeAllEnrl
