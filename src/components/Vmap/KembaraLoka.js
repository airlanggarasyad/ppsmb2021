import React, { useState, useRef, useEffect } from "react";
import Storyboard from "./mainComponents/Storyboard";
import UI from "./mainComponents/UI";
import Vmap from "./mainComponents/Vmap";
import Fade from "./subComponents/Fade";
import GlobalStyle from "./theme/globalStyle";
import Loading from "./subComponents/Loading";
// import { FadeVmap } from "./subComponents/Fade"
// import { Fade as FadeTransition } from "react-reveal";

export default function KembaraLoka() {
  const [loading, setLoading] = useState(true);
  const [storyboard, setStoryboard] = useState(true);
  const [intro, setIntro] = useState(false);
  const [freeControl, setFreeControl] = useState(false);
  const [music, setMusic] = useState(true);
  const myRef = useRef();
  const audio = new Audio("/anthem.mp3");

  // useEffect(() => {
  //   console.log('audio')
  // }, [music])

  const startVmap = () => {
    setStoryboard(false);
    myRef.current.volume = 0.1;
    myRef.current.play();
    myRef.current.loop = true;
  };

  const musicToggle = () => {
    if (music) myRef.current.pause();
    else myRef.current.play();
    setMusic(!music);
  };

  useEffect(() => console.log("mounted"), []);

  let today = new Date();
  let rilis = new Date("2021-08-02T06:00:00+07:00");
  // if (today < rilis) {
  //   window.location.replace("https://ppsmb.ugm.ac.id/");
  // }
  console.log("hayoo ngapain buka-buka developer tools");
  console.log("jangan aneh-aneh ya :(");
  console.log("- IT PPSMB UGM 2021 with love");

  console.log = console.warn = console.error = () => {};
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <GlobalStyle />
      <Loading
        style={{ width: "100vh !important" }}
        load={true}
        loading={loading}
      />
      <audio ref={myRef} src="/anthem.mp3" />
      {/* <Fade in={storyboard && !loading}>
      </Fade> */}
      <Storyboard
        startVmap={startVmap}
        storyboard={storyboard}
        loading={loading}
        intro={intro}
        freeControl={freeControl}
      />
      <Fade in={!storyboard}>
        <UI
          music={music}
          musicToggle={musicToggle}
          intro={intro}
          skipIntro={() => {
            setFreeControl(true);
            setIntro(false);
          }}
          freeControl={freeControl}
        />
      </Fade>
      <Vmap
        storyboard={storyboard}
        intro={intro}
        setIntro={setIntro}
        freeControl={freeControl}
        setFreeControl={setFreeControl}
        setLoading={setLoading}
      />
      {/* ini mirip awalan mirip https://marseille.laphase5.com/en 
      <FadeVmap in={!storyboard}>
        <Vmap storyboard={storyboard}
          intro={intro} setIntro={setIntro}
          freeControl={freeControl} setFreeControl={setFreeControl} />
      </FadeVmap> */}
    </div>
  );
}
