'use strict';

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('User', UserSchema);