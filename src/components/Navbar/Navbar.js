import React, {Component} from 'react'
import {MenuItems} from "./MenuItems"
import styled from "styled-components";
import GlobalStyle from '../../globalStyle';

import LogoPPSMBOfficial from '../../assets/img/logo-ppsmb-official.webp';

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
                    <NavLogoStyled>
                        <img src={LogoPPSMBOfficial} alt='Logo PPSMB'/>
                        <h1>PPSMB UGM 2021</h1>    
                    </NavLogoStyled>
                                
                    {/* Right-corner desktop & dropdown menu mobile: Menu Navigasi  */}
                    <NavItemsStyled className={this.state.clicked ? 'nav-items active' : 'nav-items'}>
                        {MenuItems.map((item,index) => {
                            return (
                                <li key={index}>
                                    <NavLinksStyled className={item.cName} href={item.url}>{item.title}</NavLinksStyled>
                                </li>
                            
                            )
                        })}
                    </NavItemsStyled>

                    {/* Right-corner mobile: Hamburger bar & cross symbol*/}
                    <NavIconStyled className="menu-icon" onClick={this.handleClick}>
                                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
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
    font-size: calc(0.5rem + 1vmin);

    //Flex layout
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`

const NavLogoStyled = styled.div`
    display:flex;
    color: var(--color-darkblue);
    align-items: center;
    text-align: center;
    text-decoration: none;
    margin-left: 5vmin;
    cursor: pointer;

    img {
        height: 1.8em;
        padding: 10px;
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

    &:hover {
        color: var(--color-darkblue);
        transition: all 0.2 ease-out;
        
    }

    @media (max-width: 768px) {
        width: 100%;
        display: table;
        background-color: var(--color--blue);
        padding: 3vh;
    
        &:hover {
            background-color: var(--color-yellow);
            transition: 250ms;
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

        .fa-times {
            color: var(--color-black);
        }
        .fa-times:hover {
            color:var(--color-darkblue);
        }
        .fa-bars {
            color:var(--color-black);
        }
        .fa-bars:hover {
            color:var(--color-darkblue);
        }
    }
`