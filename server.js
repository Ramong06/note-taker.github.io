var fs = require("fs");
var path = require("path");
var express = require('express');
var uuid = require('uuidv4');


var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Notes HTML Route
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
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
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Note Input
app.post("/api/notes", function (req, res) {
    var noteInput = req.body;
    noteInput.id = uuid();
    notes.push(noteInput);
    if (noteInput) {
        fs.writeFile("db.json", JSON.stringify(notes, null, 4), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log('Well Done');
        });
        res.json(noteInput);
    }
});


// Listener
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});