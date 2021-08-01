import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from "../subComponents/Fade";
import Slide from "react-reveal/Slide";
import VideoProfilModal from "../subComponents/UI/VideoProfilModal";
import LokasiModal from "../subComponents/UI/LokasiModal";
import PanoramaListModal from "../subComponents/UI/PanoramaListModal";
// import ButtonWeb from "../subComponents/ButtonWeb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Joyride, { STATUS } from "react-joyride";
import TutorialPC from "../assets/tutorial/tutorial_pc.webp";
import TutorialMobile from "../assets/tutorial/tutorial_mobile.jpg";

//step intro
const steps = [
  {
    target: "body",
    placement: "center",
    title: <h2>Tutorial</h2>,
    content: (
      <div>
        <p style={{ textAlign: "justify" }}>
          Selamat Datang Gamada di Kembara Loka. Gunakanlah komputer untuk
          pengalaman pengguna yang lebih baik.
        </p>
      </div>
    ),
  },
  {
    target: ".tour-panel",
    title: <h4>Lihat atau Sembunyikan</h4>,
    content: (
      <div>
        <p style={{ textAlign: "justify" }}>
          Tombol ini digunakan untuk menampilkan atau menyembunyikan tombol
          navigasi.{" "}
        </p>
      </div>
    ),
  },
  {
    target: ".tour-music",
    title: <h4>Putar atau Jeda</h4>,
    content: (
      <div>
        <p style={{ textAlign: "justify" }}>
          Tombol ini digunakan untuk memutar atau menjeda lagu latar belakang
          Kembara Loka.
        </p>
      </div>
    ),
  },

  {
    target: ".tour-video-profil",
    title: <h4>Video Profil</h4>,
    content: (
      <div>
        <p style={{ textAlign: "justify" }}>
          Tombol ini digunakan untuk melihat video profil UGM.
        </p>
      </div>
    ),
  },
  {
    target: ".tour-lokasi",
    title: <h4>Lokasi UGM</h4>,
    content: (
      <div>
        <p style={{ textAlign: "justify" }}>
          Tombol ini digunakan untuk melihat lokasi UGM.
        </p>
      </div>
    ),
  },
  {
    target: ".tour-panorama-list",
    title: <h4>Panorama</h4>,
    content: (
      <div>
        <p style={{ textAlign: "justify" }}>
          Tombol ini digunakan untuk melihat kumpulan foto-foto spot menarik
          yang berada di lingkungan UGM.
        </p>
      </div>
    ),
  },
  {
    target: ".tour-miro-list",
    title: <h4>Miro</h4>,
    content: (
      <div>
        <p style={{ textAlign: "justify" }}>
          Tombol ini digunakan untuk pergi ke laman Miro resmi dari Kembara
          Loka.
        </p>
      </div>
    ),
  },
  {
    target: "body",
    placement: "center",
    title: <h5>Penggunaan PC</h5>,
    content: (
      <div>
        <img
          width="100%"
          height="100%"
          src={TutorialPC}
          alt="Tutorial Penggunaan PC"
        ></img>
      </div>
    ),
  },
  {
    target: "body",
    placement: "center",
    title: <h5>Penggunaan Mobile</h5>,
    content: (
      <img
        width="100%"
        height="100%"
        src={TutorialMobile}
        alt="Tutorial Penggunaan Mobile"
      ></img>
    ),
  },
  {
    target: "body",
    placement: "center",
    content: "Selamat Menjelajahi UGM!",
  },
];

