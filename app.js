const express = require("express");
const app = express();
const port = 80;

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/category", (req, res) => {
    res.send(req.query.value);
});

app.listen(port, () => {
    console.log("connected " + port + " port!");
});