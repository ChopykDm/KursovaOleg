'use strict';

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var filmItemSchema   = new Schema({
    title: String,  
    iamage: String,
});

module.exports = mongoose.model('FilmItem', filmItemSchema);