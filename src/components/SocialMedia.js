import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faTiktok,
  faYoutube,
  faLine,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faTwitter, faInstagram, faFacebook, faTiktok, faYoutube, faLine);

function SocialMedia(props) {
  return (
    <SocialMediaContainer mainColor={props.mainColor} secondaryColor={props.secondaryColor}>
      <div className="social-media-icon">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <div>
            <FontAwesomeIcon icon={props.faIcon} />
            <span>{props.name}</span>
          </div>
        </a>
      </div>
    </SocialMediaContainer>
  );
}

export default SocialMedia;

const SocialMediaContainer = styled.div`
  .social-media-icon a {
    text-decoration: none;
  }

  .social-media-icon a div {
    display: flex;
    align-items: center;
  }

  .social-media-icon a div * {
    display: inline;
  }

  .social-media-icon a div span {
    display: inline;
    transition: all 0.4s ease;
  }

  .social-media-icon a svg {
    color: ${props => props.mainColor};
    border: 2px solid ${props => props.mainColor};
    border-radius: 11px;
    padding: 5px;
    margin: 2px;
    transition: all 0.4s ease;
    width: calc(0.5rem + 3vmin);
    height: auto;
  }

  .social-media-icon a:hover > div svg {
    border: 2px solid ${props => props.secondaryColor};
    color: ${props => props.secondaryColor};
  }

  .social-media-icon a:hover > div span {
    color: ${props => props.secondaryColor};
  }
`;
