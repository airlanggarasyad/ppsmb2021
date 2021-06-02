import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

export default function Button(props) {
  const {
    text,
    link,
    color,
    textColor,
    children,
    borderColor,
    colorHover,
    textColorHover,
  } = props;
  console.log(color);

  return (
    <>
      <ButtonFrame color={color} borderColor={borderColor}>
        <ButtonLink href={link} color={color} textColor={textColor}>
          {children}
          {text}
        </ButtonLink>
      </ButtonFrame>
    </>
  );
}

const ButtonFrame = styled.div`
  border: solid 0.3vmin;
  border-color: ${(props) =>
    props.borderColor === "red"
      ? "#F31958"
      : props.borderColor === "blue"
      ? "#0593F7"
      : props.borderColor === "yellow"
      ? "#FFBE00"
      : props.borderColor === "orange"
      ? "#FF7C02"
      : "white"};
  border-radius: 5vmin;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
  }
  @media screen and (max-width: 768px) {
  }
`;

const ButtonLink = styled.button`
  cursor: pointer;
  margin: 0.2vmin 0.7vmin;
  height: auto;
  width: 100%;
  padding: 1vmin 3vmin;
  border-radius: 5vmin;
  border-style: none;
  border-width: 0.5vmin;
  font-size: 2.5vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.textColor === "red"
      ? "#F31958"
      : props.textColor === "blue"
      ? "#0593F7"
      : props.textColor === "yellow"
      ? "#FFBE00"
      : props.textColor === "orange"
      ? "#FF7C02"
      : "white"};

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

  &:hover {
    color: ${(props) =>
      props.textColor === "red"
        ? "#F31958"
        : props.textColor === "blue"
        ? "#0593F7"
        : props.textColor === "yellow"
        ? "#FFBE00"
        : props.textColor === "orange"
        ? "#FF7C02"
        : "#F0F0F0"};

    background: ${(props) =>
      props.color === "red"
        ? "#EA0446"
        : props.color === "blue"
        ? "#4472CA"
        : props.color === "yellow"
        ? "#FE9F10"
        : props.color === "orange"
        ? "#FF5810"
        : "#F0F0F0"};
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
    font-size: 2vmin;
  }
  @media screen and (max-width: 768px) {
    font-size: 3vmin;
  }
`;
