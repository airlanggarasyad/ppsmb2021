import React from "react";
import styled from "styled-components";

import mainBG from "../../assets/img/main-bg.webp";
import Logo from "../../assets/img/logo-UGM-PPSMB.png";
import LogoPPSMB from "../../assets/img/logo-ppsmb-decorative.svg";
import LowerCorner from "../../assets/img/decorative-cornerL-1.svg";
import UpperLeft from "../../assets/img/decorative-cornerL-3.webp";
import UpperRight from "../../assets/img/decorative-cornerL-2.webp";
import Batik from "../../assets/img/batik-color.svg";
import Sliders from "../../components/Slider/Slider";

export default function Hero() {
    return (
        <Container>

            <div className='top'>
                <div className='top-left'>
                    <img src={UpperLeft} alt="" srcset="" className="corner"/>
                </div>
                <div className='top-center'>
                    <img src={Logo} alt="" srcset=""/>
                </div>
                <div className='top-right'>
                    <img src={UpperRight} alt="" srcset="" className="corner"/>
                </div>
            </div>

            <div className='bottom'>

                <div className='bottom-left'>
                    <div className='logo'>
                        <img src={LogoPPSMB} alt="" srcset="" className="logo-decorative"/>
                    </div>
                </div>

                <div className='bottom-right'>
                    <div className='bottom-right-up'>
                        <div className='title'>
                            <h2 className="text-center m-0 ppsmb ppsmb-darkblue">
                                PPSMB UGM
                                <span className="ppsmb-blue"> 2</span>
                                <span className="ppsmb-red">0</span>
                                <span className="ppsmb-orange">2</span>
                                <span className="ppsmb-yellow">1</span>
                            </h2>
                            <h1 className="text-center m-0 font-indonesia-script ppsmb-darkblue">
                                Temanya apa ya
                            </h1>
                        </div>
                        <div className='batiks'>
                            <img src={Batik} alt="" srcset="" className="batik"/>
                            <img src={Batik} alt="" srcset="" className="batik"/>
                            <img src={Batik} alt="" srcset="" className="batik"/>
                        </div>
                        
                    </div>
                    <div className='lini-masa text-center ppsmb-darkblue'>
                        <h2>Lini Masa</h2>
                        <Sliders slidesToShow='1'>
                            <div>1</div>

                            <div>2</div>

                            <div>3</div>
                            <div>4</div>

                            <div>5</div>

                            <div>6</div>
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
    background-size: cover;

    .corner{
        width: 30vmin;
        pointer-events: none;
    }

    .top{
        display: flex;
        justify-content: space-between;
    }
    .top-left{
        /* background-color: red; */
    }
    .top-center{
        /* background-color: green; */
        margin-top: 5vmin;
        img {
            width: 28vmin;
            pointer-events: none;
        }
    }
    .top-right{
        /* background-color: blue; */
    }

    .bottom {
        display: flex;
        flex-direction: row;
        
    }

    .bottom-left{
        width: 40vw;
        justify-content: flex-end;
        /* background-color: red; */
    }
    
    .logo-decorative{
      /* /* margin-left: -10%;
      grid-column: 1 / span 5;
      grid-row: 2 / span 5;
      z-index: 0; */

        margin-left: -10vw;
        margin-bottom: -20vh;
        width: 45vw;

        pointer-events: none;
    }

    
    .bottom-right{
        /* background-color: blue; */
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 576px) {
        .bottom {
            flex-direction: column;
            /* width:400px; */
        }
        .bottom-right {
            order: 1;
            width: 100%;
        }
        .bottom-left {
            order: 2;
            width: 100vw;

        }

        .logo-decorative {
            margin-left: -30vmin;
            margin-bottom: -85vmin;
            width: 100vmin;
        }
        
    }



    .bottom-right-up{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    .title{
        white-space: nowrap;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* background-color: green; */
    }

    
    .ppsmb {
    font-size: calc(0.5rem + 3vw);
    text-align: right;
    /* animation: 1s ease-in-out 0s 1 fadeIn;
    animation-delay: calc(var(--delay-multiplier) * 3);  
    animation-fill-mode: forwards; */
    }

  .font-indonesia-script {
    opacity:0;
    font-size: calc(0.5rem + 4vw);
    line-height: calc(0.5rem + 7vw);

    text-align: right;

    animation: 1s ease-in-out 0s 1 fadeIn;
    animation-delay: calc(var(--delay-multiplier) * 5);  
    animation-fill-mode: forwards;
  }

  .batiks{
      /* background-color: yellow; */
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: center;

      pointer-events: none;
      
  }
  
  .batik{
      padding-left: calc(0.5rem + 7vw);
      height: calc(0.5rem + 3vw);
  }

  .lini-masa {
      /* background-color: aqua; */
    margin: 0;
    width: 100%;
    height: 50%;
    font-size: calc(0.5rem + 1.2vmin)
  }
`