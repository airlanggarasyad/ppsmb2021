import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Loading from "../../subComponents/Loading";
import ButtonWeb from "../../subComponents/ButtonWeb";

export default function KreasiModal(props) {
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
          <h1 className="modal-title">Kembara Loka PPSMB UGM 2021</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: "0", overflow: "hidden" }}>
        <Loading />
        <img src="/2021/persembahan.webp" className="img-fluid" />
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
