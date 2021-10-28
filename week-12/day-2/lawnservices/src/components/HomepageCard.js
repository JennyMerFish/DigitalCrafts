import React from 'react'
import { Link } from 'react-router-dom'

export default function HomepageCard(props) {
    return (
        <div className="homepageCard">
           
        <Link to={props.link.path}>{props.link.name}</Link>
           
            
        </div>
    )
}
