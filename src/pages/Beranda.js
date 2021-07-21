import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

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
import { DaftarAgenda } from "./DaftarAgenda";
import Button from "../components/Button";

import Fade from "react-reveal/Fade";
import Spin from "react-reveal/Spin";
import Slide from "react-reveal/Slide";
import Lightspeed from "react-reveal/LightSpeed";
import Pulse from "react-reveal/Pulse";

import mainBG from "../assets/img/pattern-bg-white.webp";
import yellowBG from "../assets/img/pattern-bg-yellow.webp";
import darkBlueBG from "../assets/img/pattern-bg-darkblue.webp";
import blueBG from "../assets/img/pattern-bg-blue.webp";

import VideoContainer from "../components/VideoContainer";
import LiniMasa from "../components/Card";

import BgOne from "../assets/images/agenda/DayCardContainer/one.png";
import BgTwo from "../assets/images/agenda/DayCardContainer/two.png";
import BgThree from "../assets/images/agenda/DayCardContainer/three.png";
import BgFour from "../assets/images/agenda/DayCardContainer/four.png";
import BgFive from "../assets/images/agenda/DayCardContainer/five.png";
import BgSix from "../assets/images/agenda/DayCardContainer/six.png";

import Modal from "react-modal";
// import 'react-calendar/dist/Calendar.css';
import MonthView from 'react-calendar';
import tawkTo from "tawkto-react";
import Calendar from "react-calendar";

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
    title: "PPSMB UGM",
    src: require("../assets/img/logo-ppsmb-official.webp").default,
    desc: "Pelatihan Pembelajar Sukses bagi Mahasiswa Baru (PPSMB) adalah kegiatan resmi orientasi dan pengenalan kampus bagi mahasiswa baru di lingkungan UGM. “Ragam Kreasi UGM Pancarkan Pesona Pertiwi” sebagai tema PPSMB UGM 2021 merupakan sebuah langkah awal bagi Gadjah Mada Muda untuk menumbuhkan semangat serta keberanian berkreasi. Harapannya, buah kreasi Gadjah Mada Muda dapat memancarkan pesona kreasi Indonesia ke kancah yang lebih luas. Tidak hanya itu, tema yang dipadukan dengan berbagai rangkaian kegiatan PPSMB UGM 2021 diharapkan dapat melahirkan insan-insan yang kreatif, inovatif, dan adaptif sebagai modal menuju Indonesia maju.",
    instaLink: "http://instagram.com/ppsmb_ugm",
    youtubeLink: "https://www.youtube.com/user/ppsmbpalapa",
    tiktokLink: "https://tiktok.com/@ppsmb_ugm",
    facebookLink: "https://www.facebook.com/PPSMB-UGM-325374494259950",
    twitterLink: "http://twitter.com/ppsmb_ugm",
    webLink: "https://ppsmb.ugm.ac.id/",
  });
  const [videoPlay, setVideoPlay] = useState({
    title: "Apa Itu PPSMB UGM?",
    desc: "Yuk, kenali lebih dalam tentang PPSMB UGM!",
    embedId: "_3uPoHK0XZk",
    thumbnail: require("../assets/img/serba-serbi/apaituppsmb.webp").default,
  });
  const [activeDate, setActiveDate] = useState({
    date: new Date(2021, 7, 3),
    desc: 'Pada hari pertama, blablabla.',
    title: 'PPSMB Universitas Hari Pertama',
    linkElok: 'https://elok.ugm.ac.id/course/index.php?categoryid=52',
    linkLengkap: 'https://ppsmb.ugm.ac.id/2021/agenda',
    linkTugas: 'https://simpan.ugm.ac.id/s/CBN21EkVVmugT9C#pdfviewer',
    linkSimaster: 'https://simaster.ugm.ac.id/kemahasiswaan/ppsmb/',
  });

  const [today, setToday] = useState(new Date());

  useEffect(() => {
    if (new Date() < new Date(2021, 7, 2)) {
      setToday(new Date(2021, 7, 2))
      setActiveDate({
        date: new Date(2021, 7, 2),
        desc: 'Pada hari pertama, blablabla.',
        title: 'PPSMB Universitas Hari Pertama',
        linkElok: 'https://elok.ugm.ac.id/course/index.php?categoryid=52',
        linkLengkap: 'https://ppsmb.ugm.ac.id/2021/agenda',
        linkTugas: 'https://simpan.ugm.ac.id/s/CBN21EkVVmugT9C#pdfviewer',
        linkSimaster: 'https://simaster.ugm.ac.id/kemahasiswaan/ppsmb/',
      })

    } else if (new Date() < new Date(2021, 7, 15)) {
      setToday(new Date())
      DaftarAgenda.map((item, index) => {
        if (new Date() === item.date()) {
          console.log('item setted: ', item.date.toString())
          setActiveDate({
            date: item.date,
            title: item.title,
            desc: item.desc,
            linkElok: item.linkElok,
            linkLengkap: item.linkLengkap,
            linkTugas: item.linkTugas,
            linkSimaster: item.linkSimaster,
          })
          console.log('activeDate after: ', activeDate.date)
        }
      })
    } else {
      setToday(new Date(2021, 7, 14))
      setActiveDate({
        date: new Date(2021, 7, 14),
        title: 'Penutupan',
        desc: 'Pada penerapan penutupan, blablabla.',
        linkElok: 'https://elok.ugm.ac.id/course/index.php?categoryid=52',
        linkLengkap: 'https://ppsmb.ugm.ac.id/2021/agenda',
        linkTugas: 'https://simpan.ugm.ac.id/s/CBN21EkVVmugT9C#pdfviewer',
        linkSimaster: 'https://simaster.ugm.ac.id/kemahasiswaan/ppsmb/',
      })
    }
  }, []);

  function changeInfo(clikedDay) {
    console.log('clicked date: ', clikedDay.toString())
    console.log('activeDate before: ', activeDate.date.toString())
    console.log('coba: ', activeDate.date.getDate())
    DaftarAgenda.map((item, index) => {

      // console.log('item: ', item.date)
      if (clikedDay.toString() === item.date.toString()) {
        console.log('item setted: ', item.date.toString())
        setActiveDate({
          date: item.date,
          title: item.title,
          desc: item.desc,
          linkElok: item.linkElok,
          linkLengkap: item.linkLengkap,
          linkTugas: item.linkTugas,
          linkSimaster: item.linkSimaster,

        })
        console.log('activeDate after: ', activeDate.date)

      }
    })
  };//moment(day.dateString).format(_format)


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
      <Helmet>
        <title>Beranda | PPSMB UGM 2021</title>
      </Helmet>
      <Container url="./assets/img/main-bg.jpg" className="pattern-bg">
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
                title="PDF Linimasa"
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
                  background={BgTwo}
                  title="Segera Hadir"
                  titleColor="var(--color-white)"
                  headerColor="var(--color-redpink)"
                  shadow="rgba(255,190,0,0.4)"
                />
                <LiniMasa
                  mainText="PPSMB UGM 2021"
                  mainTextColor="var(--color-white)"
                  background={BgThree}
                  title="Segera Hadir"
                  titleColor="var(--color-white)"
                  headerColor="var(--color-redpink)"
                  shadow="rgba(255,190,0,0.4)"
                />
              </Sliders>
            </div>
          </div>
        </section>
        {/* <div>
                    <button onClick={openModal}>Open Modal</button>

                </div> */}
        <section className="greeting pattern-bg">
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
                    <img src={RedStick} className="red-stick" alt=""></img>
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
                  <ShowWebsite icon="globe" link={highlight.webLink} />
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
                    webLink: item.webLink,
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
        <section className='vmap pattern-bg'>

        </section>
        <section className='agenda'>
          <div className='agenda-title'>
            <h2 className="ppsmb-darkblue">Agenda dan Materi</h2>
            <div className='batiks'>
              <img src={Batik} alt="" srcset="" className="batik" />
              <img src={Batik} alt="" srcset="" className="batik" />
              <img src={Batik} alt="" srcset="" className="batik" />
            </div>
          </div>
          <div className='agenda-content'>

            <div className='agenda-desc ppsmb-darkblue'>
              <p>PPSMB UGM 2021 diselenggarakan secara daring tanggal 2-14 Agustus 2021. Materi pembelajaran disampaikan selama 6 hari berturut-turut, diikuti dengan penugasan mandiri yang salah satunya action plan sebagai bentuk penerapan pelajaran.</p>
              <h4>{activeDate.title}</h4>
              <p>{activeDate.desc}</p>
              <div className='quick-access'>
                <Button bg="var(--color-darkblue)" color="var(--color-white)" text='Kelas Elok' />
                <Button bg="var(--color-darkblue)" color="var(--color-white)" text='Penugasan' />
                <Button bg="var(--color-white)" color="var(--color-darkblue)" text='Selengkapnya' />
              </div>
            </div>

            <div className='agenda-access ppsmb-darkblue'>
              <div className='calendar'>
                <div style={{boxShadow: '0px 0px 9px -2px rgba(0, 0, 0, 0.5)', borderRadius:'20px'}}>
                <Calendar
                  activeStartDate={activeDate.date}
                  defaultView={"month"}
                  prevLabel={''}
                  prev2Label={''}
                  nextLabel={''}
                  next2Label={''}
                  minDetail={"month"}
                  minDate={new Date(2021, 7, 2)}
                  maxDate={new Date(2021, 7, 20)}
                  locale="id-ID"
                  onClickDay={changeInfo}
                  tileClassName={({ date, view }) =>
                    view === 'month' && date.getMonth() === 7 && date.getDate() === today.getDate() ? 'today upacara-universitas' :
                      view === 'month' && date.getMonth() === 7 && date.getDate() === 2 ? 'upacara-universitas' :
                        view === 'month' && date.getMonth() === 7 && date.getDate() === today.getDate() ? 'today universitas' :
                          view === 'month' && date.getMonth() === 7 && date.getDate() === 3 ? 'universitas' :
                            view === 'month' && date.getMonth() === 7 && date.getDate() === today.getDate() ? 'today fakultas' :
                              view === 'month' && date.getMonth() === 7 && date.getDate() === 4 ? 'fakultas' :
                                view === 'month' && date.getMonth() === 7 && date.getDate() === 5 ? 'fakultas' :
                                  view === 'month' && date.getMonth() === 7 && date.getDate() === today.getDate() ? 'today softskills' :
                                    view === 'month' && date.getMonth() === 7 && date.getDate() === 6 ? 'softskills' :
                                      view === 'month' && date.getMonth() === 7 && date.getDate() === 7 ? 'softskills' :
                                        view === 'month' && date.getMonth() === 7 && date.getDate() === today.getDate() ? 'today action' :
                                          view === 'month' && date.getMonth() === 7 && date.getDate() === 8 ? 'action' :
                                            view === 'month' && date.getMonth() === 7 && date.getDate() === 9 ? 'action' :
                                              view === 'month' && date.getMonth() === 7 && date.getDate() === 10 ? 'action' :
                                                view === 'month' && date.getMonth() === 7 && date.getDate() === 11 ? 'action' :
                                                  view === 'month' && date.getMonth() === 7 && date.getDate() === 12 ? 'action' :
                                                    view === 'month' && date.getMonth() === 7 && date.getDate() === 13 ? 'action' :
                                                      view === 'month' && date.getMonth() === 7 && date.getDate() === today.getDate() ? 'today upacara' :
                                                        view === 'month' && date.getMonth() === 7 && date.getDate() === 14 ? 'upacara' :
                                                          null}
                />
              </div>
                <div className='calendar-desc'>
                  <li className='ppsmb-red'>Pembukaan / Penutupan</li>
                  <li className='ppsmb-blue'>PPSMB Universitas</li>
                  <li className='ppsmb-redpink'>PPSMB Fakultas</li>
                  <li className='ppsmb-footerblue'>PPSMB Soft Skills</li>
                  <li className='ppsmb-orange'>Action Plan</li>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="serba-serbi-palapa" className="serba-serbi pattern-bg">
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
  overflow: hidden;
  margin: 0;
  display: flex;
  flex-direction: column;

  .unselectable {
    pointer-events: none;
  }

