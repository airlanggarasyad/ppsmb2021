import React from "react";
import Fakultas from "../../components/Agenda/Fakultas";
import Helmet from "react-helmet";


export default function landingPage() {
  return (
    <>
     <Helmet>
        <title>PPSMB Fakultas | PPSMB UGM 2021</title>
      </Helmet>
    <div>
      <Fakultas/>

    </div>
    </>
  );
}

// const AgendaStyle = styled.div``;
