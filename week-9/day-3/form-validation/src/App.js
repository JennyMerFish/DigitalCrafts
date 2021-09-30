import { useState } from "react"
import Forms from "./components/Forms";
import ToDoList from "./components/ToDoList"





function App() {
  const [counter, setCounter] = useState(0)
  const [userName, setUserName] = useState("")
  return (
    <div className="App">
      {/* <h1>Hooks</h1>
<p>User is {userName}</p>
<button onClick={() => setUserName("Ron")}>Change user to Ron</button>
<input onChange={(e) => {setUserName(e.target.value)}} type="text" placeholder="Username"></input>
      <p>Counter is : {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Add</button>
        <button onClick={() => setCounter(counter - 1)}>Subtract</button>
      <form action="">
        <input type="text"></input>
        <input type="text"></input>
        <input type="button" value="Send"></input>
      </form> */}
    <ToDoList/>
    
    </div>
  );
}

export default App;
