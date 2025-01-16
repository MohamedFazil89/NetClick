import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";
import Theme from "../assets/entypo_light-up.png";
import Logo from "../assets/netclick_logo.png";

const NavBar = () => {
    const [theme, setTheme] = useState("light");
    const [menuOpen, setMenuOpen] = useState(false);


    // Load saved theme from localStorage (if any)
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const ThemeChange = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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
                <button className="theme" onClick={ThemeChange}>
                    <img src={Theme} alt="Theme" />
                </button>
            </ul>
            <button className="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
            <ul className={`SlidBar-list ${menuOpen ? "open" : ""}`}>
                <li className="Pages">Home</li>
                <li className="Pages">Service</li>
                <li className="Pages">Works</li>
                <li className="Pages">Contact Us</li>
            </ul>
        </nav>
    );
};

export default NavBar;
