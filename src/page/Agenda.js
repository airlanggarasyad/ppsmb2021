import React from "react";
import styled from "styled-components";
import AgendaCarousel from "../component/Agenda/AgendaCarousel";
import Agenda from "../component/Agenda/Agenda";
import AgendaDay from "../component/Agenda/AgendaDay";

export default function landingPage() {
  return (
    <div>
      <AgendaCarousel />
    </div>
  );
}

const AgendaStyle = styled.div``;
