import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

export default function Button(props) {
  const { text, link, color, textColor } = props;
  console.log(color);

  return (
    <>
      <ButtonFrame color={color}>
        <ButtonLink href={link} color={color}>
          {text}
        </ButtonLink>
      </ButtonFrame>
    </>
  );
}

const ButtonFrame = styled.div`
  border: solid 0.4vh;
  border-color: ${(props) =>
    props.color === "red"
      ? "#F31958"
      : props.color === "blue"
      ? "#0593F7"
      : props.color === "yellow"
      ? "#FFBE00"
      : props.color === "orange"
      ? "#FF7C02"
      : "white"};
  border-radius: 3vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonLink = styled.button`
  margin: 1vh 0.5vh;
  height: auto;
  width: 100%;
  padding: 1vh 3vh;
  border-radius: 3vh;
  border-style: none;
  border-width: 0.5vh;
  font-size: 2.5vh;

  background: ${(props) =>
    props.color === "red"
      ? "#F31958"
      : props.color === "blue"
      ? "#0593F7"
      : props.color === "yellow"
      ? "#FFBE00"
      : props.color === "orange"
      ? "#FF7C02"
      : "white"};

  color: white;
`;
