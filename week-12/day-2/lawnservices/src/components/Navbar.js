import React, {useState} from 'react'
import NavbarLinks from './NavbarLinks'


export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <div className="navbar">
            <h1>Lawn Services 4 Less</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2LHwhiNMUfP5XKmJBKTBAvLHNttMn1gspg&usqp=CAU" height="50"></img>
            <button onClick={handleToggle}>{navbarOpen ? "Close Menu" : "Open Menu"}</button>
          <NavbarLinks navbarOpen={navbarOpen} />
        </div>
    )
}
