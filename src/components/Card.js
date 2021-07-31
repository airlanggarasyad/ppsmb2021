import React, { useState } from "react";
import styled from "styled-components";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    borderRadius: "25px",
    height: "90vh",
    width: "80vw",
    fontSize: "calc(0.5rem + 1vmin)",
  },
  overlay: { zIndex: 1000 },
};

Modal.setAppElement("body");

export default function Card(props) {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div
      style={{
        padding: "0 2px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Flip right>
        <CardStyle
          background={props.background}
          shadow={props.shadow}
          headerColor={props.headerColor}
          title={props.title}
          titleColor={props.titleColor}
          mainText={props.mainText}
          mainTextColor={props.mainTextColor}
          link={props.link}
          onClick={openModal}
        >
          <div className="card-header">
            <h6>{props.title}</h6>
          </div>
          <div className="card-background">
            <img src={props.background} alt="" />
          </div>
          <div className="card-shadow"></div>
          <div className="card-content">
            <h6>{props.mainText}</h6>
          </div>
        </CardStyle>
      </Flip>
      <section className="modal">
        <Modal
          isOpen={modalIsOpen}
          closeTimeoutMS={500}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel={props.mainText}
        >
          <Fade>
            <h2 className="ppsmb-darkblue">{props.mainText}</h2>
            <p
              className="ppsmb-red"
              onClick={closeModal}
              style={{ cursor: "pointer" }}
            >
              Tutup
            </p>
            <iframe
              title="PDF Linimasa"
              src={props.link}
              width="100%"
              height="80%"
              allow="autoplay"
            ></iframe>
          </Fade>
        </Modal>
      </section>
    </div>
  );
}
const CardStyle = styled.div`
  height: 30vmin;
  width: 27vmin;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  border-radius: 2.5vmin;
  box-shadow: 0px 0px 9px -2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: 500ms ease;

  &:hover .card-background > img {
    transform: scale(1.25);
    transition: transform 500ms ease;
  }
  &:hover .card-shadow {
    transform: scale(1, 2);
    transition: transform 500ms ease;
  }
  .card-header {
    position: absolute;
    left: 0;
    top: 0;
  }
  .card-header > h6 {
    font-size: calc(0.5rem + 0.8vmin);
    margin: 0;
    color: white;
    color: ${(props) => props.titleColor};
    background-color: ${(props) => props.headerColor};
    border-radius: 2vmin 0;
    padding: 1vmin 5vmin 1vmin 5vmin;
  }
  .card-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .card-content > h6 {
    width: 80%;
    text-align: right;
    font-size: calc(0.5rem + 1.6vmin);
    color: white;
    color: ${(props) => props.mainTextColor};
    margin: 0 3vmin 3vmin 0;
    text-decoration: none;
  }
  .card-background {
    height: 30vmin;
    width: 27vmin;
    position: absolute;
    z-index: -2;
    display: flex;
    justify-content: center;
  }
  .card-background > img {
    height: 30vmin;
    width: 30vmin;
    transition: transform 500ms ease;
  }
  .card-shadow {
    height: 30vmin;
    width: 27vmin;
    position: absolute;
    z-index: -1;
    background: ${(props) =>
      `linear-gradient(180deg, rgba(0,0,0,0) 0%,` +
      props.shadow +
      `75%,` +
      props.shadow +
      `100%)`};
    transition: transform 500ms ease;
  }
`;
