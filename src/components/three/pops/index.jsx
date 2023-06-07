import { Html } from "@react-three/drei";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { setLoading } from "../../../services/three";
import { setCurr } from "../../../services/Model";

const Frame = ({ pos, rota, text, route, i }) => {
  const [full, setFull] = useState(false);
  const router = useNavigate();
  const dispatch = useDispatch();
  const curr = useSelector((state) => state.model.curr);
  return (
    <Html
      transform
      wrapperClass="htmlScreen"
      distanceFactor={20}
      position={[pos[0], pos[1], pos[2]]}
      scale={[1, 1, 1]}
      rotation={rota}
      fullscreen={full}
    >
      <div
        onClick={() => {
          // console.log(text);
          // setFull(!full);
          // if (route) {
          //   dispatch(setLoading(true));
          //   setTimeout(() => {
          //     setLoading(false);
          //     router(route);
          //   }, 1700);
          // }
          dispatch(setCurr(i));
        }}
        className="w-[350px] flex items-end duration-300 cursor-pointer  h-[400px]"
      >
        <div
          className={` ${
            curr === i && "scale-50 translate-y-[-120px]"
          } duration-300 flex w-[100%] h-[400px]  items-end`}
        >
          <span className="text-[80px] font-medium leading-[65px] text-[#505e71] mr-[20px]">
            {i + 1}
          </span>
          <div className="w-[5px] h-[400px] bg-[#f17238]"></div>
          <span className="text-[30px] ml-[20px] font-medium leading-[40px] fckin text-[#505e71]">
            {text}
          </span>
        </div>
      </div>
    </Html>
  );
};

const Pops = () => {
  const deg = THREE.MathUtils.DEG2RAD;

  return (
    <>
      <Frame
        pos={[30, 15, -30]}
        rota={[deg * 0, -deg * 40, 0]}
        text={"Introduction"}
        route={"/introduction"}
        i={0}
      />
      <Frame
        pos={[0, 15, -40]}
        rota={[deg * 0, deg * 0, 0]}
        text={"Research Methodology"}
        route={"research-methodology"}
        i={1}
      />
      <Frame
        pos={[-30, 15, -30]}
        rota={[deg * 0, deg * 40, 0]}
        text={"Horizon Results"}
        route={"/research-profiles"}
        i={2}
      />
      <Frame
        pos={[-30, 15, 30]}
        rota={[deg * 0, -deg * 220, 0]}
        text={"Horizon Profiles"}
        route={"/horizon-profiles"}
        i={3}
      />
      <Frame
        pos={[30, 15, 30]}
        rota={[deg * 0, -deg * 140, 0]}
        text={"Demographics"}
        route={"demographics"}
        i={4}
      />
      <Frame
        pos={[0, 15, 40]}
        rota={[deg * 0, deg * 180, 0]}
        text={"Authors"}
        route={"authors"}
        i={5}
      />
    </>
  );
};

export default Pops;
