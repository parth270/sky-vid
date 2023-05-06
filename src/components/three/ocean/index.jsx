import * as THREE from "three";
import React, { Suspense, useRef, useMemo } from "react";
import {
  Canvas,
  extend,
  useThree,
  useLoader,
  useFrame,
} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Water } from "three-stdlib";
import { Sky } from "@react-three/drei";

extend({ Water });

const Ocean = () => {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, "/waternormals.jpeg");
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      // waterColor: 0x001e0f,
      // waterColor: 0x6fd6f9,
      waterColor:0x0000ff,
      distortionScale: 3.7,
      fog: true,
      format: gl.encoding,
    }),
    [waterNormals]
  );
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );
  return (
    <water
      position={[0, -3, 0]}
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
    />
  );
};

export default Ocean;

export const SkyCover = (props) => {
  return (
    // <Sky
    //   distance={1000}
    //   sunPosition={[1, 1, 0]}
    //   inclination={0.6}
    //   azimuth={0.25}

    //   {...props}
    // />
    <Sky
      distance={1000}
      turbidity={8}
      rayleigh={10}
      mieCoefficient={0.005}
      mieDirectionalG={0.8}
      sunPosition={[1,4, 0]}
      inclination={0.49}
      azimuth={0.25}
    />
  );
};
