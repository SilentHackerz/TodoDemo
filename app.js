var express = require('express');
var bodyParser = require('body-parser');
var app=express();
var ejs=require('ejs');
app.set('view engine', 'ejs');
var todoroutes = require("./routes/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
//res.send("this is appjs route");
app.get('/',function(req,res){
res.render('index.html');
});


app.use('/api/todos',todoroutes);

app.listen(3000,function(req,res){
console.log("server running at port 3000");
});
