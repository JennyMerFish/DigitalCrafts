import './App.css';
import Neighborhood from "./components/neighborhood/Neighborhood.js"
import Dealership from "./components/dealership/Dealership.js"
import {useState} from 'react'
function App() {
const [mustang, setMustang] = useState("2021 Mustang")

  // const mustang = "1967 Mustang Boss 302"
  // const fordGT = "FordGT A fast car I guess"
  return (
    <div className="box">
      <h1>Props Drilling</h1>
      <Neighborhood mustang = {mustang} />
      <Dealership mustang = {mustang} />

    </div>
  );
}

export default App;
