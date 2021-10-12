import Login from "./Components/Login";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import {LoginContainer, WholePage} from "./styled-components/LoginStyle"
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
  const register = true;

  const user = JSON.parse(localStorage.getItem("supabase.auth.token"));
  console.log({user})
  return (
    <Router>
      <Switch>
      <Route path="/login">
      <Login />
      </Route>
      <Route path="/register">
       <Login register={register} />
      </Route>
        <WholePage className="App">
      <Header viewSidebar={viewSidebar} setViewSidebar={setViewSidebar}/>
      <Sidebar viewSidebar={viewSidebar}/> 
      
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
