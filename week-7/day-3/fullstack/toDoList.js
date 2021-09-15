const sendTask = (e) => {
    const  task = document.querySelector(".todocontainer").value;
    console.log(task);
  };










  const button = document.querySelector(".submit");
  button.addEventListener("click", (e) => {
    sendTodo(e);
  });