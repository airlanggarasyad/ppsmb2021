/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/2021/computer.glb");

  const rocketSound = new Audio("/2021/rocketSound.mp3");
  rocketSound.volume = 0.2;

  const handleClick = (e) => {
    props.setRocket(!props.rocket);

    if (!props.rocket) {
      rocketSound.play();
    }
  };

  async function handleHover(e) {
    document.body.style.cursor = "pointer";
  }

  async function clearHover(e) {
    document.body.style.cursor = "auto";
  }

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={(e) => handleHover(e)}
      onPointerOut={(e) => clearHover(e)}
    >
      <group
        name="Scene"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <group
          name="Layer0_001"
          position={[0.24744, 0.29569, -0.29384]}
          scale={[0.01, 0.01, 0.01]}
        >
          <mesh
            name="Mesh"
            geometry={nodes.Mesh.geometry}
            material={materials.dbl_Layer0_001}
          />
          <mesh
            name="Mesh_1"
            geometry={nodes.Mesh_1.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Mesh_2"
            geometry={nodes.Mesh_2.geometry}
            material={materials["Material.002"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/2021/computer.glb");
