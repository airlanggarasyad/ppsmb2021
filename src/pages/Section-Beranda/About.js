import React, { useState } from 'react';
import styled from "styled-components";

import mainBG from "../../assets/img/main-bg.webp";
import Batik from "../../assets/img/batik-color.svg";
import {Logo2PPSMB} from "./Logo2PPSMB";


export default function About() {
    const [highlight, setHighlight] = useState({
        src: require('../../assets/img/logo-ppsmb-official.webp').default,
        title: "PPSMB UGM",
        desc: "Tema tahun ini menggambarkan ... " 
    });
    return(
        <Container>
            <div className='desc'>
                <div className='pengertian ppsmb-darkblue'>
                    <h2>Apa itu PPSMB 
                        <span className='ppsmb-orange'> U</span>
                        <span className='ppsmb-blue'>G</span>
                        <span className='ppsmb-red'>M</span>?</h2>
                    <p>
                        Pelatihan Pembelajar Sukses bagi Mahasiswa Baru (PPSMB) adalah kegiatan resmi <b>orientasi
                        dan pengenalan kampus</b> bagi mahasiswa baru di lingkungan UGM. Berikut <a href='#' className='ppsmb-orange' target='_blank'>surat keputusan rektor</a> terkait PPSMB.
                    </p>
                </div>
                <div className='tujuan ppsmb-darkblue'>
                    <br/>
                    <h2>PPSMB bertujuan untuk:</h2>
                    <ul>
                        <li>
                        Mewujudkan kegiatan orientasi dan pengenalan kampus yang berorientasi pada
                        <b> nilai-nilai luhur</b> dan <b jati diri Universitas></b>
                        </li>
                        <li>
                        Membentuk karakter mahasiswa yang mengedepankan sikap sebagai intelektual yang mengandalkan 
                        <b> kecerdasan berpikir, kedewasaan</b> dalam bertutur kata dan bertindak, <b> anti kekerasan, berbudaya, bermartabat, inspiratif</b>, 
                        serta menjunjung tinggi <b> nilai-nilai Pancasila.</b>
                        </li>
                    </ul>

                </div>
            </div>

            {/* <div className="batiks">
                <img src={Batik} alt="" srcset="" className="batik"/>
                <img src={Batik} alt="" srcset="" className="batik"/>
                <img src={Batik} alt="" srcset="" className="batik"/>
                <img src={Batik} alt="" srcset="" className="batik"/>
                <img src={Batik} alt="" srcset="" className="batik"/>                          
            </div> */}

            <div className='logo2-ppsmb'>
                <div className="highlight">
                    <img src={highlight.src}></img>
                </div>
                    <div className="box"  >
                        {Logo2PPSMB.map((item,index) => {
                            const onClickLogo = () => {
                                setHighlight({
                                    src: item.src,
                                    title: item.title,
                                    desc: item.desc,
                                })
                            }
                            return (
                                
                                <Unit i={index} key={index} onClick={onClickLogo}>
                                    <img src={item.src}/>
                                </Unit>
                            )
                        })}
                    </div>
                
                <div className='deskripsi ppsmb-darkblue'>
                    <h2>{highlight.title}</h2>
                    <p>{highlight.desc}</p>
                </div>

            </div>

        </Container>
    )
    

}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin:0;

/* 
    background-image: url(${mainBG}); */
    background-position: center;
    background-size: cover;
    overflow: hidden;
    line-height: calc(1.5rem);

    .desc{
        box-sizing: border-box;
        width: 50%;
        padding: 7%;
        text-align: justify;
    }

    .batiks{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  
  .batik{
      padding: calc(0.5rem + 0.3vw);
      height: calc(0.5rem + 4vmin);
    }


    .logo2-ppsmb{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        padding: 4%;
       
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




    .deskripsi{
        margin-top: 5vmin;
        border-radius: 20px;

        h2{
            text-align: center;
        }
        p {
            text-align: justify;
        }
    }

    @media (max-width: 576px) {
        flex-direction: column;
        align-items: center;
        
        padding: 10%;

        .desc{
            width: 100%;
        }

        .batiks{
            width: 100%;
            flex-direction: row;
            margin: 6vh 0 6vh 0;
        }

        .logo2-ppsmb{
            width: 100%;
        }

        .deskripsi{
            margin-top: 24vmin;
        }

    }
`

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


`