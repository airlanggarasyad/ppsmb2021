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
import YoutubeEmbed from "../components/YoutubeEmbed"
import { DaftarVideo } from "./DaftarVideo";
import Fade from 'react-reveal/Fade';
import Spin from 'react-reveal/Spin';
import Lightspeed from 'react-reveal/LightSpeed';
import Pulse from 'react-reveal/Pulse';
import mainBG from '../assets/img/pattern-bg-white.webp'
import yellowBG from '../assets/img/pattern-bg-yellow.webp'
import darkBlueBG from '../assets/img/pattern-bg-darkblue.webp'
import VideoContainer from "../components/VideoContainer";
import DayCard from "../components/Agenda/DayCard";
import LiniMasa from "../components/Card"
import BgOne from "../assets/images/agenda/DayCardContainer/one.png";
import BgTwo from "../assets/images/agenda/DayCardContainer/two.png";
import BgThree from "../assets/images/agenda/DayCardContainer/three.png";
import BgFour from "../assets/images/agenda/DayCardContainer/four.png";
import BgFive from "../assets/images/agenda/DayCardContainer/five.png";
import BgSix from "../assets/images/agenda/DayCardContainer/six.png";
import Slider from "react-slick";


export default function Beranda() {
    const [highlight, setHighlight] = useState({
        title: "PPSMB UGM 2021",
        src: require('../assets/img/logo-ppsmb-official.webp').default,
        desc: "Pelatihan Pembelajar Sukses bagi Mahasiswa Baru (PPSMB) adalah kegiatan resmi orientasi dan pengenalan kampus bagi mahasiswa baru di lingkungan UGM. “Ragam Kreasi UGM Pancarkan Pesona Pertiwi” sebagai tema PPSMB UGM 2021 merupakan sebuah langkah awal bagi Gadjah Mada Muda untuk menumbuhkan semangat serta keberanian berkreasi. Harapannya, buah kreasi Gadjah Mada Muda dapat memancarkan pesona kreasi Indonesia ke kancah yang lebih luas. Tidak hanya itu, tema yang dipadukan dengan berbagai rangkaian kegiatan PPSMB UGM 2021 diharapkan dapat melahirkan insan-insan yang kreatif, inovatif, dan adaptif sebagai modal menuju Indonesia maju.",
        instaLink: "http://instagram.com/ppsmb_ugm",
        youtubeLink: "https://www.youtube.com/user/ppsmbpalapa",
        tiktokLink: "https://tiktok.com/@ppsmb_ugm",
        facebookLink: "https://www.facebook.com/PPSMB-UGM-325374494259950",
        twitterLink: "http://twitter.com/ppsmb_ugm"

    });
    const [videoPlay, setVideoPlay] = useState({
        title: 'Apa Itu PPSMB?',
        desc: 'Pahami apa itu PPSMB di sini!',
        embedId: '_3uPoHK0XZk',
        thumbnail: require('../assets/img/serba-serbi/apaituppsmb.webp').default,
    });
    return (
        <>
            <GlobalStyle />
            <Container url="./assets/img/main-bg.jpg">
                <section className='hero'>
                    <img src={Bulk1} alt="" srcset="" className="corner upper-left" />
                    <img src={Bulk2} alt="" srcset="" className="corner upper-right" />
                    <Fade >
                        <img src={LogoPPSMB} alt="Logo Dekoratif PPSMB 2021" srcset="" className="hero-logo" />
                    </Fade>
                    <div className='batiks'>
                        <Spin duration={4000} forever>
                            <img src={Batik} alt="" srcset="" className="batik" />
                            <img src={Batik} alt="" srcset="" className="batik" />
                            <img src={Batik} alt="" srcset="" className="batik" />
                        </Spin>
                    </div>


                    <div className='hero-content'>
                        <div className='content-title'>
                            <div>
                                <Fade left >
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
                        <div className='lini-masa text-center ppsmb-darkblue'>
                            <h2>Lini Masa</h2>
                            <Sliders
                                slidesToShow={3}
                                slidesToShowMobile={2}
                                slidesToShowTablet={2}
                                slidesToScroll={1}>
                                <LiniMasa
                                    mainText='Surat Keputusan Rektor'
                                    mainTextColor='var(--color-white)'
                                    background={BgOne}
                                    title='28 Jun 21'
                                    titleColor='var(--color-white)'
                                    headerColor='var(--color-redpink)'
                                    shadow='rgba(255,190,0,0.4)'
                                    link='www.facebook.com'>
                                </LiniMasa>

                                <LiniMasa
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
                                </LiniMasa>
                            </Sliders>
                        </div>
                    </div>

                </section>
                <section className='greeting'>
                    <div className='left-corner'>
                        <img src={Bulk2} alt="" srcset="" className="corner upper-left" />
                        <img src={Lean1} alt="" srcset="" className="corner bottom-left" />
                    </div>
                    <div className='videos'>

                        <Fade >
                            <div className="video">
                                {/* <VideoContainer
                                    bgurl={
                                        process.env.PUBLIC_URL +
                                        "/assets/img/galeri/" +
                                        videoPlay.thumbnail
                                    }
                                    bgcolor={"var(--color-redpink)"}
                                    noDecor
                                ></VideoContainer> */}
                                <YoutubeEmbed embedId='fGOamlnU_uI' />
                            </div>

                        </Fade>
                    </div>
                    <div className='right'>
                        <img src={Bulk1} alt="" srcset="" className="corner upper-right" />
                        <Fade right >
                            <div className='title-box'>

                                <Pulse delay={2500} forever={true}>
                                    <div className='title'>
                                        <Lightspeed right>
                                            <h1 className='ppsmb-darkblue'>Selamat Datang
                            <Fade delay={500} left cascade >
                                                    <span className='font-indonesia-script ppsmb-red'> Gamada!</span>
                                                </Fade>
                                            </h1>
                                        </Lightspeed>
                                        <img src={RedStick} className='red-stick'></img>
                                    </div>
                                    <div className="batiks">
                                        <img src={Batik} alt="" srcset="" className="batik" />
                                        <img src={Batik} alt="" srcset="" className="batik" />
                                        <img src={Batik} alt="" srcset="" className="batik" />
                                    </div>
                                </Pulse>


                            </div>
                        </Fade>
                        <img src={Lean2} alt="" srcset="" className="corner bottom-right" />


                    </div>

                </section>
                <section className='about'>

                    <div className='desc'>
                        <div className='pengertian ppsmb-darkblue'>
                            <Fade left spy={highlight.title}>
                                <h2>{highlight.title}</h2>
                                <p>{highlight.desc}</p>
                                <ShowEmail email={highlight.email} />
                                <div className="socmed">
                                    <p>Media Sosial: &nbsp;</p>
                                    <ShowSocialMedia icon="youtube" link={highlight.youtubeLink} />
                                    <ShowSocialMedia icon="instagram" link={highlight.instaLink} />
                                    <ShowSocialMedia icon="line" link={highlight.lineLink} />
                                    <ShowSocialMedia icon="twitter" link={highlight.twitterLink} />
                                    <ShowSocialMedia icon="facebook" link={highlight.facebookLink} />
                                    <ShowSocialMedia icon="tiktok" link={highlight.tiktokLink} />
                                </div>
                            </Fade>
                        </div>
                    </div>

                    <div className='logo2-ppsmb'>
                        <div className="highlight">
                            <Fade spy={highlight}>
                                <Pulse forever={true} delay={1000} duration={3000} fraction={1}>
                                    <img src={highlight.src} alt={highlight.title + ' logo'}></img>
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
                                    })
                                }
                                return (
                                    <Unit i={index} key={index} onClick={onClickLogo}>
                                        <img src={item.src} alt={item.title + ' logo'} />
                                    </Unit>
                                )
                            })}
                        </div>
                    </div>

                </section>
                <section className='serba-serbi'>
                    <div className='title'>
                        <Fade left >
                            <h2>
                                <span className='ppsmb-orange'>S</span>
                                <span className='ppsmb-yellow'>e</span>
                                <span className='ppsmb-red'>r</span>
                                <span className='ppsmb-orange'>b</span>
                                <span className='ppsmb-red'>a</span>
                                <span className='ppsmb-white'>-</span>
                                <span className='ppsmb-red'>S</span>
                                <span className='ppsmb-blue'>e</span>
                                <span className='ppsmb-red'>r</span>
                                <span className='ppsmb-yellow'>b</span>
                                <span className='ppsmb-blue'>i</span>
                                <span className='font-indonesia-script ppsmb-white'> Palapa!</span>
                            </h2>
                            <p>
                                Video kreasi Palapa seputar UGM buat mengisi harimu!
                    </p>
                        </Fade>
                    </div>


                    <div className='main'>
                        <div className='video-utama'>
                            <Fade left spy={videoPlay}>
                                <YoutubeEmbed embedId={videoPlay.embedId} />
                                <h2 className='ppsmb-yellow'>{videoPlay.title}</h2>
                                <p>{videoPlay.desc}</p>
                            </Fade>
                        </div>
                        <div className='daftar-video'>
                            {DaftarVideo.map((item, index) => {
                                const onClickThumbnail = () => {
                                    setVideoPlay(({
                                        embedId: item.embedId,
                                        title: item.title,
                                        desc: item.desc,
                                        thumbnail: item.thumbnail
                                    }))
                                }

                                return (
                                    <Fade bottom>
                                        <Video onClick={onClickThumbnail}>
                                            <img src={item.thumbnail} alt={item.title + ' thumbnail'} />
                                            <div>
                                                <p className='title' data-toggle="collapse" aria-expanded="true">{item.title}</p>
                                                <p>{item.desc}</p>
                                            </div>
                                        </Video>
                                    </Fade>
                                )
                            })}

                            {/* <Sliders
                            slidesToShow={4}
                            slidesToShowMobile={2}
                            slidesToShowTablet={2}
                            vertical={true}>

                                <div>
                                    <Video>
                                        <p>1</p>
                                    </Video>
                                </div>
                                <div>
                                    <Video><p>2</p></Video>
                                </div>
                                <div>
                                    <Video><p>3</p></Video>
                                </div>
                                <div>
                                    <Video><p>4</p></Video>
                                </div>
                                <div>
                                    <Video><p>5</p></Video>
                                </div>
                            </Sliders> */}
                        </div>
                    </div>



                </section>
            </Container>
        </>

    )
}
const Card = styled.div`
    box-sizing: border-box;
    float: center;
    background-color:grey;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vmin;
    margin: 10px;
`

