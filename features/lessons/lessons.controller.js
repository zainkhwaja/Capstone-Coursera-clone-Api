var Courses = require('../courses/courses.model.js');
var log = require('tracer').console({ format: "{{message}}  -  {{file}} : {{line}}" }).log;

//creates a lesson 
exports.createLesson = function(req, res) {

    Courses.findById(req.params.cid, function(err, course) {
        if (err) {
            return res.status(500).json({
                message: 'Could not log in user',
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
        var obj = {
            title: req.body.title,
            lessDescription: req.body.lessDescription
        }

        course.lessons.push(obj);

        course.save(function(err, updatedCourse) {
            if (err) {
                return res.status(500).json({
                    message: 'Something went wrong',
                    success: false,
                    data: err
                });
            }
            return res.status(200).json({
                message: 'Lesson created',
                success: true,
                data: updatedCourse
            });
        })

    });

};

//gets a single lesson
exports.getSingleLesson = function(req, res, next) {
    Courses.findById(req.params.cid, function(err, course, lessons) {
        if (err) {
            return res.status(500).json({
                message: 'Could not get lesson',
                success: false,
                data: err
            });
        }
        var obj;

        for (var i = 0; i < course.lessons.length; i++) {
            if (course.lessons[i]._id == req.params.lid) {
                obj = course.lessons[i];
            }
        }
        return res.status(200).json({
            message: 'Lessons Fetched',
            success: true,
            data: obj
        });
    });
};

//completes a single lesson
exports.completeSingleLesson = function(req, res) {
    Courses.findById(req.params.cid, function(err, course) {
        if (err) {
            return res.status(500).json({
                message: 'Could not get lesson',
                success: false,
                data: err
            });
        }
        var obj;
        var status = false;
        // log(course.lessons);
        for (var i = 0; i < course.lessons.length; i++) {
            // log(course.lessons[i]._id, req.params.lid);
            if (course.lessons[i]._id == req.params.lid) {
                obj = course.lessons[i];

                for (var j = 0; j < course.enrollment.length; j++) {
                    // log(course.enrollment[j].student, req._user._id);
                    if (course.enrollment[j].student == req._user._id) {
                        if (course.enrollment[j].completedLessons.length == 0) {
                            course.enrollment[j].completedLessons.push(course.lessons[i]._id);
                        } else {

                            var matched = course.enrollment[j].completedLessons.filter(function(o) {
                                    if (o == course.lessons[i]._id) {
                                        return o
                                    }
                                })
                                // log(matched);
                            if (matched.length == 0) {
                                course.enrollment[j].completedLessons.push(course.lessons[i]._id);
                            } else {
                                status = true
                            }
                        }


                    }
                    // log(course.enrollment[j].completedLessons.length, course.lessons.length);





                    if (course.enrollment[j].completedLessons.length === course.lessons.length) {

                        // log(course.enrollment[j].completedAll);
                        course.enrollment[j].completedAll = true
                        // course.enrollment[j].rating = { 1, 2, 3, 4, 5 };

                    }
                }
            }
        }
        if (!status) {
            course.save(function(err, course) {
                if (err) {
                    return res.status(500).json({
                        message: 'Something went wrong while saving course',
                        success: false,
                        data: err
                    });
                }
                return res.status(200).json({
                    message: 'Lesson Completed',
                    success: true,
                    data: course
                });
            })
        } else {
            return res.status(200).json({
                message: 'Already completed lesson',
                success: true,
                data: course
            });
        }


    });

};


// exports.completeAllLesson = function(req, res) {
//     Courses.findById(req.params.cid, function(err, course) {

//         if (err) {
//             return res.status(500).json({
//                 message: 'Could not get lesson',
//                 success: false,
//                 data: err
//             });
//         }

//         if (courses.lessons.length == course.enrollment.length) {
//             return res.status(200).json({
//                 message: 'Lessons completed',
//                 success: true,
//                 data: course

//             });
//             courses.enrollment.completedAll == true;
//         }
//     });
// };



//gets all lessons 
exports.getAllLesson = function(req, res, next) {
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
            message: 'All lessons fetched of single course',
            success: true,
            data: course.lessons
        });

    });
};

//removes all lessons
exports.removeAllLesson = function(req, res, next) {

    Courses.findByIdAndUpdate(req.params.cid, { lessons: [] }, { new: true },
        function(err, updateResponse) {
            if (err) {
                return res.status(500).json({
                    message: 'Could not find course',
                    success: false,
                    data: err
                });
            }
            return res.status(200).json({
                message: 'lessons Deleted',
                success: true,
                data: updateResponse
            });
        });

};

//removes a single lesson
exports.removeSingleLesson = function(req, res, next) {

    Courses.findByIdAndUpdate(req.params.cid, { $pull: { lessons: { _id: req.params.lid } } }, { new: true },
        function(err, updateResponse) {
            if (err) {
                return res.status(500).json({
                    message: 'Could not log in user',
                    success: false,
                    data: err
                });
            }
            return res.status(200).json({
                message: 'lessons Deleted',
                success: true,
                data: updateResponse
            });
        });
};
