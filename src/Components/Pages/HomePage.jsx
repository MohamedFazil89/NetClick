import React from "react";
import NavBar from "../Structures/Navbar"
import AnimeLine from "../Structures/AnimeLine"
import "../styles/HomePage.css"
// import Earth from "../assets/gis_earth.png"
import Explore from "../Structures/Explore";
import Earth from "../Structures/EarthModel"
import  ParticleAnimation from "../Structures/ParticleAnimation"




export default function Home({ scrollToCollaborations }) {
    return (
        <>
            <NavBar />
            <AnimeLine />
            <ParticleAnimation/>

            <div className="Body-Container">
                <p className="Slogan-text">CRAFTING <br />
                    SOLUTION,<br />
                    EMERGING<br />
                    RESULTS</p>
                    {/* <img src={Earth} alt="Earth" className="Earth" /> */}
                    <Earth />

                <p className="Power-words">
                    <span className="trust">TRUST</span> <br />
                    <span className="build">BUILD</span> <br />
                    <span className="success">SUCCESS</span><br />
                </p>
            </div>
            <Explore scrollToCollaboration={scrollToCollaborations} />

        </>
    )
}