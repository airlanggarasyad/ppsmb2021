import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /*----------------------*\
          Global Variable
    \*----------------------*/
    html {
        --color-red: #C50034;
        --color-blue: #0593F7;
        --color-darkblue: #01385E;
        --color-orange: #FFBE00;
        --color-yellow: #FF7C02;
        --color-black: #2D2D2D;

        --delay-multiplier: 0.1s;
    }
    
    /*----------------------*\
               Font
    \*----------------------*/
    @font-face {
        font-family: 'Kollektif Regular';
        font-style: normal;
        font-weight: normal;
        src:url('./assets/fonts/Kollektif.woff') format('woff');
        font-display: swap;
    }

    @font-face {
        font-family: 'Indonesia Script';
        font-style: normal;
        font-weight: normal;
        src: local('Indonesia Script'), url('./assets/fonts/Indonesia-Script.woff') format('woff');
        font-display: swap;
    }

    body {
        margin: 0;
        font-family: "Kollektif Regular";
    }

    /*----------------------*\
              Utility
    \*----------------------*/
    .m-0 {
        margin: 0;
    }

    /*----------------------*\
              Color
    \*----------------------*/
    .ppsmb-red {
        color: var(--color-red);
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
        color: white;
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
`;

export default GlobalStyle;
