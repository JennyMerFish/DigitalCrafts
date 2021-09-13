const express = require("express");
const app = express();
const PORT = 3009;
const creds = require("./db")
app.listen(PORT, console.log(`I'm listening on port ${PORT}`));
app.use(express.json())


// CREATE
app.post("/create_todo", (req, res) => {
    res.send("/create_todo")
})

// READ
app.get("/get_todo", (req, res) => {
    creds.connect((err, client, release) => {
        if (err) { 
            return console.error("Error getting connected to the client", err.stack);
        }
        client.query("SELECT * FROM todolistitems", (err, result) => {
           console.log(err);
           console.log(result);

        })
    })
})

// UPDATE
app.put("/update_todo", (req, res) => {
    res.send("/update_todo")
})

// DELETE
app.post("/delete_todo", (req, res) => {
    res.send("/delete_todo")
})
