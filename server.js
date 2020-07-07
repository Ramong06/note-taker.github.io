//Dependencies
var express = require('express');
var path = require("path");
var fs = require("fs");

var app = express();

//Setting Initial Port 
var PORT = process.env.PORT || 8080;

//Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Notes HTML Route
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, 'notes.html'));
});

//API ROUTE
const notesArray = []
const data = fs.readFileSync(path.join(__dirname, "db", "db.json"));

app.get("/api/notes", function (req, res) {
    JSON.parse(data).forEach(note => {notesArray.push(note)});
    res.json(notesArray);
});

//Index HTML Route
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/notes', function (req, res) {
    const notesInput = req.body;
    notesInput.id = notesInput.title.replace(/\s+/g, '');
    console.log(notesInput);

    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, 'db', 'db.json')));
    notes.push(notesInput);
    fs.writeFileSync(path.join(__dirname, 'db', 'db.json'), JSON.stringify(notes));
    res.json(notesInput);
});

//Deletes Notes



// Listener
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});