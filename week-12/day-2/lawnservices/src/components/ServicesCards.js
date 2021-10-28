import React from 'react'

export default function ServicesCards(props) {
    return (
        <div className="servicesCard">
            <img src={props?.service?.image} alt="" width="50" />
            <h2>{props.service.name}</h2>
        </div>
    )
}
