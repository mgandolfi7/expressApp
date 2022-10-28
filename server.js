const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());

const books = {
    "harry potter":{
        "checkout date": "10-23-2022",
        "author": "JK Rowling",
        "rating": 10,
        "notes": "",
        "recommend": true
    },
    "diary of a wimpy kid":{
        "checkout date": "10-29-2022",
        "author": "Jeff Kinny",
        "rating": 10,
        "notes": "great read",
        "recommend": true
    },
    "unknown":{
        "checkout date": "unknown",
        "author": "unknown",
        "rating": "unknown",
        "notes": "unknown",
        "recommend": "unknown"
    }
}


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/:title", (req, res) => {
    let bookTitle = req.params.title.toLowerCase();
    if (books[bookTitle]) {
        res.json(books[bookTitle])
    } else {
        res.json(books["unknown"])
    }
});








app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`);
});


  