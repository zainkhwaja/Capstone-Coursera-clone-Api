define({ "api": [
  {
    "type": "post",
    "url": "/courses/",
    "title": "Creates a course",
    "name": "Create",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courses",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Creates",
            "description": "<p>Course with all it's details.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only Instructor can create a course.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/courses/:cid/enrollment/:eid/lessons/:lid",
    "title": "Gets a specific enrollment's lesson with it's Id.",
    "name": "completeSingleLesson",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Course",
            "description": "<p>'s ID with Enrollment ID with lesson ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Gets",
            "description": "<p>a single lesson with enrollment Id of a specific course.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only Instructor and student can view the Completed lesson.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/courses/:cid/enrollment/:eid/lessons",
    "title": "Completes a single lesson.",
    "name": "completeSingleLesson",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Enrollment",
            "description": "<p>ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Completes",
            "description": "<p>a single lesson of a course.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only Student can complete a single lesson.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/courses/:cid/enrollment",
    "title": "Creates an enrollment",
    "name": "createEnrl",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Course",
            "description": "<p>'s ID, student's ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Enrolls",
            "description": "<p>the student in the course by creating an enrollment Id.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only Student can enroll in a course.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "/courses/:cid/lessons",
    "title": "Creates a lesson.",
    "name": "createLesson",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Course",
            "description": "<p>'s ID with Lesson</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Creates",
            "description": "<p>a lesson with it's ID and material.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only Instructor can create a lesson</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/:cid/lessons",
    "title": "Gets all lessons",
    "name": "getAllLesson",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Course",
            "description": "<p>'s ID with Lesson</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Creates",
            "description": "<p>a lesson with it's ID and material.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/:cid/enrollment/:eid/lessons/:lid",
    "title": "Gets a specific enrollment's lesson with it's Id.",
    "name": "getSingleLesson",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Course",
            "description": "<p>'s ID with Enrollment ID with lesson ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Gets",
            "description": "<p>a single lesson with enrollment Id of a specific course.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only Student can complete a lesson.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/:cid/lessons/:lid",
    "title": "Gets a single lesson.",
    "name": "getSingleLesson",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Course",
            "description": "<p>'s ID with Lesson ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Gets",
            "description": "<p>a lesson with it's ID and material.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/",
    "title": "Request All courses",
    "name": "listAll",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courses",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Gets",
            "description": "<p>all Courses.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/:cid/enrollment",
    "title": "Gets all enrollment",
    "name": "listAllEnrl",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Course",
            "description": "<p>'s ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Gets",
            "description": "<p>all the student's enrollment Ids of a specific course.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only Admin can view the enrolled students.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/:cid",
    "title": "Gets a course by it's id",
    "name": "listOne",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Course's ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Gets",
            "description": "<p>a Course with all it's details.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "/courses/:cid/enrollment/:eid",
    "title": "Gets a specific enrollment with it's Id.",
    "name": "listSingleEnrl",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Course",
            "description": "<p>'s ID with Enrollment ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Gets",
            "description": "<p>a single student's enrollment Id of a specific course.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only Admin can view the enrolled student.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "delete",
    "url": "/courses/",
    "title": "Deletes all course",
    "name": "remove",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courses",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Deletes",
            "description": "<p>Course with all it's details.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only Instructor and Admin can delete a course.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "delete",
    "url": "/courses/:cid",
    "title": "Deletes a course by Id",
    "name": "remove",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course",
            "description": "<p>'s ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Deletes",
            "description": "<p>a Course with All it's details.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only Instructor and Admin can delete a course.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "delete",
    "url": "/courses/:cid/enrollment",
    "title": "Deletes all enrollment",
    "name": "removeAllEnrl",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Course",
            "description": "<p>'s ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Deletes",
            "description": "<p>all enrollments of a specific course.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only Admin can delete the enrolled students.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "delete",
    "url": "/courses/:cid/lessons",
    "title": "Deletes a lesson.",
    "name": "removeAllLesson",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Course",
            "description": "<p>'s ID with Lesson</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deletes",
            "description": "<p>all lessons with it's ID and material.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only Instructor can delete a lesson.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "delete",
    "url": "/courses/:cid/enrollment/:eid",
    "title": "Deletes a specific enrollment with it's Id.",
    "name": "removeSingleEnrl",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Course",
            "description": "<p>'s ID with Enrollment ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Deletes",
            "description": "<p>a single student's enrollment Id of a specific course.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only Admin can delete the enrolled student.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  },
  {
    "type": "delete",
    "url": "/courses/:cid/lessons/:lid",
    "title": "Deletes a single lesson.",
    "name": "removeSingleLesson",
    "group": "Courses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Course",
            "description": "<p>'s ID with Lesson ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Deletes",
            "description": "<p>a lesson with it's ID and material.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only Instructor can delete a lesson</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "features/courses/courses.router.js",
    "groupTitle": "Courses"
  }
] });
