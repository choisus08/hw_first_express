const express = require("express");
const app = express()

app.get("/greeting/:name", (req, res) => {
    const name = req.params.name
    res.send(`<h1>${name}! It's so great to see you!`)
});

//
app.listen(3000, () => {
    console.log("The server is listening on Port 3000")
});