//CALENDAR
  .react-calendar {
    width: 100%;
    background: white;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 2em;
    border-radius: 20px;
    
    .today{
      border: 2px solid var(--color-darkblue);
    }
    .universitas{
      color: var(--color-blue);

      &:active, &:focus, &:hover{
        background-color: var(--color-blue);
        color: var(--color-white);
      }
    }
    .softskills{
      color: var(--color-footerblue);
      &:active, &:focus, &:hover{
        background-color: var(--color-footerblue);
        color: var(--color-white);
      }
    }
    .fakultas{
      color: var(--color-redpink);
      &:active, &:focus, &:hover{
        background-color: var(--color-redpink);
        color: var(--color-white);
      }
    }
    .action{
      color: var(--color-orange);
      &:active, &:focus, &:hover{
        background-color: var(--color-orange);
        color: var(--color-white);
      }
    }
    .upacara{
      color: var(--color-red);
      &:active, &:focus, &:hover{
        background-color: var(--color-red);
        color: var(--color-white);
      }
    }
    .upacara-universitas{
      background: rgb(197,0,52);
      background: linear-gradient(90deg, rgba(197,0,52,1) 50%, rgba(5,147,247,1) 50%);
      background-size: 100%;
      background-repeat: repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      &:active, &:focus, &:hover{
        color: var(--color-white);
      -webkit-background-clip: initial;
      -webkit-text-fill-color: initial;
      -moz-background-clip: initial;
      }
    }
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    height: 44px;
    margin-bottom: 1em;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
    &.react-calendar__navigation__arrow{
      display: none;
    }
  }
  .react-calendar__navigation button[disabled] {
    background-color: var(--color-darkblue);
    color: var(--color-white);
    border-radius: 20px 20px 0 0;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  .react-calendar__month-view__days__day{
    color:grey;
    box-sizing: border-box;
  }
  .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    font-size: calc(0.5rem + 1vmin);
    padding: 0.75em 0.5em;
    background: none;
    box-sizing: border-box;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }

  .react-calendar__tile--hasActive,  .react-calendar__tile:enabled:hover{
    box-sizing: border-box;
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
      justify-content: space-between;
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

        a {
          text-decoration: none;
          color: var(--color-darkblue);
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

    &.vmap{
      display: flex;
      position: relative;
      margin: 0;
      background-image: url(${blueBG});
      background-repeat: repeat;
      justify-content: space-between;
      min-height: 100vh;
    }

    &.agenda {
      min-height: 100vh;
      padding: 10vmin;
      line-height: calc(0.5rem + 3.3vmin);

      .agenda-title{
        display: flex;
        align-items: center;
        margin: 0 2vmin 1em 0;
        .batiks {
          display: flex;
          padding: 2vmin;
          .batik {
            padding-right: 1vmin;
            height: calc(0.5rem + 3vmin);
          }
        }
      }

      h2 {
          font-size: calc(0.5rem + 3vmin);
        }
        p {
          font-size: calc(0.5rem + 1.5vmin);
        }
        h3{
          font-size: calc(0.5rem + 2vmin);
        }

      .agenda-content{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .agenda-access{
          display: flex;
          flex-direction: column;
          width: 40%;
          text-align: left;
          .calendar{
            display: flex;
            flex-direction: column;
            /* border-radius: 20px; */
            /* background-color: green; */
            .calendar-desc{
              /* background-color: aquamarine; */
              margin-top: 5vmin;
              display: flex;
              flex-wrap: wrap;
              li{
                font-size: calc(0.5rem + 1vmin);
                font-weight: lighter;
                margin: 0 0 0.1vmin 0;
                width: 50%;
              }

            }
          }


        }
        .agenda-desc{
            display: flex;
            width: 50%;
            flex-direction: column;
            align-items: flex-start;
            p{
              margin: 0;
            }
            .quick-access{
              width: 100%;
              display: flex;
              justify-content: flex-end;
            }
        }
      }
      @media (max-width: 1024px){
        .agenda-title{
          width: 100%;
        }
        .agenda-content{
            flex-direction: column;
            align-items: center;
            text-align: justify;
            width: 100%;

            .agenda-access{
              width: 100%;
              flex-direction: row;
              flex-wrap: wrap;
              .calendar{
              margin-top: 5vmin;
            }
            }

            .agenda-desc{
              width: 100%;
              span{
                display: none;
              }
            }
          }
        }


    }

    &.serba-serbi {
      background-image: url(${darkBlueBG});
      background-repeat: repeat;
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
          overflow-x: hidden;
          /* background-color: yellow; */

          div div {
            transition: all 0.25s ease-in-out;
          }

          div div:hover {
            transition: all 0.25s ease-in-out;
            transform: scale(1.05);
          }
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

function ShowWebsite(props) {
  if (props.link != null) {
    return (
      <SocialMedia
        mainColor="#01385E"
        secondaryColor="#C50034"
        faIcon={["fas", props.icon]}
        link={props.link}
      />
    );
  } else {
    return null;
  }
}

function ShowEmail(props) {
  if (props.email != null) {
    return (
      <p>
        Email: <a href={"mailto:" + props.email}>{props.email}</a>
      </p>
    );
  } else {
    return null;
  }
}
