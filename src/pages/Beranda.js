import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../globalStyle";
import LogoPPSMB from "../assets/img/logo-ppsmb-decorative.svg";
import Bulk1 from "../assets/img/corner-bulk1.webp";
import Bulk2 from "../assets/img/corner-bulk2.webp";
import Batik from "../assets/img/batik-color.svg";
import Sliders from "../components/Slider";
import Lean1 from "../assets/img/corner-lean1.webp";
import Lean2 from "../assets/img/corner-lean2.webp";
import RedStick from "../assets/img/red-stick.webp";
import { DaftarPPSMB } from "./DaftarPPSMB";
import SocialMedia from "../components/SocialMedia";
import { DaftarVideo } from "./DaftarVideo";
import Fade from "react-reveal/Fade";
import Spin from "react-reveal/Spin";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Lightspeed from "react-reveal/LightSpeed";
import Pulse from "react-reveal/Pulse";
import mainBG from "../assets/img/pattern-bg-white.webp";
import yellowBG from "../assets/img/pattern-bg-yellow.webp";
import darkBlueBG from "../assets/img/pattern-bg-darkblue.webp";
import VideoContainer from "../components/VideoContainer";
import LiniMasa from "../components/Card";
import BgOne from "../assets/images/agenda/DayCardContainer/one.png";
import BgTwo from "../assets/images/agenda/DayCardContainer/two.png";
import BgThree from "../assets/images/agenda/DayCardContainer/three.png";
import BgFour from "../assets/images/agenda/DayCardContainer/four.png";
import BgFive from "../assets/images/agenda/DayCardContainer/five.png";
import BgSix from "../assets/images/agenda/DayCardContainer/six.png";
import Modal from "react-modal";
import Button from "../components/main/Button";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    borderRadius: "25px",
    height: "90vh",
    width: "80vw",
    fontSize: "calc(0.5rem + 1vmin)",
  },
  overlay: { zIndex: 1000 },
};

Modal.setAppElement("body");

