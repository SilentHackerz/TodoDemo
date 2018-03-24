var express=require('express');
var router = express.Router();
var db = require('../models');
//get - /api/todos-for getting the list
//find-get
router.get('/', function(req,res){
//res.send("this is from routes folder index route");
db.Todo.find()
.then(function(todos){
res.json(todos);
})
.catch(function(err){
res.send(err);
});
});

//create-post

router.post('/', function(req,res){
db.Todo.create(req.body)
.then(function(newtodos){
res.json(newtodos);
})
.catch(function(err){
res.send(err);
});
});

module.exports = router;