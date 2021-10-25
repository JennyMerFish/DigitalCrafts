import React from 'react'

export default function NavbarLinks(props) {

    return (
        <div>
           <ul className={`menuNav ${props.navbarOpen ? "showMenu" : ""}`}>
           <li><a>Gallery</a></li>
           <li><a>Testimonials</a></li>
           <li><a>About Us</a></li>
           <li><a>Contact Us</a></li>
           </ul> 
        </div>
    )
}
