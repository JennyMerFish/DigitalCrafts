import House from './components/House';


function App() {
  const couch = "Couch";
  const chair = "chair"
  return (
    <div className="App">
     
<House couch={couch}chair={chair}/>
    </div>
  );
}

export default App;
