import React from 'react'

export default function HomepageCard(props) {
    return (
        <div className="homepageCard">
           
        <a href={props.link.path}>{props.link.name}</a>
           {console.log(props.link.path)}
            
        </div>
    )
}
