import React from "react";
import {
  Bloom,
  EffectComposer,
  EffectComposerContext,
} from "@react-three/postprocessing";
import { ShaderPass, UnrealBloomPass } from "three-stdlib";
import { Effects } from "@react-three/drei";
import { extend } from "@react-three/fiber";
extend({ UnrealBloomPass })

const Effects1 = () => {

  return (
    <>
      {/* <EffectComposer enabled={true} multisampling={0} disableNormalPass={true}>
        <Bloom luminanceSmoothing={0.9} height={300}  mipmapBlur  opacity={3}/>
      </EffectComposer> */}
      {/* <Effects disableGamma >
        <UnrealBloomPass strength={1} threshold={1} radius={0.5}/>
      </Effects> */}
      <EffectComposer>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.5}
        />
      </EffectComposer>
    </>
  );
};

export default Effects1;

// import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
// import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
// import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
// import { extend, useFrame, useThree } from "@react-three/fiber";
// import { useEffect, useRef } from "react";
// import Sun from "../sun";

// extend({ EffectComposer, RenderPass, UnrealBloomPass });

// const Effect = () => {
//   const { gl, camera, size, scene } = useThree();
//   const composer = useRef();
//   useEffect(
//     () => void scene && composer.current.setSize(size.width, size.height),
//     [size]
//   );
//   useFrame(() => scene && composer.current.render(), 1);
//   return (
//     <effectComposer ref={composer} args={[gl]}>
//       <renderPass attachArray="passes" scene={scene} camera={camera} />
//       <unrealBloomPass attachArray="passes" args={[undefined, 1.5, 1, 0]} />
//       <ambientLight intensity={0.5} />
//       <Sun/>
//     </effectComposer>
//   );
// };

// export default Effect;
