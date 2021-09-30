import React, { useEffect, useState } from 'react'
import { SidebarContainer, Button } from '../styled-components/SidebarStyle';

const URL = "https://randomuser.me/api/";
export default function Sidebar() {
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
        <img src={user.userImage} alt="" />
        <h4>Welcome {user?.name?.first} {""} {user?.name?.last}</h4>
        <Button onClick={() => setCounter(counter + 1)}>Get New User</Button>
        </SidebarContainer>
    )
}

