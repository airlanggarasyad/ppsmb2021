import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components"; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'

export default function Sliders(props) {
  const settings = {
    //Component
    dots: props.withDots,
    arrows: props.withArrow,
  
    //Layout
    centerMode: props.centerMode,
    infinite: true,
    centerPadding: props.centerPadding,

    vertical: props.isVertical,
    verticalSwiping: true,
    // variableWidth: true,
    // adaptiveHeight: true,
  
    //What to show
    slidesToScroll: props.slidesToScroll,
    slidesToShow: props.slidesToShow,
    cssEase: 'linear',
 
    speed: 500,
    nextArrow: <NextArrow arrowColor={props.arrowColor} edgeSize={props.edgeSize}/>,
    prevArrow: <PrevArrow arrowColor={props.arrowColor} edgeSize={props.edgeSize}/>,
  };

    return (
      // <head></head>
      <Container>
        <Items>
          <Slider {...settings}>
            {props.children}
          </Slider>
        </Items>
      </Container>
    );
}

function NextArrow(props) {
  const { arrowColor, edgeSize, onClick } = props;
  return (
    <Arrow onClick={onClick} style={{right: props.edgeSize, color: props.arrowColor}}>
      <FontAwesomeIcon icon={faChevronRight}/> 
    </Arrow>
  );
}

function PrevArrow(props) {

  const { arrowColor, edgeSize, onClick } = props;
  return (
  <Arrow onClick={onClick} style={{left: props.edgeSize, color: props.arrowColor}}> 
    <FontAwesomeIcon icon={faChevronLeft}/> 
  </Arrow>
  );
}

const Arrow = styled.div`
  display: block;
  position: absolute;
  font-size: calc(0.5rem + 75%);
  top: 50%;
  padding: 10px;
  transform: translate(0, -50%);
  cursor: pointer;
`;

Sliders.defaultProps = {
  withDots: true,

  
  withArrow: true,
  arrowColor: 'var(color--black)',
  edgeSize: '-25px',

  centerMode: true,
  centerPadding: '50px', 
  isVertical: false,

  slidesToScroll: 1,
  slidesToShow: 1
}

const Container = styled.div`
  /* background-color: yellow; */
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding-bottom: 30px;
  .arrow {
    display:block;
  }
`;

const Items = styled.div`
  display: block;
  flex-direction: row;
  width: 80%;
  align-items: center;
  /* background-color: blue; */
  text-align: center;
  align-self: center;
  /* the slides */
.slick-slide {
    /* margin: 0 10px; */
}
/* the parent */
.slick-list {
    /* margin: 0 -10px; */
}
`;
 