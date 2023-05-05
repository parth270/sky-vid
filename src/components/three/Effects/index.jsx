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
      <EffectComposer enabled={true} multisampling={0} disableNormalPass={true}>
        <Bloom luminanceSmoothing={0.9} height={300}  mipmapBlur  opacity={3}/>
      </EffectComposer>
      {/* <Effects disableGamma >
        <UnrealBloomPass strength={1} threshold={1} radius={0.5}/>
      </Effects> */}
    </>
  );
};

export default Effects1;