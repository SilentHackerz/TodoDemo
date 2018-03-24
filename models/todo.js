var mongoose = require('mongoose');

var TodoSchema= mongoose.Schema({
name:{ type :'String'},
date:{ type:'date'
,default: Date.now()
}

});


var Todo=mongoose.model('Todo', TodoSchema);
module.exports = Todo;