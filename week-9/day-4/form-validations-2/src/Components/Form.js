import React, {useState} from 'react'
import { ActualForm, FormContainer } from '../styled-components/FormStyle'
import { Button } from '../styled-components/SidebarStyle'


export default function Form() {
    const [formData, setFormData] = useState({})
    return (
        <FormContainer>
            
            <ActualForm>
                <input onChange={(e) => setFormData({...formData,[e.target.name]:e.target.value})} type="text" placeholder="username" name="username" value={formData?.username}/>
                <input onChange={(e) => setFormData({...formData,[e.target.name]:e.target.value})} type="text" placeholder="email" name="email" value={formData?.email}/>
                <input onChange={(e) => setFormData({...formData,[e.target.name]:e.target.value})} type="password" placeholder="password" name="password" value={formData?.password} />
                <div>
                <Button>Sign Up</Button>
                </div>
            </ActualForm>
        </FormContainer>
    )
}
