import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TestimonialCard from './TestimonialCard'

import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Testimonials() {
    const reviews = useSelector((state)=> state.testimonialData)
   const [reviewForm, setReviewForm] = useState({})
   const dispatch = useDispatch()
   
   
    return (
        <div className="testimonialPage">
            <Link to="/">Back Home</Link>
            <h1>Testimonials</h1>
            {reviews.map((review) => (<TestimonialCard review={review}/>))}
           
        </div>
    )
}
