import { Html } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

const Frame = ({ pos, rota,text }) => {
  return (
    <Html
      transform
      wrapperClass="htmlScreen"
      distanceFactor={20}
      position={pos}
      rotation={rota}
    >
      <div className="w-[300px]  flex items-center duration-300 cursor-pointer justify-center hover:border-[10px] border-[#ccc] h-[150px] bg-[#000]">
        <p className="font-mono text-[#fff]">{text}</p>
      </div>
      {/* <iframe src="https://bruno-simon.com/html/" /> */}
    </Html>
  );
};

const Pops = () => {
  const deg = THREE.MathUtils.DEG2RAD;

  return (
    <>
      <Frame pos={[30, 6, -30]} rota={[deg * 0, -deg * 40, 0]} text={"Introduction"} />
      <Frame pos={[0, 6, -40]} rota={[deg * 0, deg *0, 0]} text={"Research Methodology"} />
      <Frame pos={[-30, 6, -30]} rota={[deg * 0, deg * 40, 0]} text={"Horizon Results"} />
      <Frame pos={[-30, 6, 30]} rota={[deg * 0, -deg * 220, 0]} text={"Horizon Profiles"} />
      <Frame pos={[30, 6, 30]} rota={[deg * 0, -deg * 140, 0]} text={"Authors"} />
      <Frame pos={[0, 6, 40]} rota={[deg * 0, deg *180, 0]} text={"Demographics"} />
    </>
  );
};

export default Pops;
