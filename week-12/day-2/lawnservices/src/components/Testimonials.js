import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TestimonialCard from './TestimonialCard'
import { addReview } from '../redux/actions/TestimonialActions'
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
            <h4>Leave us a review!</h4>
            <input type="text" name="review" id="review" placeholder="Review" onChange={(e) => setReviewForm({...reviewForm, review: e.target.value})} />
            <input type="text" name="name" id="name" placeholder="Name" onChange={(e) => setReviewForm({...reviewForm, name: e.target.value})}/>
            <button onClick={() => addReview(dispatch, reviewForm)}>Submit</button>
        </div>
    )
}
