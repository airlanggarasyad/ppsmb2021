import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import styled from "styled-components";

import LogoPPSMBOfficial from "../../assets/img/logo-ppsmb-official.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ComingSoon from "../../assets/img/maskot-comingsoon.png";

export default class Navbar extends Component {
  state = { clicked: false, modalIsOpen: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  nothing = () => {};

  openModal = (e) => {
    if (e.target.classList[1] !== undefined) {
      this.setState({ clicked: this.clicked, modalIsOpen: true });
      console.log(this.state.modalIsOpen);
    }
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    Modal.setAppElement("#root");

    return (
      <Header id="nav">
        <nav className="navbar">
          {/* Left-corner: Logo PPSMB */}
          <Link
            to="/2021"
            relative
            className="logo"
            onClick={this.state.clicked ? this.handleClick : this.nothing()}
          >
            <img src={LogoPPSMBOfficial} alt="Logo PPSMB" />
            <p>PPSMB UGM 2021</p>
          </Link>

          {/* Right-corner desktop & dropdown menu mobile: Menu Navigasi  */}
          <NavItemsStyled
            className={this.state.clicked ? "nav-items active" : "nav-items"}
            onClick={this.handleClick}
          >
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className={item.block ? "nav-links block" : "nav-links"}
                    to={item.block ? {} : item.url}
                    onClick={this.openModal}
                    relative
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </NavItemsStyled>

          {/* Right-corner mobile: Hamburger bar & cross symbol*/}
          <NavIconStyled onClick={this.handleClick}>
            <FontAwesomeIcon
              icon={this.state.clicked ? faTimes : faBars}
              className="fa-icon"
            />
          </NavIconStyled>
        </nav>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          closeTimeoutMS={500}
          parentSelector={() => document.querySelector("#nav")}
          className="blockModal"
          overlayClassName="blockModalOverlay"
        >
          <div className="content-modal" onClick={this.closeModal}>
            <img src={ComingSoon} alt="Maskot Coming Soon" />
          </div>
        </Modal>
      </Header>
    );
  }
}

const Header = styled.header`
  //Give block with same height as absolute navbar
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  height: calc(0.5rem + 7.5vmin);
  z-index: 20;
  position: relative;

  .navbar {
    //Container style
    z-index: 3;
    background: var(--color-white);
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    padding: 0.6vmin;
    width: 100%;
    top: 0;
    min-height: 12vmin;

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

    .logo {
      display: flex;
      color: var(--color-darkblue);
      align-items: center;
      text-align: center;
      text-decoration: none;
      margin-left: 5vmin;
      cursor: pointer;

      img {
        height: 2.5em;
        padding: 0.5em;
      }

      p {
        color: var(--color-darkblue);
        text-decoration: none;
        font-weight: bold;
        font-size: calc(0.5rem + 2vmin);
        margin: 0;
      }
    }
    background: var(--color-white);
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
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
  }
  @media (min-width: 1024px) {
    .navbar {
      min-height: 0vmin;
      padding-right: 5vmin;
    }
  }

  .blockModal {
    position: fixed;
    top: 50vh;
    left: 50vw;
    right: auto;
    bottom: auto;
    margin-left: -40vw;
    margin-top: -35vh;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    outline: none;
    width: 80%;
    height: 70%;
    position: relative;
    border-radius: 10vmin;
  }

  .blockModalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.6);
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
    transition: opacity 200ms ease-in-out;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  .content-modal {
    height: 100%;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    transition: opacity 200ms ease-in-out;

    img {
      height: auto;
      width: 100%;
    }

    @media (min-width: 576px) {
      img {
        width: auto;
        height: 100%;
      }
    }
  }
`;
const NavItemsStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(${MenuItems.length}, auto);
  grid-column-gap: 5vw;
  padding: 0;
  margin-right: 5vmin;
  margin: 0;

  li {
    list-style-type: none;
  }

  @media (max-width: 1024px) {
    &.nav-items {
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
      background: var(--color-white);
      top: calc(0.5rem + 8vmin);
      left: 0;
      opacity: 1;
      transition: all 0.5 ease-in-out;
      box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    }
  }

  .nav-links {
    color: var(--color-black);
    text-decoration: none;
    transition: all 0.2s ease-out;
    margin: 0;

    &:hover {
      color: var(--color-darkblue);
    }

    @media (max-width: 1024px) {
      width: 100%;
      display: table;
      padding: 3vh 0 3vh 0;

      &:hover {
        background-color: var(--color-darkblue);
        color: var(--color-white);
        transition: all 0.2s ease-out;
      }
    }
  }
`;

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
      color: var(--color-darkblue);
    }
  }
`;
