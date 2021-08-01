import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonWeb from "../ButtonWeb";
import Loading from "../Loading";

import Fade from "react-reveal/Fade";

export default function VideoProfilModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal"
    >
      <Modal.Header>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ margin: "0 auto" }}
        >
          <h1 className="modal-title">Video Profil UGM</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: "0", overflow: "hidden" }}>
        <div style={{ position: "relative", width: "100%", height: "70vh" }}>
          <Loading />
          <Fade>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/t5ZSQgH1eBs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Fade>
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
  );
}
