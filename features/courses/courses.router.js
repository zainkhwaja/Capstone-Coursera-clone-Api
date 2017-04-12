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
    //Get all courses
    .get(verify.user, coursesCtrl.listAll)

//Post a course
.post(verify.verifyInstructor, verify.unseal, coursesCtrl.create)

//remove all course
.delete(verify.verifyInstructor, verify.verifyAdmin, verify.unseal, coursesCtrl.remove);

//By id
router.route('/:cid')
    //get a single course
    .get(verify.user, coursesCtrl.listOne)

//delete a course
.delete(verify.verifyInstructor, verify.verifyAdmin, verify.unseal, coursesCtrl.remove);


router.route('/:cid/enrollment')

//create an enrollment
.post(verify.verifyStudent, verify.unseal, enrlCtrl.createEnrl)

//get all enrollments for a specific course
.get(verify.verifyAdmin, verify.unseal, enrlCtrl.listAllEnrl)

//delete all enrollments
.delete(verify.verifyAdmin, verify.unseal, enrlCtrl.removeAllEnrl);


router.route('/:cid/enrollment/:eid')

//get a specific enrollment id
.get(verify.verifyInstructor, verify.verifyAdmin, verify.unseal, enrlCtrl.listSingleEnrl)

//delete a specific enrollment id
.delete(verify.verifyAdmin, verify.unseal, enrlCtrl.removeSingleEnrl);


router.route('/:cid/enrollment/:eid/lessons')

//complete an enrolled lessons 
.post(verify.verifyStudent, verify.unseal, lessonsCtrl.completeSingleLesson);

router.route('/:cid/enrollment/:eid/lessons/:lid')

//get a specific lesson
.get(verify.verifyInstructor, verify.verifyStudent, verify.unseal, lessonsCtrl.getSingleLesson)

//posts/checks a lesson as complete
.post(verify.verifyStudent, verify.unseal, lessonsCtrl.completeSingleLesson);

// .post(verify.user, verify.unseal, lessonsCtrl.completeAllLesson)



//lessons of a specific course0 
router.route('/:cid/lessons')

//creates a lesson
.post(verify.verifyInstructor, verify.unseal, lessonsCtrl.createLesson)

//fetches all lessons
.get(verify.verifyInstructor, verify.verifyStudent, verify.unseal, lessonsCtrl.getAllLesson)

//delete all lessons
.delete(verify.verifyInstructor, verify.verifyAdmin, verify.unseal, lessonsCtrl.removeAllLesson);



//lessons with lesson id
router.route('/:cid/lessons/:lid')

//get a single lesson
.get(lessonsCtrl.getSingleLesson)

//remove a single lesson
.delete(verify.verifyAdmin, verify.unseal, lessonsCtrl.removeSingleLesson);
// router.delete('/:id', coursesCtrl.create);



module.exports = router;
