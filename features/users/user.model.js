var log = require('tracer').console({ format: "{{message}}  - {{file}}:{{line}}" }).log;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    username: String,
    password: String,
    OauthId: String,
    OauthToken: String,
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    roles: {
        type: Number, // 0 for student   1 for teacher   2 for admin
        default: 0,
        min: 0,
        max: 2
    },
    resetToken: {
        type: String,
        default: ''
    }
});

User.methods.getName = function() {
    return (this.firstname + ' ' + this.lastname);
};


User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
