var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var ObjectID = require('mongodb').ObjectID;
var root = __dirname + '/angular-web-014/..';

app.use(express.static(root));
app.use(session({
    secret: 'angular_tutorial',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var db = new Db('tutor',
    new Server("localhost", 27017, {safe: true},
        {auto_reconnect: true}, {})
);

db.open(function(){
    console.log("mongo db is opened!");
});

db.collection('mynotes', function(error, notes) {
    db.notes = notes;
});

db.collection('sections', function(error, sections) {
    db.sections = sections;
});

db.collection('users', function(error, users){
    db.users = users;
})

app.get("/notes", function(req,res) {
    db.notes.find(req.query).toArray(function(err, items) {
        res.send(items);
    });
});

app.post("/notes", function(req,res) {
    db.notes.insert(req.body);
    res.end();
});

app.delete("/notes", function(req,res) {

    var id = new ObjectID(req.query.id);

    db.notes.remove({_id: id}, function(err){
        if (err) {
            console.log(err);
            res.send("Failed");
        } else {
            console.log('success');
            res.send("Success");
        }
    })
});

app.get("/sections", function(req,res) {
    db.sections.find(req.query).toArray(function(err, items) {
        res.send(items);
    });
});

app.get("*", function(req, res, next) {
    res.sendFile('index.html', { root : root });
});

app.post("/sections", function(req, res){
   db.sections.insert(req.body);
   res.end();
});

app.listen(8080);

  