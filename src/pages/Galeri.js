import React, { Component } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Zoom from "react-reveal/Zoom";
import Slider from "react-slick";
import SimpleReactLightbox from "simple-react-lightbox";

import VideoContainer from "../components/VideoContainer";
import MasonryRow from "../components/ImageGallery/MasonryRow";
import Button from "../components/Button";

import heroGaleriDesktop from "../assets/img/galeri/desktop-ornament-galeri.webp";
import Batik from "../assets/img/batik-color.svg";
import patternBlue from "../assets/img/pattern-bg-blue.webp";
import whiteBatik from "../assets/img/white-batik-corner.webp";
import videoUKMHeader from "../assets/img/galeri/ornament-ukm.webp";

var ukmVideos = [
  {
    id: 1,
    sekberName: "Sekber Olahraga",
    videoList: [
      { id: 1, videoUrl: "-d5vg_bPJsQ", nomaxres: true },
      { id: 2, videoUrl: "2F_0uMhJ18A" },
      { id: 3, videoUrl: "7g8IBGEld_o" },
      { id: 4, videoUrl: "2aONghp1G7Q", nomaxres: true },
      { id: 5, videoUrl: "yXhzdZ10r_Q", nomaxres: true },
      { id: 6, videoUrl: "7eMMqe1nISM" },
      { id: 7, videoUrl: "XJFD7QqLneg" },
      { id: 8, videoUrl: "6rDgqIED3tE", nomaxres: true },
      { id: 9, videoUrl: "hnFw7HtV1x8" },
      { id: 10, videoUrl: "7stdniIO7vE", nomaxres: true },
      { id: 11, videoUrl: "W-Nroh3eSCc", nomaxres: true },
      { id: 12, videoUrl: "Nn6vP3suuHo" },
      { id: 13, videoUrl: "HXXNU0S25KE", nomaxres: true },
      { id: 14, videoUrl: "ZFps1HXOeWM", nomaxres: true },
      { id: 15, videoUrl: "ttjB8j_LXjk" },
      { id: 16, videoUrl: "YDBdnCna2VI" },
      { id: 17, videoUrl: "pZ9UrIqRwdA" },
      { id: 18, videoUrl: "G7WDOmKnfnU" },
      { id: 19, videoUrl: "TCSEQPjZOSI" },
      { id: 20, videoUrl: "JZITiXiv0rM" },
      { id: 21, videoUrl: "era-mHJI9lM" },
      { id: 22, videoUrl: "BG8UECGV9NE" },
      { id: 23, videoUrl: "bnTZ8B4vHLM" },
      { id: 24, videoUrl: "G9bYM7kGl3k", nomaxres: true },
    ],
  },
  {
    id: 2,
    sekberName: "Sekber Kerohanian",
    videoList: [
      { id: 1, videoUrl: "2a6e7v-79NU", nomaxres: true },
      { id: 2, videoUrl: "scGJGCiOOjQ", nomaxres: true },
      { id: 3, videoUrl: "rGu695dqRHo", nomaxres: true },
      { id: 4, videoUrl: "XYCIJcFgask", nomaxres: true },
      { id: 5, videoUrl: "6-fseeLdI3k", nomaxres: true },
    ],
  },
  {
    id: 3,
    sekberName: "Sekber Kesenian",
    videoList: [
      { id: 1, videoUrl: "RIaKNVhISwc", nomaxres: true },
      { id: 2, videoUrl: "hWi2LSU-9vk", nomaxres: true },
      { id: 3, videoUrl: "wj3Ut5niIOk", nomaxres: true },
      { id: 4, videoUrl: "Ccb0K7soHEA", nomaxres: true },
      { id: 5, videoUrl: "z4FnNjEL0Rc", nomaxres: true },
      { id: 6, videoUrl: "5u8mmRHc2BY", nomaxres: true },
      { id: 7, videoUrl: "KMbbq0lUDeU", nomaxres: true },
      { id: 8, videoUrl: "uYDbVVWDx18", nomaxres: true },
      { id: 9, videoUrl: "RDAN9o-zmrY", nomaxres: true },
      { id: 10, videoUrl: "TaCpCgFd8Ig", nomaxres: true },
    ],
  },
  {
    id: 4,
    sekberName: "Sekber Khusus",
    videoList: [
      { id: 1, videoUrl: "WS4BmfXuKTo" },
      { id: 2, videoUrl: "Z7eHX551YJI", nomaxres: true },
      { id: 3, videoUrl: "LPHkuvcnQ18", nomaxres: true },
      { id: 4, videoUrl: "aYvlSEt6M64" },
      { id: 5, videoUrl: "Zd8zhmti5BM" },
      { id: 6, videoUrl: "_P1Zya81JSw" },
      { id: 7, videoUrl: "4QdpjhZ4Edw" },
      { id: 8, videoUrl: "CGWW7afCJsk" },
      { id: 9, videoUrl: "ZTxvLcdbcpU" },
      { id: 10, videoUrl: "Pfc6FUGFYyg", nomaxres: true },
      { id: 11, videoUrl: "GmGtH9OOGiw", nomaxres: true },
      { id: 12, videoUrl: "_KhMR9j6la0", nomaxres: true },
      { id: 13, videoUrl: "YzDxXwpXe7s" },
    ],
  },
];

