const express = require("express");
const app = express();


// Greetings

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


// Magic 8 Ball

app.get("/magic/:question", (req, res) => {
    // parse string request into a number
    const question = req.params.question;
    const magic8 = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

    // return random response from magic8
    const magicRandom = Math.floor(Math.random() * magic8.length);

    res.send(`${question}? <h1>${magic8[magicRandom]}</h1>`)

});


// Hungry for more?
// Fibonnaci

app.get("/fibonacci/:number", (req, res) => {
    // parse string request into a number
    const number = parseInt(req.params.number);

    // create function to test number 
    const isFibonacci = (number) => {
        let first = 0;
        let second = 1;

        while (second < number) {
            const tempNumb = second;
            second = first + second;
            first = tempNumb; 
        }

        return second === number;

    };

    // condition to check if number if fibonacci
    if (isFibonacci(number)) {
        res.send(`Very good. ${number} is Fibonacci.`)
        
    } else {
        res.send(`I can tell ${number} is not a fibonacci number.`)
    }
    
});



// Listen for port

app.listen(3000, () => {
    console.log("The server is listening on Port 3000")
});
