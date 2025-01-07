import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Earth from "../public/Earth.jsx"
import { AmbientLight } from "three";
import "./App.css"


const EarthModal = () => {
    return (
        <>
            <Canvas>
                <ambientLight intensity={1.5} />
                <OrbitControls 
                 enablePan={false} 
                 enableZoom={false} 
                 minPolarAngle={Math.PI / 2} 
                 maxPolarAngle={Math.PI / 2} 
                 />
                <Suspense fallback={null}>
                    <Earth />

                </Suspense>
            </Canvas>
        </>
    )
}

export default EarthModal