import React, { Component } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import patternBG from "../assets/img/pattern-bg.png";
import heroGaleriPhone from "../assets/img/galeri/phone-ornament-galeri.webp";
import heroGaleriDesktop from "../assets/img/galeri/desktop-ornament-galeri.webp";
import Batik from "../assets/img/batik-color.svg";

export default class Galeri extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Galeri | PPSMB UGM 2021</title>
        </Helmet>
        <GaleriContainer>
          <div className="galeri-hero">
            <div className="galeri-title">
              <div className="batik">
                <img src={Batik} alt="" />
                <img src={Batik} alt="" />
                <img src={Batik} alt="" />
              </div>
              <h1 className="font-indonesia-script ppsmb-redpink">Galeri</h1>
            </div>
            <div>
              <img
                className="hero-ornament"
                src={heroGaleriDesktop}
                alt=""
                srcSet={`${heroGaleriPhone} 411w, ${heroGaleriDesktop} 1358w`}
                sizes={"(min-width: 576px) 1358px, 100vw"}
              />
            </div>
          </div>
        </GaleriContainer>
      </>
    );
  }
}

const GaleriContainer = styled.div`
  width: 100%;

  .galeri-hero {
    background-image: url(${patternBG});
    background-size: 35%;

    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }

  .galeri-title {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .galeri-title h1 {
    font-size: calc(0.5rem + 12vmin);
    margin: 0px;
  }

  .hero-ornament {
    width: 100%;
    margin-top: -24%;
  }

  .batik {
    display: flex;
    margin-right: 10px;
    flex-direction: column;
  }

  .batik img {
    margin-bottom: 3px;
    width: 5vmin;
  }

  @media (min-width: 576px) {
    .galeri-hero {
      background-size: 20%;
    }

    .galeri-hero {
      min-height: 100vh;
      flex-direction: row;
    }

    .galeri-title {
      height: 100vh;
      width: 40%;
      align-items: center;
      justify-content: flex-start;
      padding-left: 4%;
    }

    .hero-ornament {
      height: 50vh;
    }
  }
`;
