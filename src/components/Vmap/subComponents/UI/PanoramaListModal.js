import React, { useState } from "react";
import { Breadcrumb, Modal, Row, Col, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonWeb from "../ButtonWeb";
import { Button } from "react-bootstrap";
import Loading from "../Loading";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Zoom from "react-reveal/Zoom";
import { listFakultas } from "../input/listFakultas";

export default function PanoramaListModal(props) {
  const [fakultas, setFakultas] = useState();
  const [item, setItem] = useState();
  const [index, setIndex] = useState();
  const [listPanorama, setListPanorama] = useState();
  const [modalShow, setModalShow] = useState(false);

  const showImage = (value, _index, _listPanorama) => {
    setItem(value);
    setIndex(_index);
    setListPanorama(_listPanorama);
    setModalShow(true);
  };

  const changeIndex = (value) => {
    setIndex(value);
  }
  
  const showModal = (value) => {
    setItem(value);
    setModalShow(true);
  };

  const closeModal = () => {
    setItem();
    setModalShow(false);
  };

  return (
    <>
      <style type="text/css">
        {`
                .breadcrumb {
                    background-color: #ffffff;
                }

                .image-preview-modal .modal-dialog {
                  margin: 0;  
                  min-width: 100vw;
                  min-height: 100vh;
                }
                
                .image-preview-modal .modal-content {
                  max-width: 100vw;
                  max-height: 100vh;
                }
                
                .image-preview-modal .modal-main-body {
                  display: flex;
                  justify-content: center;
                }
                
                .image-preview-modal .modal-main-body div {
                  height: inherit;
                }                
            `}
      </style>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ margin: "0 auto" }}
          >
            Panorama List
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ overflowY: "auto", height: "70vh" }}>
          <Loading />
          <Breadcrumb style={{ background: "transparent" }}>
            <Breadcrumb.Item
              active={!fakultas && "active"}
              onClick={() => {
                setFakultas();
              }}
            >
              Panorama
            </Breadcrumb.Item>
            <Breadcrumb.Item active={fakultas && "active"}>
              {fakultas}
            </Breadcrumb.Item>
          </Breadcrumb>
          <Container>
            {!fakultas && <FakultasList setFakultas={setFakultas} />}
            {fakultas && <Fakultas fakultas={fakultas} showModal={showImage} />}
          </Container>
          <ImagePreviewModal show={modalShow} onHide={closeModal} item={item} index={index} listPanorama={listPanorama} changeIndex={changeIndex} />
        </Modal.Body>
        <Modal.Footer>
          <ButtonWeb
            className="introButton mulai"
            startVmap={
              fakultas ? () => setFakultas() : props.onHide
            }
            color="var(--color-redpink)"
            bg="var(--color-white)"
            text={
              fakultas ? "Kembali" : "Tutup"
            }
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

function FakultasList(props) {
  return (
    <>
      <Row>
        {listFakultas.map((obj) => (
          <Panorama
            setFakultas={() => {
              props.setFakultas(obj.name);
            }}
            text={obj.text}
            src={obj.src}
          />
        ))}
      </Row>
    </>
  );
}

function Panorama(props) {
  return (
    <>
      <Col xs={6} md={4}>
        <Zoom>
          <Card
            border="info"
            style={{ width: "100%", marginTop: "5%", cursor: "pointer" }}
            tag="a"
            onClick={props.setFakultas}
          >
            <Card.Img
              variant="top"
              src={props.src}
              style={{ objectFill: "none" }}
            />
            <Card.Body>
              <Card.Text>{props.text}</Card.Text>
            </Card.Body>
          </Card>
        </Zoom>
      </Col>
    </>
  );
}

function Fakultas(props) {
  const dataFakultas = listFakultas.find((obj) => obj.name === props.fakultas);

  return (
    <>
      <Row>
        {dataFakultas.listPanorama.map((value, index) => (
          <Col xs={6} md={4} key={value.source}>
            <Card
              border="warning"
              style={{
                width: "100%",
                marginTop: "5%",
                cursor: "pointer",
              }}
              tag="a"
              onClick={() => {
                props.showModal(value, index, dataFakultas.listPanorama);
              }}
            >
              <Card.Img
                variant="top"
                src={value.source}
                style={{
                  maxHeight: "10vh",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Text>{value.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

function ImagePreviewModal(props) {
  return (
    <>
      <style type="text/css">
        {`
          .angle-right {
            position: absolute;
            top: 50%;
            right: 1%;
            width: 10vw;
            height: 10vw;
            max-height: 50px;
            max-width: 50px;
            z-index: 50;
          }

          .angle-left {
            position: absolute;
            top: 50%;
            left: 1%;
            width: 10vw;
            height: 10vw;
            max-height: 50px;
            max-width: 50px;
            z-index: 50;
          }             
        `}
      </style>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        className="modal-container image-preview-modal"
        centered
      >
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ margin: "0 auto" }}
          >
            Gambar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-main-body">
          <div
            style={{
              height: "inherit",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {props.item && (
              <>
                <Button
                  className={"btn-circle angle-left"}
                  variant="primary"
                  onClick={() =>
                    props.changeIndex(
                      (((props.index - 1) % props.listPanorama.length) +
                        props.listPanorama.length) %
                        props.listPanorama.length
                    )
                  }
                  // style={{ margin: "0 0.5vw", height: "54px", width: "54px" }}
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </Button>
                <Button
                  className={"btn-circle angle-right"}
                  variant="primary"
                  onClick={() =>
                    props.changeIndex(
                      (props.index + 1) % props.listPanorama.length
                    )
                  }
                  // style={{ margin: "0 0.5vw", height: "54px", width: "54px" }}
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </Button>
                <img
                  src={props.listPanorama[props.index].source}
                  style={{
                    display: "block",
                    height: "100%",
                    objectFit: "fill",
                    maxWidth: "80vw",
                    maxHeight: "80vh",
                  }}
                  alt="fullscreenPreview"
                />
              </>
            )}
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
