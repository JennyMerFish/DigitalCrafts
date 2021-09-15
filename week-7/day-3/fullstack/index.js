const Sequelize = require("sequelize");
const { toDos } = require("./models");
const express = require("express");
const app = express();
const PORT = 3012;
es6Renderer = require('express-es6-template-engine')
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(express.json());
app.listen(PORT, console.log(`I'm listening on port ${PORT}`))


app.post("/createNewTask", async (req,res) => {
    const { task, urgency, addedBy } = req.body;
    const newTask = await toDos.create({
        task: task,
        urgency: urgency,
        addedBy: addedBy
    })
    res.send(`Inserted new task ${newTask.task}`)
});

app.post("/readAllTasks", async (req,res) => {
    const tasks = await toDos.findAll();
  res.send(tasks);
});

app.post("updateTask/:id", async (req, res) => {
  const task = await toDos.update(req.body, {where: {id: req.params.id}});

  res.send(task)
});
// app.post("/readTaskByUrgency/:urgency", async (req,res) => {
//     const tasks = await toDos.findAll({
//         where: {urgency: req.params.urgency}
//     });
//   res.send(tasks);
// });

// app.post("/readTaskByAdder/:addedBy", async (req,res) => {
//     const tasks = await toDos.findAll({ where: {addedBy: req.params.addedBy}});
//   res.send(tasks);
// });

// app.post
