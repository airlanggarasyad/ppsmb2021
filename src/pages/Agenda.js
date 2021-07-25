import React from "react";
import styled from "styled-components";
import DayCard from "../components/Agenda/Agenda";
import Helmet from "react-helmet";

export default function landingPage() {
  return (
    <>
     <Helmet>
        <title>Agenda | PPSMB UGM 2021</title>
      </Helmet>
    <div>
      <DayCard/>
    </div>
    </>
  );
}

const AgendaStyle = styled.div``;
