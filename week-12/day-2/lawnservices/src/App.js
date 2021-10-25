import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar />
        </Route>
        <Route path="/something">
          
        </Route>
      </Switch>


    </Router>
      
    
  );
}

export default App;
