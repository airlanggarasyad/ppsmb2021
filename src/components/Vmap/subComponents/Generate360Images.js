import React, { Suspense } from "react";
// import { useTransition } from "react-spring";
// import { a } from "@react-spring/three";
// import { BrightnessContrast } from "@react-three/postprocessing";
import { useTexture, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const Generate360Image = (props) => {
  // console.log(props);
  // const [textureIndex, setTextureIndex] = useState(0);
  // const imgRef = useRef();
  // let start = 0,
  //   end = 0,
  //   last = 0;

  // const startCount = () => {
  //   start = Date.now();
  // };

  // const endCount = () => {
  //   end = Date.now();
  //   if (end - start < 200 && end - last > 1000) {
  //     changeTextureIndex();
  //     last = Date.now();
  //   }
  // };

  const myTexture = useTexture(props.imageLocation);

  // const transitions = useTransition(props.imageLocation, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   config: { duration: 1500 },
  // });

  // function changeTextureIndex() {
  //   if (textureIndex === props.imageLocation.length - 1) {
  //     setTextureIndex(0);
  //   } else {
  //     setTextureIndex((prevTextureIndex) => prevTextureIndex + 1);
  //   }
  // }

  return (
    <>
      <mesh
        position={[0, 0, 0]}
        scale={[-1, 1, 1]}
        // onPointerDown={startCount}
        // onPointerUp={endCount}
        // {...values}
      >
        <sphereGeometry attach="geometry" args={[50, 50, 50]} />
        <meshBasicMaterial
          attach="material"
          map={myTexture}
          side={THREE.DoubleSide}
          // {...values}
          // ref={imgRef}
        />
      </mesh>
    </>
  );
};

class GenerateImage extends React.Component {
  render() {
    return (
      <Canvas style={{ width: "100%", height: "100%" }}>
        <Suspense fallback={null}>
          <Generate360Image
            imageLocation={this.props.myImage}
            className="image-canvas"
          />
        </Suspense>
        <OrbitControls
          autoRotate="true"
          autoRotateSpeed={0.4}
          minDistance={5}
          maxDistance={40}
        />
      </Canvas>
    );
  }
}

export default GenerateImage;
