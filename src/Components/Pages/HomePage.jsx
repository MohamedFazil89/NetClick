import React from "react";
import NavBar from "../Structures/Navbar";
import AnimeLine from "../Structures/AnimeLine";
import "../styles/HomePage.css";
import Explore from "../Structures/Explore";
import Earth from "../Structures/EarthModel";
import ParticleAnimation from "../Structures/ParticleAnimation";
import Splinex from '../Structures/Splinex'

export default function Home({ scrollToCollaborations }) {
    return (
        <>
          <div className="navbar">
          <NavBar />
          </div>
            <AnimeLine />
            <div className="Body-Container">
                <p className="Slogan-text">
                    CRAFTING <br />
                    SOLUTION,<br />
                    EMERGING<br />
                    RESULTS
                </p>
                <Splinex />
                {/* <Earth /> */}
                <p className="Power-words">
                    <span className="trust">TRUST</span> <br />
                    <span className="build">BUILD</span> <br />
                    <span className="success">SUCCESS</span><br />
                </p>
            </div>
            <ParticleAnimation />

            <Explore scrollToCollaboration={scrollToCollaborations} />
            
        </>
    );
}
