import React, { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonWeb from "../subComponents/ButtonWeb";

import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Anime from "react-anime";

import mainLogo from "../assets/main-screen/vmap-main-logo.webp";
// import kembaralokaLogoSVG from "../assets/main-screen/kembaraloka.svg";
// import kembaralokaLogo from "../assets/main-screen/kembaraloka.webp";
import leftTop from "../assets/main-screen/left-top.webp";
import rightBottom from "../assets/main-screen/right-bottom.webp";

export default function Storyboard(props) {
  const [kembaraloka, setKembaraloka] = useState(false);
  const [gone, setGone] = useState(false);
  useEffect(() => {
    if (!props.storyboard && !props.loading) {
      setKembaraloka(true);
      setTimeout(() => {
        setKembaraloka(false);
      }, 3000);
    }
    //eslint-disable-next-line
  }, [props.storyboard]);

  useEffect(() => {
    if (props.freeControl) {
      setGone(true);
    }
    //eslint-disable-next-line
  }, [props.freeControl]);

  return (
    <>
      <style type="text/css">
        {`
    .st0{fill:#F31958;stroke:#FFFFFF;stroke-miterlimit:10;}
                .storyboard{
                    position: fixed;
                    height: 100%;
                    width: 100%;
                    z-index:10;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color:rgba(255,255,255,0);
                }

                .kembaraloka{
                    position: fixed;
                    width: 70%;
                    z-index:8;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                h1 {
                    color: black;
                    font-size: 3rem;
                    font-weight: bold;
                }

                .text-center .main-logo {
                    width: 600px;
                }
                
                .text-center .mulai {
                    display:block;
                    margin: auto;
                }
                
                .text-center {
                    align-items: center;
                }

                .image-corner {
                    z-index: 50;
                    position: fixed;
                }

                .image-corner .left-top-corner {
                    width: 210px;
                    position: fixed; 
                }

                .image-corner .right-bottom-corner {
                    width: 210px;
                    position: fixed; 
                    right: 0;
                    bottom: 0;
                }

                .introButton {
                    padding: 1.3vmin 3.5vmin;
                    font-size: 2.6vmin;
                }

                .apaaja {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .kembaraloka{
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                @media (max-width: 800px) {
                    .text-center .main-logo {
                        width: 500px;
                    }
                }

                @media only screen and (max-width: 600px) {
                    .text-center .main-logo {
                        width: 350px;
                    }

                    .image-corner .left-top-corner {
                        width: 180px;
                    }

                    .image-corner .right-bottom-corner {
                        width: 180px;
                    }

                    .introButton {
                        padding: 2vmin 6vmin;
                        font-size: 5vmin;
                    }
                }

                @media only screen and (max-height: 740px) {
                    .text-center .main-logo {
                        width: 400px;
                    }

                    .image-corner .left-top-corner {
                        width: 180px;
                    }

                    .image-corner .right-bottom-corner {
                        width: 180px;
                    }
                }
            `}
      </style>

      {!gone && (
      <div onContextMenu={(e) => e.preventDefault()}>
        {/* Corner IMG */}
        <div className="image-corner noselect">
          <Slide
            top
            when={props.storyboard && !props.loading}
            delay={500}
            duration={500}
          >
            <img src={leftTop} alt="" className="left-top-corner" />
          </Slide>
          <Slide
            bottom
            when={props.storyboard && !props.loading}
            delay={500}
            duration={500}
          >
            <img src={rightBottom} alt="" className="right-bottom-corner" />
          </Slide>
        </div>

        {/* Main Storyboard */}
          <Fade when={!props.freeControl} duration={2000}>
            <div className="storyboard">
              <Container className="text-center apaaja">
                <Zoom when={props.storyboard && !props.loading} delay={1250}>
                  <img
                    src={mainLogo}
                    alt="main logo"
                    className="main-logo noselect"
                  />
                </Zoom>
                <Fade
                  when={!props.storyboard && !props.loading && kembaraloka}
                  delay={1500}
                >
                  <div className="kembaraloka">
                    <svg
                      id="prefix__Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 507.49 82.2"
                      {...props}
                    >
                      <defs>
                        <style>
                          {
                            ".prefix__cls-2{fill:#0593f7;stroke:#fff;stroke-miterlimit:10;stroke-width:2px}"
                          }
                        </style>
                      </defs>
                      <image
                        width={510}
                        height={93}
                        xlinkHref="data:image/png;base64,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"
                        style={{
                          isolation: "isolate",
                        }}
                        opacity={0.44}
                      />
                      <g
                        style={{
                          isolation: "isolate",
                        }}
                      >
                        <g id="prefix__Layer_1" data-name="Layer 1">
                          <MyAnime>
                            <path
                              className="prefix__cls-2"
                              d="M22 55.64a19.15 19.15 0 01-8.84-2.16C7.52 50.34 4 43.52 4 36.06a22.57 22.57 0 013-11.49c5.19-8.92 15.36-13.37 26.09-14.07 1-.07 2.16-.14 3.2-.14 10.71 0 19.78 3.64 22.64 3.41a7.89 7.89 0 012.92-.55c3 0 4.6 2 4.6 3.9s-1.88 4-6.13 3.27a1.92 1.92 0 01-.62-.14C52 24.08 49 35.44 44.37 45 38 58.07 32 73.19 15 74.65a22.35 22.35 0 01-9.9-1.6 2.91 2.91 0 012-5.43 17.39 17.39 0 006.83.83c12.68-.76 18-11.91 24.73-26.26 2.86-6.41 7.24-17.69 13.16-23.75a59.63 59.63 0 00-14.62-2c-1.19 0-2.44.07-3.83.14-8.64.56-16.44 4.25-20.62 10.52a17 17 0 00-2.65 9.33c0 4.67 1.81 9.33 6 11.77a13.1 13.1 0 006 1.53 8 8 0 002.9-.57 3 3 0 013.9 1.68 3.05 3.05 0 01.21 1 3.38 3.38 0 01-1.88 2.79A12.67 12.67 0 0122 55.64zm28.29 15.67a36.75 36.75 0 011.05-8.08A81.56 81.56 0 0154 54.31a11.6 11.6 0 00.84-4.11 6.81 6.81 0 00-.56-2.85c-.9.07-1.6.07-2.3.07a5.66 5.66 0 01-2.78-.49 3.57 3.57 0 01-2.2-3.21 4.38 4.38 0 014.46-4.11 8.39 8.39 0 014.73 1l.56-.14c8.29-3.41 12-12.26 16.44-19A35 35 0 0179.27 14a10.21 10.21 0 017.87-2.44c2 .28 2.86 1.54 2.86 2.79a3.08 3.08 0 01-2.72 3 7.1 7.1 0 00-4 1.47 23.44 23.44 0 00-4.88 6.06c-5.19 8.54-9.09 16.27-17.4 20.59l-.56.27a10.89 10.89 0 01.72 4.26 18.44 18.44 0 01-1.26 6.48 65.13 65.13 0 00-2.43 8.22 27.79 27.79 0 00-1 6.9c0 4.94 2.09 8.63 8.5 9.19a2.84 2.84 0 013 2.65v.28c0 1.74-1.39 3.55-4.24 3.2-9.96-1.54-13.44-7.92-13.44-15.61z"
                              transform="translate(-1 -9)"
                            />
                          </MyAnime>
                          <MyAnime>
                            <path
                              className="prefix__cls-2"
                              d="M291 53a3.1 3.1 0 00-2.93 2.58c-2.51 9.61-11.56 12.81-18 12.81a13.27 13.27 0 01-2.44-.14c-6.13-.83-10.45-5.08-10.45-11a15.17 15.17 0 011.26-5.78l5.22-10.8a3.08 3.08 0 00-1.33-4.15h-.06a3.22 3.22 0 00-4.19 1.48L257 40.24a8.73 8.73 0 00-3.48-2.92 9.23 9.23 0 00-4.25-1A11.41 11.41 0 00239.13 43l-5.35 11-3.56 7c-1.81 3.76-4.18 4.53-6.13 3.62a3.21 3.21 0 01-1.88-3 6.49 6.49 0 01.76-2.86l3.21-6.41a12.38 12.38 0 001.39-5.5c0-5-3.55-8.57-7.73-10l.21-.35a3.14 3.14 0 00-1.57-4.14h-.1a3 3 0 00-4 1.48v.05L201.26 61c-1.81 3.76-4.32 4.18-5.85 3.62a3.41 3.41 0 01-2.09-3.2 6.15 6.15 0 01.7-2.65l8.77-18.11a3.08 3.08 0 00-1.33-4.15h-.06a3.23 3.23 0 00-4.27 1.5L196 40.24a8.83 8.83 0 00-3.49-2.92 9.23 9.23 0 00-4.25-1A11.42 11.42 0 00178.18 43l-4.24 8.7a3 3 0 00-.42.63 10.3 10.3 0 01-8.15 5.92l2.5-5.5a13.21 13.21 0 001.19-5.36c0-5.37-3.48-10.17-9.82-9.89L165 25.2a3.39 3.39 0 00-1.67-4.46 3.56 3.56 0 00-4.33 1.67l-15.41 32.64-3 6c-1.81 3.76-4.6 4.18-6.13 3.62a2.8 2.8 0 01-1.88-2.92 5.48 5.48 0 01.35-2l5.15-10.45a11.38 11.38 0 00.84-4.11c0-4-2.58-7.39-6.55-9a10 10 0 00-3.21-.56 9.14 9.14 0 00-6.26 2.44 8.41 8.41 0 00-2.79-2 12.16 12.16 0 00-4.53-.9c-3.27 0-6.89 1.46-9.4 6.06-.62 1.23-.86 1.64-5.5 11.21-.07.12-.15.23-.21.35-4.74 8.78-10.52 13.44-18 12.47-2.57-.35-5.64-1.6-5.64-5a7.86 7.86 0 01.7-3.06 17.3 17.3 0 007.94 1.67c4.74-.14 8.5-3.13 10.45-8.22a15.55 15.55 0 001-5.22A8.83 8.83 0 0091.74 37a10.43 10.43 0 00-4.32-1A12.4 12.4 0 0077 42.61a70 70 0 00-6.13 14 12.52 12.52 0 00-.49 3.55c0 4.88 2.93 9.06 8.57 10.59a21.25 21.25 0 005.44.7 19.69 19.69 0 009.4-2.45 3 3 0 001.5 1.59 3.17 3.17 0 004.18-1.39L112 43.86c1.25-2.09 3.2-2.64 4.6-2.09a2.81 2.81 0 011.74 2.65 5.42 5.42 0 01-.49 2.09l-9.47 19.78c-1.26 2.37.9 4.53 3.06 4.53a3.11 3.11 0 002.79-1.74l9.61-19.85c.84-1.74 1.74-3.42 2.51-5.09a3.71 3.71 0 014.18-2c.56.14 3.06 1.4 1.53 4.6l-4.46 9.33a13 13 0 00-1.32 5.51 9.35 9.35 0 005.92 8.84 9.83 9.83 0 003.48.63 11.15 11.15 0 008.17-3.72 10.24 10.24 0 008.48 4.07 11.34 11.34 0 0010-6.69l.07-.14a16.6 16.6 0 008.78-1.57 9.32 9.32 0 009.51 8 10.71 10.71 0 008.22-3.34 8.83 8.83 0 003.9 2.78 9.83 9.83 0 003.48.63c4 0 8.22-2.37 10.59-7.31l10.25-21.11c2.16.49 3.83 1.88 3.83 4.25a7.1 7.1 0 01-.76 3.1l-2.93 6.13A13 13 0 00216 61.6a9.35 9.35 0 005.92 8.84 9.83 9.83 0 003.48.63 11.23 11.23 0 008.46-4 9.18 9.18 0 007.84 4 10.71 10.71 0 008.22-3.34l2.08-3.87c2.23 5.43 7.38 9.33 14.7 10.44a27.75 27.75 0 003.41.21c10 0 21.25-5.92 23.82-17.76A3 3 0 00291 53zM82.68 45.4c1.68-2.93 4.32-3.49 6-2.79a3.13 3.13 0 011.88 3.2 8.2 8.2 0 01-1.18 4 5.1 5.1 0 01-4.74 2.65 14.05 14.05 0 01-4.87-1.11zm79.55 4.45L159 56.61a2.94 2.94 0 00-3.35.91 3.16 3.16 0 00-.69 2.09 3.35 3.35 0 001.32 2.78c-1.32 2.37-4 3.21-5.78 2.37a4.1 4.1 0 01-2.37-3.9 5.54 5.54 0 01.12-1.15l1.9-3.87a3.12 3.12 0 00.29-1l3.82-7.93c1.39-2.93 3.9-3.83 6.13-3.07a4.12 4.12 0 012.3 3.83 4.83 4.83 0 01-.46 2.18zm28.91.42l-5.57 11.43a4.91 4.91 0 01-6.13 2.78 3.78 3.78 0 01-2.3-3.62 7.64 7.64 0 01.9-3.34l.54-1.12a13.45 13.45 0 00.65-1.32V55l4.51-9.34c1.39-2.78 4.31-3.62 6.13-2.78a4 4 0 012.29 3.69 7.83 7.83 0 01-1 3.69zm61.65-1.74l-.49 1.18-.21.56-5.57 11.43a4.91 4.91 0 01-6.13 2.78 3.78 3.78 0 01-2.3-3.62 7.29 7.29 0 01.77-3l1-2a3 3 0 00.17-.41l4.71-9.76c1.39-2.78 4.31-3.62 6.12-2.78a3.85 3.85 0 012.3 3.62 8 8 0 01-.37 2zM381.37 88.58a25.2 25.2 0 01-4.59.42c-9.2 0-17.91-4.6-25.22-9.47-4.25-2.86-8.22-6-11.56-8.64-.84-.7-1.67-1.39-2.44-2l-.7-.56-.42.35A17.76 17.76 0 01325.09 73a18.29 18.29 0 01-5.64-.91 10.12 10.12 0 01-7.53-9.33 7.36 7.36 0 011.12-4c1.6-2.72 4.74-4 8.36-3.83s8.22 1.53 13.72 4.6a7.46 7.46 0 011 .55h.07l4.94-7.66-1-.49a20.85 20.85 0 01-8.36-7.24 18.89 18.89 0 01-2.86-10c0-4.67 1.74-9.89 6.34-14.77a3.23 3.23 0 012.37-1 2.83 2.83 0 012 .83 3.31 3.31 0 011 2.3 3.24 3.24 0 01-.83 2.16c-3.62 3.9-4.81 7.38-4.81 10.38a13.16 13.16 0 002 6.84 15.91 15.91 0 007.13 5.57l.35.14 2-3.62 7.88-16c1.81-3.55 4.52-8.35 8.28-11.84a15.28 15.28 0 0110.17-4.46 13.18 13.18 0 015.21 1.16 10.66 10.66 0 016.72 7.62 11.9 11.9 0 01.27 2.79c0 3.83-1.46 8.57-4.66 14.49-6.62 12.72-16.09 17.59-26.75 17.59a36.16 36.16 0 01-6.06-.49l-.14-.07-6.13 9.55.35.27 2.3 1.81c3.34 2.72 7.1 5.65 11.21 8.43 7 4.74 14.56 8.29 21.67 8.29a19.3 19.3 0 003.48-.28 19 19 0 008.29-3.38 3.5 3.5 0 012.09-.7 2.9 2.9 0 013 2.8v.06a4.18 4.18 0 01-1.53 3 27.13 27.13 0 01-10.74 4.42zm-50-23.89l-1.11-.56c-4.12-2.09-7-2.78-9.06-2.85s-2.72.62-2.86.83c-.48.77.21 3.28 2.86 4a13.13 13.13 0 003.83.63 11.13 11.13 0 005.57-1.53zm47.23-43.33a4.52 4.52 0 00-3-3.2 7.21 7.21 0 00-2.85-.63 8.48 8.48 0 00-5.86 2.79c-2.85 2.65-5.22 6.62-7 10.1L352 46.37l-1.12 2c.91.07 1.74.14 2.65.14 8.08 0 15.46-3.2 21.17-14.21 3.94-7 4.28-10.92 3.87-12.94z"
                              transform="translate(-1 -9)"
                            />
                          </MyAnime>
                          <MyAnime>
                            <path
                              className="prefix__cls-2"
                              d="M496.17 53a3.1 3.1 0 00-2.93 2.58c-2.51 9.61-11.56 12.81-18 12.81a14.21 14.21 0 01-2.44-.14c-6.13-.83-10.45-5.08-10.45-11a15.17 15.17 0 011.26-5.78l5.22-10.8a3.08 3.08 0 00-1.33-4.15h-.06a3.22 3.22 0 00-4.22 1.48l-1.11 2.23a8.83 8.83 0 00-3.49-2.92 9.23 9.23 0 00-4.25-1 11.41 11.41 0 00-10.1 6.69l-5.34 11-3.57 7c-1.81 3.76-4.6 4.18-6.13 3.62-1.26-.42-2.51-2-1.67-4.74a9.2 9.2 0 00.69-5.15l-.25-.63a17.35 17.35 0 006-6.61l3.35-6.69c.69-1.67.35-3.69-1.47-4.39s-3.13-.07-4.38 2.16l-3.21 6.13c-1.6 2.79-3.41 4.11-5.64 4.46a15.51 15.51 0 00-4.25-.91l11.15-23a3.12 3.12 0 00-5.55-2.79l-14.25 29.23a3.69 3.69 0 00-.44.67 10.44 10.44 0 01-8 5.85l2.92-6a13.33 13.33 0 001.39-5.64 9.57 9.57 0 00-6.47-9.12 10.91 10.91 0 00-4.11-.77 11.22 11.22 0 00-10.1 6.62L378.87 56a13.42 13.42 0 00-1.19 5.51c0 3.9 1.74 7.59 5.64 9.4a10.17 10.17 0 004 .84c4.25 0 8.43-2.72 10.73-6.69l.21-.42a16 16 0 005.47-.41l-1.08 2.22a3 3 0 001.18 4.07l.17.09a3.17 3.17 0 004.18-1.39l6.14-12.76q.38-.68.69-1.38a.58.58 0 01.08-.22l.13-.27a2.9 2.9 0 001 .56 17.33 17.33 0 005.16.76c.62 1 .07 2.72-.14 3.42a12.79 12.79 0 00-.28 2.3 9.56 9.56 0 006 8.84 9.83 9.83 0 003.48.63 11.23 11.23 0 008.46-4 9.18 9.18 0 007.84 4 10.69 10.69 0 008.26-3.41l2.16-3.83c2.23 5.43 7.38 9.33 14.7 10.44a27.75 27.75 0 003.41.21c10 0 21.25-5.92 23.82-17.76a3 3 0 00-2.15-3.65 2.86 2.86 0 00-.77-.1zm-97.94-2.72L395 56.75c-1.4-.49-2.72-.49-3.76.77a3.11 3.11 0 00-.7 2.09 3.43 3.43 0 001.46 2.78l.28.21a4.88 4.88 0 01-6.06 2.58 3.79 3.79 0 01-2.3-3.62 7.56 7.56 0 01.91-3.35l6.06-12.54c1.39-2.78 4.32-3.62 6.13-2.78a4 4 0 012.3 3.69 7.88 7.88 0 01-1.09 3.69zm59.7-1.74l-.49 1.18-.21.56-5.57 11.42a4.91 4.91 0 01-6.13 2.78 3.78 3.78 0 01-2.3-3.62 7.25 7.25 0 01.77-3.06l1-2a2 2 0 00.16-.4l4.72-9.77c1.39-2.78 4.32-3.62 6.13-2.78a3.86 3.86 0 012.29 3.62 7.63 7.63 0 01-.37 2.06z"
                              transform="translate(-1 -9)"
                            />
                          </MyAnime>
                          {/* <MyAnime>
                            <path
                              className="prefix__cls-1"
                              d="M244.4 75.61a5 5 0 00.5-2.21 4.17 4.17 0 00-2.35-3.9c-2.27-.79-4.83.14-6.25 3.12l-5.68 11.79a5.21 5.21 0 00-.57 2.42 4.19 4.19 0 002.42 4c1.84.85 4.54 0 5.89-2.42a3.44 3.44 0 01-1.36-2.86 3.26 3.26 0 01.71-2.13 3 3 0 013.41-.92zm9.16 13.5a16.84 16.84 0 01-8.95 1.55l-.07.15a11.58 11.58 0 01-10.23 6.82 10.47 10.47 0 01-8.65-4.14 10.21 10.21 0 01-1.93-6.09 14.18 14.18 0 011.35-5.83l.3-.63 15.75-33.31a3.63 3.63 0 014.41-1.71 3.46 3.46 0 011.7 4.55L241.35 63c6.46-.28 10 4.62 10 10.09a13.48 13.48 0 01-1.21 5.47l-2.54 5.64a10.49 10.49 0 008.31-6 3.11 3.11 0 01.44-.67m5.43 3.33a.37.37 0 010 .11 13.94 13.94 0 01-.7 1.46"
                              transform="translate(-81.51 -34.33)"
                            />
                          </MyAnime>
                          <MyAnime>
                            <path
                              className="prefix__cls-1"
                              d="M273.88 76a8.06 8.06 0 001.12-3.73 4 4 0 00-2.35-3.77c-1.85-.85-4.83 0-6.25 2.84l-5.83 12.08a7.8 7.8 0 00-.92 3.41 3.86 3.86 0 002.35 3.69 5 5 0 006.25-2.84zm14.64 2.39a3.46 3.46 0 00-.29.45L284.11 87c-1.85 3.84-4.4 4.26-6 3.69A3.48 3.48 0 01276 87.4a6.46 6.46 0 01.71-2.7l8.95-18.47a3.14 3.14 0 00-1.41-4.23 3.28 3.28 0 00-4.25 1.53l-1.14 2.27a9.07 9.07 0 00-3.55-3 9.43 9.43 0 00-4.33-1 11.63 11.63 0 00-10.3 6.82l-4.32 8.85-1.51 3.09a14.69 14.69 0 00-1.49 6.25 12.16 12.16 0 00.21 2.28 9.51 9.51 0 009.66 8.09 11 11 0 008.39-3.41 8.88 8.88 0 004 2.84 10 10 0 003.55.64c4.12 0 8.38-2.41 10.79-7.46l3.75-7.61"
                              transform="translate(-81.51 -34.33)"
                            />
                          </MyAnime>
                          <MyAnime>
                            <path
                              className="prefix__cls-1"
                              d="M288.52 78.42l9-19.15a3 3 0 014.12-1.57 3.18 3.18 0 011.72 4.3l-.21.35c4.26 1.49 7.88 5.19 7.88 10.23a12.64 12.64 0 01-1.42 5.61l-3.27 6.54a6.57 6.57 0 00-.78 2.91 3.28 3.28 0 001.92 3c2 .93 4.4.15 6.25-3.69l3.56-7v-.06m5.1 4l1.09-2.24a3 3 0 00.17-.41m-30 .91a4.32 4.32 0 00.59-.91l6.11-13c2.2.5 3.9 1.92 3.9 4.33a7.17 7.17 0 01-.78 3.13l-3 6.25a13.25 13.25 0 00-1.35 5.61 9.54 9.54 0 006 9 10 10 0 003.55.64 11.42 11.42 0 008.62-4.11"
                              transform="translate(-81.51 -34.33)"
                            />
                          </MyAnime>
                          <MyAnime>
                            <path
                              className="prefix__cls-1"
                              d="M333.76 93.79a11 11 0 01-8.38 3.41c-6.18 0-9.87-4.76-9.87-10.37a14.55 14.55 0 011.49-6.25l5.82-11.94a11.64 11.64 0 0110.3-6.82 9.45 9.45 0 014.34 1 9.07 9.07 0 013.55 3l1.14-2.27a3.28 3.28 0 014.26-1.55 3.15 3.15 0 011.42 4.26l-5.33 11a15.56 15.56 0 00-1.28 5.89c0 6 4.41 10.38 10.66 11.23a14.33 14.33 0 002.48.14c6.61 0 15.84-3.27 18.4-13.07a3.16 3.16 0 013-2.63 3.09 3.09 0 013 3.84c-2.63 12.07-14.14 18.11-24.3 18.11a28.28 28.28 0 01-3.48-.21c-7.45-1.14-12.71-5.12-15-10.66zM336 76l.21-.57.5-1.2a8.07 8.07 0 00.35-2.06 3.93 3.93 0 00-2.34-3.7c-1.85-.85-4.83 0-6.25 2.84l-5.83 12.08a7.67 7.67 0 00-.92 3.41 3.85 3.85 0 002.34 3.69 5 5 0 006.25-2.84zM467.88 115.1a25.66 25.66 0 01-4.69.43c-9.38 0-18.25-4.69-25.71-9.66-4.34-2.92-8.39-6.11-11.8-8.81-.85-.71-1.7-1.42-2.48-2l-.71-.57-.43.36a18.16 18.16 0 01-11.58 4.4 18.68 18.68 0 01-5.75-.92 10.32 10.32 0 01-7.67-9.52 7.62 7.62 0 011.13-4c1.64-2.77 4.83-4 8.53-3.91s8.38 1.56 14 4.69a7.27 7.27 0 011 .57h.07l5-7.82-1.06-.49a21.25 21.25 0 01-8.53-7.39 19.31 19.31 0 01-2.91-10.23c0-4.76 1.77-10.09 6.46-15.06a3.31 3.31 0 012.42-1.07 2.85 2.85 0 012.06.86 3.33 3.33 0 011 2.34 3.29 3.29 0 01-.85 2.2c-3.69 4-4.9 7.53-4.9 10.59a13.22 13.22 0 002.13 7 16.16 16.16 0 007.25 5.68l.35.14 2.06-3.69 8-16.27c1.84-3.62 4.62-8.52 8.45-12.07a15.49 15.49 0 0110.37-4.55 13.62 13.62 0 015.33 1.14 10.83 10.83 0 016.82 7.81 12.22 12.22 0 01.28 2.84c0 3.91-1.49 8.74-4.76 14.78-6.74 12.93-16.4 17.9-27.27 17.9a36.34 36.34 0 01-6.18-.5l-.15-.07-6.16 9.65.36.29 2.3 1.83c3.41 2.78 7.25 5.76 11.44 8.6 7.17 4.83 14.85 8.45 22.09 8.45a20.15 20.15 0 003.55-.28 19.58 19.58 0 008.46-3.48 3.62 3.62 0 012.13-.71 3 3 0 013.05 2.91 4.25 4.25 0 01-1.56 3.06 27.62 27.62 0 01-10.94 4.55zm-51-24.36l-1.14-.57c-4.19-2.13-7.18-2.84-9.24-2.91s-2.77.63-2.91.85c-.5.78.21 3.34 2.91 4.12a13.41 13.41 0 003.91.64 11.31 11.31 0 005.68-1.57zM465 46.55a4.59 4.59 0 00-3-3.27 7.55 7.55 0 00-2.91-.64c-2.13 0-4.05 1.07-6 2.85-2.91 2.69-5.32 6.74-7.1 10.3l-8 16.26-1.13 2.06c.92.07 1.77.15 2.7.15 8.24 0 15.77-3.27 21.59-14.5 3.96-7.17 4.31-11.15 3.85-13.21z"
                              transform="translate(-81.51 -34.33)"
                            />
                          </MyAnime>
                          <MyAnime>
                            <path
                              className="prefix__cls-1"
                              d="M478.68 88.39a3.47 3.47 0 01-1.42-2.84 3.21 3.21 0 01.71-2.13c1.06-1.28 2.41-1.28 3.83-.78l3.27-6.64a8.06 8.06 0 001.07-3.76 4 4 0 00-2.35-3.77c-1.84-.85-4.83 0-6.25 2.84l-6.18 12.79a7.67 7.67 0 00-.92 3.41 3.85 3.85 0 002.34 3.69 5 5 0 006.22-2.6zm23.63-7.77l-.12.3a12.61 12.61 0 01-.78 1.56m-10.76 7.74a16.34 16.34 0 01-5.57.41l-.21.43c-2.35 4-6.61 6.82-10.94 6.82a10.33 10.33 0 01-4.05-.85c-4-1.85-5.75-5.61-5.75-9.59a13.72 13.72 0 011.2-5.61l6.18-12.93a11.45 11.45 0 0110.3-6.75A11.15 11.15 0 01486 63a9.78 9.78 0 016.61 9.31 13.77 13.77 0 01-1.43 5.69l-3 6.11a10.64 10.64 0 008.17-6 3.39 3.39 0 01.46-.7"
                              transform="translate(-81.51 -34.33)"
                            />
                          </MyAnime>
                          <MyAnime>
                            <path
                              className="prefix__cls-1"
                              d="M533 81.17a3.49 3.49 0 01-.22.53l-1.16 2.3m-5 9.17a11.4 11.4 0 01-8.62 4.1 10 10 0 01-3.55-.64 9.74 9.74 0 01-6.11-9 13.34 13.34 0 01.28-2.34c.22-.72.79-2.49.15-3.48a17.78 17.78 0 01-5.26-.79 3 3 0 01-1.07-.57l-.09.19-.9 1.86-6.17 12.84a3.21 3.21 0 01-4.28 1.43 3.09 3.09 0 01-1.42-4.26l1.09-2.26 6.19-12.79 14.45-29.84a3.18 3.18 0 115.69 2.84L505.6 74a16 16 0 014.33.92c2.28-.35 4.12-1.7 5.76-4.54L519 64.1c1.27-2.28 2.76-2.77 4.47-2.21 1.85.72 2.2 2.78 1.49 4.48l-3.41 6.82a17.63 17.63 0 01-6 6.75l.22.64a9.43 9.43 0 01-.71 5.25c-.86 2.85.42 4.41 1.7 4.83 1.56.57 4.4.15 6.25-3.69l3.59-7.06"
                              transform="translate(-81.51 -34.33)"
                            />
                          </MyAnime>
                          <MyAnime>
                            <path
                              className="prefix__cls-1"
                              d="M543 93.79a11 11 0 01-8.39 3.41c-6.18 0-9.87-4.76-9.87-10.37a14.69 14.69 0 011.49-6.25L532 68.64a11.62 11.62 0 0110.3-6.82 9.43 9.43 0 014.33 1 9.07 9.07 0 013.55 3l1.14-2.27a3.28 3.28 0 014.29-1.55 3.15 3.15 0 011.39 4.23l-5.33 11a15.56 15.56 0 00-1.28 5.89c0 6 4.41 10.38 10.66 11.23a14.39 14.39 0 002.49.14c6.6 0 15.84-3.27 18.39-13.07a3.16 3.16 0 013-2.63 3.09 3.09 0 013 3.84c-2.63 12.07-14.13 18.11-24.29 18.11a28 28 0 01-3.48-.21c-7.46-1.14-12.72-5.12-15-10.66zM545.24 76l.21-.57.5-1.2a8.07 8.07 0 00.35-2.06 3.93 3.93 0 00-2.3-3.67c-1.85-.85-4.83 0-6.25 2.84l-5.83 12.08a7.67 7.67 0 00-.92 3.41 3.86 3.86 0 002.34 3.69 5 5 0 006.26-2.84z"
                              transform="translate(-81.51 -34.33)"
                            />
                          </MyAnime> */}
                        </g>
                      </g>
                    </svg>
                    {/* <img
                      src={kembaralokaLogo}
                      alt="main logo"
                      className="main-logo noselect kembaraloka"
                    /> */}
                  </div>
                </Fade>
                <Zoom when={props.storyboard && !props.loading} delay={1500}>
                  {/* <Button className="mulai" variant="outline-dark" size="lg" onClick={props.startVmap}>Mulai</Button> */}
                  <ButtonWeb
                    className="introButton mulai"
                    startVmap={props.startVmap}
                    color="var(--color-redpink)"
                    bg="var(--color-white)"
                    text="Mulai"
                  />
                </Zoom>
              </Container>
            </div>
          </Fade>
      </div>
      )}
    </>
  );
}

const MyAnime = (props) => (
  <Anime
    easing="easeInOutCubic"
    duration={3000}
    loop={true}
    svg
    component="g"
    delay={1500}
    direction="alternate"
    fillOpacity={1}
    strokeDashoffset={(el) => {
      var pathLength = "0";
      for (var key in el.children) {
        let child = el.children[key];
        if (child.getTotalLength) {
          pathLength = child.getTotalLength().toString();
          el.setAttribute("stroke-dasharray", pathLength);
        }
      }
      return [pathLength, 0];
    }}
    {...props}
  />
);
