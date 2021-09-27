
import Class from './components/Class.css'
import CarCard from './components/CarCard';

function App() {
  const sixTimes = [0, 1, 2, 3, 4, 5]
  return (
    <div className="App">
     {sixTimes.map(time => <CarCard/>)}
    </div>
  );
}

export default App;
