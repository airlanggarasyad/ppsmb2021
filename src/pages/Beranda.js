import React from "react";
import styled from "styled-components";
import mainBG from "../assets/img/main-bg.webp";
import Sliders from "../components/Slider/Slider";
import Image from "../assets/img/car.jpeg";
import Hero from "./Section-Beranda/Hero";
import GlobalStyle from "../globalStyle";
import Greeting from "./Section-Beranda/Greeting";



export default function Beranda() {
    return(
        <>
            <GlobalStyle/>
            <Container url="./assets/img/main-bg.jpg">
            <Hero/>
            {/* <Sliders arrowColor="blue">
                <div className="slide">
                    <img src={Image}/>
                </div>
                <div className="slide">
                    <img src={Image}/>
                </div>
                <div className="slide">
                    <img src={Image}/>
                </div>
            </Sliders> */}
            
            </Container>
        </>
        
    )
}

const Container = styled.div`
  width: 100%;
  background-image: url(${mainBG});
  background-position: center;
  overflow: hidden;
  margin:0;


    /* .slide {
        margin: 10px;
        background-color: blue;
        padding: 10px;
    } */
    /*
    img {
        margin-left: 20px;
    } */
`;