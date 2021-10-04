import Login from "./Components/Login";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import {WholePage} from "./styled-components/LoginStyle"
import Home from "./Components/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Dashboard from "./Components/Dashboard"
import ErrorPage from "./Components/ErrorPage";
import { Redirect } from "react-router";
import {useState} from 'react'
import Account from "./Components/Account"
import Garage from "./Components/Garage";
import "./App.css"
function App() {
  const [viewSidebar, setViewSidebar] = useState(true)
  return (
    <Router>
      <Switch>
    <WholePage className="App">
   <Header viewSidebar={viewSidebar} setViewSidebar={setViewSidebar}/>
   <Sidebar viewSidebar={viewSidebar}/> 
   <Route path="/login">
   <Login />
   </Route>
   <Route exact path="/">
   <Home />
   </Route>
   <Route path="/dashboard">
     <Dashboard />
   </Route>
   <Route path="/account">
     <Account />
   </Route>
   <Route path="/garage">
     <Garage />
   </Route>
   
   {/* <Route path="*">
     <Redirect to="/errorpage" />
     </Route>
     <Route path="/errorpage">
       <ErrorPage/>
     </Route> */}
  
     
    </WholePage>
    </Switch>
    </Router>
  );
}

export default App;
