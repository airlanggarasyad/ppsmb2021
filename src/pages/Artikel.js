import React from "react";
import Artikel from "../components/Artikel/Artikel";
import Helmet from "react-helmet";


export default function landingPage() {
  return (
    <>
     <Helmet>
        <title>Artikel | PPSMB UGM 2021</title>
      </Helmet>
    <div>
      <Artikel/>
    </div>
    </>
  );
}

// const AgendaStyle = styled.div``;
