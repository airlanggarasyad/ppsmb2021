import { createGlobalStyle } from "styled-components";

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
      overscroll-behavior: contain;
  }
    
  * {
    box-sizing: border-box;
  }

  img {
      user-drag: none;
  }

  html {
      scroll-behavior: smooth;
  }

  body {
    overflow: hidden; /* Hide scrollbars */
  }

  .font-bold {
      font-weight: 700;
  }

  .font-normal {
      font-weight: 400;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Kollektif';
    font-weight: 100;
  }

  .modal-title {
    font-size: 30px;
    font-weight: 900;
  }

  .modal-content  {
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
  }

  .modal {
    background-image: url("background.jpg");
    background-size: auto;
    background-position: center;
  }

  .modal-header {
    padding: 0.4rem;
    padding-top: 1rem;
    padding-left: 1rem;
  }

  .btn-circle {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #F31958 !important;
    border: transparent;
  }

  .btn-circle-transparent {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #F3195800 !important;
    border: transparent;
  }

  .btn-circle:hover {
      background-color: #E01651 !important;
  }

  .btn-circle .icn {
    width: 80%;
  }

  a {
    color: #2D2D2D;
  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
  }

  .close {display: none;}

  /* Important part */
  .modal-dialog{
    overflow-y: initial !important
  }

  .modal-body{
    height: 100%;
    overflow-y: auto;
    background-image: url('https://i.ibb.co/PWBTPmv/background.webp');
    background-size: auto;
    background-position: center;
  }

  .modal-title {
    font-size: 20pt;
  }

  ol::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  
  ol::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(255, 190, 0, 1);
  }

  @font-face {
    font-family: Kollektif;
    font-weight: 100;
    src: local('Kollektif'), url(./fonts/Kollektif.ttf) format('truetype');
  }
  
  @font-face {
    font-family: Kollektif-Bold;
    font-weight: bold;
    src: local('Kollektif'), url(./fonts/Kollektif-Bold.ttf) format('truetype');
  }

`;

export default GlobalStyle;
