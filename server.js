var fs = require("fs");
var path = require("path");
var express = require('express');


var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Notes HTML Route
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, 'notes.html'));
});

//API ROUTE
var notesArray = []
var data = fs.readFileSync(path.join(__dirname, "db", "db.json"));

app.get("/api/notes", function (req, res) {
    JSON.parse(data).forEach(note => {
        notesArray.push(note);
    });
    res.json(notesArray);
});

//Index HTML Route
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});



// Listener
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});