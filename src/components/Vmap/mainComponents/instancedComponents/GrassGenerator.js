import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler";

function GrassGenerator(props) {
  const meshRef = useRef();
  const grass_model = useLoader(GLTFLoader, props.modelPath);
  const surface_model = useLoader(GLTFLoader, props.surfacePath);
  const count = props.count;

  useEffect(() => {
    const sampler = new MeshSurfaceSampler(
      surface_model.scene.getObjectByName(props.surfaceName)
    );
    sampler.build();

    const _position = new THREE.Vector3();
    const _matrix = new THREE.Matrix4();

    for (let i = 0; i < count; i++) {
      sampler.sample(_position);
      _matrix
        .makeTranslation(_position.x, _position.y, _position.z)
        .multiply(new THREE.Matrix4().makeRotationY(Math.PI * i))
        .multiply(new THREE.Matrix4().makeScale(1.5, 1.5, 1.5));
      meshRef.current.setMatrixAt(i, _matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      scale={0.01}
      ref={meshRef}
      args={[
        grass_model.scene.getObjectByName(props.modelName).geometry,
        grass_model.scene.getObjectByName(props.modelName).material,
        count,
      ]}
    />
  );
}

export default GrassGenerator;
