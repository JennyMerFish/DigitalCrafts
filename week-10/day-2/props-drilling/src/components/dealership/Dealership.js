import React from 'react'
import "../../App.css"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function Dealership(props) {
    const bugatti = useSelector(state => state.bugatti)
    const kawasaki = useSelector(state => state.kawasaki)
    const fordGt = useSelector(state => state.fordGt)
    const dispatch = useDispatch()
    return (
        <div className="box">
            <h1>Dealership</h1>
            <h2>Cars in our dealership</h2>
            <p>{fordGt}</p>
            <p>{bugatti}</p>
            <p>{kawasaki}</p>
            <button onClick={() => dispatch({type: "CHANGE_KAWASAKI"})}>Change Kawasaki</button>
            <p>{fordGt}</p>
        </div>
    )
}
