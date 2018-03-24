var express=require('express');
var router = express.Router();
var db = require('../models');
//get - /api/todos-for getting the list

//findall-get
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

//get-findById

router.get('/:todoId',function(req,res){
db.Todo.findById(req.params.todoId)
.then(function(todos){
res.json(todos);
})
.catch(function(err){
res.send(err);
});
});

//findoneandupdate-put
router.put('/:todoId',function(req,res){

    db.Todo.findByIdAndUpdate({_id:req.params.todoId},req.body)

        .then(function(updatetodos){
        res.json(updatetodos);
        })

        .catch(function(err){
        res.send(err);
        });
});

//delete
router.delete('/:todoId',function(req,res){

    db.Todo.remove({_id:req.params.todoId})

        .then(function(){
        res.json({message : "deleted "})

        })

        .catch(function(err){
        res.send(err);
        });
});

module.exports = router;