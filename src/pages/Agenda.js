import React from "react";
import styled from "styled-components";
import AgendaCarousel from "../components/Agenda/AgendaCarousel";
import Agenda from "../components/Agenda/Agenda";
import AgendaDay from "../components/Agenda/AgendaDay";

export default function landingPage() {
  return (
    <div>
      <AgendaDay />
    </div>
  );
}

const AgendaStyle = styled.div``;
