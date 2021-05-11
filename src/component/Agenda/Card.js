import React from "react";
import styled from "styled-components";
import Button from "../main/Button";

export default function Card(props) {
  const { title, text, logo } = props;
  return (
    <CardContainer>
      <div className="card-container">
        <div className="atribut-container"></div>
        <div className="content-container">
          <div className="logo-container"></div>
          <div className="text-container"></div>
          <h6>{title}</h6>
          <p> {text}</p>
          <div className="button-container">
            <Button color="red" text="Selengkapnya"></Button>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  .button-container {
    width: 25vh;
    height: 6vh;
  }
`;
