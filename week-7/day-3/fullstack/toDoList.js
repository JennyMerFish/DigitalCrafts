const sendTask = (e) => {
    const  task = document.querySelector(".todocontainer").value;
    console.log(todo);
  };
  const button = document.querySelector(".submit");
  button.addEventListener("click", (e) => {
    sendTodo(e);
  });