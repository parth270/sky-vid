import React, { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Loader from "../../utils/Loader";
// import Scene from './Scene/Scene'
const Scene = React.lazy(() => import("./Scene/Scene"));

const CanvasContainer = ({ curr1 }) => {
  const [devicePixelRatio, setDevicePixelRatio] = React.useState();

  React.useEffect(() => {
    const pixel = window.devicePixelRatio;
    setDevicePixelRatio(pixel);
  }, []);

  return (
    <Canvas
      camera={{
        position: [-0.1, 0, 0],
        fov: 65,
        rotation: [0, 270 * THREE.MathUtils.DEG2RAD, 0],
      }}
      dpr={devicePixelRatio}
      gl={{
        antialias: false,
      }}
      performance={{ min: 0.5 }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
      }}
      frameloop="demand"
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={<Loader />}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default CanvasContainer;
