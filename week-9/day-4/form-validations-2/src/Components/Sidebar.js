import React, { useEffect, useState } from 'react'
import { SidebarContainer, Button, SidebarLinks, UserPhoto } from '../styled-components/SidebarStyle';
import {Link} from "react-router-dom"

const URL = "https://randomuser.me/api/";
export default function Sidebar(props) {
  const viewSidebar = props.viewSidebar
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
     
      <SidebarContainer>
        <UserPhoto src={user.userImage} alt="" />
        <h4>Welcome {user?.name?.first} {""} {user?.name?.last}</h4>
        <Button onClick={() => setCounter(counter + 1)}>Get New User</Button>
        <Link to="/">
        <SidebarLinks>Home</SidebarLinks>
        </Link>
        <Link to="/dashboard">
        <SidebarLinks>Dashboard</SidebarLinks>
        </Link>
        <Link to="/login">
        <SidebarLinks>Log In</SidebarLinks>
        </Link>
        <Link to="/account">
        <SidebarLinks>Account</SidebarLinks>
        </Link>
        <Link to="/garage">
        <SidebarLinks>Garage</SidebarLinks>
        </Link>
        </SidebarContainer>
      
    )
}

