const sendTodo = (e) => {
    // e.preventDefault()
    const todo = document.querySelector(".todoname").value;
    console.log("To Do is sent")
}

const button = document.querySelector(".submit")
button.addEventListener((e) =>{
    sendTodo(e); });