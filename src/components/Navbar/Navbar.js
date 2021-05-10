import React, {Component} from 'react'
import {MenuItems} from "./MenuItems"
import styled from "styled-components";
import GlobalStyle from '../../globalStyle';

export default class Navbar extends Component{
    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked : !this.state.clicked})
    }

    render(){
        return(
            <body>
            <GlobalStyle/>
            <NavStyled className="">
                
                <NavLogoStyled>PPSMB UGM 2021</NavLogoStyled>

                {/* Pages navigation */}
                <NavItemsStyled className={this.state.clicked ? 'nav-items active' : 'nav-items'}>
                    {MenuItems.map((item,index) => {
                        return (
                            <li key={index}>
                                <NavLinksStyled className={item.cName} href={item.url}>{item.title}</NavLinksStyled>
                            </li>
                        )
                    })}
                </NavItemsStyled>

                {/* Hamburger Bar or Cross Icon Bar  */}
                <NavIconStyled className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
                </NavIconStyled>

            </NavStyled>
            </body>
        )
    }
    
}

const NavStyled = styled.nav`
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0 4px 2px -2px rgba(0,0,0,.2);
    height: 50px;
    align-items: center;
    width: 100%;
    top: 0;
    font-size: 0.9rem;
    position: fixed;

    @font-face {
        font-family: 'Kollektif Regular';
        font-style: normal;
        font-weight: normal;
        src:url('../../assets/fonts/Kollektif.woff') format('woff');
        font-display: swap;
    }

      // Medium devices (tablets, 768px and up)
    @media (max-width: 768px) { position: relative; }
`

const NavLogoStyled = styled.h1`
    float: left;
    color: #01385E;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    margin-left: 20px;
    cursor: pointer;
`

const NavItemsStyled = styled.ul`
    float: right;
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style-type: none;
    margin-right: 20px;

    @media (max-width: 768px) {
        &.nav-items{
            display: flex;
            flex-direction: column;
            width: 100%;
            position: absolute;
            top: 45px;
            left: -120%;
            opacity: 1;
            transition: all 0.5s ease;
        }
    
        &.nav-items.active {
            background:#ffffff;
            left: 0;
            width: 100%;
            opacity: 1;
            transition: all 0.5 ease;
            box-shadow: 0 4px 2px -2px rgba(0,0,0,.2);
        }
    }
`

const NavLinksStyled = styled.a`
    color: #2D2D2D;
    text-decoration: none;
    padding: 0.5rem 1rem;

    &:hover {
        color: #01385E;
        border-radius: 4px;
        transition: all 0.2 ease-out;
    }

    @media (max-width: 768px) {
        text-align: center;
        justify-content: center;
        width: 83%;
        display: table;
        float: center;
        padding: 1rem;
    
        &:hover {
            background-color: FF7C02;
            opacity: 1;
            border-radius: 4px;
            transition: 250ms;
        }
    }
`

const NavIconStyled = styled.image`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        position: absolute;
        right: 20px;
        top: 50%;
        margin-top: -15px;
        font-size: 1.2rem;
        cursor: pointer;

        .fa-times {
            color:#2D2D2D;
            font-size: 1.2rem;
        }
        .fa-times:hover {
            color:#01385E;
            font-size: 1.2rem;
        }
        .fa-bars {
            color:#2D2D2D;
            font-size: 1.2rem;
        }
        .fa-bars:hover {
            color:#01385E;
            font-size: 1.2rem;
        }
    }
`