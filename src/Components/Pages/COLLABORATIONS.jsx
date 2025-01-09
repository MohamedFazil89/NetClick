import React from "react";
import "../styles/COLLABORATIONS.css";
import Video from "../assets/Video.png"
import Web from "../assets/Web.png"
import APP from "../assets/App.png"
import GRAPH from "../assets/Graph.png"

export default function COLLABORATIONS() {
  return (
    <section id="service">

      <div className="App Box">
        <img src={APP} alt="APP" />
        <p>APP DEVELOPMENT</p>
      </div>
      <div className="coloumn">
        <div className=" Web Box">
          <img src={Web} alt="WEB" />
          <p>WEBSITE DEVELOPMENT</p>
        </div>

        <span className=" WebConnect ConnectLine"></span>
        <span className=" VideoConnect ConnectLine"></span>

        <div className="Provide-Box">
          <p>WE PROVIDE</p>
        </div>
        <span className="GraphConnect ConnectLine"></span>
        <span className="AppConnect ConnectLine"></span>


        <div className="Edit Box">
          <img src={Video} alt="Video" />
          <p>VIDEO EDITING</p>
        </div>
      </div>
      <div className="Graph Box">
        <img src={GRAPH} alt="GRAPH" />
        <p>GRAPHIC DESIGNING</p>
      </div>


    </section>
  );
}

