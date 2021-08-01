import React from "react";
import Modul from "../../components/Agenda/Materi";
import Helmet from "react-helmet";

export default function landingPage() {
  return (
    <>
     <Helmet>
        <title>Materi| PPSMB UGM 2021</title>
      </Helmet>
    <div>
      <Modul/>
    </div>
    </>
  );
}

// const AgendaStyle = styled.div``;
