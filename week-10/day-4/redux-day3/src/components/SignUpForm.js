import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./SignUpStyles.css"
export default function SignUpForm() {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter)
    return (
        <div className="signUpForm">
            <form action="" >
                <input onChange={(e) => dispatch({type: "SIGNUPFORM_FIRSTNAME", payload: e.target.value})} type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="submit" value="Submit" />
            </form>
            <p>{counter}</p>
            <button onClick={() => dispatch({type: "INCREMENT_COUNTER"})}>Increment</button>
            <button onClick={() => dispatch({type: "DECREMENT_COUNTER"})}>Decrement</button>
            <button onClick={() => dispatch({type: "FILL_INFO"})}>News </button>
        </div>
    )
}
