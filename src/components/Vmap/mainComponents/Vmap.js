import React, {
  Suspense,
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, useProgress, Html } from "@react-three/drei";
import { useSpring } from "react-spring";
import * as THREE from "three";
import Model from "./Model-Transformed";
import Computer from "./Tambahan/Computer";
import Rocket from "./Tambahan/Rocket";
import Background from "../subComponents/Background";
import AddGrass from "./instancedComponents/AddGrass";
import Helmet from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import Infografis from "../subComponents/Infografis";
import { infografis as dataInfografis } from "../subComponents/DataInfografis";
// import SpriteIntro from "../subComponents/SpriteIntro";
// import SpriteObject from "./SpriteObject"

// import { Modal } from "react-bootstrap";
// import Image360Modal from '../subComponents/Generate360Images';
// import ButtonWeb from "../subComponents/ButtonWeb";
// set variable config

const config = {
  camStartPosition: new THREE.Vector3(0, 5, 3),
  camFov: 50,
  camSBAwalFov: 55, //storyboard
  camSBAkhirFov: 100, //storyboard
};

export default function Vmap(props) {
  const [showInfografis, setShowInfografis] = useState(false);
  const [object, setObject] = useState(false);
  const [rocket, setRocket] = useState(false);

  const showModal = (e) => {
    const data = dataInfografis.find((obj) => obj.objectName === e.name);

    if (data) {
      setObject(data);
      setShowInfografis(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Kembara Loka | PPSMB UGM 2021</title>
      </Helmet>
      <Infografis
        show={showInfografis}
        onHide={() => setShowInfografis(false)}
        object={object}
      />
      <Canvas
        camera={{ position: config.camStartPosition, fov: config.camSBAwalFov }}
      >
        <directionalLight intensity={0.5} />
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 15, 0]} angle={0.9} />
        <Suspense fallback={<Loader />}>
          <LoaderContainer
            onComplete={() => {
              props.setLoading(false);
            }}
          >
            {/* <SpriteObject imageSource='/images/palapa.png' position = {[-0.25, 0.55, 0.15]}/>
          <SpriteObject imageSource='/images/discord.png' position = {[0.4, 0.55, -2]}/> */}
            {/* <AddGrass /> */}
            <Model scale={0.04} showModal={showModal} />
            <Computer scale={0.75} position={[-5.6,1.6,-4.6]} rotation={[0,1,0]} rocket={rocket} setRocket={setRocket} />
            <Rocket scale={0.75} position={[-5.825,1.6,-4.4]} rocket={rocket}/>
            <Controls
              storyboard={props.storyboard}
              modalShow={showInfografis}
              object={object}
              {...props}
            />
            <Background {...props} />
          </LoaderContainer>
        </Suspense>
      </Canvas>
    </>
  );
}

const LoaderContainer = ({ onLoad, onComplete, children }) => {
  if (onLoad) {
    onLoad();
  }

  useLayoutEffect(() => {
    if (onComplete) {
      onComplete();
    }
  });

  return children;
};

function Loader() {
  // const { active, progress, errors, item, loaded, total } = useProgress();
  const { progress } = useProgress();
  return (
    <Html
      center
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "inline-block",
          background: "white",
          borderRadius: "25px",
          padding: "10px 20px",
          marginBottom: "2%",
        }}
      >
        {progress.toString().slice(0, 2)} % loaded
      </div>
    </Html>
  );
}

