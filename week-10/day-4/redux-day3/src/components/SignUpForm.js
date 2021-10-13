import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./SignUpStyles.css"
import {ConsoleLogVariable, DecrementCounter} from "../actions/SignUpFormActions"
import {IncrementCounter} from "../actions/SignUpFormActions"
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
            <button onClick={() => IncrementCounter(dispatch)}>Increment</button>
            <button onClick={() => DecrementCounter(dispatch)}>Decrement</button>
            <button onClick={() => dispatch({type: "FILL_INFO"})}>News </button>
            <button onClick={() => ConsoleLogVariable("Jenny")}>Print to Console</button>
        </div>
    )
}
