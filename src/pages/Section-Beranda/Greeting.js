import React from "react";
import styled from "styled-components";

import mainBG from "../../assets/img/main-bg.webp";
import Logo from "../../assets/img/logo-UGM-PPSMB.png";
import LogoPPSMB from "../../assets/img/logo-ppsmb-decorative.svg";
import LowerCorner from "../../assets/img/decorative-cornerL-1.svg";
import UpperLeft from "../../assets/img/decorative-cornerL-3.webp";
import UpperRight from "../../assets/img/decorative-cornerL-2.webp";
import Batik from "../../assets/img/batik-color.svg";

export default function Greeting(){
    return(
        <Container>
            <div>
                H1
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin:0;
    background-size: cover;
`