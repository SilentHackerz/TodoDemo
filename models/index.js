const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo');

module.exports.Todo=require('./todo');