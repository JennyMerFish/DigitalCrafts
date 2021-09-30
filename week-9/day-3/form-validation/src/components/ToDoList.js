import {useState} from 'react'
import ToDoItems from './ToDoItems'

function ToDoList () {
    const [toDoItem, setToDoItem] = useState("")
    const [toDoList, setToDoList] = useState([])
    return(
<div>
    <h1>To Do List</h1>
    <input type="text" placeholder="Add a to-do" onChange={(e) => setToDoItem(e.target.value)}></input>
    <button onClick={() => setToDoList([...toDoList, toDoItem])}>Add To Do</button>
<ToDoItems toDoList ={toDoList}/>
</div>


    )
}
export default ToDoList