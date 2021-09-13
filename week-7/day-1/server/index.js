const express = require("express")
const app = express()
const creds = require("./db")

PORT = 3006
// middleware
app.use(express.json());
app.listen(PORT, console.log(`Im listening on ${PORT}`))

app.get("/getRestData", (req, res) => {
    creds.connect((err,client,release) => {
        if(err){
            return console.error("Error getting connected to client", err.stack);
        }
        client.query('SELECT * FROM restaurants', (err, result) => {
            if(err) {
                res.status(400).send(err.stack);
            }
            res.status(200).send(result.rows);
        });
    });
});

app.post("/updateRestData", (req, res) => {
    creds.connect((err,client,release) => {
        if (err) {
            return console.error("Error getting connected to client", err.stack);
        }
        client.query(`INSERT INTO restaurants (restname) VALUES ('${req.body.restname}');`, (err, result) => {
            if(err) {
                res.status(400).send(err.stack);
            }
            res.status(200).send(result);
        });
    });
});

app.get("/getMovieData", (req, res) => {
    creds.connect((err, client, release) => {
        if (err) {
            return console.error("Error getting connected to client", err.stack);
        }
        client.query('SELECT * FROM movies', (err, result) => {
            if(err) {
                res.status(400).send(err.stack);
            }
            res.status(200).send(result);
        });
    });
});

app.post("/updateMovieData", (req, res) => {
    creds.connect((err, client, release) => {
        if (err) {
            return console.error("Error getting connected to client", err.stack);
        }
        client.query(`INSERT INTO movies (moviename) VALUES ('${req.body.moviename}');`, (err, result) => {
            if (err) {
                res.status(400).send(err.stack);
            }
            res.status(200).send(result);
        });
    });
});