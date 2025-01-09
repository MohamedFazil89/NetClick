import React from "react";
import "../styles/Explore.css"

export default function Explore({ scrollToCollaboration }){
    return(
        <section className="Explore">
            <div className="CurveBox">
                <button className="Explore-Button" onClick={scrollToCollaboration}>EXPLORE THE EXPERIENCE</button>
            </div>

        </section>
    )
}