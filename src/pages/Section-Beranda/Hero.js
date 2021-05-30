import React from "react";
import styled from "styled-components";

import mainBG from "../../assets/img/main-bg.webp";
import LogoPPSMB from "../../assets/img/logo-ppsmb-decorative.svg";
import UpperLeft from "../../assets/img/corner-bulk1.webp";
import UpperRight from "../../assets/img/corner-bulk2.webp";
import Batik from "../../assets/img/batik-color.svg";
import Sliders from "../../components/Slider/Slider";

export default function Hero() {
    return (
        <Container>

            <div className='corner-decoratives'>
                <img src={UpperLeft} alt="" srcset="" className="corner upper-left"/>
                <img src={UpperRight} alt="" srcset="" className="corner upper-right"/>
            </div>

            <div className='main'>
                <div className='hero-logo'>
                    <img src={LogoPPSMB} alt="Logo Dekoratif PPSMB 2021" srcset=""/>
                </div>

                <div className='hero-content'>
                    <div className='content-title'>
                        <h1 className="text-center m-0 ppsmb ppsmb-darkblue">
                                PPSMB UGM
                                <span className="ppsmb-blue"> 2</span>
                                <span className="ppsmb-red">0</span>
                                <span className="ppsmb-orange">2</span>
                                <span className="ppsmb-yellow">1</span>
                            <h1 className="text-center m-0 font-indonesia-script ppsmb-darkblue">
                                Yang Penting Hepi
                            </h1>
                        </h1>
                       
                        <div className='batiks'>
                            <img src={Batik} alt="" srcset="" className="batik"/>
                            <img src={Batik} alt="" srcset="" className="batik"/>
                            <img src={Batik} alt="" srcset="" className="batik"/>
                        </div>
                        
                    </div>
                    <div className='lini-masa text-center ppsmb-darkblue'>
                        <h2>Lini Masa</h2>
                        <Sliders 
                        slidesToShow={3}
                        slidesToShowMobile={2}
                        slidesToShowTablet={2}>
                            <div>
                                <Card><p>1</p></Card>
                            </div>                                
                            <div>
                                <Card><p>2</p></Card>
                            </div>
                            <div>
                                <Card><p>3</p></Card>
                            </div>                                
                            <div>
                                <Card><p>4</p></Card>
                            </div>
                            <div>
                                <Card><p>5</p></Card>
                            </div>                                
                            <div>
                                <Card><p>6</p></Card>
                            </div>
                            <div>
                                <Card><p>7</p></Card>
                            </div>                        
                            <div>
                                <Card><p>8</p></Card>
                            </div>
                        </Sliders>
                    </div>
                </div>

            </div>

   
        </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin:0;
    box-sizing: border-box;
    justify-content: center;

    background-image: url(${mainBG});
    background-position: center;
    background-size: cover;
    overflow: hidden;

    height: 100vh;

    z-index: 1;
    
    img{
        pointer-events: none;
    }

    .corner-decoratives{
        position: relative;
        height: 20%;
    }

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

    .main {
        display: flex;
        flex-direction: row;
        height: 80%;
        justify-content: space-between;
    }

    .hero-logo{
        width: 40vw;
        justify-content: flex-end;

        img{
            margin-left: -10%;
            width: 103%;
        }
    }

    
    .hero-content{
        width: 60vw;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }



    .content-title{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    
    .ppsmb {
    text-align: center;
    font-size: calc(0.5rem + 2.5vmin);

    }

  .font-indonesia-script {
    opacity:0;
    font-size: calc(0.5rem + 7.5vmin);
    line-height: calc(0.5rem + 9vmin);
    margin-top: calc(0.5rem + 2vmin);
    font-weight: lighter;

    text-align: center;

    animation: 1s ease-in-out 0s 1 fadeIn;
    animation-delay: calc(var(--delay-multiplier) * 5);  
    animation-fill-mode: forwards;
  }

  .batiks{
    display: flex;
    flex-direction: column;
    margin-top: calc(0.5rem + 2vmin);
    margin-left: 5vw;

  }
  
  .batik{
      padding: 1vmin;
      height: calc(0.5rem + 4vmin);
  }

  .lini-masa {
    width: 100%;
    font-size: calc(0.5rem + 1.2vmin)
  }
  @media (max-width: 1024px) {
      .corner-decoratives{
          height: 35%;
      }
      .main{
          height: 65%;
      }
  }


  @media (max-width: 576px) {
        .main {
            flex-direction: column;
            height: 80%;
        }
        .hero-logo {
            order: 2;
            width: 70vw;
        }
        .hero-content{
            width: 100vw;
            justify-content: flex-start;
        }

        .content-title {
            flex-direction: column;
        }

        .batiks {
            flex-direction: row;
        }
        
    }


`

const Card = styled.div`
    box-sizing: border-box;
    float: center;
    background-color:grey;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vmin;
    margin: 10px;


`
