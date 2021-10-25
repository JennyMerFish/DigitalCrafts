import React from 'react'
import ServicesCards from './ServicesCards'
import { services } from './ServicesData'
export default function Services() {
    return (
        <div className="servicesPage">
            <a href="/">Back Home</a>
            <h1>Services</h1>
            {services?.map((service) => 
                (<ServicesCards service={service}/>)
            )}
            
        </div>
    )
}
