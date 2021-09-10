require("dotenv").config();
const express = require("express");
const token = process.env.API;
const URL = process.env.URL;
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(URL, token);
const PORT = 3008;
const app = express();
app.use(express.json());
es6Renderer = require('express-es6-template-engine')
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');
app.listen(PORT, console.log(`I'm listening on port ${PORT}`));

// User story 1, to add multiples, make the objects an array in Postman Body
app.post("/createNew", async(req, res) => {
    const { data, error } = await supabase.from("stockInfo").insert(req.body);
    res.send(console.log(`${req.body.name}`));
});
// User story 2, delete by ID
app.delete("/deleteData/:stockID", async(req, res) => {
    const id = req.params.stockID;
    const { data, error } = await supabase.from("stockInfo").delete().match({id: id});
    res.send(data)
});
// User story 3, update, target info by ID. I can't figure out how to do multiples at the same time. 
app.put("/updateData/:stockID", async(req, res) => {
    const id = req.params.stockID;
    const { data, error } = await supabase.from("stockInfo").update([req.body]).match({ id: id });
    res.send(data)
});
app.put("/updateData/:stockID", async(req, res) => {
    const id = req.params.stockID;
    const { data, error } = await supabase.from("stockInfo").update([req.body]).match({ id: id });
    res.send(data)
});
// User story 4, read all stock information in the table
app.get("/readData", async(req,res) => {
    const { data, error } = await supabase.from("stockInfo").select();
    res.send(data);
});
// User story 5, read one specific stock in all it's glory
app.get("/readDataByName/:stockName", async(req, res) => {
    const name = req.params.stockName;
    const { data, error } = await supabase.from("stockInfo").select().match({ name: name })
    res.send(data)
})
//User story 6, this one is for reading specific fields, you just have to add in the select section what all you want to see
app.get("/readDataBy", async(req, res) => {
    const { data, error } = await supabase.from("stockInfo").select("name, yearLow");
    res.send(data)
})
// Can I render? Let's see. 
app.get("/readDataVisuals", async(req, res) => {
    const { data, error } = await supabase.from("stockInfo").select();
    res.render("home", data)
})