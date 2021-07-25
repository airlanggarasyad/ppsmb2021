import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import mainBG from "../assets/img/pattern-bg-white.webp";
import Logo from "../assets/img/logo-UGM-PPSMB.png";
import LogoPPSMB from "../assets/img/logo-ppsmb-decorative.svg";
import LowerCorner from "../assets/img/decorative-cornerL-1.svg";
import UpperCorner from "../assets/img/decorative-cornerL-2.svg";
import Batik from "../assets/img/batik-color.svg";
import Button from "../components/Button";

export default function ComingSoon() {
  return (
    <>      
      <Helmet>
        <title>Page not Found</title>
        <link rel="preload" href={LogoPPSMB} as="image" type="image/svg+xml" />
      </Helmet>
      <Container url="./assets/img/pattern-bg.jpg">
        <div className="grid-container-6x12">
          <div className="logo">
            <img src={Logo} alt="" srcset="" />
          </div>
          <div className="coming-soon">
            <h2 className="text-center m-0 ppsmb ppsmb-darkblue">
          
              <span className="ppsmb-blue"> 4</span>
              <span className="ppsmb-red">0</span>
             
              <span className="ppsmb-yellow">4</span>
            </h2>
            <h1 className="text-center m-0 ppsmb-darkblue">
              Page not Found
            </h1>
            <div className="button-comingsoon">
            
              <Link to="/informasi">
                <Button
                  color="white"
                  bg="var(--color-darkblue)"
                  text="Kembali"
                />
              </Link>
            </div>
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
  background-repeat: repeat;

  overflow: hidden;

  .logo {
    grid-column: 4 / span 6 ;
    grid-row: 1;
    align-self: center;
    justify-self: center;

    animation: 1s ease-out 0s 1 fadeInFromUp;
  }

  .logo img {
    z-index: 1;
    width: 100%;
    max-width: 30vmin;
  }

  .ppsmb {
    opacity: 0;
    top: 20%;
    font-size: calc(0.8rem + 10vmin);

    animation: 1s ease-in-out 0s 1 fadeIn;
    animation-delay: calc(var(--delay-multiplier) * 3);  
    animation-fill-mode: forwards;
  }
  
  .coming-soon > h2 {
font-size: 12vh;
margin-bottom:2vh;
    }

    .coming-soon > h1 {
font-size:7vh;
margin-bottom:5vh;
    }


  .coming-soon {
    grid-column: 2 / span 10;
    grid-row: 2 / span 2;
    align-self: center;
  }

  .font-indonesia-script {
    opacity:0;
    font-size: calc(0.5rem + 9vmin);
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

  .social-media {
    opacity: 0;
    grid-column: 4 / span 6;
    grid-row: 6;
    align-self:end;
    justify-self: center;
    z-index: 2;

    font-size: calc(0.5rem + 2.5vmin);
    margin-bottom: 5px;

    animation: 1s ease-in-out 0s 1 fadeIn;
    animation-delay: calc(var(--delay-multiplier) * 6);  
    animation-fill-mode: forwards;
  }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    .logo {
      grid-column: 6 / span 5 ;
      place-self: center;
    }

    .ppsmb {
      top: 20%;
      font-size: calc(0.5rem + 6vmin);
    }

    .font-indonesia-script {
      font-size: calc(0.5rem + 9vmin);
    }

    .coming-soon {
      grid-column: 5 / span 7;
      grid-row: 2 / span 4;
      align-self: center;    
      justify-self: center;
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

    .social-media {
      grid-column: 5 / span 7;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {  }

  // XX-Large devices (larger desktops, 1400px and up)
  /* @media (min-width: 1400px) { ... }; */
`;
