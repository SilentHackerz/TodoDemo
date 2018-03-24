var express = require('express');
var app=express();

var todoroutes = require("./routes/index");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
res.send("this is appjs route");
});


app.use('/api/todos',todoroutes);

app.listen(3000,function(req,res){
console.log("server running at port 3000");
});
