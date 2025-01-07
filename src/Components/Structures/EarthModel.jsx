import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import "../styles/EarthModel.css";

const EarthModel = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const config = {
      scaleFactor: 0.75,
      degPerSec: 6,
      angles: { x: -100, y: 0, z: 0 },
      colors: {
        water: "#111310",
        land: "#7FA6F0",
      },
    };

  

    const state = {
      lastTime: d3.now(),
      degPerMs: config.degPerSec / 1000,
      isDragging: false,
      startX: 0,
      dragVelocity: 0,
    };

    const elements = {
      canvas: d3.select(canvasRef.current),
      context: canvasRef.current.getContext("2d"),
    };

    const projection = d3.geoOrthographic().precision(0.1);
    const path = d3.geoPath(projection).context(elements.context);
    let autorotate, land;

    const setAngles = () => {
      const rotation = projection.rotate();
      rotation[0] = config.angles.x;
      projection.rotate(rotation);
    };

    const scale = () => {
      const width = window.innerWidth * config.scaleFactor;
      const height = window.innerHeight * config.scaleFactor;
      elements.canvas.attr("width", width).attr("height", height);
      projection
        .scale(Math.min(width, height) / 2)
        .translate([width / 2, height / 2]);
      render();
    };

    const dragstarted = (event) => {
      state.isDragging = true;
      state.startX = event.x;
      state.dragVelocity = 0;
      autorotate.stop(); // Pause auto-rotation during drag
    };

    const dragged = (event) => {
      if (!state.isDragging) return;

      const sensitivity = 0.25;
      const dx = (event.x - state.startX) * sensitivity;
      state.startX = event.x;

      const rotation = projection.rotate();
      rotation[0] += dx; // Update horizontal rotation
      projection.rotate(rotation);

      // Update drag velocity for smooth deceleration
      state.dragVelocity = dx;
      render();
    };

    const dragended = () => {
      state.isDragging = false;

      // Smooth deceleration after drag
      const decelerate = d3.timer(() => {
        if (Math.abs(state.dragVelocity) < 0.1) {
          decelerate.stop();
          state.dragVelocity = 0;
          startRotation(); // Resume auto-rotation after drag
        } else {
          const rotation = projection.rotate();
          rotation[0] += state.dragVelocity;
          projection.rotate(rotation);
          state.dragVelocity *= 0.95; // Apply friction
          render();
        }
      });
    };

    const render = () => {
      const { context } = elements;
      const width = window.innerWidth;
      const height = window.innerHeight;
      context.clearRect(0, 0, width, height);
      fill({ type: "Sphere" }, config.colors.water);
      fill(land, config.colors.land);
    };

    const fill = (obj, color) => {
      elements.context.beginPath();
      path(obj);
      elements.context.fillStyle = color;
      elements.context.fill();
    };

    const rotate = (elapsed) => {
      const now = d3.now();
      const diff = now - state.lastTime;
      if (diff < elapsed) {
        const rotation = projection.rotate();
        rotation[0] += diff * state.degPerMs;
        projection.rotate(rotation);
        render();
      }
      state.lastTime = now;
    };

    const loadData = async (cb) => {
      const world = await d3.json(
        "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"
      );
      cb(world);
    };

    const startRotation = (delay = 0) => {
      autorotate.restart(rotate, delay);
    };

    const init = () => {
      setAngles();
      elements.canvas.call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

      loadData((world) => {
        land = topojson.feature(world, world.objects.land);

        window.addEventListener("resize", scale);
        scale();
        autorotate = d3.timer(rotate); // Start auto-rotation
      });
    };

    init();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", scale);
      if (autorotate) autorotate.stop();
    };
  }, []);

  return (
    <div>
      <canvas id="globe" ref={canvasRef}></canvas>
    </div>
  );
};

export default EarthModel;
