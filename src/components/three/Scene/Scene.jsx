import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
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
import Pops from "../pops";
import { Power4, gsap } from "gsap";
import { Power2 } from "gsap";

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
        <Cloud position={[10, 0, -10]} speed={1} opacity={0.6} />
        <Cloud position={[0, 0, 0]} speed={1} opacity={0.6} />
        <Cloud position={[10, 0, 10]} speed={1} opacity={0.6} />
      </group>
      <group position={[100, 30, -100]} scale={[3, 1, 3]}>
        <Cloud position={[10, 0, -10]} speed={1} opacity={0.6} />
        <Cloud position={[0, 0, 0]} speed={1} opacity={0.6} />
        <Cloud position={[10, 0, 10]} speed={1} opacity={0.6} />
      </group>
      <group position={[0, 30, -100]} scale={[3, 1, 3]}>
        <Cloud position={[10, 0, -10]} speed={1} opacity={0.6} />
        <Cloud position={[0, 0, 0]} speed={1} opacity={0.6} />
        <Cloud position={[10, 0, 10]} speed={1} opacity={0.6} />
      </group>
      <group position={[-100, 30, 50]} scale={[3, 1, 3]}>
        <Cloud position={[10, 0, -10]} speed={1} opacity={0.6} />
        <Cloud position={[0, 0, 0]} speed={1} opacity={0.6} />
        <Cloud position={[10, 0, 10]} speed={1} opacity={0.6} />
      </group>
      <group position={[-100, 30, -100]} scale={[3, 1, 3]}>
        <Cloud position={[10, 0, -10]} speed={1} opacity={0.6} />
        <Cloud position={[0, 0, 0]} speed={1} opacity={0.6} />
        <Cloud position={[10, 0, 10]} speed={1} opacity={0.6} />
      </group>
      <group position={[0, 30, 100]} scale={[3, 1, 3]}>
        <Cloud position={[10, 0, -10]} speed={1} opacity={0.6} />
        <Cloud position={[0, 0, 0]} speed={1} opacity={0.6} />
        <Cloud position={[10, 0, 10]} speed={1} opacity={0.6} />
      </group>
    </>
  );
};

const ExactNegate = (rota, desired) => {
  let curr = 0;
  if (rota > desired) {
    curr = rota - desired;
    while (curr >= 360) {
      curr -= 360;
    }
    if (curr < 180) {
      curr = -curr;
    } else {
      curr = 360 - curr;
    }
  } else if (rota < desired) {
    curr = desired - rota;
    while (curr > 360) {
      curr -= 360;
    }
    if (curr < 180) {
    } else {
      curr = -(360 - curr);
    }
  }
  return curr * THREE.MathUtils.DEG2RAD;
};

const Scene = ({ randoms }) => {
  const curr1 = useSelector((state) => state.three.curr1);
  const curr = useSelector((state) => state.model.curr);
  const allContent = useSelector((state) => state.model.allContent);
  // const state1 = useSelector((state) => state.model);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setLoading(false));
  });

  const { camera } = useThree();

  const [show, setShow] = useState({
    showed: true,
  });
  const [chek, setChek] = useState(false);
  const [cirr, setCirr] = useState(null);

  // useFrame(() => {
  //   console.log(camera.rotation.y);
  //   console.log([camera.position.x, camera.position.y, camera.position.z]);
  // });

  useEffect(() => {
    if (curr !== null) {
      setCirr(curr);
      let deg = -46;
      let pos = [-20, 5, 1.2246467991473533e-15];
      if (curr === 0) {
        deg = -43.5939439578199;
        pos = [-13.790859929125308, 5.000000000000001, 14.484894974256651];
      } else if (curr === 1) {
        deg = 0;
        pos = [0.5589500465580121, 5.000000000000001, 19.992187845392312];
      } else if (curr === 2) {
        deg = 45;
        pos = [13.987247912553626, 5.000000000000001, 14.295345250561965];
      } else if (curr === 3) {
        pos = [13.898880553808318, 5.000000000000001, -14.38127669405497];
        deg = 45;
      } else if (curr === 4) {
        pos = [-0.849304877906105, 5.000000000000001, -19.9819588935711];
        deg = -3;
      } else if (curr === 5) {
        pos = [-13.89252947368933, 5.000000000000001, -14.387412026583252];
        deg = -43;
      }
      const Curr = camera.rotation.y;
      const req = ExactNegate(Curr * THREE.MathUtils.RAD2DEG, deg);
      setShow(false);
      gsap.to(camera.rotation, {
        y: deg * THREE.MathUtils.DEG2RAD,
        ease: Power2.easeInOut,
      });
      gsap.to(camera.position, {
        x: pos[0],
        y: pos[1],
        z: pos[2],
        ease: Power2.easeInOut,
      });
    } else {
      if (chek) {
        console.log(cirr);
        let rota = -57.71844153327286 * THREE.MathUtils.DEG2RAD;
        let anotherRota = -0.9796786692796922;
        let Pos1 = [-16.908693723653315, 5, 10.681576501607207];
        let Pos2 = [
          -16.606407509994337, 5.000000000000001, -11.145726966510669,
        ];
        // if (
        //   camera.rotation.y === 0.785398 ||
        //   camera.rotation.y === -0.750492 ||
        //   camera.rotation.y === -0.05236 ||
        //   camera.rotation.y === 0.785398
        // ) {
        if (cirr === 3 || cirr === 4 || cirr === 5) {
          gsap.to(camera.rotation, {
            // y: -57.71844153327286* THREE.MathUtils.DEG2RAD,
            y: anotherRota,
            duration: 0.8,
            ease: Power2.easeInOut,
          });

          // [-16.908693723653315, 5, 10.681576501607207],
          gsap.to(camera.position, {
            x: Pos2[0],
            y: Pos2[1],
            z: Pos2[2],
            ease: Power2.easeInOut,
            onComplete: () => {
              setTimeout(() => {
                setShow(true);
                setCirr(null);
              }, 200);
            },
          });
        } else {
          gsap.to(camera.rotation, {
            // y: -57.71844153327286* THREE.MathUtils.DEG2RAD,
            y: rota,
            duration: 0.8,
            ease: Power2.easeInOut,
          });

          // [-16.908693723653315, 5, 10.681576501607207],
          gsap.to(camera.position, {
            x: Pos1[0],
            y: Pos1[1],
            z: Pos1[2],
            ease: Power2.easeInOut,
            onComplete: () => {
              setTimeout(() => {
                setShow(true);
                setCirr(null);
              }, 200);
            },
          });
        }
      } else {
        setChek(true);
      }
    }
  }, [curr]);

  return (
    <>
      <color
        attach="background"
        // args={[pages[0].back]}
        args={["#fff"]}
      />
      {show && (
        <OrbitControls
          camera={camera}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enabled={show}
          target={[0, 5, 0]}
        />
      )}
      <Effects />
      <ambientLight intensity={1.5} />
      <Rig>
        <Ocean />
        <SkyBox src="/ss.jpeg" pos={[0, 0, 0]} />
        <Model position={[0, -3.5, 0]} scale={[2, 2, 2]} />
        <Clouds />
        <Pops />
        {/* <SkyCover /> */}
        {/* <Background /> */}
        <Sun />
      </Rig>
    </>
  );
};

export default React.memo(Scene);
