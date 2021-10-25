import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Testimonials from "./components/Testimonials"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar />
        </Route>
        <Route path="/testimonials">
          <Testimonials />
        </Route>
      </Switch>


    </Router>
      
    
  );
}

export default App;
