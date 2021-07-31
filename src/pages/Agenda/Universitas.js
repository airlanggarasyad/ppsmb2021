import React from "react";
import Universitas from "../../components/Agenda/Universitas";
import Helmet from "react-helmet";


export default function landingPage() {
  return (
    <>
     <Helmet>
        <title>PPSMB Universitas | PPSMB UGM 2021</title>
      </Helmet>
    <div>
      <Universitas/>

    </div>
    </>
  );
}

// const AgendaStyle = styled.div``;
