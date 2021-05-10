import React from "react";
import styled from "styled-components";
import mainBG from "../assets/img/main-bg.webp";
import Navbar from "../components/Navbar/Navbar";
import GlobalStyle from "../globalStyle";

export default function Beranda() {
    return(
        <Container url="./assets/img/main-bg.jpg">
            <GlobalStyle />
            <Navbar/>
        </Container>
        
    )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${mainBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;