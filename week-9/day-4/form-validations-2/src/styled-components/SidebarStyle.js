import styled from "styled-components";
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div
`
grid-area: sidebar;
background: linear-gradient(#563c89, #051e64);
padding-left: 20px;
padding-top: 25px;
display: flex;
flex-direction: column;


`
export const Button = styled.button
`
background: linear-gradient(.25turn, #E95670, #ff9c6f);
color: black;
border-radius: 20px;
border: none;
padding: 10px;
height: 35px;

`
export const SidebarLink = styled(Link)
`
padding: 15px;
text-decoration: none;
font-family: 'Montserrat', sans-serif;
color: #d6ccee;
`
export const UserPhoto = styled.img
`
border-radius: 50px;
height: 75px;
`

