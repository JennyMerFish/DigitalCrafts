import {useState} from 'react'
import "./App.css"


function Signup(props) {
    const [signUpForm, setSignUpForm] = useState({})
    const {allTheForms, setAllTheForms} = props
    function resetFields() {
        
    }

    return (
        <div className="formBox">
            <form className ="signup" action="">
            <input type="text" value="dog" onChange={(e) => setSignUpForm({...signUpForm, [e.target.name]: e.target.value})} name ="firstName" placeholder="First Name"></input>
            <input type="text" onChange={(e) => setSignUpForm({...signUpForm, [e.target.name]: e.target.value})} name ="lastName" placeholder="Last Name"></input>
            <input type="date" onChange={(e) => setSignUpForm({...signUpForm, [e.target.name]: e.target.value})} name ="DOB" placeholder="Date of Birth"></input>
            <input type="text" onChange={(e) => setSignUpForm({...signUpForm, [e.target.name]: e.target.value})} name ="address" placeholder="Street Address"></input>
            <input type="text" onChange={(e) => setSignUpForm({...signUpForm, [e.target.name]: e.target.value})} name ="city" placeholder="City"></input>
            <input type="text" onChange={(e) => setSignUpForm({...signUpForm, [e.target.name]: e.target.value})} name ="state" placeholder="State"></input>
            <input type="text" onChange={(e) => setSignUpForm({...signUpForm, [e.target.name]: e.target.value})} name ="zipcode" placeholder="Zip Code"></input>
            <input type="text" onChange={(e) => setSignUpForm({...signUpForm, [e.target.name]: e.target.value})} name ="userName" placeholder="User Name"></input>
            <input type="text"onChange={(e) => setSignUpForm({...signUpForm, [e.target.name]: e.target.value})} name ="email" placeholder="Email"></input>
            <input type="button" value="Signup" onClick={(e) => setAllTheForms([...allTheForms, signUpForm])}></input>
            </form>
        </div>
    )
}

export default Signup