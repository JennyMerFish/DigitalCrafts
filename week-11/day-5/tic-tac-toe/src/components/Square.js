import React from 'react'
import { useState } from 'react'

export default function Square(props) {
   
   const [clicked, setClicked] = useState(true)
   const makeAClick = async () => {
        if (clicked === true) {
            const {exOrOh, changeTheLetter} = props
        }
        else {

   }    

   }
    return (
       
            <button className ="square" onClick = {changeTheLetter(), makeAClick()}>{exOrOh ? "X" : "O"}</button>
        
    )
}
