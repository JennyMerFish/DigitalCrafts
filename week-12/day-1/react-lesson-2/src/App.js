import "./App.css";
import { useState } from "react";
import StudentContainer from "./components/StudentContainer";
import studentData from "./studentData";
import { useDispatch, useSelector } from "react-redux"

function App() {
  // const [students, setStudents] = useState(studentData);
  const counter = useSelector((state)=> state.counter)
  const dispatch = useDispatch()
  const [input, setInput] = useState(0)
dispatch({type: "GET_STUDENTS"})
  // state is a place that we can store/hold data
  // we store state in functional components using hooks
  // the process of passing data to another component is called props
  return (
    <div className="App">
      <h1>App js</h1>
      <h3>Data starts here</h3>
      <p>Counter : {counter}</p>
      <input type="text" onChange={(e) => setInput(parseInt(e.target.value))} />
      <button onClick={()=>dispatch({type: "THE_COUNTER", payload: input})}>Increase Counter</button>
      <StudentContainer />
    </div>
  );
}

// ACtion is dispatched
// Middleware intercepts the action (this is perfect for api calls)
// after middleware is done with it, the action matches a reducer
// Reducers will then update state
// The store will then send the updated state
// This will cause a rerender

export default App;
