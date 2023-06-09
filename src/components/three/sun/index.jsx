import React, { useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";

const Sun = () => {
  return (
    <group position={[400, 0, 0]}>
      <mesh>
        <sphereGeometry args={[10.05, 60, 40]} />
        <meshStandardMaterial
          side={THREE.DoubleSide}
          color={"#ccc"}
          emissive={"#ff`e87c"}
          toneMapped={false}
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
};

export default Sun;
