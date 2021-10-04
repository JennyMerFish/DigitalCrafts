import React, {useEffect, useState}  from 'react'
import {HeaderContainer} from "../styled-components/HeaderStyle.js"
import { Button } from '../styled-components/SidebarStyle.js';
import { UserPhoto } from '../styled-components/SidebarStyle.js';
const URL = "https://randomuser.me/api/";

export default function Header(props) {
  
  const viewSidebar = props.viewSidebar
  const setViewSidebar = props.setViewSidebar
 
  const [user, setUser] = useState({});
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
      setUser({
        ...jsonUser.results[0],
        userImage: jsonUser?.results[0]?.picture?.large,
      });
    };
    getUserData();
    return () => {};
  }, [counter]);
  return (
    <HeaderContainer>
      <Button onClick={() => setViewSidebar(!viewSidebar)}>{viewSidebar ? "Hide Sidebar": "Show Sidebar"}</Button>
      <h1>React Styled-components</h1>
      <Button onClick={() => setCounter(counter + 1)}>Get New User</Button>
      <h4>Welcome {user?.name?.first} {""} {user?.name?.last}</h4>
      <UserPhoto src={user.userImage} alt="" />
       
        
    </HeaderContainer>
  );
}