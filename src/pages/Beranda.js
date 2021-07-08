import React, { useState } from "react";
import styled from "styled-components";
import Hero from "./Section-Beranda/Hero";
import GlobalStyle from "../globalStyle";
import Greeting from "./Section-Beranda/Greeting";
import Tentang from "./Section-Beranda/About"
import LogoPPSMB from "../assets/img/logo-ppsmb-decorative.svg";
import Bulk1 from "../assets/img/corner-bulk1.webp";
import Bulk2 from "../assets/img/corner-bulk2.webp";
import Batik from "../assets/img/batik-color.svg";
import Sliders from "../components/Slider/Slider";
import Lean1 from "../assets/img/corner-lean1.webp";
import Lean2 from "../assets/img/corner-lean2.webp";
import RedStick from "../assets/img/red-stick.webp";
import {DaftarPPSMB} from "./DaftarPPSMB";
import SocialMedia from "../components/SocialMedia";
import YoutubeEmbed from "../components/YoutubeEmbed"
import { DaftarVideo } from "./DaftarVideo";
import DayCard from "../components/Agenda/DayCard";



export default function Beranda() {
    const [highlight, setHighlight] = useState({
        src: require('../assets/img/logo-ppsmb-official.webp').default,
        title: "PPSMB UGM 2021",
        desc: "Pelatihan Pembelajar Sukses bagi Mahasiswa Baru (PPSMB) adalah kegiatan resmi orientasi dan pengenalan kampus bagi mahasiswa baru di lingkungan UGM. Berikut surat keputusan rektor terkait PPSMB.",
        instaLink: "http://instagram.com/ppsmb_ugm",
        youtubeLink: "https://www.youtube.com/user/ppsmbpalapa",
        tiktokLink: "https://tiktok.com/@/ppsmb_ugm",
        facebookLink: "https://www.facebook.com/PPSMB-UGM-325374494259950",
        twitterLink: "http://twitter.com/ppsmb_ugm",

    });
    const [videoPlay, setVideoPlay] = useState({
        embedId: 'aBKEt3MhNMM',
        thumbnail: require('../assets/img/video-left.png').default,
        title: 'Video saya',
        desc: 'Deskripsinya'
    });
    return(
        <>
            <GlobalStyle/>
            <Container url="./assets/img/main-bg.jpg">
                <section className='hero'>
                    <img src={Bulk1} alt="" srcset="" className="corner upper-left"/>
                    <img src={Bulk2} alt="" srcset="" className="corner upper-right"/>
                    <img src={LogoPPSMB} alt="Logo Dekoratif PPSMB 2021" srcset="" className="hero-logo"/>
                    <div className='batiks'>
                        <img src={Batik} alt="" srcset="" className="batik"/>
                        <img src={Batik} alt="" srcset="" className="batik"/>
                        <img src={Batik} alt="" srcset="" className="batik"/>
                    </div>

                        <div className='hero-content'>
                            <div className='content-title'>
                                <div>
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

                                </div>



                            </div>
                            <div className='lini-masa text-center ppsmb-darkblue'>
                                {/* <h2>Lini Masa</h2> */}
                                <Sliders
                                slidesToShow={3}
                                slidesToShowMobile={2}
                                slidesToShowTablet={2}>
                                    <div>
                                        <DayCard day="one" href='www.facebook.com'></DayCard>
                                    </div>
                                    <div>
                                        <DayCard day="two" href='www.facebook.com'></DayCard>
                                    </div>
                                    <div>
                                        <DayCard day="three" href='www.facebook.com'></DayCard>
                                    </div>
                                    <div>
                                        <DayCard day="four" href='www.facebook.com'></DayCard>
                                    </div>
                                </Sliders>
                            </div>
                        </div>

                </section>
                <section className='greeting'>
                <div className='left-corner'>
                    <img src={Bulk2} alt="" srcset="" className="corner upper-left"/>
                    <img src={Lean1} alt="" srcset="" className="corner bottom-left"/>
                </div>


                <div className='videos'>
                        <div className="video">Video1</div>
                    {/* <div className="video">Video2</div> */}
                </div>
            <div className='right'>
                <img src={Bulk1} alt="" srcset="" className="corner upper-right"/>
                <div className='title-box'>
                    <div className='title'>
                        <h1 className='ppsmb-darkblue'>Selamat Datang
                        <span className='font-indonesia-script ppsmb-red'> Gamada!</span>
                        </h1>
                        <img src={RedStick} className='red-stick'></img>
                    </div>
                    <div className="batiks">
                            <img src={Batik} alt="" srcset="" className="batik"/>
                            <img src={Batik} alt="" srcset="" className="batik"/>
                            <img src={Batik} alt="" srcset="" className="batik"/>
                    </div>

                </div>
                <img src={Lean2} alt="" srcset="" className="corner bottom-right"/>


            </div>

            </section>
            <section className='about'>
                <div className='desc'>
                    <div className='pengertian ppsmb-darkblue'>
                        <h2>{highlight.title}</h2>
                        <p>
                            {highlight.desc}
                        </p>
                            <ShowEmail email={highlight.email}/>

                        <div className="socmed">
                            <p>
                                Media Sosial: &nbsp;
                            </p>
                            <ShowSocialMedia  icon="youtube" link={highlight.youtubeLink}/>
                            <ShowSocialMedia  icon="instagram" link={highlight.instaLink}/>
                            <ShowSocialMedia  icon="line" link={highlight.lineLink}/>
                            <ShowSocialMedia  icon="twitter" link={highlight.twitterLink}/>
                            <ShowSocialMedia  icon="facebook" link={highlight.facebookLink}/>
                            <ShowSocialMedia  icon="tiktok" link={highlight.tiktokLink}/>
                        </div>
                    </div>
                </div>

                <div className='logo2-ppsmb'>
                    <div className="highlight">
                        <img src={highlight.src} alt={highlight.title + ' logo'}></img>
                    </div>
                    <div className="box"  >
                        {DaftarPPSMB.map((item,index) => {
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
                                    <img src={item.src} alt={item.title + ' logo'}/>
                                </Unit>
                            )
                        })}
                    </div>
                </div>

            </section>
            <section className='serba-serbi'>
                <div className='title'>
                    <h2>
                        Serba-Serbi Palapa
                    </h2>
                    <p>
                        Video kreasi Palapa seputar UGM buat mengisi harimu!
                    </p>                  
                </div>
                

                <div className='main'>
                    <div className='video-utama'>
                        <YoutubeEmbed embedId={videoPlay.embedId} />
                        <h2>{videoPlay.title}</h2>
                        <p>{videoPlay.desc}</p>
                    </div>
                    <div className='daftar-video'>
                        {DaftarVideo.map((item,index)=>{
                            const onClickThumbnail = () => {
                                setVideoPlay(({
                                    embedId: item.embedId,
                                    title: item.title,
                                    desc: item.desc,
                                    thumbnail: item.thumbnail
                                }))
                            }

                            return(
                                <Video onClick={onClickThumbnail}>
                                    <img src={item.thumbnail} alt={item.title + ' thumbnail'}/>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </Video>

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
    /* justify-content: center; */
    align-items: center;
    cursor: pointer;
    padding: 1vmin 0;
    img{
        width: 14vw;
    }
    div{
        padding: 1vmin;
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
            height: 80vh;
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
                width: 30vmax;
                z-index:-2;
            }
            .batiks{
                position: absolute;
                display: flex;
                flex-direction: column;
                right: 1.5%;
                .batik{
                    padding: 1vmin;
                    height: calc(0.5rem + 3vmin);
                }
            }


            .hero-content{
                width: 60%;
                height: 100%;
                padding: 5vmin;
                display: flex;
                flex-direction: column;
                align-items: center;

                .content-title{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    padding: 4vmin;

                    .title {
                        font-size: calc(0.5rem + 4vmin);
                    }

                    .ppsmb {
                        opacity: 0;
                        margin-bottom: 4.5vmin;
                        font-size: calc(0.5rem + 2.5vmin);
                        animation-name: fadeIn;
                        animation-fill-mode: forwards;
                    }

                    .font-indonesia-script {
                        opacity:0;
                        line-height: calc(0.5rem + 3.3vmin);
                        font-weight: lighter;

                        animation: 1s ease-in-out 0s 1 fadeIn;
                        animation-delay: calc(var(--delay-multiplier) * 5);
                        animation-fill-mode: forwards;
                    }



                }
                .lini-masa {
                    width: 100%;
                    font-size: calc(0.5rem + 2vmin);
                }
            }
            @media (max-width: 576px) {
                align-items: center;

                .batiks{
                    display: none;
                }

                .hero-content{
                    margin-top: 18vmin;
                    justify-content: flex-start;
                    width: 100%;
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
            background-size: cover;
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

                .video {
                    text-align: center;
                    margin: 10px;
                    height: 30vmin;
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
                    padding-left: 7vmin;
                    overflow: visible;
                    white-space: nowrap;

                    .title{
                        font-size: calc(0.5rem + 1.4vw);
                        width:80%;
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
                            height: calc(0.5rem + 3vmin);

                        }
                    }
                }
            }
            @media (max-width: 576px) {
                flex-direction: column;
                height: auto;

                .right {
                    order: 1;
                    width: 100vw;
                }
                .videos {
                    order: 2;
                    width: 100vw;
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
                /* background-color: blue; */

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
                /* background-color: blueviolet; */
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
            background-color: var(--color-darkblue);
            /* height: 100vh; */
            padding: 10vmin;
            color: var(--color-white);
            display: flex;
            flex-direction: column;
            /* flex-grow: 7; */
            
            .title{
                h2{
                font-size: calc(0.5rem + 4vmin);
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
                    overflow-y: scroll;
                    width: 40%;
                    /* flex-grow:4; */
                    height: 30vw;
                    padding-left: 4px;
                    /* background-color: yellow; */
                }
            }

            @media (max-width: 1024px){
                .title{
                    h2, p{
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
    -webkit-box-reflect: below 0px linear-gradient(transparent, transparent, #0004);

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

function ShowSocialMedia(props){
    if(props.link != null){
        return <SocialMedia mainColor='#01385E' secondaryColor='#C50034' faIcon={["fab", props.icon]} link={props.link} />;
    } else {
        return null;
    }
}
function ShowEmail(props){
    if(props.email != null){
        return <p>Email: {props.email}</p>;
    } else {
        return null;
    }
}