import React from "react";
import styled from "styled-components";
import Modul from "../../../components/Agenda/Modul";
import Helmet from "react-helmet";

export default function landingPage() {
  return (
    <>
     <Helmet>
     <title>Modul | PPSMB UGM 2021</title>
      </Helmet>
    <div>
      <Modul day="three"/>
    </div>
    </>
  );
}

const AgendaStyle = styled.div``;
