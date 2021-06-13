import React from "react";
import styled from "styled-components";
import Hero from "./Section-Beranda/Hero";
import GlobalStyle from "../globalStyle";
import Greeting from "./Section-Beranda/Greeting";
import Tentang from "./Section-Beranda/About"

export default function Beranda() {
    return(
        <>
            <GlobalStyle/>
            <Container url="./assets/img/main-bg.jpg">
            <Hero/>
            <Greeting/>
            <Tentang/>
            </Container>
        </>
        
    )
}

const Container = styled.div`
  width: 100%;

  overflow: hidden;
  margin:0;

  .corner{
        width: calc(0.5rem + 30vmin);
        pointer-events: none;
    }
`;