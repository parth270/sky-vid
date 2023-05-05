import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useTexture, useVideoTexture } from "@react-three/drei";
import { Suspense } from "react";

const SkyBox = ({ src, pos }) => {
  const texture = useTexture(src);
  texture.name = src;
  // texture.encoding = THREE.SRGBColorSpace
  // texture.encoding = THREE.sRGBEncoding;

  return (
    <group position={pos}>
      <mesh>
        <sphereGeometry args={[10.05, 60, 40]} />
        <Suspense fallback={null}>
          <meshBasicMaterial
            side={THREE.BackSide}
            map={texture}
            toneMapped={false}
          />
        </Suspense>
      </mesh>
    </group>
  );
};

export default SkyBox;
