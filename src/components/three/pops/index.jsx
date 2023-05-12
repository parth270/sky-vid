import { Html } from "@react-three/drei";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { setLoading } from "../../../services/three";

const Frame = ({ pos, rota, text, route }) => {
  const [full, setFull] = useState(false);
  const router = useNavigate();
  const dispatch = useDispatch();
  return (
    <Html
      transform
      wrapperClass="htmlScreen"
      distanceFactor={20}
      position={pos}
      rotation={rota}
      fullscreen={full}
    >
      <div
        onClick={() => {
          console.log(text);
          setFull(!full);
          if (route) {
            dispatch(setLoading(true));
            setTimeout(() => {
              setLoading(false);
              router(route);
            }, 1700);
          }
        }}
        className="w-[300px]  flex items-center duration-300 cursor-pointer justify-center hover:border-[10px] border-[#ccc] h-[150px] bg-[#000]"
      >
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
      <Frame
        pos={[30, 6, -30]}
        rota={[deg * 0, -deg * 40, 0]}
        text={"Introduction"}
        route={"/introduction"}
      />
      <Frame
        pos={[0, 6, -40]}
        rota={[deg * 0, deg * 0, 0]}
        text={"Research Methodology"}
        route={"research-methodology"}
      />
      <Frame
        pos={[-30, 6, -30]}
        rota={[deg * 0, deg * 40, 0]}
        text={"Horizon Results"}
        route={"/research-profiles"}
      />
      <Frame
        pos={[-30, 6, 30]}
        rota={[deg * 0, -deg * 220, 0]}
        text={"Horizon Profiles"}
        route={"/horizon-profiles"}
      />
      <Frame
        pos={[30, 6, 30]}
        rota={[deg * 0, -deg * 140, 0]}
        text={"Demographics"}
        route={"demographics"}
      />
      <Frame
        pos={[0, 6, 40]}
        rota={[deg * 0, deg * 180, 0]}
        text={"Authors"}
        route={"authors"}
      />
    </>
  );
};

export default Pops;
