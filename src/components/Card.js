import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import BgOne from "../assets/images/agenda/DayCardContainer/one.png";
import BgTwo from "../assets/images/agenda/DayCardContainer/two.png";
import BgThree from "../assets/images/agenda/DayCardContainer/three.png";
import BgFour from "../assets/images/agenda/DayCardContainer/four.png";
import BgFive from "../assets/images/agenda/DayCardContainer/five.png";
import BgSix from "../assets/images/agenda/DayCardContainer/six.png";
import Flip from 'react-reveal/Flip';

export default function Card(props) {
    const { background, shadow, headerColor, title, titleColor, mainText, mainTextColor, link } = props;
    return (
        <div style={{ padding: '0 2px', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Flip right>
                <CardStyle
                    background={props.background}
                    shadow={props.shadow}
                    headerColor={props.headerColor}
                    title={props.title}
                    titleColor={props.titleColor}
                    mainText={props.mainText}
                    mainTextColor={props.mainTextColor}
                    link={props.link}
                    
                >
                    {/* <a style={{textDecoration:'none'}} href={props.link} target='_blank'> */}
                        <div className="card-header">
                            <h6>{props.title}</h6>
                        </div>
                        <div className="card-background">
                            <img src={props.background} alt="" />
                        </div>
                        <div className="card-shadow"></div>
                        <div className="card-content">
                            <h6>{props.mainText}</h6>
                        </div>
                    {/* </a> */}
                </CardStyle>
            </Flip>
        </div>


    )

}
const CardStyle = styled.div`
  height: 30vmin;
  width: 27vmin;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  border-radius: 2.5vmin;
  box-shadow: 0px 0px 9px -2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: 500ms ease;

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
    font-size: calc(0.5rem + 0.8vmin);
    margin: 0;
    color: white;
    color: ${(props) => props.titleColor};
    background-color: ${(props) => props.headerColor};
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
    width:80%;
    text-align: right;
    font-size: calc(0.5rem + 1.8vmin);
    color: white;
    color: ${(props) => props.mainTextColor};
    margin: 0 3vmin 3vmin 0;
    text-decoration: none;

  }
  .card-background {
    height: 30vmin;
    width: 27vmin;
    position: absolute;
    z-index: -2;
    display: flex;
    justify-content: center;
  }
  .card-background > img {
    height: 30vmin;
    width: 30vmin;
  }
  .card-shadow {
    height: 30vmin;
    width: 27vmin;
    position: absolute;
    z-index: -1;
    background: ${(props) => `linear-gradient(180deg, rgba(0,0,0,0) 0%,` + props.shadow + `75%,` + props.shadow + `100%)`};
  }
  
`;