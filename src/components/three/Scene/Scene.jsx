import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as THREE from "three";
import Effects from "../Effects";
import { setLoading } from "../../../services/three";
import SkyBox from "../box";
import { Cloud, OrbitControls } from "@react-three/drei";
import Ocean, { SkyCover } from "../ocean";
import { Model } from "../ocean/island";
import Background from "../background";
import Sun from "../sun";

const Rig = (props) => {
  const state = useSelector((state) => state.three);
  const ref = useRef();
  const three = useThree();
  return <group ref={ref} {...props} />;
};

const Clouds = () => {
  return (
    <>
      <group position={[100, 30, 50]} scale={[3, 1, 3]}>
        <Cloud position={[10, 0, -10]} speed={1} opacity={0.7} />
        <Cloud position={[0, 0, 0]} speed={1} opacity={0.7} />
        <Cloud position={[10, 0, 10]} speed={1} opacity={0.7} />
      </group>
      <group position={[-100, 30, -100]} scale={[3, 1, 3]}>
        <Cloud position={[10, 0, -10]} speed={1} opacity={0.7} />
        <Cloud position={[0, 0, 0]} speed={1} opacity={0.7} />
        <Cloud position={[10, 0, 10]} speed={1} opacity={0.7} />
      </group>
      <group position={[-100, 30, 50]} scale={[3, 1, 3]}>
        <Cloud position={[10, 0, -10]} speed={1} opacity={0.7} />
        <Cloud position={[0, 0, 0]} speed={1} opacity={0.7} />
        <Cloud position={[10, 0, 10]} speed={1} opacity={0.7} />
      </group>
    </>
  );
};

const Scene = ({ randoms }) => {
  const curr1 = useSelector((state) => state.three.curr1);
  const allContent = useSelector((state) => state.model.allContent);
  // const state1 = useSelector((state) => state.model);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setLoading(false));
  });

  return (
    <>
      <color
        attach="background"
        // args={[pages[0].back]}
        args={["#fff"]}
      />
      <OrbitControls maxPolarAngle={Math.PI / 2} target={[0, 2, 0]} />
      <Effects />
      <ambientLight intensity={1.5} />
      <Rig>
        <Ocean />
        <SkyBox src="/ss.jpeg" pos={[0, 0, 0]} />
        <Model position={[0, -3.5, 0]} scale={[2, 2, 2]} />
        <Clouds />
        {/* <SkyCover /> */}
        {/* <Background /> */}
        <Sun />
      </Rig>
    </>
  );
};

export default React.memo(Scene);
