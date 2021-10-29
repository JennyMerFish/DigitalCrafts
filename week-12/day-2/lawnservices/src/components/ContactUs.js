import React from 'react'
import { Link } from 'react-router-dom'
import facebook from "../assets/facebook.png"
import phone from "../assets/phone-call.png"
import email from "../assets/email.png"

export default function ContactUs() {
    return (
        <div className="contactUsPage">
            <Link to="/">Back Home</Link>
            <h1>Contact Us</h1>
            <div className="icons">
                
            <a href="https://www.facebook.com/LS4Less/" target="_blank">
            <img src={facebook} alt=""/>
            Visit Us On Facebok!
            </a>
            
            
            <a href="tel:+2819063767">
                <img src={phone} alt="" />
                Give Us A Call!
            </a>
            
            
            <a href="mailto:john@example.com">
                <img src={email} alt="" />
                Send Us An Email!
            </a>
            
            </div>
        </div>
    )
}
