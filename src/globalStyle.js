import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /*----------------------*\
          Global Variable
    \*----------------------*/
    html {
        --color-red: #C50034;
        --color-blue: #0593F7;
        --color-darkblue: #01385E;
        --color-footerblue: #0074AF;
        --color-orange: #FF7C02;
        --color-yellow: #FFBE00;
        --color-black: #2D2D2D;

        --delay-multiplier: 0.1s;
        --spacer: 1rem;
    }
    

    /*----------------------*\
               Font
    \*----------------------*/
    @font-face {
        font-family: 'Kollektif Regular';
        font-style: normal;
        font-weight: normal;
        src: local('Kollektif Regular') url('./assets/fonts/Kollektif.woff') format('woff');
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

    .font-bold {
        font-weight: bold;
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
            Breakpoint
    \*----------------------*/
    html {
        --bp-xs: 0;
        --bp-sm: 576px;
        --bp-md: 768px;
        --bp-lg: 992px;
        --bp-xl: 1200px;
        --bp-xxl: 1400px; 
    }
`;

export default GlobalStyle;
