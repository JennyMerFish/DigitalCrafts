import React, {useState} from 'react'
import { ActualForm, LoginContainer, LogInToContinue, LoginInputs, LoginButton, RememberMe, ForgotPassword, SignUp, BottomFlexer } from '../styled-components/LoginStyle'
import { Button } from '../styled-components/SidebarStyle'
import {Link} from "react-router-dom"
import {createClient} from '@supabase/supabase-js'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'

const supabase = createClient(
    "https://gqrgcgbypvierwrjkguc.supabase.co",
"    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDA1MzkyNCwiZXhwIjoxOTQ5NjI5OTI0fQ.iWXT-NHSgBBqsn3iyHPrEYDnZkzjeMsNGGToq8JYPMM")


export default function Login(props) {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({})
    const history = useHistory()

    const login = async (e) => {
        e.preventDefault()
        const { user, session, error } = await supabase.auth.signIn({
            email: formData.username,
            password: formData.password,
            
          } ) 
          if (session) {
              history.push("/dashboard");
              dispatch({type: "SET_USER", payload: formData.username})
          } else {
              alert(error.message)
          }

console.log(user, session, error)
    }

    const register = async (e) => {
        e.preventDefault()
        const { user, session, error } = await supabase.auth.signUp({
            email: formData.username,
            password: formData.password,
            
          })
          if (session) {
              history.push("/login")
          }

    }
    return (<>
        <LoginContainer>
            
            <ActualForm>
                <LogInToContinue>Login to continue!</LogInToContinue>
                <LoginInputs value={formData?.username} onChange={(e) => setFormData({...formData,[e.target.name]:e.target.value})} type="text" placeholder="username" name="username" value={formData?.username}/>
                {/* <input onChange={(e) => setFormData({...formData,[e.target.name]:e.target.value})} type="text" placeholder="email" name="email" value={formData?.email}/> */}
                <LoginInputs onChange={(e) => setFormData({...formData,[e.target.name]:e.target.value})} type="password" placeholder="password" name="password" value={formData?.password} />
                <RememberMe><input type="checkbox"/>Remember me</RememberMe>
                
                <LoginButton onClick={(e)=>login(e)} type="submit" value="" >LOGIN</LoginButton>
                <LoginButton onClick={(e)=>register(e)} type="submit" value="" >REGISTER</LoginButton>
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
