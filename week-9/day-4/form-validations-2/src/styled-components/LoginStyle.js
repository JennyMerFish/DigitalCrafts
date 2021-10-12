import styled from "styled-components";

export const WholePage = styled.div 
`
display: grid;
grid-template: 
"header header header header"
"sidebar LoginContainer LoginContainer LoginContainer"
"sidebar LoginContainer LoginContainer LoginContainer"
"sidebar LoginContainer LoginContainer LoginContainer"
;
grid-template-rows: 100px 1fr 1fr 1fr;
grid-template-columns: 250px 1fr 1fr 1fr;
height: 100vh;
width: 100vw;


`

export const LoginContainer = styled.div
`
grid-area: LoginContainer;
padding-top: 50px;
padding-left: 100px;
display: grid;

`

export const ActualForm = styled.form
`
background: linear-gradient(#563c89, #051e64);
border-radius: 10px;
display: flex;
flex-direction: column;
width: 250px;
height: 300px;
align-items: center;
padding-top: inherit;
font-family: 'Montserrat', sans-serif;
color: #d6ccee;

`

export const LogInToContinue = styled.h3
`
font-family: 'Montserrat', sans-serif;
color: #d6ccee;
`
export const LoginInputs = styled.input
`
border-radius: 20px;
border: none;
padding: 8px;
padding-left: 17px;
margin-bottom: 15px;
width: 70%;

`
export const LoginButton = styled.button
`
border-radius: 20px;
color: #fdcdc2;
font-family: 'Montserrat', sans-serif;
border: none;
width: 79%;
padding: 8px;
background: linear-gradient(.25turn, #E95670, #ff9c6f);
margin-top: 10px;
`
export const RememberMe = styled.label
`
margin-right: auto;
padding-left: 30px;
font-size: small;
`

export const ForgotPassword = styled.p
`
font-family: 'Montserrat', sans-serif;
color: #d6ccee;
font-size: x-small;
margin-top: 2px;

`

export const SignUp = styled.a
`
font-family: 'Montserrat', sans-serif;
color: #d6ccee;
font-size: x-small;
margin-top: 2px;
font-weight: bold;
padding-left: 3px;
`
export const BottomFlexer = styled.div
`
display: flex;
padding-top: 40px;


`
