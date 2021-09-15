const Sequelize = require("sequelize")
const { Users } = require("./models")
const express = require("express") 
const app = express()
const PORT = 3011
app.use(express.json())

app.listen(PORT, console.log(`I'm listening on ${PORT}`))

app.post("/createUsers", async (req, res) => {
    const { firstName, lastName, email } = req.body;

    const newUser = await Users.create({
        firstName: firstName,
        lastName: lastName,
        email: email
    });
    res.send({id: newUser.id});
});

app.post("/getUsers", async (req, res) => {
    const { firstName, lastName, email } = req.body;

    const users = await Users.findAll();
    res.send(users);
});


app.post("/getUsersByLastName", async (req, res) => {
    const { firstName, lastName, email } = req.body;

    const users = await Users.findAll({attributes: "lastName"});
    res.send(users);
});

app.post("/updateUsers/:id", async (req, res) => {

    const users = await Users.update(req.body, {where: {id:req.params.id}});
    res.send(users);
});