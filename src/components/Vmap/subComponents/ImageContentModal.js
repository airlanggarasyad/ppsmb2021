import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../ImageModal.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { faExpand, faTimes } from "@fortawesome/free-solid-svg-icons";
import ButtonWeb from "./ButtonWeb";
import GenerateImage from "./Generate360Images.js";
// import Loading from "./Loading";

function MyVerticallyCenteredModal(props) {
  const [isFullScreen, setFullScreen] = useState(false);
  return (
    <>
      <style type="text/css">
        {`
      .modal360 {
        -webkit-border-radius: 0px;
        -moz-border-radius: 0px;
        border-radius: 0px;
      }
      `}
      </style>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="imageModal"
        style={{
          width: "100vw",
          height: "100vh",
        }}
        dialogClassName="modal360"
      >
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ margin: "0 auto" }}
          >
            Gambar 360
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className={
            isFullScreen ? "modal-main-body-fullscreen" : "modal-main-body"
          }
          style={{
            padding: "0",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Loading /> */}
          {props.voiceOver && (
            <div
              style={{
                position: "absolute",
                bottom: "2.5%",
                zIndex: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <audio
                  src={props.voiceOver}
                  controls
                  controlsList="nodownload"
                  volume={1}
                  style={{ margin: "0 0.5vw" }}
                />
                {!isFullScreen && (
                  <Button
                    className={
                      isFullScreen
                        ? "btn-circle btn-on-full-screen"
                        : "btn-circle tour-panel"
                    }
                    variant="primary"
                    onClick={() => setFullScreen(!isFullScreen)}
                    style={{ margin: "0 0.5vw", height: "54px", width: "54px" }}
                  >
                    <FontAwesomeIcon icon={faExpand} />
                  </Button>
                )}
              </div>
            </div>
          )}
          <div
            className="image-360-container"
            style={{ width: "100%", height: "100%", position: "absolute" }}
          >
            <GenerateImage
              class="image-360"
              myImage={props.imageLocation}
              style={{ zIndex: 10 }}
            />
            {isFullScreen && (
              <Button
                className={"btn-circle btn-on-full-screen"}
                variant="primary"
                onClick={() => setFullScreen(!isFullScreen)}
                style={{ margin: "0 0.5vw", height: "54px", width: "54px" }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            )}
          </div>
          <div className="splash-logo-container">
            <img
              alt="Modal Kembara Loka"
              id="splash-logo"
              src="./assets/modal/kembara-loka.webp"
              style={{ zIndex: 1 }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonWeb
            className="introButton mulai"
            startVmap={props.onHide}
            color="var(--color-redpink)"
            bg="var(--color-white)"
            text="Kembali"
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

function ImageModal(props) {
  const [modalShow, setModalShow] = React.useState(false);
  console.log(props);
  return (
    <>
      <style type="text/css">
        {`
      .tombol360 {
        position: absolute;
        left: 1.8rem;
      }
      @media only screen and (max-height: 740px) and (max-width: 500px) {
        .tombol360 {
          left: 1rem;
        }
      }
      `}
      </style>
      <div className="tombol360">
        <ButtonWeb
          className="introButton mulai"
          startVmap={() => setModalShow(true)}
          color="var(--color-blue)"
          bg="var(--color-white)"
          text="Gambar 360"
        />
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        imageLocation={props.imageLocation}
        title={props.title}
        voiceOver={props.voiceOver}
      />
    </>
  );
}

export default ImageModal;
