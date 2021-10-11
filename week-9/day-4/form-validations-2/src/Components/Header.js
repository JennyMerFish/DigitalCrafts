import React, {useEffect, useState}  from 'react'
import {HeaderContainer} from "../styled-components/HeaderStyle.js"
import { Button } from '../styled-components/SidebarStyle.js';
import { UserPhoto } from '../styled-components/SidebarStyle.js';
import { useDispatch, useSelector } from 'react-redux';
const URL = "https://randomuser.me/api/";

export default function Header(props) {
  const dispatch = useDispatch()
  const viewSidebar = props.viewSidebar
  const setViewSidebar = props.setViewSidebar
 const userData = useSelector((state) => state.userData)
  // const [user, setUser] = useState({});
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const getUserData = async () => {
      const getTheUsers = await fetch(URL, {
        method: "GET",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const jsonUser = await getTheUsers.json();
      dispatch({type: "GET_USERS", payload: {
        ...jsonUser.results[0]}
      });
    };
    getUserData();
    return () => {};
  }, [counter]);
  return (
    <HeaderContainer>
      <Button onClick={() => setViewSidebar(!viewSidebar)}>{viewSidebar ? "Hide Sidebar": "Show Sidebar"}</Button>
      <h1>React Styled-components</h1>
      {/* <Button onClick={() => setCounter(counter + 1)}>Get New User</Button> */}
      <h4>Welcome {userData?.name?.first} {userData?.name?.last}</h4>
      <UserPhoto src= {userData?.picture?.thumbnail} alt="" />
       {/* <button onClick={() => dispatch({type: "SET_USERNAME", payload: "poop"})}>Dispatcher</button>
      <button onClick={() => dispatch({type: "SET_RESTAURANTS", payload: ["Koto", "Kelly's", "Goode Co.", "Bohemeo's", "Voodoo Queen"]})}>Restaurants</button> */}
        
    </HeaderContainer>
  );
}