import React, { useState, useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const [particleColor, setParticleColor] = useState(""); // State for particle color

  const particlesInit = useCallback(async (engine) => {
    console.log("Engine loaded:", engine);
    await loadFull(engine); // Loads the tsparticles engine and plugins
  }, []);


  useEffect(() =>{
    const updateColor = () =>{
      const rootStyle = getComputedStyle(document.documentElement);
    const color = rootStyle.getPropertyValue("--particle-color").trim(); // Remove extra whitespace
    setParticleColor(color); // Set the value in state
    }

    updateColor()


  }, [])

  const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 2 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: particleColor }, // Dynamic color from state
      links: {
        color: particleColor,
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        outModes: { default: "out" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 50,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  const handleColorChange = (event) => {
    setParticleColor(event.target.value); // Update particle color
  };

  return (
    <div>
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      <div style={{ position: "absolute", top: "10px", left: "10px" }}>
        {/* <label htmlFor="colorPicker">Pick Particle Color: </label> */}
        {/* <input
          id="colorPicker"
          type="color"
          value={particleColor}
          onChange={handleColorChange}
        /> */}
      </div>
    </div>
  );
};

export default ParticlesBackground;
