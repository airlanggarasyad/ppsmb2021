import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import BgOne from "../../assets/images/agenda/DayCardContainer/one.png";
import BgTwo from "../../assets/images/agenda/DayCardContainer/two.png";
import BgThree from "../../assets/images/agenda/DayCardContainer/three.png";
import BgFour from "../../assets/images/agenda/DayCardContainer/four.png";
import BgFive from "../../assets/images/agenda/DayCardContainer/five.png";
import BgSix from "../../assets/images/agenda/DayCardContainer/six.png";

export default function Card(props) {
  const { day } = props;
  const [Text, setText] = useState(
    day === "one"
      ? "PPSMB Universitas"
      : day === "two"
      ? "PPSMB Soft Skill"
      : day === "three"
      ? "PPSMB Fakultas"
      : "PPSMB"
  );
  const [Title, setTitle] = useState(
    day === "one"
      ? "PPSMB"
      : day === "two"
      ? "PPSMB"
      : day === "three"
      ? "PPSMB"
      : "PPSMB"
  );

  return (
    <CardStyle day={day}>
      <div className="card-header">
        <h6>{Title}</h6>
      </div>
      <div className="card-background">
        {day === "universitas" ? (
          <img src={BgOne} alt="" />
        ) : day === "two" ? (
          <img src={BgTwo} alt="" />
        ) : day === "three" ? (
          <img src={BgThree} alt="" />
        ) : day === "four" ? (
          <img src={BgFour} alt="" />
        ) : day === "five" ? (
          <img src={BgFive} alt="" />
        ) : day === "six" ? (
          <img src={BgSix} alt="" />
        ) : (
          <img src={BgOne} alt="" />
        )}
      </div>
      <div className="card-shadow"></div>
      <div className="card-content">
        <h6>{Text}</h6>
      </div>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  height: 45vmin;
  width: 16vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  border-radius: 2.5vmin;
  box-shadow: 0px 0px 9px -2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition:  500ms ease;
  .card-background {
    height: 45vmin;
    width: 33vmin;
    position: absolute;
    z-index: -2;
  }
  .card-background > img {
    height: 45vmin;
    width: 45vmin;
    transform: ${(props) =>
      props.day === "universitas"
        ? `translate(0vmin,0vmin)`
        : props.day === "two"
        ? `translate(-6vmin,0vmin)`
        : props.day === "three"
        ? `translate(0vmin,0vmin)`
        : props.day === "four"
        ? `translate(-6vmin,0vmin)`
        : props.day === "five"
        ? `translate(-12vmin,0vmin)`
        : props.day === "six"
        ? `translate(0vmin,0vmin)`
        : `translate(0vmin,0vmin)`};
  }

  &:hover .card-background > img {
    transform: scale(1.25);
    transition: transform 500ms ease;

  }
  &:hover .card-shadow {
    transform: scale(1, 2);
    transition: transform 500ms ease;
  }
  .card-header {
    position: absolute;
    left: 0;
    top: 0;
  }
  .card-header > h6 {
    font-size: 2vmin;
    margin: 0;
    color: white;
    background-color: ${(props) =>
      props.day === "one"
        ? `#EE225A`
        : props.day === "two"
        ? `#FEBE10`
        : props.day === "three"
        ? `#0075AF`
        : props.day === "four"
        ? `#EE225A`
        : props.day === "five"
        ? `#448BCA`
        : props.day === "six"
        ? `#FEBE10`
        : `#FEBE10`};
    border-radius: 2vmin 0;
    padding: 1vmin 5vmin 1vmin 5vmin;
  }
  .card-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .card-content > h6 {
    width: 60%;
    text-align: right;
    font-size: 3vmin;
    color: white;
    margin: 0 3vmin 3vmin 0;
  }

  .card-shadow {
    height: 45vmin;
    width: 45vmin;
    position: absolute;
    z-index: -1;
    background: ${(props) =>
      props.day === "one"
        ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 199, 0, 1) 100%
    )`
        : props.day === "two"
        ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #66A3FF 100%
    )`
        : props.day === "three"
        ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #FF4343 100%
    )`
        : props.day === "four"
        ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #FF0000 100%
    )`
        : props.day === "five"
        ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #FF7A00 100%
    )`
        : props.day === "six"
        ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
       #84E9FF 100%
    )`
        : `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
     #84E9FF 100%
    )`};
  }
  @media screen and (max-width: 1200px) {
    width: 24vw;
    .card-background {
      width: 24vw;
    }
  }
  @media screen and (max-width: 992px) {
    height: 25vmin;
    width: 60vw;
    .card-background {
      height: 25vmin;
      width: 60vw;
    }
    .card-background > img {
      height: 70vmin;
      width: 70vmin;
      transform: ${(props) =>
        props.day === "one"
          ? `translate(0vmin,0vmin)`
          : props.day === "two"
          ? `translate(0vmin,0vmin)`
          : props.day === "three"
          ? `translate(0vmin,0vmin)`
          : props.day === "four"
          ? `translate(0vmin,0vmin)`
          : props.day === "five"
          ? `translate(0vmin,0vmin)`
          : props.day === "six"
          ? `translate(0vmin,0vmin)`
          : `translate(0vmin,0vmin)`};
    }
    .card-shadow {
      height: 25vmin;
      width: 70vmin;
    }
  }
  @media screen and (max-width: 768px) {
    height: 30vmin;
    width: 70vw;
    .card-background {
      height: 30vmin;
      width: 70vw;
    }
    .card-background > img {
      height: 70vmin;
      width: 70vmin;
    }
    .card-shadow {
      height: 30vmin;
      width: 70vmin;
    }
    .card-header > h6 {
      font-size: 3vmin;

      border-radius: 2vmin 0;
      padding: 1vmin 5vmin 1vmin 5vmin;
    }
  }
`;
