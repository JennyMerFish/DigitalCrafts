import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Testimonials from "./components/Testimonials"
import Gallery from "./components/Gallery"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Homepage from "./components/Homepage"
import Services from "./components/Services"
function App() {
  return (
    <Router>
      <Switch>
        <div>
      <Navbar />
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/testimonials">
          <Testimonials />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        </div>
      </Switch>


    </Router>

      
    
  );
}

export default App;
