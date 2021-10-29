import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
    return (
        <div className="aboutUsPage">
            <Link to="/">Back Home</Link>
            <h1>About Us</h1>
            <img src="https://images.unsplash.com/photo-1528213049955-adbe6fe1dcbd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80" alt="" />
            <h3>We are Erika and Esteban Hernandez and we started Lawn Services 4 Less 6 years ago. We've lived in Houston for 10 years, and before that we lived in San Antonio. We have three beautiful children and 2 cats. After working 15 plus years in retail and the food service industry we were struggling with the work life balance. Our children are our priority and being there for them after school is important for us. Having our own business gives us some flexibility and we cherish the time we have as a family. We are so thankful for our customers that continue to support our business and our family. We love nature and being outdoors, and we love to help people make their own outdoor sanctuaries in their yards. We believe in hard work and quality and we leave every yard cleaner than we found it, and every client satisfied. </h3>
        </div>
    )
}
