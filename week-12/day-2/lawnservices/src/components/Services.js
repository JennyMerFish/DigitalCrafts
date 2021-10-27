import React from 'react'
import ServicesCards from './ServicesCards'
import { useSelector } from 'react-redux'


export default function Services() {
    const services = useSelector((state)=> state.servicesData)
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
