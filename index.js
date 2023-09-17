const express = require('express');
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("Welcome to Express");
});


app.get("/login", (req, res) => {
    res.status(200).send("Welcome to the user");
});


app.post("/signup", (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
});


app.post("/create", (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
});


app.post("/update", (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
});

app.listen(8090, () => {
    console.log("Express server is running on port 8090");
});