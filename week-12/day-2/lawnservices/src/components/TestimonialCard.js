import React from 'react'

export default function TestimonialCard(props) {
    
    return (
        <div className="testimonialCard">
            <h3>"{props.review.review}"</h3>
            <h4>-{props.review.name}</h4>
        </div>
    )
}
