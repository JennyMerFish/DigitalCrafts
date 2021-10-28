import React from 'react'
import ServicesCards from './ServicesCards'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Services() {
    const services = useSelector((state)=> state.servicesData)
    return (
        <div className="servicesPage">
            <Link to="/">Back Home</Link>
            <h1 className="servicesHeader">Services</h1>
            {/* <img className="displayPhoto" src="https://images.unsplash.com/photo-1458245201577-fc8a130b8829?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1476&q=80" alt="" /> */}
            {services?.map((service) => 
                (<ServicesCards service={service}/>)
            )}
            
        </div>
    )
}
