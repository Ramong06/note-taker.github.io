// Dependencies
// ===========================================================

var path = require("path");
var express = require('express');
var fs = require("fs");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//Notes HTML Route
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, 'notes.html'));
});

//Notes Parse
var notesInput = fs.readFileSync(path.join(__dirname, 'db', 'db.json'));
var parsedNotes = JSON.parse(notesInput);

//API ROUTE
app.get('/api/notes', function(req, res){

});

//Index HTML Route
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});



// YOUR CODE GOES HERE
//
//
// app.get('/obiwankenobi', function (request, response) {
//     response.json(obiwankenobi);
// });

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});