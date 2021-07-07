import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "../main/Button";
import GeoOne from "../../assets/images/agenda/Carousel/geo-one.png";
import GeoTwo from "../../assets/images/agenda/Carousel/geo-two.png";
import Batik from "../../assets/images/agenda/Carousel/batik.png";
import Agenda from "../../assets/images/agenda/Carousel/agenda.png";

export default function CarouselCard(props) {
  const { title, text, image, link } = props;
  return (
    <CarouselStyle>
      <div className="batik">
        <img src={Batik} alt="" />
      </div>
      <div className="geo-one">
        <img src={GeoOne} alt="" />
      </div>
      <div className="geo-two">
        <img src={GeoTwo} alt="" />
      </div>
      <div className="card-container">
        <div className="card-one">
          <div className="image-container">
            <img src={Agenda} alt="" />
          </div>
        </div>
        <div className="card-two">
          <h3>{title}</h3>
          <div className="image-card">
            <img src={Agenda} alt="" />
          </div>
          <p>{text}</p>
          <div className="button-container">
            <div className="more-button">
              <Button text="Selengkapnya" color="yellow" borderColor="yellow" />
            </div>
          </div>
        </div>
      </div>
    </CarouselStyle>
  );
}

const CarouselStyle = styled.div`
  height: 70vmin;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  border-radius: 5vmin;
  box-shadow: 0px 0px 9px -2px rgba(0, 0, 0, 0.5);
  background-color: white;
  .batik {
    position: absolute;
    left: 5vh;
    top: 5vh;
    height: 10vmin;
    width: 10vmin;
  }
  .geo-one {
    position: absolute;
    right: 0;
    top: 0;
    height: 23vmin;
    width: 24vmin;
  }

  .geo-two {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 25vmin;
    width: 35vmin;
  }
  img {
    height: 100%;
    width: 100%;
  }
  .card-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .card-one {
    width: 35vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .image-container {
    width: 80%;
    height: 45vmin;
    width: 45vmin;
  }

  .card-two {
    width: 45vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 10vmin;
  }

  .card-two > h3 {
    width: 80%;
    font-size: 6vmin;
    margin: 0;
    margin-bottom: 5vmin;
  }
  .card-two > p {
    width: 65%;
    font-size: 2.5vmin;
    margin: 0;
    margin-left: 4vmin;
    line-height: 1.8;
    margin-bottom: 5vmin;
  }
  .button-container {
    width: 70%;
    display: flex;
    margin-left: 4vmin;
    flex-direction: row;
  }

  .image-card {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    .card-two > h3 {
      width: 75%;
      font-size: 4vmin;
      margin-bottom: 5vh;
    }
    .card-two > p {
      font-size: 2.25vmin;
      line-height: 1.8;
    }
  }
  @media screen and (max-width: 992px) {
    .batik {
      height: 10vmin;
      width: 10vmin;
    }
    .geo-one {
      height: 19vmin;
      width: 20vmin;
    }

    .geo-two {
      height: 20vmin;
      width: 30vmin;
    }
    .image-container {
      width: 80%;
      height: 35vmin;
      width: 35vmin;
    }
    .card-two {
      width: 45vw;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .card-two > h3 {
      font-size: 5vmin;
      margin-bottom: 5vmin;
    }
    .card-two > p {
      width: 70%;
      font-size: 2.25vmin;
      line-height: 1.8;
    }
  }
  @media screen and (max-width: 768px) {
    height: 160vmin;
    width: 80vw;

    .batik {
      height: 14vmin;
      width: 14vmin;
      left: 3vh;
      top: 3vh;
    }
    .geo-one {
      height: 25vmin;
      width: 25vmin;
    }

    .geo-two {
      height: 30vmin;
      width: 35vmin;
    }
    .card-one {
      display: none;
    }
    .card-two {
      width: 100%;
      justify-content: center;
      align-items: center;
      margin: 0;
    }
    .card-two > h3 {
      width: 70%;
      font-size: 7vmin;
      margin-bottom: 5vmin;
      text-align: center;
    }
    .card-two > p {
      width: 70%;
      margin: 0;
      font-size: 3.5vmin;
      text-align: center;
      margin-top: 3vmin;
    }
    .image-card {
      display: flex;
      height: 40vmin;
      width: 40vmin;
    }
    .button-container {
      width: 100%;
      margin-left: 0vh;
      justify-content: center;
      margin-top: 5vmin;
    }
  }
`;
