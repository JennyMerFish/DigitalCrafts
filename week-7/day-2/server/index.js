const express = require("express")
const app = express()
const creds = require("./db")

PORT = 3010
// middleware
app.use(express.json());
app.listen(PORT, console.log(`Im listening on ${PORT}`))


app.get("/getOrderData", (req, res) => {
    creds.connect((err,client,release) => {
        if(err){
            return console.error("Error getting connected to client", err.stack);
        }
        client.query('SELECT * FROM orders', (err, result) => {
            if(err) {
                res.status(400).send(err.stack);
            }
            res.status(200).send(result.rows);
        });
    });
});

app.get("/getCarData", (req, res) => {
    creds.connect((err,client,release) => {
        if(err){
            return console.error("Error getting connected to client", err.stack);
        }
        client.query('SELECT * FROM cars', (err, result) => {
            if(err) {
                res.status(400).send(err.stack);
            }
            res.status(200).send(result.rows);
        });
    });
});

app.get("/getCustomerData", (req, res) => {
    creds.connect((err,client,release) => {
        if(err){
            return console.error("Error getting connected to client", err.stack);
        }
        client.query('SELECT * FROM customers', (err, result) => {
            if(err) {
                res.status(400).send(err.stack);
            }
            res.status(200).send(result.rows);
        });
    });
});