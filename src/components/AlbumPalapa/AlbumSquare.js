import React from "react";
import styled from "styled-components";

function AlbumSquare(props) {
  return (
    <AlbumSquareContainer
      key={props.key}
      style={{
        backgroundImage: `url(${props.photo.src})`,
      }}
      onClick={props.onClick}
    ></AlbumSquareContainer>
  );
}

export default AlbumSquare;

const AlbumSquareContainer = styled.div`
  background-size: 200%;
  background-position: center;
  aspect-ratio: 1/1;
  min-width: 48%;
  min-height: auto;
  transition: all 0.2s ease-in-out;
  margin-left: 0.5vmin;
  padding-right: 0.5vmin;
  margin-top: 0.5vmin;
  padding-bottom: 0.5vmin;

  :hover {
    cursor: pointer;
    background-size: 180%;
    transition: all 0.2s ease-in-out;
  }
`;
