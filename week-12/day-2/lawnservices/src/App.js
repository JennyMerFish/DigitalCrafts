import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
        </Route>
        <Route path="/something">
          
        </Route>
      </Switch>


    </Router>
      
    
  );
}

export default App;
