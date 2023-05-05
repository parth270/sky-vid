import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as THREE from "three";
import Effects from "../Effects";
import { setLoading } from "../../../services/three";
import SkyBox from "../box";
import { OrbitControls } from "@react-three/drei";
import Ocean from "../ocean";

const Rig = (props) => {
  const state = useSelector((state) => state.three);
  const ref = useRef();
  const three = useThree();
  return <group ref={ref} {...props} />;
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
      <OrbitControls maxPolarAngle={Math.PI / 2} />
      <Effects />
      <Rig>
        <Ocean />
        <SkyBox src="/sk.jpg" pos={[0, 0, 0]} />
      </Rig>
    </>
  );
};

export default React.memo(Scene);
