var express = require('express');
var router = express.Router();
var coursesCtrl = require('./courses.controller.js');
var lessonsCtrl = require('../lessons/lessons.controller.js');
var enrlCtrl = require('../enrollment/enrollment.controller.js');
var log = require('tracer').console({ format: "{{message}}  - {{file}}:{{line}}" }).log;
var verify = require('../../server/verify');

//GET users
// router.get('/', verify.user, coursesCtrl.listAll);


//Get Course
router.route('/')
    /**
     * @api {get} /courses/ Request All courses
     * @apiName listAll
     * @apiGroup Courses
     *
     * @apiParam {String} courses
     *
     * @apiSuccess {String} Gets all Courses.
     */
    .get(verify.user, coursesCtrl.listAll)

//Post a course

/**
 * @api {post} /courses/ Creates a course
 * @apiName Create
 * @apiGroup Courses
 *
 * @apiParam {String} courses 
 *
 * @apiSuccess {String} Creates Course with all it's details.
  * @apiError NoAccessRight Only Instructor can create a course.

 */
.post(verify.verifyInstructor, verify.unseal, coursesCtrl.create)

//remove all course

/**
 * @api {delete} /courses/ Deletes all course
 * @apiName remove
 * @apiGroup Courses
 *
 * @apiParam {String} courses
 *
 * @apiSuccess {String} Deletes Course with all it's details.
  * @apiError NoAccessRight Only Instructor and Admin can delete a course.

 */

.delete(verify.verifyInstructor, verify.verifyAdmin, verify.unseal, coursesCtrl.remove);

//By id
router.route('/:cid')
    /**
     * @api {get} /courses/:cid Gets a course by it's id 
     * @apiName listOne
     * @apiGroup Courses
     *
     * @apiParam {Number} id Course's ID.
     *
     * @apiSuccess {String} Gets a Course with all it's details.

     */
    .get(verify.user, coursesCtrl.listOne)

//delete a course
/**
 * @api {delete} /courses/:cid Deletes a course by Id
 * @apiName remove
 * @apiGroup Courses
 *
 * @apiParam {Number} course's ID
 *
 * @apiSuccess {String} Deletes a Course with All it's details.
  * @apiError NoAccessRight Only Instructor and Admin can delete a course.

 */
.delete(verify.verifyInstructor, verify.verifyAdmin, verify.unseal, coursesCtrl.remove);


router.route('/:cid/enrollment')

//create an enrollment
/**
 * @api {post} /courses/:cid/enrollment Creates an enrollment
 * @apiName createEnrl
 * @apiGroup Courses
 *
 * @apiParam {Number} Course's ID, student's ID. 
 *
 * @apiSuccess {String} Enrolls the student in the course by creating an enrollment Id.
  * @apiError NoAccessRight Only Student can enroll in a course.

 */
.post(verify.user, verify.unseal, verify.verifyStudent, enrlCtrl.createEnrl)

//get all enrollments for a specific course
/**
 * @api {get} /courses/:cid/enrollment Gets all enrollment
 * @apiName listAllEnrl
 * @apiGroup Courses
 *
 * @apiParam {Number} Course's ID.
 *
 * @apiSuccess {String} Gets all the student's enrollment Ids of a specific course.
  * @apiError NoAccessRight Only Admin can view the enrolled students.

 */
.get(verify.user, verify.unseal, verify.verifyAdmin, enrlCtrl.listAllEnrl)

//delete all enrollments
/**
 * @api {delete} /courses/:cid/enrollment Deletes all enrollment
 * @apiName removeAllEnrl
 * @apiGroup Courses
 *
 * @apiParam {Number} Course's ID.
 *
 * @apiSuccess {String} Deletes all enrollments of a specific course.
  * @apiError NoAccessRight Only Admin can delete the enrolled students.

 */
.delete(verify.user, verify.unseal, verify.verifyAdmin, enrlCtrl.removeAllEnrl);


router.route('/:cid/enrollment/:eid')

//get a specific enrollment id
/**
 * @api {get} /courses/:cid/enrollment/:eid Gets a specific enrollment with it's Id.
 * @apiName listSingleEnrl
 * @apiGroup Courses
 *
 * @apiParam {Number} Course's ID with Enrollment ID.
 *
 * @apiSuccess {String} Gets a single student's enrollment Id of a specific course.
  * @apiError NoAccessRight Only Admin can view the enrolled student.

 */
.get(verify.user, verify.unseal, verify.verifyInstructor, verify.verifyAdmin, enrlCtrl.listSingleEnrl)

//delete a specific enrollment id
/**
 * @api {delete} /courses/:cid/enrollment/:eid Deletes a specific enrollment with it's Id.
 * @apiName removeSingleEnrl
 * @apiGroup Courses
 *
 * @apiParam {Number} Course's ID with Enrollment ID.
 *
 * @apiSuccess {String} Deletes a single student's enrollment Id of a specific course.
  * @apiError NoAccessRight Only Admin can delete the enrolled student.

 */
