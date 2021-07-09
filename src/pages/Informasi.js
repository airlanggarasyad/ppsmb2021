import React from "react";
import styled from "styled-components";
import mainBG from "../assets/img/main-bg.webp";
import LogoPPSMB from "../assets/img/logo-ppsmb-decorative.svg";
import LowerCorner from "../assets/img/decorative-cornerL-1.svg";
import UpperCorner from "../assets/img/decorative-cornerL-2.svg";
import Batik from "../assets/img/batik-color.svg";
// import Button from "../components/Button";

export default function Informasi() {
  return (
    <>
      <Container url="./assets/img/main-bg.jpg">
        <div className="grid-container-6x12">
          <div className="linimasa">
            <h1 className="ppsmb-darkblue text-center font-indonesia-script">
              Lini Masa
            </h1>
            <h2 className="text-center m-0 ppsmb ppsmb-darkblue">
              PPSMB
              <span className="ppsmb-blue"> 2</span>
              <span className="ppsmb-red">0</span>
              <span className="ppsmb-orange">2</span>
              <span className="ppsmb-yellow">1</span>
            </h2>
          </div>

          <div className="logo-ppsmb">
            <img src={LogoPPSMB} alt="" srcset="" />
          </div>
          <div className="decor-upper">
            <img src={UpperCorner} alt="" srcset="" />
          </div>
          <div className="decor-lower">
            <img src={LowerCorner} alt="" srcset="" />
          </div>
          <div className="batik">
            <img src={Batik} alt="" />
            <img src={Batik} alt="" />
            <img src={Batik} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${mainBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  .linimasa {
    grid-column: 2 / span 10;
    grid-row: 1 / span 2;
    align-self: center;
    line-height: 0.5;
  }

  .ppsmb {
    opacity: 0;
    font-size: calc(0.5rem + 4vmin);

    animation: 1s ease-in-out 0s 1 fadeIn;
    animation-delay: calc(var(--delay-multiplier) * 3);  
    animation-fill-mode: forwards;
  }

  .font-indonesia-script {
    opacity:0;
    font-size: calc(0.5rem + 10vmin);
    margin-top: calc(0.5rem + -7vmin);

    animation: 1s ease-in-out 0s 1 fadeIn;
    animation-delay: calc(var(--delay-multiplier) * 5);  
    animation-fill-mode: forwards;
  }

  .button-comingsoon {
    opacity:0;
    display: flex;
    justify-content: space-evenly;
    margin-top: -5%;
    padding-left: 5%;
    padding-right: 5%;

    animation: 1s ease-in-out 0s 1 fadeIn;
    animation-delay: calc(var(--delay-multiplier) * 5);  
    animation-fill-mode: forwards;
  }

  .logo-ppsmb {
    margin-left: -33%;
    grid-column: 1 / span 7;
    grid-row: 4 / span 3;
    z-index: 0;
  }

  .logo-ppsmb img {
    width: 100%;
  }

  .decor-upper {
    grid-column: 10 / span 3;
    grid-row: 1 / span 2;
    z-index: 0;
    justify-self: end;
  }

  .decor-upper img {
    max-width: 100%;
  }

  .decor-lower {
    grid-column: 9 / span 4;
    grid-row: 5 / span 2;
    margin-bottom: -4px;
    z-index: 0;
    align-self: end;
    justify-self: end;
  }

  .decor-lower img {
    width: 80%;
    margin-left: 20%;
  }

  .batik {
    grid-column: 11 / span 2;
    grid-row: 3 / span 2;
    place-self: center;
  }

  .batik img {
    margin-bottom: 10px;
    display: flex;
    width: 5vmin;
  }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    .ppsmb {
    font-size: calc(0.5rem + 3vmin);
    }

    .font-indonesia-script {
      margin-top: 1%;
      font-size: calc(0.5rem + 8vmin);
    }

    .coming-soon {
      grid-column: 5 / span 7;
      grid-row: 2 / span 4;
      align-self: center;    
      just-self: center;
    }

    .logo-ppsmb {
      margin-left: -10%;
      grid-column: 1 / span 5;
      grid-row: 2 / span 5;
      z-index: 0;
    }

    .decor-upper {
      grid-column: 11 / span 2;
      grid-row: 1 / span 2;
    }

    .decor-lower {
      grid-column: 10 / span 3;
      grid-row: 5 / span 2;
    }
  }
/* 
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) { ... }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) { ... }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) { ... }

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) { ... } */
`;
