var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var ObjectID = require('mongodb').ObjectID;
var root = __dirname + '/angular-web-014/..';
var MongoStore = require('connect-mongo/es5')(session);

function setUserQuery (req) {
    return req.query.userName = req.session.userName || "demo";
}

app.use(express.static(root));
app.use(session({
    store: new MongoStore({
        url: 'mongodb://localhost:27017/angular_session'
    }),
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
});

app.get("/notes", function(req,res) {
    setUserQuery(req);
    db.notes.find(req.query).toArray(function(err, items) {
        res.send(items);
    });
});

app.post("/notes", function(req,res) {
    req.body.user = req.session.userName || "demo";
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
    });
});

app.get("/sections", function(req,res) {
    var userName = req.session.userName || "demo";
    db.users.find({name: userName}).toArray( function(err, items){
        var user = items[0];
        res.send(user.sections||[]);
    });
});


app.post("/sections", function(req, res){
    var userName = req.session.userName || "demo";
    db.users.find({name: userName}).toArray( function(err, items){
        var userSection = items[0].sections || [];
        userSection.push(req.body);
        db.users.update({user: userName}, {$set: {sections: userSection}},function() {
            res.end();
        });
    });
});

app.delete('/sections', function (req,res) {

    var title = req.body.title;
    var userName = req.session.userName || "demo";

    db.users.find({name: userName}).toArray( function(err, items){
        var userSection = items[0].sections || [];
        userSection = userSection.filter(function(item){
            return item.title !== title;
        });
        db.users.update({user: userName}, {$set: {sections: userSection}},function() {
            res.end();
        });

    });
});
app.post("/sections/replace", function(req,res) {
    var userName = req.session.userName || "demo";
    db.users.update({userName:userName},{$set:{sections:req.body}},function() {
            res.end();
    });
});
app.get('/sections/checkSectionUnique', function (req, res) {

    var title = req.body.title;
    var userName = req.session.userName || "demo";
    db.users.find({name: userName}).toArray( function(err, items){
        var userSection = items[0].sections || [];
        userSection = userSection.filter(function(item){
            return item.title === title;
        });
        if (userSection.length > 0) {
            res.send(false);
        } else {
            res.send(true);
        }
    });

});

app.get('/users', function(req, res){
    db.users.find(req.query).toArray(function (err, items) {
        res.send(items);
    })
});

app.post('/users', function(req,res){
    db.users.insert(req.body, function (resp) {
        req.session.userName = req.body.name;
        res.end();
    });

});

app.delete('/users', function(req, res){

    var id = new ObjectID(req.query.body);

    db.users.delete({ _id: id }, function (err) {

        if(err) {
            console.log('error');
            res.send('Failed');
        } else {
            console.log('success');
            res.send('Success');
        }

    });

});

app.get('/users/checkUserUnique', function(req, res){
    db.users.find(req.query).toArray(function (err, items) {

        if(items.length > 0) {
            res.send(false);
        } else {
            res.send(true);
        }
    })
});

app.post('/login', function(req, res){

    db.users.find({name: req.body.name, password: req.body.password}).toArray(function(err, items){

        if(items.length > 0) {
            req.session.userName = req.body.name;
            res.send(items[0]);
        } else {
           res.send(null);
        }
    });
});

app.post('/logout', function(req, res){
    req.session.userName = null;
    res.end();
});

app.post('/login/isLogged', function(req, res){
    if (req.session.userName) {
        res.send(true)
    } else {
        res.send(false)
    }
});

app.get("*", function(req, res, next) {
    res.sendFile('index.html', { root : root });
});
app.listen(8080);