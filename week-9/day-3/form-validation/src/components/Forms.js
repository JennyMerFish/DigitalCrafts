import {useState} from 'react'


function Form() {
    const [signUpForm, setSignUpForm] = useState({})
return (
<div>

<h1>LinkedIn Sign-Up Form</h1>
<form action="">
<input type="text" onChange={(e) => setSignUpForm({...signUpForm, firstName: e.target.value})} name ="firstName" placeholder="First Name"></input>
<input type="text" onChange={(e) => setSignUpForm({...signUpForm, lastName: e.target.value})} name ="lastName" placeholder="Last Name"></input>
<input type="text" onChange={(e) => setSignUpForm({...signUpForm, email: e.target.value})} name ="email" placeholder="Email"></input>
<input type="button" value="Submit"></input>
</form>



</div>
)}
export default Form;