import React, { Component } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Zoom from "react-reveal/Zoom";
import SimpleReactLightbox from "simple-react-lightbox";

import VideoContainer from "../components/VideoContainer";
import MasonryRow from "../components/ImageGallery/MasonryRow";
import Slider from "react-slick";

import heroGaleriDesktop from "../assets/img/galeri/desktop-ornament-galeri.webp";
import Batik from "../assets/img/batik-color.svg";
import patternBlue from "../assets/img/pattern-bg-blue.webp";
import whiteBatik from "../assets/img/white-batik-corner.webp";
import videoUKMHeader from "../assets/img/galeri/ornament-ukm.webp";

// var ukmVideos = [
//   {
//     id: 1,
//     sekberName: "Sekber Olahraga",
//     videoList: [
//       { id: 1, thumbnailUrl: "2.webp", videoUrl: "" },
//       { id: 2, thumbnailUrl: "5.webp", videoUrl: "" },
//       { id: 3, thumbnailUrl: "1.webp", videoUrl: "" },
//       { id: 4, thumbnailUrl: "6.webp", videoUrl: "" },
//       { id: 5, thumbnailUrl: "8.webp", videoUrl: "" },
//       { id: 6, thumbnailUrl: "7.webp", videoUrl: "" },
//       { id: 7, thumbnailUrl: "1.webp", videoUrl: "" },
//     ],
//   },
//   {
//     id: 2,
//     sekberName: "Sekber Kerohanian",
//     videoList: [
//       { id: 1, thumbnailUrl: "2.webp", videoUrl: "" },
//       { id: 2, thumbnailUrl: "5.webp", videoUrl: "" },
//       { id: 3, thumbnailUrl: "1.webp", videoUrl: "" },
//       { id: 4, thumbnailUrl: "6.webp", videoUrl: "" },
//       { id: 5, thumbnailUrl: "8.webp", videoUrl: "" },
//       { id: 6, thumbnailUrl: "7.webp", videoUrl: "" },
//       { id: 7, thumbnailUrl: "1.webp", videoUrl: "" },
//     ],
//   },
//   {
//     id: 3,
//     sekberName: "Sekber Kesenian",
//     videoList: [
//       { id: 1, thumbnailUrl: "2.webp", videoUrl: "" },
//       { id: 2, thumbnailUrl: "5.webp", videoUrl: "" },
//       { id: 3, thumbnailUrl: "1.webp", videoUrl: "" },
//       { id: 4, thumbnailUrl: "6.webp", videoUrl: "" },
//       { id: 5, thumbnailUrl: "8.webp", videoUrl: "" },
//       { id: 6, thumbnailUrl: "7.webp", videoUrl: "" },
//       { id: 7, thumbnailUrl: "1.webp", videoUrl: "" },
//     ],
//   },
//   {
//     id: 4,
//     sekberName: "Sekber Khusus",
//     videoList: [
//       { id: 1, thumbnailUrl: "2.webp", videoUrl: "" },
//       { id: 2, thumbnailUrl: "5.webp", videoUrl: "" },
//       { id: 3, thumbnailUrl: "1.webp", videoUrl: "" },
//       { id: 4, thumbnailUrl: "6.webp", videoUrl: "" },
//       { id: 5, thumbnailUrl: "8.webp", videoUrl: "" },
//       { id: 6, thumbnailUrl: "7.webp", videoUrl: "" },
//       { id: 7, thumbnailUrl: "1.webp", videoUrl: "" },
//     ],
//   },
// ];

// var video = ukmVideos.map(function (sekber) {
//   let videosSekber = sekber.videoList.map(function (videoContent) {
//     return (
//       <div key={videoContent.id} className="video">
//         <VideoContainer
//           bgurl={
//             process.env.PUBLIC_URL +
//             "/assets/img/galeri/" +
//             videoContent.thumbnailUrl
//           }
//           bgcolor={"var(--color-redpink)"}
//           noDecor
//         ></VideoContainer>
//       </div>
//     );
//   });
//   return (
//     <div className="sekber">
//       <h3>{sekber.sekberName}</h3>
//       <div className="video-carousel">
//         <Slider
//           slidesToShow={3}
//           slidesToShowMobile={2}
//           slidesToShowTablet={3}
//           arrows={false}
//           dots={false}
//         >
//           {videosSekber}
//         </Slider>
//       </div>
//     </div>
//   );
// });

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
                  <VideoContainer id="t5ZSQgH1eBs" title="Profil UGM" nomaxres/>
                </div>
                <div className="video-item">
                  <VideoContainer id="0u6uIPKv5zk" title="Hymne UGM" nomaxres/>
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

          {/* <section className="video-ukm pattern-bg pattern-bg-white">
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
            <div className="video-list-ukm">{video}</div>
          </section> */}
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

  .video-list-ukm .video-carousel {
    width: 100vw;
    position: relative;
    left: -10vmin;
  }

  .video-list-ukm .video-carousel > div {
    width: 120vw;
    justify-content: flex-start;
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
