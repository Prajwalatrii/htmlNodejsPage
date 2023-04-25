var express = require('express');
var path = require( 'path');
var fs = require('fs');
var app = express();
var _dirname= process.cwd()

console.log(_dirname)

app.get('/', function (req, res) {
     res. sendFile(path. join(_dirname, "index.html"));
});

app.get('/profile-picture', function (req, res) {
     var img = fs.readFileSync( 'profil 1.jpg');
     res.writeHead(200, { 'Content-Type': 'image/jpg' });
     res.end(img, 'binary');
});

app.get('/get-profile', function (req, res) {
    var response = res;
    MongoClient.connect('mongodb://amin:password@localhost:2017', function (err, client) {
        if (err) throw err;
        var db = client.db("user-account");
        var query = { userid: 1 };
        db.collection( 'users').findOne(query, function (err, result) {
            if (err) throw err;
            client.close();
            response.send(result);
        });
    });
});

app.post('/update-profile', function (req, res) {
    var userObj = req.body;
    var response = res;
    MongoClient.connect('mongodb://amin:password@localhost:2017', function (err, client) {
      if (err) throw err;
      var db = client.db("user-account");
      var query = { userid: 1 };
      var newValues = { $set: userObj };
      db.collection('users').updateOne(query, newValues, function (err, result) {
        if (err) throw err;
        client.close();
        response.send(result);
      });
    });
  });


app.listen(3000, () =>{
     console. log("app listening on port 3000!");
});