const Video = styled.div`
    box-sizing: border-box;
    /* background-color:grey; */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: pointer;
    margin: 2vmin 0;
    img{
        border-radius: 25px;
        width: 14vw;
    }
    div{
        height: 100%;
        overflow-y: hidden;
        padding: 0 10px;
        p{
            margin: 0.2rem;
            padding: 0;
        }
        .title{
            font-weight: bold;
        }
    }

    @media(max-width: 1024px){
        img{
            width: 30vmin;
        }
    }


`

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-image: url(${mainBG});
  background-repeat: repeat;
  background-size: 15%;
  overflow: hidden;
  margin:0;
  display: flex;
  flex-direction: column;

    section{
        .corner{
            width: 25vmin;
            pointer-events: none;
        }


        &.hero{
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
            .hero-logo{
                position: absolute;
                right: 70%;
                width: 25vmax;
                z-index:-2;
            }
            .batiks{
                position: absolute;
                display: flex;
                flex-direction: column;
                right: 1.5%;
                .batik{
                    padding: 1vmin;
                    height: calc(0.5rem + 5vmin);
                }
            }


            .hero-content{
                width: 70%;
                height: 100%;
                padding: 5vmin;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .content-title{
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
                        margin-bottom: 4.5vmin;
                        font-size: calc(0.5rem + 2.5vmin);
                    }

                    .font-indonesia-script {
                        line-height: calc(0.5rem + 3.3vmin);
                        font-weight: lighter;
                    }



                }
                .lini-masa {
                    font-size: calc(0.5rem + 2vmin);
                    width: 85vmin;
                }
            }
            @media(max-width: 1024px){
                .hero-content{
                    width: 80%;
                    .lini-masa{
                    width: 60vmin;
                }
                }
                

            }
            @media (max-width: 768px) {
                justify-content: flex-start;

                .batiks{
                    display: none;
                }

                .hero-content{
                    /* margin-top: 18vmin; */
                    justify-content: flex-start;
                    width: 100%;

                    .lini-masa{
                        width: 60vmin;
                    }
                }

                .hero-logo{
                    width: 60%;
                    top: 70%;
                    right: 30%;
                }


            }

        }

        &.greeting{
            display: flex;
            position: relative;
            margin:0;
            background-image: url(${yellowBG});
            background-repeat: repeat;
            background-size: 15%;
            justify-content: space-between;
            background-color: var(--color-yellow);
            /* height: calc(0.5rem + 92vmin); */
            z-index: 2;


            .left-corner{
                height: 100%;
                left: 0;
                .bottom-left{
                    position: absolute;
                    bottom: 0;

                    width: 35vmin;
                }
                .upper-left{
                    transform:  rotate(-90deg) translateX(-100%);
                    transform-origin: left top;
                    position: absolute;
                    top: 0;
                }

            }



            .videos{
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 50vw;
                align-items: center;

                .video {
                    text-align: center;
                    margin: 10px;
                    width: 60%;
                }
            }

            .right{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;
                width: 50vw;

                .upper-right{
                    transform: rotate(-90deg) translateX(100%);
                    transform-origin: right bottom;
                }

                .bottom-right{
                    width: 32vmin;
                }
                .title-box{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    background-color: var(--color-white);
                    text-align: left;
                    width: 90%;
                    border-radius: 25px 0 0 25px;
                    padding-left: 40px;
                    white-space: nowrap;

                    .title{
                        font-size: calc(0.5rem + 1.4vw);
                        width:80%;
                        z-index: 1;
                        .font-indonesia-script{
                            display: inline-block;
                            transform: rotate(-18deg) translate(-40%, -10%);
                            font-weight: lighter;
                        }
                        .red-stick{
                            width: 40%;
                            transform: translateY(-150%);
                        }
                    }
                    .batiks{
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        justify-content: center;
                        width: 20%;
                        .batik{
                            padding: 1vmin;
                            height: calc(0.5rem + 5vmin);
                            z-index: 0;

                        }
                    }
                }
            }
            @media (max-width: 576px) {
                flex-direction: column;

                .right {
                    order: 1;
                    width: 100vw;
                }
                .videos {
                    order: 2;
                    width: 100vw;
                    margin-bottom: 25vmin;
                }

                .upper-left{
                    display: none;
                }
            }

        }

        &.about{
            display: flex;
            margin:0;
            padding: 10vmin;
            justify-content: center;
            align-items: flex-start;

            overflow: hidden;
            line-height: calc(0.5rem + 3.3vmin);
            max-width: 1440px;

            .desc{
                h2{
                    font-size: calc(0.5rem + 4vmin);
                }
                p{
                    font-size: calc(0.5rem + 2vmin);
                }
                box-sizing: border-box;
                float: center;
                width: 50%;
                text-align: justify;

                .socmed{
                    display: flex;
                    align-items: center;
                }
            }


            .logo2-ppsmb{
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
            .highlight{
                display: block;
                border-radius: 50%;
                text-align: center;

                img{
                    height: 10em;
                    padding: 10px;
                    pointer-events: none;

                }
            }

            .box{
                position: relative;
                height: 10%;
                width: 10%;
                transform-style: preserve-3d;
                animation: animate 25s linear infinite;
                @keyframes animate{
                0%{
                    transform: perspective(1000px) rotateY(0deg);
                }
                100%{
                    transform: perspective(1000px) rotateY(360deg);
                }
                }
            }


        @media (max-width: 1000px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;

            padding: 10%;

            .desc{
                order: 2;
                width: 100%;

                h2{
                    text-align: center;
                }
            }

            .logo2-ppsmb{
                order: 1;
                width: 100%;
                margin-bottom: 100px;
            }

        }
        @media(min-width: 1440px){
            align-self: center;
        }


    }


        &.serba-serbi{
            background-image: url(${darkBlueBG});
            background-repeat: repeat;
            background-size: 15%;
            padding: 10vmin;
            color: var(--color-white);
            display: flex;
            flex-direction: column;
            
            .title{
                h2{
                    span{
                        font-size: calc(0.5rem + 4vmin);
                    }
                    .font-indonesia-script{
                        display: inline-block;
                        transform: rotate(-18deg) translate(-40%, -10%);
                        font-weight: lighter;
                    }
                }

                p{
                    font-size: calc(0.5rem + 2vmin);
                }

            }
            



            .main{
                display: flex;
                justify-content: space-between;
                height: 70%;
                /* background-color: orange; */

                .video-utama{
                    /* margin: 10vmin; */
                    height: 100%;
                    width: 60%;
                    padding-right: 20px;
                    /* flex-grow: 6; */
                    h2{
                        font-size: calc(0.5rem + 3vmin);
                    }
                    p{
                        font-size: calc(0.5rem + 2vmin);
                        padding-bottom: 5vmin;
                        border-bottom: 3px solid yellow;
                    }
                }

                .daftar-video{
                    overflow-y: auto;
                    width: 40%;
                    /* flex-grow:4; */
                    height: 30vw;
                    padding-left: 4px;
                    /* background-color: yellow; */
                }
            }

            @media (max-width: 1024px){
                .title{
                    h2{
                    text-align: center;
                    }                
                }
                .main{
                    flex-direction: column;
                    height: 80%;
                    .video-utama{
                        width: 100%;
                        padding: 0;
                    }
                    .daftar-video{
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
    transform: rotateY(calc(${props => props.i} * 18deg)) translateZ(190px);
    will-change: transform;
    /* -webkit-box-reflect: below 0px linear-gradient(transparent, transparent, #0004); */

    cursor: pointer;
    img{
        position: absolute;
        max-height:90%;
        max-width: 90%;
        object-fit: cover;
    }

    &:hover{
            width:70px;
            height: 70px;
        }

    @media (max-width: 576px) {
        transform: rotateY(calc(${props => props.i} * 18deg)) translateZ(30vh);
    }

`;

function ShowSocialMedia(props) {
    if (props.link != null) {
        return <SocialMedia mainColor='#01385E' secondaryColor='#C50034' faIcon={["fab", props.icon]} link={props.link} />;
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