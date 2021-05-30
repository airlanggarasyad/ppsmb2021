import React from "react";
import styled from "styled-components";

import mainBG from "../../assets/img/main-bg.webp";
import BottomLeft from "../../assets/img/corner-lean1.webp";
import UpperLeft from "../../assets/img/corner-bulk2.webp";
import UpperRight from "../../assets/img/corner-bulk1.webp";
import BottomRight from "../../assets/img/corner-lean2.webp";
import Batik from "../../assets/img/batik-color.svg";
import RedStick from "../../assets/img/red-stick.webp";

export default function Greeting(){
    return(
        <Container2>
            <div className='left'>
                <img src={UpperLeft} alt="" srcset="" className="corner upper-left"/>
                <div className="video">Video1</div>
                <div className="video">Video2</div>
                <img src={BottomLeft} alt="" srcset="" className="corner"/>
            </div>
            <div className='right'>
                <img src={UpperRight} alt="" srcset="" className="corner upper-right"/>
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
                <img src={BottomRight} alt="" srcset="" className="corner"/>


            </div>
        </Container2>
    )
}

const Container2 = styled.div`
    display: flex;
    flex-direction: row;
    margin:0;
    background-size: cover;
    justify-content: space-between;
    background-color: var(--color-yellow);
    height: calc(0.5rem + 92vmin);
    z-index: 2;

    img{
      pointer-events: none;
    }

    .left{
        display: flex;
        flex-direction: column;
        width: 50vw;
    }

    .video {
        text-align: center;
        margin: 10px;
        height: 30vmin;
    }

    .right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        width: 50vw;        
    }

    .upper-left{
        transform:  rotate(-90deg) translateX(-100%);
        transform-origin: left top;
    }

    .upper-right{
        transform: rotate(-90deg) translateX(100%);
        transform-origin: right bottom;
    }

    .title-box{
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: var(--color-white);
        text-align: left;
        width: 90%;
        border-radius: 25px 0 0 25px;
        padding-left: 5%;
        overflow: visible;
        white-space: nowrap;
    }

    .title{
        font-size: calc(0.5rem + 1vw);
        width:80%;
    }

    .font-indonesia-script{
        display: inline-block;
        transform: rotate(-18deg) translate(-40%, -10%);
        font-weight: lighter;

    }

    .red-stick{
        width: 45%;
        transform: translateY(-150%);
    }

    .batiks{
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      width: 20%;
  }
  
  .batik{
      padding: 1vmin;
      height: calc(0.5rem + 4vmin);
      
  }

    @media (max-width: 576px) {
        flex-direction: column;
        height: auto;

        .right {
            order: 1;
            width: 100vw;
        }
        .left {
            order: 2;
            width: 100vw;
        }

        .upper-left{
            display: none;
        }
    }
`