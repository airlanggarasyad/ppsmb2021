import React from "react";
import { Modal, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAsia, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import ButtonWeb from "../ButtonWeb";
import Loading from "../Loading";

export default function LokasiModal(props) {
  return (
    <>
      <style type="text/css">
        {`
                    h5 {
                        font-family: 'Kollektif-Bold';
                        font-size: 16pt;
                    }

                    p {
                        font-weight: 100;
                        font-size: 12pt;
                    }

                    .align-items-center {
                        width: 100%;
                        height: 100%;
                    }

                    .maps {
                        height: 100%;
                    }

                    .alamat {
                        height: 100%;
                        display: flex; 
                        align-items: center;
                    }

                    @media only screen and (max-height: 850px) and (max-width: 500px) {
                        .row {
                            margin-right: 0;
                            margin-left: 0;
                        }
                        .align-items-center {
                            display: block;
                        }

                        .maps {
                            height: 50%;
                            max-width: 100%
                        }

                        .alamat {
                            height: 50%;
                            max-width: 100%
                        }
                    }
                `}
      </style>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ margin: "0 auto" }}
          >
            <h1 className="modal-title">Lokasi</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "70vh" }}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Loading />
            <Row
              className="align-items-center"
              style={{ width: "100%", height: "100%" }}
            >
              <Col lg={8} xs={12} className="maps">
                <iframe
                  width="100%"
                  height="100%"
                  title="Lokasi UGM"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15812.695295992151!2d110.3774998!3d-7.7713847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac4d7b5fcf34f8e4!2sGadjah%20Mada%20University!5e0!3m2!1sen!2sid!4v1621710538791!5m2!1sen!2sid"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </Col>
              <Col lg={4} xs={12} className="alamat">
                <div>
                  <h5>Universitas Gadjah Mada</h5>
                  <p>
                    Bulaksumur, Kabupaten Sleman <br /> Daerah Istimewa
                    Yogyakarta 55281
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faGlobeAsia} />{" "}
                    <a
                      href="http://ugm.ac.id"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ugm.ac.id
                    </a>
                    <br />
                    <FontAwesomeIcon icon={faPhoneAlt} />{" "}
                    <a href="tel:+62274588688">+62274588688</a>
                  </p>
                </div>
              </Col>
            </Row>
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
