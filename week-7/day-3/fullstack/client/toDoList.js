

async function createNewTask() {
  const task = document.querySelector(".addtask").value;
  const urgency = document.querySelector(".addtaskurgency").value;
  const addedBy = document.querySelector(".addtaskadder").value;
  const url = "http://localhost:3012/createNewTask";
  const taskData = {task, urgency, addedBy};
  const createTask = await fetch (url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });
};


async function readTasks() {
  showTasks = await fetch("http://localhost:3012/readAllTasks")
  showTasksJson = await showTasks.json()
  console.log(showTasksJson)
}

const submitButton = document.querySelector(".submit")
submitButton.addEventListener("click", () => createNewTask())

const readButton = document.querySelector(".showallbutton")
readButton.addEventListener("click", () => readTasks())


