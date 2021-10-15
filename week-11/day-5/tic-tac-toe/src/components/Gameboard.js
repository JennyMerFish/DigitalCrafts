import React from 'react'
import Square from "./Square"
import { useState } from 'react'

export default function Gameboard({}) {
  
  const [exOrOh, setExOrOh] = useState(true)
  const changeTheLetter = () => {
    setExOrOh(!exOrOh)
  }
    return (
        <div className="buttons">
      <Square exOrOh={exOrOh} changeTheLetter={changeTheLetter}/>
      <Square exOrOh={exOrOh} changeTheLetter={changeTheLetter}/>
      <Square exOrOh={exOrOh} changeTheLetter={changeTheLetter}/>
      <Square exOrOh={exOrOh} changeTheLetter={changeTheLetter}/>
      <Square exOrOh={exOrOh} changeTheLetter={changeTheLetter}/>
      <Square exOrOh={exOrOh} changeTheLetter={changeTheLetter}/>
      <Square exOrOh={exOrOh} changeTheLetter={changeTheLetter}/>
      <Square exOrOh={exOrOh} changeTheLetter={changeTheLetter}/>
      <Square exOrOh={exOrOh} changeTheLetter={changeTheLetter}/>


        </div>
    )
}
