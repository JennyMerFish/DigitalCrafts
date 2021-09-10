const express = require("express")
const app = express()
const PORT = 3001
const {createClient} = require("@supabase/supabase-js")
const supabase = createClient(
  );
app.use(express.json());
app.listen(PORT, console.log("I'm listening"))

app.get("/createStudent", async(req, res) => {

    const { data, error } = await supabase
    .from('studentData')
    .select()
    res.send(data)
})
  
app.put("/updateStudent/:studentID", async(req, res) => {
    const id = req.params.studentID

    const { data, error } = await supabase
    .from('studentData')
    .update(req.body)
    .match({id: 3})
    res.send(console.log(data));
    console.log(error)
});

app.delete("/deleteStudent/:studentID", async(req, res) => {
    const id = req.params.studentID
    const { data, error } = await supabase
    .from('studentData')
    .delete(req.body)
    .match({id: id})
    res.send(console.log(data));
    console.log(error)
});