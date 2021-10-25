import React from 'react'

export default function ServicesCards(props) {
    return (
        <div className="servicesCard">
            <h2>{props.service.name}</h2>
        </div>
    )
}
