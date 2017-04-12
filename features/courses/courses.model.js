var bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    express = require("express"),
    app = express();
Schema = mongoose.Schema;



var coursesSchema = new Schema({
    title: String,
    image: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    },
    rating: {

        type: Number,
        min: 1,
        max: 5
    },
    lessons: [{
        title: {
            type: String,
            default: ''
        },
        createdDate: {
            type: Date,
            default: Date.now
        },
        lessDescription: {
            type: String,
            default: ''
        }
    }],

    enrollment: [{
        student: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        rating: {
            type: Number,
            max: 5,
            default: 0
        },
        completedLessons: [String],
        completedAll: {
            type: Boolean,
            default: false
        },
        date: {
            type: Date,
            default: Date.Now
        }
    }]
});





module.exports = mongoose.model("courses", coursesSchema);
