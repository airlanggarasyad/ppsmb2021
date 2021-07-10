import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components"; 


const YoutubeEmbed = ({ embedId }) => (
    <Container>        
        <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />

    </Container>

);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

const Container = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  border-radius: 25px;

  iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
`

export default YoutubeEmbed;