import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Image360Modal from "./ImageContentModal";
import ButtonWeb from "./ButtonWeb";
import Loading from "./Loading";

import { infografis } from "./DataInfografis";

export default function ExampleModal(props) {
  return (
    <>
      <style type="text/css">
        {`
              
              .image-txt-container {
                display: flex;
                align-items: center;
                flex-direction: column;
              }
              
              
              .fotoFakultas{
                width: 95%;
                margin-bottom: 10px;
              }

              .gambarMain {
                height: 30vh;
                display:block;
                margin:auto;
              }

              .paragraph-container {
                display: flex;
                width: 100%;
              }

              .modal-backdrop-transparent {
                background-color: rgba(0,0,0,0);
              }

              .modal-dialog-left {
                height: 100%;
                max-width: 40%;
                display: flex;
                align-items: center;
                margin: 0 0 0 4em;
              }
    
              @media only screen and (max-height: 1100px) and (max-width: 800px) {
                  .image-txt-container {
                  display: block;
                  padding-bottom: 0px;
                }

                .modal-dialog-left {
                  max-width: 100vw;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  margin: 0 2vw;
                }

                .body-modal-infografis {
                  max-height: 50vh;
                }

                .gambarMain {
                  width: 100%;
                }
              }
            }
            `}
      </style>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        backdropClassName="modal-backdrop-transparent"
        dialogClassName="modal-dialog-left"
        // centered
      >
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            {props.object.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="body-modal-infografis"
          style={{ overflowY: "scroll", height: "80vh" }}
        >
          <Loading />
          <div className="content" style={{ margin: "1.5vmin 2.5vmin" }}>
            {props.object.isFakultas ? (
              <>
                <div className="image-txt-container">
                  <img
                    className="fotoFakultas"
                    src={props.object.gambarFakultas}
                    alt=""
                  />
                  <div className="paragraph-container">
                    {props.object.jumlahProdi > 0 ? (
                      <p>
                        Jumlah Program Studi S1: {props.object.listProdi.length}{" "}
                        <br />
                        Program Studi: <br />
                        <ol className="listProdi">
                          {props.object.listProdi &&
                            props.object.listProdi.map(function (prodi, idx) {
                              return <li key={idx}>{prodi}</li>;
                            })}
                          {/* {props.object.listProdi} */}
                        </ol>
                      </p>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
                <div className="secondRow">
                  <p style={{ textAlign: "justify" }}>{props.object.narasi}</p>
                </div>
              </>
            ) : (
              <div>
                <img
                  className="gambarMain"
                  src={props.object.gambarFakultas}
                  alt=""
                />
                <p style={{ textAlign: "justify" }}>{props.object.narasi}</p>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {props.object.image360Location && (
            <Image360Modal
              imageLocation={props.object.image360Location}
              voiceOver={props.object.voiceOver}
            />
          )}
          <ButtonWeb
            className="introButton"
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
