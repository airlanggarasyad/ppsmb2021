import { createGlobalStyle } from "styled-components";
import Kollektif from "./assets/fonts/Kollektif.woff";
import IndonesiaScript from "./assets/fonts/Indonesia-Script.woff";
import patternBGWhite from "./assets/img/pattern-bg-white.webp";

const GlobalStyle = createGlobalStyle`
    /*----------------------*\
          Global Variable
    \*----------------------*/
    html {
        --color-red: #C50034;
        --color-redpink: #F31958;
        --color-blue: #0593F7;
        --color-darkblue: #01385E;
        --color-footerblue: #0074AF;
        --color-orange: #FF7C02;
        --color-yellow: #FFBE00;
        --color-black: #2D2D2D;
        --color-white: #ffffff;

        --delay-multiplier: 0.1s;
        --spacer: 1rem;
    }
    
    * {
        box-sizing: border-box;
    }

    /*----------------------*\
               Font
    \*----------------------*/
    @font-face {
        font-family: 'Kollektif Regular';
        font-style: normal;
        font-weight: normal;
        src: url(${Kollektif}) format('woff');
        font-display: swap;
    }

    @font-face {
        font-family: 'Indonesia Script';
        font-style: normal;
        font-weight: normal;
        src: url(${IndonesiaScript}) format('woff');
        font-display: swap;
    }

    body {
        width:100%;
        margin: 0;
        font-family: "Kollektif Regular";
    }

    .font-bold {
        font-weight: 700;
    }

    .font-normal {
        font-weight: 400;
    }


    /*----------------------*\
              Utility
    \*----------------------*/
    /* Margin */
    .m-0 {
        margin: calc(var(--spacer) * 0);
    }

    .m-1 {
        margin: calc(var(--spacer) * 0.25);
    }

    .m-2 {
        margin: calc(var(--spacer) * 0.5);
    }

    .m-3 {
        margin: calc(var(--spacer) * 1);
    }

    .m-4 {
        margin: calc(var(--spacer) * 1.5);
    }

    .m-5 {
        margin: calc(var(--spacer) * 3);
    }

    /* Padding */
    .p-0 {
        padding: calc(var(--spacer) * 0);
    }

    .p-1 {
        padding: calc(var(--spacer) * 0.25);
    }

    .p-2 {
        padding: calc(var(--spacer) * 0.5);
    }

    .p-3 {
        padding: calc(var(--spacer) * 1);
    }

    .p-4 {
        padding: calc(var(--spacer) * 1.5);
    }

    .p-5 {
        padding: calc(var(--spacer) * 3);
    }


    /*----------------------*\
              Color
    \*----------------------*/
    .ppsmb-red {
        color: var(--color-red);
    }
    .ppsmb-redpink {
        color: var(--color-redpink);
    }
    .ppsmb-blue {
        color: var(--color-blue);
    }
    .ppsmb-darkblue {
        color: var(--color-darkblue);
    }
    .ppsmb-yellow {
        color: var(--color-yellow);
    }
    .ppsmb-orange {
        color: var(--color-orange);
    }
    .ppsmb-black {
        color: var(--color-black);
    }
    .ppsmb-white {
        color: var(--color-white);
    }

    /*----------------------*\
            Background
    \*----------------------*/
    .pattern-bg {
        background-size: 30%;
    }

    .pattern-bg-white {
        background-image: url(${patternBGWhite});
        background-repeat: repeat;
    }

    /*----------------------*\
            Typography
    \*----------------------*/
    .text-center {
        text-align: center;
    }

    .text-left {
        text-align: left;
    }

    .text-right {
        text-align: right;
    }

    .font-indonesia-script {
        font-family: "Indonesia Script";
    }

    .font-kollektif {
        font-family: "Kollektif Regular";
    }


    /*----------------------*\
              Grid
    \*----------------------*/
    .grid-container-6x12 {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(6, 1fr);
        grid-gap: 10px;
        height: 100%;
        width: 100%;
    }


    /*----------------------*\
            Animation
    \*----------------------*/
    @keyframes fadeInFromUp {
    0% {
        opacity: 0;
        transform: translateY(-20%);
        }
    100% {
        opacity: 1;
        transform: translateY(0);
        }
    }

    @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
    }


    /*----------------------*\
            Scrollbar
    \*----------------------*/

    body::-webkit-scrollbar {
        width: 0.8em;
    }
    
    body::-webkit-scrollbar-thumb {
        border-radius: 5vmin;
        background-color: var(--color-yellow);
    }

    /*----------------------*\
            Modal
    \*----------------------*/

    .ReactModal__Body--open {
        overflow: hidden;
    }

    .modalOverlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.9);
        z-index:20;
        opacity: 0;
        transition: opacity 200ms ease-in-out;
        box-sizing: border-box;
    }

    .ReactModal__Overlay--after-open {
        opacity: 1;
    }

    .ReactModal__Overlay--before-close {
        opacity: 0;
  }

    .modalContent {
        box-sizing: border-box;
        position: absolute;
        top: 50vh;
        left: 50vw;
        right: auto;
        bottom: auto;
        margin-left: -40vw;
        margin-top: -40vh;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        outline: none;
        width: 80%;
        position: relative;
        padding: 5vmin;
    }

    .modalContent > div {
        padding: 0;
    }

    .modalContent * {
        margin: 0;
    }

    .modalContent .photo {
        position: relative;
        height: 70vh;
        max-width:90%;
        text-align: center;
    }

    .modalContent img {
        max-height: 70vh;
        width: 100%;
        margin: 0 auto;
    }

    /*----------------------*\
            Breakpoint
    \*----------------------*/
    html {
        /* Breakpoint use min-width for mobile first development */
        --bp-xs: 0;
        --bp-sm: 576px;
        --bp-md: 768px;
        --bp-lg: 992px;
        --bp-xl: 1200px;
        --bp-xxl: 1400px; 
    }

    @media (min-width: 576px) {
        .pattern-bg {
            background-size: 20%;
        }

        .modalContent img {
        max-height: 70vh;
        height:70vh;
        width: auto;
    }
    }
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {}
    @media (min-width: 1400px) {}
`;

export default GlobalStyle;
