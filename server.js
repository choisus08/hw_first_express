// Greetings

const express = require("express");
const app = express();

app.get("/greeting/:name", (req, res) => {
    const name = req.params.name;
    res.send(`<h1>${name}! It's so great to see you!`)
});

// Tip Calculator

app.get("/tip/:total/:tipPercentage", (req, res) => {
    // parse string request into a number 
    const total = parseInt(req.params.total);
    const tipPercentage = parseInt(req.params.tipPercentage);

    // check to see if total AND tipPercentage is a number then send res
    if (!isNaN(total) && !isNaN(tipPercentage)) {
        const tipAmount = (total * tipPercentage) / 100;
        res.send(`${tipAmount}`);

    } else {
        res.send("Invalid parameters")
    }  
});


//
app.listen(3000, () => {
    console.log("The server is listening on Port 3000")
});
