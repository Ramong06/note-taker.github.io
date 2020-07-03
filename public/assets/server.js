// Dependencies
// ===========================================================

var express = require('express');
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;


// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, 'notes.html'));
});

// app.get('/darthmaul', function (req, res) {
//     res.json(darthmaul);
// });

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

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