var video = ukmVideos.map(function (sekber) {
  let videosSekber = sekber.videoList.map(function (videoContent) {
    let noMaxRes = videoContent.nomaxres;
    return (
      <div key={videoContent.id} className="video">
        <VideoContainer
          bgcolor={"var(--color-redpink)"}
          id={videoContent.videoUrl}
          noDecor
          nomaxres={noMaxRes}
        ></VideoContainer>
      </div>
    );
  });

  return (
    <div className="sekber">
      <h3>{sekber.sekberName}</h3>
      <div className="video-carousel">
        <Slider
          slidesToShow={3}
          slidesToScroll={3}
          arrows={true}
          dots={true}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots: false,
              },
            },
          ]}
        >
          {videosSekber}
        </Slider>
      </div>
    </div>
  );
});

export default class Galeri extends Component {
  render() {
    return (
      <SimpleReactLightbox>
        <Helmet>
          <title>Galeri | PPSMB UGM 2021</title>
        </Helmet>
        <GaleriContainer>
          <section className="galeri-hero pattern-bg pattern-bg-white">
            <div className="galeri-title">
              <Fade>
                <div className="batik">
                  <img src={Batik} alt="" />
                  <img src={Batik} alt="" />
                  <img src={Batik} alt="" />
                </div>
                <h1 className="font-indonesia-script font-normal ppsmb-redpink">
                  Galeri
                </h1>
              </Fade>
            </div>
            <div>
              <Fade right>
                <img className="hero-ornament" src={heroGaleriDesktop} alt="" />
              </Fade>
            </div>
          </section>

          <section className="photos">
            <div className="year-tab">
              <h2 className="year ppsmb-darkblue">
                PPSMB
                <span className="ppsmb-blue"> 2</span>
                <span className="ppsmb-redpink">0</span>
                <span className="ppsmb-orange">2</span>
                <span className="ppsmb-yellow">0</span>
              </h2>
            </div>
          </section>
          <div className="photo-list">
            <MasonryRow />
          </div>

          <section className="gadjah-mada-kita">
            <div className="title">
              <Zoom>
                <h2 className="font-kollektif ppsmb-white font-normal">
                  Gadjah Mada
                </h2>
                <h2 className="font-indonesia-script font-normal   ppsmb-yellow">
                  Kita
                </h2>
              </Zoom>
            </div>
            <div className="video-list">
              <Fade bottom delay={200}>
                <div className="video-item">
                  <VideoContainer id="AAtiYhMi_4o" title="Anthem PPSMB" />
                </div>
                <div className="video-item">
                  <VideoContainer id="kDgYQXrew60" title="Aftermovie PPSMB" />
                </div>
                <div className="video-item">
                  <VideoContainer
                    id="t5ZSQgH1eBs"
                    title="Profil UGM"
                    nomaxres
                  />
                </div>
                <div className="video-item">
                  <VideoContainer id="0u6uIPKv5zk" title="Hymne UGM" nomaxres />
                </div>
              </Fade>
            </div>
            <Zoom delay={500}>
              <div className="white-batik">
                <img src={whiteBatik} alt="" />
              </div>
            </Zoom>
            <div className="white-batik">
              <img src={whiteBatik} alt="" />
            </div>
          </section>

          <section className="video-ukm pattern-bg pattern-bg-white">
            <div className="head">
              <div className="header-image">
                <img src={videoUKMHeader} alt="" />
              </div>
              <div className="title">
                <h2 className="ppsmb-redpink">Unit Kegiatan</h2>
                <h2 className="ppsmb-darkblue font-indonesia-script">
                  Mahasiswa
                </h2>
              </div>
            </div>
            <div className="gelex">
              <div>
                <VideoContainer id="aBPs10-1it4" noDecor />
              </div>
              <a
                href="https://ukm.ugm.ac.id/comingsoon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  text="Laman Gelex"
                  color="var(--color-redpink)"
                  bg="var(--color-white)"
                />
              </a>
            </div>
            <div className="video-list-ukm">{video}</div>
          </section>
        </GaleriContainer>
      </SimpleReactLightbox>
    );
  }
}

const GaleriContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  .galeri-hero {
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    box-shadow: 0px 0.2em 3em 0px rgba(0, 0, 0, 0.78);
    display: flex;
    flex-direction: column;
    position: relative;

    padding-top: 10vmin;
  }

  .galeri-title {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .galeri-title h1 {
    font-size: calc(0.5rem + 12vmin);
    margin: 0 2vmin;
  }

  .hero-ornament {
    position: absolute;
    right: -70%;
    bottom: 0;
    width: 180%;
  }

  .batik {
    display: flex;
    margin-right: 10px;
    flex-direction: column;
  }

  .batik img {
    margin-bottom: 3px;
    width: 5vmin;
  }

  .photos {
    position: relative;
    width: 100%;
    padding: 10vmin 10vmin 0vmin 10vmin;
  }

  .photo-list {
    padding: 0vmin 10vmin 10vmin 10vmin;
  }

  .photos h2 {
    cursor: pointer;
    margin-top: 0;
  }

  .gadjah-mada-kita {
    position: relative;
    background-image: url(${patternBlue});
    background-size: 50%;
    min-height: 100vh;
    padding: 10vmin;
    font-family: "Kollektif Regular";
  }

  .gadjah-mada-kita .title {
    width: 100%;
    margin: 0;
    text-align: center;
  }

  .gadjah-mada-kita .title h2 {
    margin: 0;
    line-height: 1;
    font-size: calc(0.5rem + 7.5vmin);
  }

  .gadjah-mada-kita .title h2:nth-child(2) {
    transform: rotate(-10deg);
  }

  .video-list {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    margin-top: 5vmin;
    height: 100%;
    width: 100%;
  }

  .video-list .video-item {
    width: 100%;
    cursor: pointer;
  }

  .white-batik:nth-child(odd) {
    position: absolute;
    left: 5vmin;
    top: 5vmin;
  }

  .white-batik:nth-child(even) {
    position: absolute;
    right: 5vmin;
    bottom: 5vmin;
    transform: rotate(180deg);
  }

  .white-batik img {
    width: 30%;
  }

  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .video-ukm {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .video-ukm .gelex {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0vmin 10vmin;
    width: 100%;
    margin-top: 10vmin;

    > div {
      width: 50%;
    }
    button {
      font-weight: 400;
    }
  }

  .video-ukm .head .title {
    position: absolute;
    z-index: 1;
    top: 6vmin;
    width: 60%;

    padding: 2%;

    background-color: var(--color-white);
    border-radius: 15px;
    border: 3px solid var(--color-darkblue);

    text-align: center;
  }

  .video-ukm .head .title h2 {
    margin: 0;
    line-height: 1;
    font-weight: normal;
    font-size: calc(0.5rem + 3.5vmin);
  }

  .video-ukm .head .header-image {
    position: relative;
    display: flex;
    justify-content: center;
    z-index: 0;
  }

  .video-ukm .head .header-image img {
    width: 160%;
  }

  .video-list-ukm {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 10vmin;
    color: var(--color-redpink);
  }

  .video-list-ukm .video {
    position: relative;
    padding-right: 5vmin;
  }

  .video-list-ukm .sekber {
    h3 {
      font-size: calc(0.5rem + 3vmin);
    }
  }

  .video-list-ukm .video-carousel {
    width: 100%;
    position: relative;
    /* left: -10vmin; */
  }

  .video-list-ukm .video-carousel > div {
    /* width: 120vw; */
    justify-content: flex-start;

    .slick-arrow {
    }
    .slick-arrow::before {
      color: var(--color-redpink);
    }
  }

  @media (min-width: 576px) {
    .galeri-hero {
      background-size: 20%;
      min-height: 100vmin;
      flex-direction: row;
      padding-top: 0;
    }

    .galeri-title {
      width: 40%;
      align-items: center;
      justify-content: flex-start;
      padding-left: 4%;
    }

    .hero-ornament {
      right: -20%;
      bottom: 0;
      width: auto;
      height: 100%;
    }

    .gadjah-mada-kita {
      background-size: 20%;
    }

    .photos .photo {
      width: auto;
      height: 40vmin;
    }

    .photos .photo img {
      width: auto;
      height: 100%;
    }

    .video-list .video-item {
      width: 44%;
    }

    .video-ukm .head .header-image img {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .video-list .video-item {
      width: 100%;
    }

    .white-batik img {
      width: 60%;
    }
  }

  @media (min-width: 990px) {
    .video-list .video-item {
      width: 49%;
    }

    .white-batik img {
      width: 60%;
    }

    .hero-ornament {
      right: -10%;
    }
  }
`;
