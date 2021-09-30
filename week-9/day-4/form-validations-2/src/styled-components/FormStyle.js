import styled from "styled-components";

export const WholePage = styled.div 
`
display: grid;
grid-template: 
"header header header header"
"sidebar formContainer formContainer formContainer"
"sidebar formContainer formContainer formContainer"
"sidebar formContainer formContainer formContainer"
;
height: 100vh;
width: 100vw;
`

export const FormContainer = styled.div
`
grid-area: formContainer;
background-color: #fafbfc;
padding-left: 20px;
padding-top: 15px;
`

export const ActualForm = styled.form
`
display: flex;
flex-direction: column;
width: 250px;
`