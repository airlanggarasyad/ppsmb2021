import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Background(props) {
  const myRef = useRef();
  const image = useTexture("/images/skybox.jpg");

  // useFrame(() => {
  //   if (props.freeControl) {
  //     setTimeout(() => {
  //       myRef.current.scale.x = 10;
  //       myRef.current.scale.y = 10;
  //       myRef.current.scale.z = 10;
  //     }, 1000);
  //     if (myRef.current.material.opacity < 1 && myRef.current.scale.x === 10) {
  //       myRef.current.material.opacity += 0.01;
  //     }
  //   }
  // });

  return (
    <mesh scale={10} position={[0, 0, 1]} ref={myRef}>
      <sphereGeometry args={[5, 6, 10]} />
      <meshBasicMaterial map={image} side={THREE.DoubleSide} opacity={1} />
    </mesh>
  );
}
