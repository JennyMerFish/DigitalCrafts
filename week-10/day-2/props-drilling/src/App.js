import './App.css';
import Neighborhood from "./components/neighborhood/Neighborhood.js"
import Dealership from "./components/dealership/Dealership.js"

function App() {
  const mustang = "1967 Mustang Boss 302"
  const fordGT = "FordGT A fast car I guess"
  return (
    <div className="box">
      <h1>Props Drilling</h1>
      <Neighborhood mustang = {mustang} fordGT ={fordGT}/>
      <Dealership mustang = {mustang} fordGT ={fordGT}/>

    </div>
  );
}

export default App;
