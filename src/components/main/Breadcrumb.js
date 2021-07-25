import React from "react";
import styled from "styled-components";
import { Router, Switch, Link, Route, useRouteMatch } from "react-router-dom";
export default function Breadcrumb(props) {
  const { primer, data, secondary, back } = props;
  const linkData = data;

  return (
    <BreadcrumStyle color={primer} colorHover={secondary}>
        <Link to={back}>
      <div className="back">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 40 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.639351 18.0412L15.0848 32.3666C15.4971 32.7755 16.0467 33 16.6327 33C17.2194 33 17.7686 32.7752 18.181 32.3666L19.4925 31.0657C19.9046 30.6574 20.1315 30.1121 20.1315 29.5306C20.1315 28.9495 19.9046 28.3858 19.4925 27.9775L11.0653 19.6021L37.839 19.6021C39.0462 19.6021 40 18.6649 40 17.4675V15.6283C40 14.4309 39.0462 13.3992 37.839 13.3992L10.9697 13.3992L19.4922 4.97702C19.9042 4.5681 20.1312 4.0376 20.1312 3.45615C20.1312 2.87534 19.9042 2.3371 19.4922 1.9285L18.1807 0.631763C17.7683 0.222843 17.219 0 16.6324 0C16.0464 0 15.4968 0.225742 15.0844 0.634663L0.639023 14.9598C0.225693 15.37 -0.00162125 15.9176 7.62939e-06 16.4997C-0.00129318 17.0837 0.225693 17.6316 0.639351 18.0412Z"
            fill="white"
          />
        </svg>
      </div>
      </Link>
      <div className="breadcrumb-content">
        {linkData.map((item, index) => (
          <>
            {index === index.length - 1 ? (
             
              <div className="breadcrumb-link">
                {" "} <Link to={item.link}>
                {item.text}</Link>
              </div>
             
            ) : (
             
              <div className="breadcrumb-link">
                {" "}
                <Link to={item.link}>
              {item.text}
                </Link> <span> / </span>
              </div>
           
            )}
          </>
        ))}
      </div>
    </BreadcrumStyle>
  );
}

const BreadcrumStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  .back {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5vmin;
    height: 3vmin;
    cursor: pointer;
  }

  .back > svg > path {
    fill: ${(props) =>
      props.color === "red"
        ? "#F31958"
        : props.color === "blue"
        ? "#0593F7"
        : props.color === "yellow"
        ? "#FFBE00"
        : props.color === "orange"
        ? "#FF7C02"
        : props.color === "black"
        ? "black"
        : "white"};
  }
  .back:hover > svg > path {
    fill: ${(props) =>
      props.colorHover === "red"
        ? "#F31958"
        : props.colorHover === "blue"
        ? "#0593F7"
        : props.colorHover === "yellow"
        ? "#FFBE00"
        : props.colorHover === "orange"
        ? "#FF7C02"
        : props.colorHover === "black"
        ? "black"
        : "#F0F0F0"};
  }

  .breadcrumb-content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3vmin;
  }
  .breadcrumb-link {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .breadcrumb-link > a {
    color: ${(props) =>
      props.color === "red"
        ? "#F31958"
        : props.color === "blue"
        ? "#0593F7"
        : props.color === "yellow"
        ? "#FFBE00"
        : props.color === "orange"
        ? "#FF7C02"
        : props.color === "black"
        ? "black"
        : "white"};
    text-decoration: white;
    font-size: 3vmin;
  }
  .breadcrumb-link > span {
    color: ${(props) =>
      props.color === "red"
        ? "#F31958"
        : props.color === "blue"
        ? "#0593F7"
        : props.color === "yellow"
        ? "#FFBE00"
        : props.color === "orange"
        ? "#FF7C02"
        : props.color === "black"
        ? "black"
        : "white"};
    font-size: 3vmin;
    margin: 0 0.5vw 0 0.5vw;
  }
  .breadcrumb-link > a:hover {
    color: ${(props) =>
      props.colorHover === "red"
        ? "#F31958"
        : props.colorHover === "blue"
        ? "#0593F7"
        : props.colorHover === "yellow"
        ? "#FFBE00"
        : props.colorHover === "orange"
        ? "#FF7C02"
        : props.colorHover === "black"
        ? "black"
        : "#F0F0F0"};
  }
  @media screen and (max-width: 768px) {
    .back {
      width: 4vmin;
      height: 4vmin;
    }
    .breadcrumb-link > a {
      font-size: 3vmin;
    }
  }
`;
