const express = require("express");
const app = express();
const cowsay = require("cowsay");
const PORT = 3000
const db = require('./db');


// app.get("/", (req, res) => {res.send(`<h1>Hello World</h1>`)});
// app.post("/cats", (req, res) => {res.send(`<h2>Meow!</h2>`)});
// app.put("/dogs", (req, res) => {res.send(`<h3>Woof!</h3>`)});
// app.delete("cats_and_dogs", (req, res) => {res.send(`<h4>Dogs and cats living together ...mass hysteria!!</h4>`)})




// app.post("/sendCowUserName", (req, res) => {res.send(cowsay.say({
//     text : "Adding a Cow User",
//     e : "oO",
//     T : "U "
// }))});
// app.post("/sendCowAppointment", (req, res) => {res.send(cowsay.say({
//     text : "Setting up cow appointment",
//     e : "oO",
//     T : "U "
// }))});
// app.get("/getCowUserName", (req, res) => {res.send(cowsay.think({
//     text : "Adding a Cow User",
//     e : "oO",
//     T : "U "
// }))});
// app.get("/getCowAppointment", (req, res) => {res.send(cowsay.think({
//     text : "Setting up cow appointment",
//     e : "oO",
//     T : "U "
// }))});

// app.delete("/deleteCowUser", (req, res) => {res.send(console.log("DELETED"))});

app.get('/greet/:handle', (req, res) => {
    const { handle } = req.params;
    res.send(`Hello, ${handle}!`);
});


app.get('/greet/:handle', (req, res) => {
    const { handle } = req.params;
    res.send(`<h1>Hello, ${handle}!</h1>`);
});

app.listen(PORT)

