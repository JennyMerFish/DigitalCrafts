const express = require("express")
const app = express()
const creds = require("./db")

PORT = 3006
// middleware
app.use(express.json());
app.listen(PORT, console.log(`Im listening on ${PORT}`))

// app.get("/getUserData", (req, res) => {
//     creds.connect((err,client,release) => {
//         if(err){
//             return console.error("Error getting connected to client", err.stack);
//         }
//         client.query('SELECT * FROM addresses', (err, result) => {
//             if(err) {
//                 res.status(400).send(err.stack);
//             }
//             res.status(200).send(result.rows);
//         });
//     });
// });

app.post("/getUserData", (req, res) => {
    creds.connect((err,client,release) => {
        if (err) {
            return console.error("Error getting connected to client", err.stack);
        }
        client.query(`INSERT INTO addresses (street,zipcode,city) VALUES (${req.body.street}, ${req.body.zipcode}, ${req.body.city}`), (err, result) => {
            if(err) {
                res.status(400).send(err.stack);
            }
            res.status(200).send(result.rows);
        };
    });
});