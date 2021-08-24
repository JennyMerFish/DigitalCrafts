const toDoUnorderedList = document.querySelector(".listContainer");
const input = document.querySelector(".inputField");
const addButton = document.querySelector(".submitButton");



function addToList() {
    const todoList = document.createElement("li");
    const valueOfInput = input.value;
    todoList.innerHTML= valueOfInput;
    toDoUnorderedList.append(todoList);
    

}

addButton.addEventListener("click", () => {
    addToList();
    console.log("You did it!");
});