.delete(verify.user, verify.unseal, verify.verifyAdmin, enrlCtrl.removeSingleEnrl);


router.route('/:cid/enrollment/:eid/lessons')

//complete an enrolled lessons 
/**
 * @api {post} /courses/:cid/enrollment/:eid/lessons Completes a single lesson.
 * @apiName completeSingleLesson
 * @apiGroup Courses
 *
 * @apiParam {Number} Enrollment ID.
 *
 * @apiSuccess {String} Completes a single lesson of a course.
  * @apiError NoAccessRight Only Student can complete a single lesson.

 */
.post(verify.user, verify.unseal, verify.verifyStudent, lessonsCtrl.completeSingleLesson);

router.route('/:cid/enrollment/:eid/lessons/:lid')

//get a specific lesson
/**
 * @api {get} /courses/:cid/enrollment/:eid/lessons/:lid Gets a specific enrollment's lesson with it's Id.
 * @apiName getSingleLesson
 * @apiGroup Courses
 *
 * @apiParam {Number} Course's ID with Enrollment ID with lesson ID.
 *
 * @apiSuccess {String} Gets a single lesson with enrollment Id of a specific course.
  * @apiError NoAccessRight Only Student can complete a lesson.

 */
.get(verify.user, verify.unseal, verify.verifyInstructor, verify.verifyStudent, lessonsCtrl.getSingleLesson)

//posts/checks a lesson as complete
/**
 * @api {post} /courses/:cid/enrollment/:eid/lessons/:lid Gets a specific enrollment's lesson with it's Id.
 * @apiName completeSingleLesson
 * @apiGroup Courses
 *
 * @apiParam {Number} Course's ID with Enrollment ID with lesson ID.
 *
 * @apiSuccess {String} Gets a single lesson with enrollment Id of a specific course.
  * @apiError NoAccessRight Only Instructor and student can view the Completed lesson.

 */
.post(verify.user, verify.unseal, verify.verifyStudent, lessonsCtrl.completeSingleLesson);




//lessons of a specific course0 
router.route('/:cid/lessons')

//creates a lesson
/**
 * @api {post} /courses/:cid/lessons Creates a lesson.
 * @apiName createLesson
 * @apiGroup Courses
 *
 * @apiParam {Number} Course's ID with Lesson
 *
 * @apiSuccess {String} Creates a lesson with it's ID and material.
  * @apiError NoAccessRight Only Instructor can create a lesson

 */
.post(verify.user, verify.unseal, verify.verifyInstructor, lessonsCtrl.createLesson)

//fetches all lessons
/**
 * @api {get} /courses/:cid/lessons Gets all lessons
 * @apiName getAllLesson
 * @apiGroup Courses
 *
 * @apiParam {Number} Course's ID with Lesson
 *
 * @apiSuccess {String} Creates a lesson with it's ID and material.
  

 */
.get(verify.user, verify.unseal, verify.verifyInstructor, verify.verifyStudent, lessonsCtrl.getAllLesson)

//delete all lessons
/**
 * @api {delete} /courses/:cid/lessons Deletes a lesson.
 * @apiName removeAllLesson
 * @apiGroup Courses
 *
 * @apiParam {Number} Course's ID with Lesson
 *
 * @apiSuccess {String} deletes all lessons with it's ID and material.
  * @apiError NoAccessRight Only Instructor can delete a lesson.

 */
.delete(verify.user, verify.unseal, verify.verifyInstructor, verify.verifyAdmin, lessonsCtrl.removeAllLesson);



//lessons with lesson id
router.route('/:cid/lessons/:lid')

//get a single lesson
/**
 * @api {get} /courses/:cid/lessons/:lid Gets a single lesson.
 * @apiName getSingleLesson
 * @apiGroup Courses
 *
 * @apiParam {Number} Course's ID with Lesson ID.
 *
 * @apiSuccess {String} Gets a lesson with it's ID and material.

 */
.get(verify.user, lessonsCtrl.getSingleLesson)

//remove a single lesson
/**
 * @api {delete} /courses/:cid/lessons/:lid Deletes a single lesson.
 * @apiName removeSingleLesson
 * @apiGroup Courses
 *
 * @apiParam {Number} Course's ID with Lesson ID.
 *
 * @apiSuccess {String} Deletes a lesson with it's ID and material.
  * @apiError NoAccessRight Only Instructor can delete a lesson

 */
.delete(verify.user, verify.unseal, verify.verifyAdmin, lessonsCtrl.removeSingleLesson);
// router.delete('/:id', coursesCtrl.create);



module.exports = router;
