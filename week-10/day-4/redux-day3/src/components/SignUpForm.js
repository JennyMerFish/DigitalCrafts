import React from 'react'
import { useDispatch } from 'react-redux'
import "./SignUpStyles.css"

export default function SignUpForm() {
    const dispatch = useDispatch()
    
    return (
        <div className="signUpForm">
            <form action="" >
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
