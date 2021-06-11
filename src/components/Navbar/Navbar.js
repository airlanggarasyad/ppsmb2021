import React, {Component} from 'react'
import {MenuItems} from "./MenuItems"
import styled from "styled-components";
import GlobalStyle from '../../globalStyle';

import LogoPPSMBOfficial from '../../assets/img/logo-ppsmb-official.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

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
                    <NavLogoStyled href ="#">
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

const Header = styled.header`
    height: calc(0.5rem + 8vmin);
    display: inline-block;
`

const NavStyled = styled.nav`
    //Container style
    z-index:2;
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

    @media (max-width: 768px) {
        &.nav-items{
            display: flex;
            position: absolute;
            margin: 0;
            padding: 0;
            flex-direction: column;
            width: 100vw;
            top: calc(0.5rem + 8vmin);
            left: -110%;
            transition: all 0.5s ease; 
        }
    
        &.nav-items.active {
            background:var(--color-white);
            top: calc(0.5rem + 8vmin);
            left: 0;
            width: 100%;
            opacity: 1;
            transition: all 0.5 ease;
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

    @media (max-width: 768px) {
        width: 100%;
        display: table;
        padding: 3vh;
    
        &.nav-links:hover {
            background-color: var(--color-darkblue);
            color: var(--color-white);
            transition: all 0.2s ease-out;
        }
    } 
`

const NavIconStyled = styled.image`
    display: none;

    @media (max-width: 768px) {
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