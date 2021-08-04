import React from "react";
import styled from "styled-components";
import titleDecoration from "../assets/img/galeri/title-decoration.svg";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

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
        poster={props.nomaxres ? "hqdefault" : "maxresdefault"}
      />
      <div className={`title-decoration ${props.passClass}`}>
        <div className="title-text">
          <h3>{props.title}</h3>
        </div>
        <img src={titleDecoration} alt="" />
      </div>
    </VideoSectionContainer>
  );
}

export default VideoContainer;

const VideoSectionContainer = styled.div`
  position: relative;
  /* display: flex; */
  aspect-ratio: 16 / 9;
  overflow: clip;

  width: 100%;
  border-radius: 0;
  margin-bottom: 20px;
  /* padding: 5%; */

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  * {
    margin: 0;
  }

  .yt-lite {
    height: 100%;
    border-radius: 2.3vmin;
  }

  h3 {
    font-size: calc(0.5rem + 0.5vmin);
    color: var(--color-darkblue);
  }

  .title-decoration {
    position: absolute;
    display: ${(props) => (props.noDecor ? "none" : "flex")};
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

    background-color: ${(props) =>
      props.bgcolor ? props.bgcolor : "var(--color-blue)"};
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
