import "./App.css";
import { useState } from "react";
import StudentContainer from "./components/StudentContainer";
import studentData from "./studentData";

function App() {
  // const [students, setStudents] = useState(studentData);
  const [counter, setCounter] = useState(0);

  // state is a place that we can store/hold data
  // we store state in functional components using hooks
  // the process of passing data to another component is called props
  return (
    <div className="App">
      <h1>App js</h1>
      <h3>Data starts here</h3>
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
