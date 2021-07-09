import React, {Component} from 'react'
import {MenuItems} from "./MenuItems"
import styled from "styled-components";
import GlobalStyle from '../../globalStyle';

import LogoPPSMBOfficial from '../../assets/img/logo-ppsmb-official.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
// import Route from 'react-router-dom';

export default class Navbar extends Component{
    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked : !this.state.clicked})
    }

    render(){
        return(
            <Header>
                <GlobalStyle/>
                <NavStyled>

                    {/* Left-corner: Logo PPSMB */}
                    <NavLogoStyled href ="/beranda">
                        <img src={LogoPPSMBOfficial} alt='Logo PPSMB'/>
                        <p>PPSMB UGM 2021</p>
                    </NavLogoStyled>
                                
                    {/* Right-corner desktop & dropdown menu mobile: Menu Navigasi  */}
                    <NavItemsStyled className={this.state.clicked ? 'nav-items active' : 'nav-items'}>
                        {MenuItems.map((item,index) => {
                            return (
                                <li key={index}>
                                    <NavLinksStyled className='nav-links' href={item.url}>{item.title}</NavLinksStyled>
                                </li>
                            )
                        })}
                    </NavItemsStyled>

                    {/* Right-corner mobile: Hamburger bar & cross symbol*/}
                    <NavIconStyled  onClick={this.handleClick}>
                        <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars } className='fa-icon'/>
                    </NavIconStyled>                    
                </NavStyled>
            </Header>
        )
    }
    
}

const Header = styled.header` //Give block with same height as absolute navbar
    height: calc(0.5rem + 8vmin);
    display: inline-block;
    width: 100%;
`

const NavStyled = styled.nav`
    //Container style
    z-index: 3;
    box-sizing: border-box;
    background: var(--color-white);
    box-shadow: 0 4px 2px -2px rgba(0,0,0,.2);
    height: calc(0.5rem + 8vmin);
    width: 100%;
    top: 0;

    //Text style
    white-space: nowrap;
    font-size: calc(0.5rem + 1.5vmin);

    //Flex layout
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`

const NavLogoStyled = styled.a`
    display:flex;
    color: var(--color-darkblue);
    align-items: center;
    text-align: center;
    text-decoration: none;
    margin-left: 5vmin;
    cursor: pointer;

    img {
        height: 1.8em;
        margin: 10px;
    }
    
    p {
        color: var(--color-darkblue);
        text-decoration: none;    
        font-weight: bold;
        font-size: calc(0.5rem + 2vmin);
    }
`
const NavItemsStyled = styled.ul`
    display: grid;
    grid-template-columns: repeat(${MenuItems.length}, auto);
    grid-column-gap: 5vw;
    padding: 0;
    margin-right: 5vmin;

    li {
        list-style-type: none;
    }

    @media (max-width: 1024px) {
        &.nav-items{
            display: flex;
            position: absolute;
            margin: 0;
            padding: 0;
            flex-direction: column;
            width: 100%;
            top: calc(0.5rem + 8vmin);
            left: -100%;
            transition: all 0.5s ease; 
        }
    
        &.nav-items.active {
            background:var(--color-white);
            top: calc(0.5rem + 8vmin);
            left: 0;
            opacity: 1;
            transition: all 0.5 ease-in-out;
            box-shadow: 0 4px 2px -2px rgba(0,0,0,.2);
        }
    }
`

const NavLinksStyled = styled.a`
    color: var(--color-black);
    text-decoration: none;
    transition: all 0.2s ease-out;  

    &.nav-links:hover {
        color: var(--color-darkblue);
    }

    @media (max-width: 1024px) {
        width: 100%;
        display: table;
        padding: 3vh 0 3vh 0;
    
        &.nav-links:hover {
            background-color: var(--color-darkblue);
            color: var(--color-white);
            transition: all 0.2s ease-out;
        }
    } 
`

const NavIconStyled = styled.image`
    display: none;

    @media (max-width: 1024px) {
        display: block;
        margin-right: 5vmin;
        font-size: calc(0.5rem + 2vmin);
        cursor: pointer;

        .fa-icon {
            color: var(--color-black);
        }
        .fa-icon:hover {
            color:var(--color-darkblue);
        }
    }
`