export default function Beranda() {
  const [highlight, setHighlight] = useState({
    title: "PPSMB UGM 2021",
    src: require("../assets/img/logo-ppsmb-official.webp").default,
    desc: "Pelatihan Pembelajar Sukses bagi Mahasiswa Baru (PPSMB) adalah kegiatan resmi orientasi dan pengenalan kampus bagi mahasiswa baru di lingkungan UGM. “Ragam Kreasi UGM Pancarkan Pesona Pertiwi” sebagai tema PPSMB UGM 2021 merupakan sebuah langkah awal bagi Gadjah Mada Muda untuk menumbuhkan semangat serta keberanian berkreasi. Harapannya, buah kreasi Gadjah Mada Muda dapat memancarkan pesona kreasi Indonesia ke kancah yang lebih luas. Tidak hanya itu, tema yang dipadukan dengan berbagai rangkaian kegiatan PPSMB UGM 2021 diharapkan dapat melahirkan insan-insan yang kreatif, inovatif, dan adaptif sebagai modal menuju Indonesia maju.",
    instaLink: "http://instagram.com/ppsmb_ugm",
    youtubeLink: "https://www.youtube.com/user/ppsmbpalapa",
    tiktokLink: "https://tiktok.com/@ppsmb_ugm",
    facebookLink: "https://www.facebook.com/PPSMB-UGM-325374494259950",
    twitterLink: "http://twitter.com/ppsmb_ugm",
  });
  const [videoPlay, setVideoPlay] = useState({
    title: "Apa Itu PPSMB UGM?",
    desc: "Yuk, kenali lebih dalam tentang PPSMB UGM!",
    embedId: "_3uPoHK0XZk",
    thumbnail: require("../assets/img/serba-serbi/apaituppsmb.webp").default,
  });

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <GlobalStyle />
      <Container url="./assets/img/main-bg.jpg">
        <section className="modal">
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            closeTimeoutMS={500}
            onRequestClose={closeModal}
            style={modalStyles}
            contentLabel="Surat Keputusan Rektor"
          >
            <Fade>
              <h2 className="ppsmb-darkblue">
                Surat Keputusan Penyelenggaran PPSMB UGM 2021
              </h2>
              <p
                className="ppsmb-red"
                onClick={closeModal}
                style={{ cursor: "pointer" }}
              >
                Tutup
              </p>
              <iframe
                src="https://drive.google.com/file/d/1ttwV90neA2Mms1OQeXPypqo8BxtmYUEI/preview"
                width="100%"
                height="80%"
                allow="autoplay"
              ></iframe>
            </Fade>
          </Modal>
        </section>
        <section className="hero">
          <img src={Bulk1} alt="" srcset="" className="corner upper-left" />
          <img src={Bulk2} alt="" srcset="" className="corner upper-right" />
          <Fade bottom left>
            <img
              src={LogoPPSMB}
              alt="Logo Dekoratif PPSMB 2021"
              srcset=""
              className="hero-logo unselectable"
            />
          </Fade>
          <div className="batiks unselectable">
            <Spin duration={4000} forever>
              <img src={Batik} alt="" srcset="" className="batik" />
              <img src={Batik} alt="" srcset="" className="batik" />
              <img src={Batik} alt="" srcset="" className="batik" />
            </Spin>
          </div>

          <div className="hero-content">
            <div className="content-title">
              <div>
                <Fade left>
                  <h2 className="text-center m-0 ppsmb ppsmb-darkblue">
                    PPSMB UGM
                    <span className="ppsmb-blue"> 2</span>
                    <span className="ppsmb-red">0</span>
                    <span className="ppsmb-orange">2</span>
                    <span className="ppsmb-yellow">1</span>
                  </h2>
                  <div className="title">
                    <h1 className="text-center m-0 font-indonesia-script ppsmb-yellow">
                      Ragam
                    </h1>
                    <h1 className="text-center m-0 ppsmb-darkblue">
                      Kreasi UGM
                    </h1>
                    <h1 className="text-center m-0 font-indonesia-script ppsmb-red">
                      Pancarkan
                    </h1>
                    <h1 className="text-center m-0 ppsmb-darkblue">
                      Pesona Pertiwi
                    </h1>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="lini-masa text-center ppsmb-darkblue">
              <h2>Lini Masa</h2>
              <Sliders
                slidesToShow={3}
                slidesToShowMobile={1}
                slidesToShowTablet={1}
                slidesToScroll={1}
                infinite={false}
              >
                <div onClick={openModal}>
                  <LiniMasa
                    mainText="Surat Keputusan Rektor"
                    mainTextColor="var(--color-white)"
                    background={BgOne}
                    title="6 Juli 2021"
                    titleColor="var(--color-white)"
                    headerColor="var(--color-redpink)"
                    shadow="rgba(255,190,0,0.4)"
                    link="https://drive.google.com/file/d/1ttwV90neA2Mms1OQeXPypqo8BxtmYUEI/view?usp=sharing"
                  ></LiniMasa>
                </div>
                <LiniMasa
                  mainText="PPSMB UGM 2021"
                  mainTextColor="var(--color-white)"
                  background={BgFour}
                  title="Segera Hadir"
                  titleColor="var(--color-white)"
                  headerColor="var(--color-redpink)"
                  shadow="rgba(255,190,0,0.4)"
                />
                                <LiniMasa
                  mainText="PPSMB UGM 2021"
                  mainTextColor="var(--color-white)"
                  background={BgTwo}
                  title="Segera Hadir"
                  titleColor="var(--color-white)"
                  headerColor="var(--color-redpink)"
                  shadow="rgba(255,190,0,0.4)"
                />

                {/* <LiniMasa
                                    mainText='Surat Keputusan Rektor'
                                    mainTextColor='var(--color-white)'
                                    background={BgTwo}
                                    title='28 Des 01'
                                    titleColor='var(--color-white)'
                                    headerColor='var(--color-redpink)'
                                    shadow='rgba(1,56,94,0.8)'
                                    link='www.facebook.com'>
                                </LiniMasa>

                                <LiniMasa
                                    mainText='Surat Keputusan Rektor'
                                    mainTextColor='var(--color-white)'
                                    background={BgThree}
                                    title='30 Sept 1965'
                                    titleColor='var(--color-white)'
                                    headerColor='var(--color-redpink)'
                                    shadow='rgba(197,0,52,0.4)'
                                    link='www.facebook.com'>
                                </LiniMasa> */}
              </Sliders>
            </div>
          </div>
        </section>
        {/* <div>
                    <button onClick={openModal}>Open Modal</button>
                    
                </div> */}
        <section className="greeting">
          <div className="left-corner unselectable">
            <img src={Bulk2} alt="" srcset="" className="corner upper-left" />
            <img src={Lean1} alt="" srcset="" className="corner bottom-left" />
          </div>
          <div className="videos">
            <Slide left>
              <div className="video">
                <VideoContainer
                  id="fGOamlnU_uI"
                  title="Selamat Datang Gamada!"
                />
              </div>
            </Slide>
          </div>
          <div className="right">
            <img
              src={Bulk1}
              alt=""
              srcset=""
              className="corner upper-right unselectable"
            />
            <Slide right>
              <div className="title-box">
                <Pulse delay={2500} forever={true}>
                  <div className="title">
                    <Lightspeed right>
                      <h1 className="ppsmb-darkblue underline red-stick unselectable">
                        Selamat Datang
                        <Fade delay={500} left cascade>
                          <span className="font-indonesia-script ppsmb-red">
                            {" "}
                            Gamada!
                          </span>
                        </Fade>
                      </h1>
                    </Lightspeed>
                    <img src={RedStick} className="red-stick"></img>
                  </div>
                  <div className="batiks unselectable">
                    <img src={Batik} alt="" srcset="" className="batik" />
                    <img src={Batik} alt="" srcset="" className="batik" />
                    <img src={Batik} alt="" srcset="" className="batik" />
                  </div>
                </Pulse>
              </div>
            </Slide>
            <img
              src={Lean2}
              alt=""
              srcset=""
              className="corner bottom-right unselectable"
            />
          </div>
        </section>
        <section className="about">
          <div className="desc">
            <div className="pengertian ppsmb-darkblue">
              <Fade left spy={highlight.title}>
                <h2>{highlight.title}</h2>
                <p>{highlight.desc}</p>
                <ShowEmail email={highlight.email} />
                <div className="socmed">
                  <p>Media Sosial: &nbsp;</p>
                  <ShowSocialMedia
                    icon="youtube"
                    link={highlight.youtubeLink}
                  />
                  <ShowSocialMedia
                    icon="instagram"
                    link={highlight.instaLink}
                  />
                  <ShowSocialMedia icon="line" link={highlight.lineLink} />
                  <ShowSocialMedia
                    icon="twitter"
                    link={highlight.twitterLink}
                  />
                  <ShowSocialMedia
                    icon="facebook"
                    link={highlight.facebookLink}
                  />
                  <ShowSocialMedia icon="tiktok" link={highlight.tiktokLink} />
                </div>
              </Fade>
            </div>
          </div>

          <div className="logo2-ppsmb">
            <div className="highlight">
              <Fade spy={highlight}>
                <Pulse forever={true} delay={1000} duration={3000} fraction={1}>
                  <img
                    src={highlight.src}
                    alt={highlight.title + " logo"}
                  ></img>
                </Pulse>
              </Fade>
            </div>
            <div className="box">
              {DaftarPPSMB.map((item, index) => {
                const onClickLogo = () => {
                  setHighlight({
                    src: item.src,
                    title: item.title,
                    desc: item.desc,
                    instaLink: item.instaLink,
                    twitterLink: item.twitterLink,
                    tiktokLink: item.tiktokLink,
                    lineLink: item.lineLink,
                    youtubeLink: item.youtubeLink,
                    facebookLink: item.facebookLink,
                    email: item.email,
                  });
                };
                return (
                  <Unit i={index} key={index} onClick={onClickLogo}>
                    <img src={item.src} alt={item.title + " logo"} />
                  </Unit>
                );
              })}
            </div>
          </div>
        </section>
        <section className="serba-serbi">
          <div className="title">
            <Fade left>
              <h2 className="ppsmb-yellow">
                Serba-Serbi
                <span className="font-indonesia-script ppsmb-white">
                  {" "}
                  Palapa!
                </span>
              </h2>
              <p>Kreasi konten menarik untuk menemani hari-hari Gamada!</p>
            </Fade>
          </div>

          <div className="main">
            <div className="video-utama">
              <Fade left spy={videoPlay}>
                <VideoContainer
                  id={videoPlay.embedId}
                  title={videoPlay.title}
                />
                <h2 className="ppsmb-yellow">{videoPlay.title}</h2>
                <p>{videoPlay.desc}</p>
              </Fade>
            </div>
            <div className="daftar-video">
              {DaftarVideo.map((item, index) => {
                const onClickThumbnail = () => {
                  setVideoPlay({
                    embedId: item.embedId,
                    title: item.title,
                    desc: item.desc,
                    thumbnail: item.thumbnail,
                  });
                };

                return (
                  <Fade bottom>
                    <Video onClick={onClickThumbnail}>
                      <img
                        src={item.thumbnail}
                        alt={item.title + " thumbnail"}
                        className="unselectable"
                      />
                      <div style={{ overflow: "hidden" }}>
                        <p
                          className="title"
                          data-toggle="collapse"
                          aria-expanded="true"
                        >
                          {item.title}
                        </p>
                        <p>{item.desc}</p>
                      </div>
                    </Video>
                  </Fade>
                );
              })}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
const Card = styled.div`
  box-sizing: border-box;
  float: center;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vmin;
  margin: 10px;
`;

const Video = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
  margin-bottom: 2vmin;
  height: 24min;
  padding: 2vmin;
  img {
    border-radius: 25px;
    width: auto;
    height: 20vmin;
  }
  div {
    height: 20vmin;
    white-space: pre-wrap;
    overflow-y: hidden;
    padding: 0 10px;
    p {
      font-size: calc(0.5rem + 1.2vmin);
      margin: 0;
      padding: 0;
    }
    .title {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 1024px) {
    img {
      width: 30vmin;
      border-radius: 10px;
    }
    div {
      p {
        /* display: hidden; */
      }
    }
  }
`;
const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-image: url(${mainBG});
  background-repeat: repeat;
  background-size: 15%;
  overflow: hidden;
  margin: 0;
  display: flex;
  flex-direction: column;

  .unselectable {
    pointer-events: none;
  }

  section {
    .corner {
      width: 25vmin;
      pointer-events: none;
    }

    &.hero {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;

      min-height: 100vh;
      height: auto;
      padding: 10vmin;
      z-index: 1;

      .upper-left {
        position: absolute;
        transform: translateY(-100%) rotate(90deg);
        transform-origin: left bottom;
        top: 0;
        left: 0;
      }
      .upper-right {
        position: absolute;
        top: 0;
        right: 0;
      }
      .hero-logo {
        position: absolute;
        right: 70%;
        width: 25vmax;
        z-index: -2;
      }
      .batiks {
        position: absolute;
        display: flex;
        flex-direction: column;
        right: 1.5%;
        .batik {
          padding: 1vmin;
          height: calc(0.5rem + 5vmin);
        }
      }

      .hero-content {
        width: 70%;
        height: 100%;
        padding: 5vmin;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .content-title {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 4vmin;
          white-space: nowrap;

          .title {
            font-size: calc(0.5rem + 4vmin);
          }

          .ppsmb {
            margin-bottom: 7vmin;
            font-size: calc(0.5rem + 1.8vmin);
          }

          .font-indonesia-script {
            line-height: calc(0.5rem + 3.3vmin);
            font-weight: lighter;
          }
        }
        .lini-masa {
          font-size: calc(0.5rem + 1.5vmin);
          width: 85vmin;
        }
      }
      @media (max-width: 1024px) {
        .hero-content {
          width: 80%;
          .lini-masa {
            width: 60vmin;
          }
        }
      }
      @media (max-width: 768px) {
        justify-content: flex-start;
        padding: 20vmin 10vmin;

        .batiks {
          display: none;
        }

        .hero-content {
          justify-content: flex-start;
          width: 100%;

          .lini-masa {
            width: 60vmin;
          }
        }

        .hero-logo {
          width: 60%;
          top: 70%;
          right: 30%;
        }
      }
    }

    &.greeting {
      display: flex;
      position: relative;
      margin: 0;
      background-image: url(${yellowBG});
      background-repeat: repeat;
      background-size: 15%;
      justify-content: space-between;
      background-color: var(--color-yellow);
      /* height: calc(0.5rem + 92vmin); */
      z-index: 2;
      height: 110vh;

      .left-corner {
        height: 100%;
        left: 0;
        .bottom-left {
          position: absolute;
          bottom: 0;

          width: 35vmin;
        }
        .upper-left {
          transform: rotate(-90deg) translateX(-100%);
          transform-origin: left top;
          position: absolute;
          top: 0;
        }
      }

      .videos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50vw;
        align-items: center;

        .video {
          text-align: center;
          margin: 10px;
          width: 80%;
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        width: 50vw;

        .upper-right {
          transform: rotate(-90deg) translateX(100%);
          transform-origin: right bottom;
        }

        .bottom-right {
          width: 32vmin;
        }
        .title-box {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          background-color: var(--color-white);
          text-align: left;
          width: 90%;
          border-radius: 25px 0 0 25px;
          padding: 10px 10px 10px 40px;
          white-space: nowrap;
          height: auto;

          .title {
            width: auto;
            z-index: 1;
            margin: 0;
            padding: 0;
            h1 {
              font-size: calc(0.5rem + 3.5vmin);
              .font-indonesia-script {
                display: inline-block;
                transform: rotate(-18deg) translate(-40%, -10%);
                font-weight: lighter;
              }
            }

            .red-stick {
              /* background-image: url(${RedStick});
                                background-position: 0 1.06em; */
              width: 25vmin;
              transform: translateY(-150%);
            }
          }
          .batiks {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;
            width: 20%;
            .batik {
              padding: 1vmin;
              height: calc(0.5rem + 5vmin);
              z-index: 0;
            }
          }
        }
      }
      @media (max-width: 1024px) {
        flex-direction: column;
        height: auto;

        .right {
          order: 1;
          width: 100vw;
        }
        .videos {
          order: 2;
          width: 100%;
          margin-bottom: 25vmin;
        }

        .upper-left {
          display: none;
        }
      }
    }

    &.about {
      display: flex;
      margin: 0;
      padding: 10vmin;
      justify-content: center;
      align-items: flex-start;

      overflow: hidden;
      line-height: calc(0.5rem + 3.3vmin);
      max-width: 1440px;
      min-height: 100vh;

      .desc {
        h2 {
          font-size: calc(0.5rem + 3vmin);
        }
        p {
          font-size: calc(0.5rem + 1.5vmin);
        }
        box-sizing: border-box;
        float: center;
        width: 50%;
        text-align: justify;

        .socmed {
          display: flex;
          align-items: center;
        }
      }

      .logo2-ppsmb {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10vmin;
        width: 50%;
        height: 130%;
        margin-bottom: 100px;
      }
      .highlight {
        display: block;
        border-radius: 50%;
        text-align: center;

        img {
          height: 10em;
          padding: 10px;
          pointer-events: none;
        }
      }

      .box {
        position: relative;
        height: 10%;
        width: 10%;
        transform-style: preserve-3d;
        animation: animate 25s linear infinite;
        @keyframes animate {
          0% {
            transform: perspective(1000px) rotateY(0deg);
          }
          100% {
            transform: perspective(1000px) rotateY(360deg);
          }
        }
      }

      @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        /* min-height: 150vh; */

        padding: 10vmin;

        .desc {
          order: 2;
          width: 100%;

          h2 {
            text-align: center;
          }
        }

        .logo2-ppsmb {
          order: 1;
          width: 100%;
          margin-bottom: 10vmin;
        }
      }
      @media (min-width: 1440px) {
        align-self: center;
      }
    }

    &.serba-serbi {
      background-image: url(${darkBlueBG});
      background-repeat: repeat;
      background-size: 15%;
      padding: 10vmin;
      color: var(--color-white);
      display: flex;
      flex-direction: column;

      .title {
        h2 {
          margin: 0;
          padding: 0;
          font-size: calc(0.5rem + 3.5vmin);
          .font-indonesia-script {
            display: inline-block;
            transform: rotate(-18deg) translate(-40%, -10%);
            font-weight: lighter;
          }
        }

        p {
          font-size: calc(0.5rem + 1.5vmin);
        }
      }

      .main {
        display: flex;
        justify-content: space-between;
        height: 70%;
        /* background-color: orange; */

        .video-utama {
          /* margin: 10vmin; */
          height: 100%;
          width: 60%;
          padding-right: 20px;
          /* flex-grow: 6; */
          h2 {
            font-size: calc(0.5rem + 2vmin);
          }
          p {
            font-size: calc(0.5rem + 1.5vmin);
            padding-bottom: 5vmin;
            border-bottom: 3px solid yellow;
          }
        }

        .daftar-video {
          overflow-y: auto;
          width: 40%;
          height: auto;
          padding-left: 4px;
          /* background-color: yellow; */
        }
      }

      @media (max-width: 1024px) {
        .title {
          h2 {
            text-align: center;
          }
        }
        .main {
          flex-direction: column;
          height: 80%;
          .video-utama {
            width: 100%;
            padding: 0;
          }
          .daftar-video {
            height: auto;
            width: 100%;
            padding: 0 0 5vmin 0;
          }
        }
      }
    }
  }
`;

const Unit = styled.a`
  background-color: var(--color-white);
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  padding: 10%;
  width: 50px;
  height: 50px;
  border-radius: 20%;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: rotateY(calc(${(props) => props.i} * 18deg)) translateZ(190px);
  will-change: transform;

  cursor: pointer;
  img {
    position: absolute;
    max-height: 90%;
    max-width: 90%;
    object-fit: cover;
  }

  &:hover {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 576px) {
    transform: rotateY(calc(${(props) => props.i} * 18deg)) translateZ(30vh);
  }
`;

function ShowSocialMedia(props) {
  if (props.link != null) {
    return (
      <SocialMedia
        mainColor="#01385E"
        secondaryColor="#C50034"
        faIcon={["fab", props.icon]}
        link={props.link}
      />
    );
  } else {
    return null;
  }
}
function ShowEmail(props) {
  if (props.email != null) {
    return <p>Email: {props.email}</p>;
  } else {
    return null;
  }
}
