const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req,res) => {
    res.send("<button> Login </button> <button> signup </button>");
});

app.get('/signup', (req,res) => {
    var color = req.query.color;

    res.send("<h1 style='color:"+color+";'>Patrick Guichon</h1>");
});

app.get('/login', (req,res) => {
    var color = req.query.color;

    res.send("<h1 style='color:"+color+";'>Patrick Guichon</h1>");
});

app.get('/members', (req,res) => {
    var color = req.query.color;

    res.send("<h1 style='color:"+color+";'>Patrick Guichon</h1>");
});

app.get('/logout', (req,res) => {
    var color = req.query.color;

    res.send("<h1 style='color:"+color+";'>Patrick Guichon</h1>");
});

//this code needs to be changed in a way that display the pics in members page
app.get('/img/:id', (req,res) => {

    var meme = req.params.id;

    if (meme == 1) {
        res.send("serious: <img src='/serious.jpg' style='width:250px;'>");
    }
    else if (meme == 2) {
        res.send("confused: <img src='/confused.jpg' style='width:250px;'>");
    }
    else if (meme == 3) {
        res.send("happy: <img src='/trump.jpg' style='width:250px;'>");
    }
    else {
        res.send("Invalid meme id: "+meme);
    }
});

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
	console.log("Node application listening on port "+port);
}); 