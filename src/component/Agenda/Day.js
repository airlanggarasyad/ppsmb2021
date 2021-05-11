import React from "react";
import styled from "styled-components";
import one from "../../assets/images/agenda/one.png";
import two from "../../assets/images/agenda/two.png";
import three from "../../assets/images/agenda/three.png";
import four from "../../assets/images/agenda/four.png";
import five from "../../assets/images/agenda/five.png";
import six from "../../assets/images/agenda/six.png";
import Button from "../main/Button";

export default function Day(props) {
  const { day, url, link } = props;
  return (
    <DayStyle day={day}>
      <div className="day-container">
        <div className="breadcrumb"></div>
      </div>
    </DayStyle>
  );
}

const DayStyle = styled.div`
  height: 150vh;
  background-image: ${(props) =>
    props.day === "one"
      ? `url(${one})`
      : props.day === "two"
      ? `url(${two})`
      : props.day === "three"
      ? `url(${three})`
      : props.day === "four"
      ? `url(${four})`
      : props.day === "five"
      ? `url(${five})`
      : props.day === "six"
      ? `url(${six})`
      : `url(${one})`};

  background-repeat: no-repeat;
  background-size: 100vw 150vh;
`;
