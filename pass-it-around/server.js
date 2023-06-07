const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send('99 Bottles of beer on the wall, <a href="/98">take one down, pass it around</a>')
});

app.get("/:number_of_bottles", (req, res) => {
    const numBottles = parseInt(req.params.number_of_bottles);
    const startOver = `<a href="/">Start Over</a>`;

    if(numBottles === 0) {
        res.send(`No more bottles on the ball, ${startOver}`)
    }else {
        const message = `${numBottles} Bottles of beer on the wall, <a href="/${numBottles-1}">take one down, pass it around</a>`
        res.send(message)
    }
    
});

app.listen(3000, () => {
    console.log("Listen for port 3000")
});

