import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TestimonialCard from './TestimonialCard'


export default function Testimonials() {
    const reviews = useSelector((state)=> state.testimonialData)
   const [reviewForm, setReviewForm] = useState({})
   
   console.log(reviewForm)
    return (
        <div className="testimonialPage">
            <a href="/">Back Home</a>
            <h1>Testimonials</h1>
            {reviews.map((review) => (<TestimonialCard review={review}/>))}
            <input type="text" name="review" id="review" placeholder="Review" onChange={(e) => setReviewForm({...reviewForm, review: e.target.value})} />
            <input type="text" name="name" id="name" placeholder="Name" onChange={(e) => setReviewForm({...reviewForm, name: e.target.value})}/>
            <button onClick={}>Submit</button>
        </div>
    )
}
