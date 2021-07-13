import React from "react";
import styled from "styled-components";
import titleDecoration from "../assets/img/galeri/title-decoration.svg";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

function VideoContainer(props) {
  return (
    <VideoSectionContainer
      style={{ backgroundImage: `url(${props.bgurl})` }}
      bgcolor={props.bgcolor}
      noDecor={props.noDecor}
    >
    <LiteYouTubeEmbed 
      id={props.id}
      title={props.title}
      poster="maxresdefault"
    />
      <div className={`title-decoration ${props.passClass}`}>
        <div className="title-text">
          <h3>{props.title}</h3>
        </div>
        <img src={titleDecoration} alt="" />
      </div>
      {/* <div className="play-button">
        <div className="bg"></div>
        <div className="triangle">
          <svg
            width="80%"
            height="80%"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M79 46.268C80.3333 47.0378 80.3333 48.9623 79 49.7321L34 75.7128C32.6667 76.4826 31 75.5204 31 73.9808L31 22.0192C31 20.4796 32.6667 19.5174 34 20.2872L79 46.268Z"
              fill="white"
            />
            <path
              d="M85 53.1962L34 82.641C30 84.9504 25 82.0637 25 77.4449L25 18.5551C25 13.9363 30 11.0496 34 13.359L85 42.8039C89 45.1133 89 50.8868 85 53.1962Z"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
      </div> */}
    </VideoSectionContainer>
  );
}

export default VideoContainer;

const VideoSectionContainer = styled.div`
  position: relative;
  /* display: flex; */
  aspect-ratio: 17 / 9;
  overflow: clip;

  width: 100%;
  border-radius: 5vmin;
  margin-bottom: 20px;
  /* padding: 5%; */

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  * {
    margin: 0;
  }

  .yt-lite {
    height:100%;
    border-radius:5vmin;
  }

  h3 {
    font-size: calc(0.5rem + 0.5vmin);
    color: var(--color-darkblue);
  }

  .title-decoration {
    position: absolute;
    display: ${props => props.noDecor ? "none" : "flex"};
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1;
  }

  .title-decoration img {
    width: 50%;
  }

  .title-decoration .title-text {
    position: absolute;
    top: 25%;
    left: -5%;

    background-color: white;
    border: 2px solid #01385e;
    border-radius: 15vmin;

    padding: 1% 3%;
    width: 45%;

    text-align: center;
  }

  .play-button {
    position: relative;
    margin: auto;
  }

  .play-button .bg {
    position: relative;
    height: 10vmin;
    width: 10vmin;
    border-radius: 50%;

    background-color: ${props => props.bgcolor ? props.bgcolor : "var(--color-blue)"};
    opacity: 0.5;
  }

  .play-button .triangle {
    position: absolute;
    display: flex;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 576px) {
    h3 {
      font-size: calc(0.5rem + 1.5vmin);
    }
  }

  @media (min-width: 992px) {
    h3 {
      font-size: calc(0.5rem + 1.2vmin);
    }
  }
`;
