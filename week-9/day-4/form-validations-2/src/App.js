import Login from "./Components/Login";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import {LoginContainer, WholePage} from "./styled-components/LoginStyle"
import Home from "./Components/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Dashboard from "./Components/Dashboard"
import { Redirect } from "react-router";
import {useState} from 'react'
import Account from "./Components/Account"
import Garage from "./Components/Garage";

import "./App.css"
import { useSelector } from "react-redux";
function App() {
  const [viewSidebar, setViewSidebar] = useState(true)
  const register = true;
  const user = useSelector((state) => state.loginInfo.userData)
  // const user = JSON.parse(localStorage.getItem("supabase.auth.token"));
  // console.log({user})
  return (
    <Router>
      <Switch>
      {user ? (
        <>
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
   </WholePage>
   </>) :

      
      (
      <><Route path="/login">
      <Login />
      </Route>
      <Route path="/register">
       <Login register={register} />
      </Route></>)
      }
   {/* <Route path="*">
     <Redirect to="/errorpage" />
     </Route>
     <Route path="/errorpage">
       <ErrorPage/>
     </Route> */}
  
     
    
    </Switch>
    </Router>
  );
}

export default App;