export default function Storyboard(props) {
  const handleJoyrideCallback = (data) => {
    const { status } = data;

    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      props.skipIntro();
    }
  };

  return (
    <>
      <style type="text/css">
        {`
                .skip{
                    position: fixed;
                    z-index:20;
                    left: 50%;
                    bottom: 20px;
                    transform: translate(-50%, -50%);
                    margin: 0 auto;
                }

                .skipButton {
                    padding: 1.3vmin 3.5vmin;
                    font-size: 2.6vmin;
                }

                @media only screen and (max-width: 600px) {
                    .skipButton {
                        padding: 2vmin 6vmin;
                        font-size: 5vmin;
                    }
                }
            `}
      </style>
      <Joyride
        steps={steps}
        run={props.intro}
        continuous={true}
        scrollToFirstStep={true}
        showProgress={false}
        showSkipButton={true}
        spotlightClicks={true}
        disableOverlayClose={true}
        disableCloseOnEsc={true}
        callback={handleJoyrideCallback}
        styles={{
          buttonClose: {
            display: "none",
          },
        }}
        locale={{
          back: <strong aria-label="back">Sebelumnya</strong>,
          next: <strong aria-label="next">Selanjutnya</strong>,
          last: <strong aria-label="last">Akhiri Tutorial</strong>,
          skip: <strong aria-label="skip">Lewati Tutorial</strong>,
        }}
      />

      <Right
        music={props.music}
        musicToggle={props.musicToggle}
        intro={props.intro}
        freeControl={props.freeControl}
      />

      {/* <Fade in={!props.freeControl && props.intro}>
        <div className="skip">
          <ButtonWeb
            className="skipButton"
            startVmap={props.skipIntro}
            color="var(--color-redpink)"
            bg="var(--color-white)"
            text="Lewati"
          />
        </div>
      </Fade> */}
    </>
  );
}

function Right(props) {
  const [modalVideoProfil, setModalVideoProfil] = useState(false);
  const [modalLokasi, setModalLokasi] = useState(false);
  const [modalPanoramaList, setModalPanoramaList] = useState(false);
  const [showPanelRight, setPanelRight] = useState(true);

  return (
    <>
      <style type="text/css">
        {`
                .panel-right{
                    position: fixed;
                    z-index:20;
                    top: 28%;
                    right: 10px;
                    align-items: center;
                }
                
                .row-right{
                    margin: 1em;
                    justify-content: center;
                }
            `}
      </style>

      <div className="panel-right">
        <Fade in={props.freeControl || props.intro}>
          <Row className="row-right">
            {showPanelRight ? (
              <Button
                className="btn-circle tour-panel"
                variant="primary"
                onClick={() => setPanelRight(!showPanelRight)}
              >
                <FontAwesomeIcon icon={faEye} />
              </Button>
            ) : (
              <Button
                className="btn-circle-transparent tour-panel"
                variant="primary"
                onClick={() => setPanelRight(!showPanelRight)}
              >
                <FontAwesomeIcon icon={faEyeSlash} />
              </Button>
            )}
          </Row>
          <Slide right when={showPanelRight}>
            <Row className="row-right">
              <Button
                className="btn-circle tour-music"
                variant="primary"
                onClick={props.musicToggle}
              >
                {props.music ? (
                  <FontAwesomeIcon icon={faPause} />
                ) : (
                  <FontAwesomeIcon icon={faPlay} />
                )}
              </Button>
            </Row>
            <Row className="row-right">
              <Button
                className="btn-circle tour-video-profil"
                onClick={() => setModalVideoProfil(true)}
              >
                <img
                  className="icn"
                  src="./assets/icon/video.webp"
                  alt="Icon Video Profil"
                />
              </Button>
            </Row>
            <Row className="row-right tour-lokasi">
              <Button
                className="btn-circle"
                onClick={() => setModalLokasi(true)}
              >
                <img
                  className="icn"
                  src="./assets/icon/maps.webp"
                  alt="Icon Lokasi"
                />
              </Button>
            </Row>
            <Row className="row-right">
              <Button
                className="btn-circle tour-panorama-list"
                onClick={() => setModalPanoramaList(true)}
              >
                <img
                  className="icn"
                  src="./assets/icon/panorama.webp"
                  alt="Icon Panorama List"
                />
              </Button>
            </Row>
            <Row className="row-right tour-miro-list">
              <a
                href="https://miro.com/welcomeonboard/V2FrclZLVVNrcmhlQ3BaRXY3OVJWZE9TaWhOaUVwREhieE5Mb1hBZGpWa1JqMFNTQTl4cUt1WmpYeGkwOTZKZnwzMDc0NDU3MzYxOTc2NTM4MDkw"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="btn-circle">
                  <img
                    className="icn"
                    src="./assets/icon/miro.webp"
                    alt="Icon Panorama List"
                  />
                </Button>
              </a>
            </Row>
            <VideoProfilModal
              show={modalVideoProfil}
              onHide={() => setModalVideoProfil(false)}
            />
            <LokasiModal
              show={modalLokasi}
              onHide={() => setModalLokasi(false)}
            />
            <PanoramaListModal
              show={modalPanoramaList}
              onHide={() => setModalPanoramaList(false)}
            />
          </Slide>
        </Fade>
      </div>
    </>
  );
}
