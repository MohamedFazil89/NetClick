import React from "react";
import "../styles/NavBar.css" 
import Theme from "../assets/entypo_light-up.png"
import Logo from "../assets/netclick_logo.png"


const NavBar = () => {
    return (
        <nav className="NavBar-container">
            <ul className="NavBar-list">
                <li className="Logo">Logo
                    {/* <img src={Logo} alt="Logo" className="logo" /> */}
                </li>
                <li className="Pages">Home</li>
                <li className="Pages">Service</li>
                <li className="Pages">Works</li>
                <li className="Pages">Contact Us</li>
                <li className="theme "> 
                    <img src={Theme} alt="Theme" />
                </li>
            </ul>
            
        </nav>
    )
}

export default NavBar