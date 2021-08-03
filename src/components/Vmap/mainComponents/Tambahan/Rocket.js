/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/2021/rocket.glb");
  const rocketRef = useRef();

  useFrame(() => {
    if (rocketRef) {
      if (props.rocket) {
        rocketRef.current.position.y += 0.2;
      } else {
        rocketRef.current.position.y = 0;
      }
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" ref={rocketRef}>
        <group
          name="group1"
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.1416, 0.1416, 0.1416]}
        >
          <mesh
            name="arm1"
            geometry={nodes.arm1.geometry}
            material={nodes.arm1.material}
          />
          <mesh
            name="arm2"
            geometry={nodes.arm2.geometry}
            material={nodes.arm2.material}
          />
          <mesh
            name="arm3"
            geometry={nodes.arm3.geometry}
            material={nodes.arm3.material}
          />
          <mesh
            name="arm4"
            geometry={nodes.arm4.geometry}
            material={nodes.arm4.material}
          />
          <group name="body">
            <mesh
              name="Mesh001"
              geometry={nodes.Mesh001.geometry}
              material={materials.BODY3}
            />
            <mesh
              name="Mesh001_1"
              geometry={nodes.Mesh001_1.geometry}
              material={materials.BODY}
            />
            <mesh
              name="Mesh001_2"
              geometry={nodes.Mesh001_2.geometry}
              material={materials.TORBO}
            />
            <mesh
              name="Mesh001_3"
              geometry={nodes.Mesh001_3.geometry}
              material={materials.HEAD}
            />
            <mesh
              name="Mesh001_4"
              geometry={nodes.Mesh001_4.geometry}
              material={materials.HEAD2}
            />
            <mesh
              name="Mesh001_5"
              geometry={nodes.Mesh001_5.geometry}
              material={materials.BODY2}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/2021/rocket.glb");
