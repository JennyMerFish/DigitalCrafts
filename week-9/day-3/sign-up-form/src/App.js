import {useState} from 'react'
import Signup from './Components/Signup';
import DB from './Components/DB';
import "./Components/App.css"


function App() {
  const [allTheForms, setAllTheForms] = useState([])
  return (
    <div className="App">
     <Signup allTheForms ={allTheForms} setAllTheForms ={setAllTheForms}/>
     <DB allTheForms={allTheForms}/>
    </div>
  );
}

export default App;
