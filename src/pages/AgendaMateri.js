import React from "react";
import styled from "styled-components";
import AgendaCarousel from "../components/Agenda/AgendaCarousel";
import Helmet from "react-helmet";


export default function landingPage() {
  return (
    <>
     <Helmet>
        <title>Agenda | PPSMB UGM 2021</title>
      </Helmet>
    <div>
      <AgendaCarousel />

    </div>
    </>
  );
}

const AgendaStyle = styled.div``;
