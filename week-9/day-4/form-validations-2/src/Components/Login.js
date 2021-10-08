import React, {useState} from 'react'
import { ActualForm, LoginContainer, LogInToContinue, LoginInputs, LoginButton, RememberMe, ForgotPassword, SignUp, BottomFlexer } from '../styled-components/LoginStyle'
import { Button } from '../styled-components/SidebarStyle'
import {Link} from "react-router-dom"


export default function Login() {
    const [formData, setFormData] = useState({})
    return (<>
        <LoginContainer>
            
            <ActualForm>
                <LogInToContinue>Login to continue!</LogInToContinue>
                <LoginInputs onChange={(e) => setFormData({...formData,[e.target.name]:e.target.value})} type="text" placeholder="username" name="username" value={formData?.username}/>
                {/* <input onChange={(e) => setFormData({...formData,[e.target.name]:e.target.value})} type="text" placeholder="email" name="email" value={formData?.email}/> */}
                <LoginInputs onChange={(e) => setFormData({...formData,[e.target.name]:e.target.value})} type="password" placeholder="password" name="password" value={formData?.password} />
                <RememberMe><input type="checkbox"/>Remember me</RememberMe>
                
                <LoginButton>LOGIN</LoginButton>
                <Link>
                <ForgotPassword>Forgot your password?</ForgotPassword>
                </Link>
                <BottomFlexer>
                    <ForgotPassword>New here?</ForgotPassword>
                    <SignUp>Sign Up</SignUp>
                </BottomFlexer>
                
            </ActualForm>
        </LoginContainer>
        </>
    )
}
