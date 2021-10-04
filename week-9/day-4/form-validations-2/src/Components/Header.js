import React  from 'react'
import {HeaderContainer} from "../styled-components/HeaderStyle.js"
import { Button } from '../styled-components/SidebarStyle.js';
export default function Header(props) {
  const viewSidebar = props.viewSidebar
  const setViewSidebar = props.setViewSidebar


  return (
    <HeaderContainer>
      <Button onClick={() => setViewSidebar(!viewSidebar)}>{viewSidebar ? "Hide Sidebar": "Show Sidebar"}</Button>
      <h1>React styled-components</h1>
      
    </HeaderContainer>
  );
}