function Controls(props) {
  const [introStep, setIntroStep] = useState(0);
  const [modal, setModal] = useState(false);
  const { gl, camera } = useThree();
  const vec = new THREE.Vector3();
  const controls = useRef();

  useEffect(() => {
    if (props.modalShow) {
      setModal(true);
    }
  }, [props.modalShow]);

  // useSpring({
  //   config: { duration: 3000 },
  //   from: {
  //     x: camera.position.x,
  //     y: camera.position.z,
  //     z: camera.position.z,
  //   },
  //   x: props.object ? props.object.position.x / 20 : 0,
  //   y: props.object ? props.object.position.y / 20 : 0,
  //   z: props.object ? props.object.position.z / 20 : 0,
  //   onChange: ({ value }) => {
  //     camera.lookAt(value.x, value.y, value.z);
  //     camera.updateProjectionMatrix();
  //     // console.log(value.x);
  //   },
  // });

  useFrame((state) => {
    const step = 0.01;

    if (modal) {
      // console.log(props.object.position);
      const vectorLookAt = controls.current.target;
      const lookAt = new THREE.Vector3(
        props.object.target.x,
        0,
        props.object.target.z
      );
      state.camera.fov = THREE.MathUtils.lerp(
        state.camera.fov,
        props.modalShow ? 10 : config.camSBAkhirFov,
        0.05
      );
      state.camera.position.lerp(
        vec.set(
          props.modalShow ? props.object.camera.x : camera.position.x,
          props.modalShow ? props.object.camera.y : camera.position.y,
          props.modalShow ? props.object.camera.z : camera.position.z
        ),
        0.05
      );
      state.camera.lookAt(vectorLookAt.lerp(lookAt, 0.1));
      state.camera.updateProjectionMatrix();

      if (camera.fov >= 45 && !props.modalShow) {
        setModal(false);
      }
    }

    // ketika fov masih storyboard
    if (camera.fov >= config.camSBAwalFov) {
      state.camera.fov = THREE.MathUtils.lerp(
        state.camera.fov,
        props.storyboard ? config.camSBAkhirFov : config.camFov,
        step
      );
      state.camera.position.lerp(
        vec.set(
          props.storyboard ? camera.position.x : config.camStartPosition.x,
          props.storyboard ? camera.position.y : config.camStartPosition.y,
          props.storyboard ? camera.position.z : config.camStartPosition.z
        ),
        step
      );
      state.camera.lookAt(0, 0, 0);
      state.camera.updateProjectionMatrix();
    } else if (
      camera.fov < config.camSBAwalFov &&
      camera.fov != null &&
      !props.intro &&
      !props.freeControl
    ) {
      // ketika intro
      props.setIntro(true);
      setIntroStep(introStep + 1);
    }

    // konfigurasi orbitcontrol: pan
    if (controls.current) {
      var _v = new THREE.Vector3();
      var minPan = new THREE.Vector3(-10, 0, -10);
      var maxPan = new THREE.Vector3(10, 0, 10);
      _v.copy(controls.current.target);
      controls.current.target.clamp(minPan, maxPan);
      _v.sub(controls.current.target);
      camera.position.sub(_v);
    }
  });

  return (
    <>
      <OrbitControls
        ref={controls}
        autoRotateSpeed={3}
        autoRotate={props.storyboard}
        enablePan={props.freeControl}
        enableRotate={props.freeControl}
        enableZoom={props.freeControl}
        minDistance={1}
        maxDistance={15}
        maxPolarAngle={Math.PI / 2 - 0.1}
        target={[0, 0, 0]}
        args={[camera, gl.domElement]}
      />
      {/* {props.intro && <SpriteIntro introStep={introStep} />}
      {props.intro && <Intro controls={controls} introStep={introStep} setIntroStep={setIntroStep} {...props}/>} */}
    </>
  );
}

// intro animation
// function Intro(props) {
//   const { camera } = useThree()
//   // array lokasi target (ikut di sprite intro)
//   const destination_x = [1.5,1,1,2.2,2.5,3,4.5,5,7,8.5,9,6.8,3.8,2,2,0.4,0,-0.5,-1.5,-2,-4,-5,-6,-3.7,-2,-4.3,-4.5,-2.2,0]
//   const destination_z = [-0.5,0.5,2,2,1,0,2,-1,-1,0,-2,-2.5,-2,-1.7,-3.5,-2.2,-1,-4,-3,-4.5,-7.5,-5,-1.3,-1.3,-1.5,0.5,5,6.7,0]

//   // animasi
//   useSpring({
//     config: { duration: !props.freeControl ? 3000 : 1000 },
//     from: {
//       x: camera.position.x,
//       z: camera.position.z,
//       defx: props.controls.current.target.x,
//       defz: props.controls.current.target.z,
//     },
//     x: !props.freeControl ? destination_x[props.introStep - 1] : 0,
//     z: (!props.freeControl ? destination_z[props.introStep - 1] : 0) + 3,
//     defx: !props.freeControl ? destination_x[props.introStep - 1] : 0,
//     defz: !props.freeControl ? destination_z[props.introStep - 1] : 0,
//     onChange: ({ value }) => {
//       camera.position.x = value.x
//       camera.position.z = value.z
//       props.controls.current.target.x = value.defx
//       props.controls.current.target.z = value.defz

//       // if sudah sampai di posisi
//       if (value.x === destination_x[props.introStep - 1] && value.defz === destination_z[props.introStep - 1]) {
//         props.setIntroStep(props.introStep + 1);
//       }
//     },
//     onRest: () => {
//       // if sudah selesai / skip
//       if (props.introStep === 29 || props.freeControl) {
//         props.setIntro(false);
//         props.setFreeControl(true);
//         return null;
//       }
//     }
//   })

//   return null
// }
