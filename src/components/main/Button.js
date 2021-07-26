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
      : props.borderColor === "grey"
      ? "#F0F0F0"
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
  margin: 0.7vmin 0.7vmin;
  height: auto;
  width: 100%;
  padding: 1vmin 3vmin;
  border-radius: 5vmin;
  border-style: none;
  border-width: 0.5vmin;
  font-size: 2.5vmin;
  
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  color: ${(props) =>
    props.textColor === "red"
      ? "#F31958"
      : props.textColor === "blue"
      ? "#0593F7"
      : props.textColor === "yellow"
      ? "white"
      : props.textColor === "orange"
      ? "#FF7C02"
      : props.textColor === "grey"
      ? "white"
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
      : props.color === "grey"
      ? "#C0C0C0"
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
        : props.textColor === "grey"
      ? "white"
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
        : props.color === "grey"
      ? "#C0C0C0"
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
