import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import BgOne from "../../assets/img/ppsmb-fakultas/PPSMB-Biologi.webp";
import BgTwo from "../../assets/img/ppsmb-fakultas/PPSMB-EkonomikadanBisnis.webp";
import BgThree from "../../assets/img/ppsmb-fakultas/PPSMB-Farmasi.webp";
import BgFour from "../../assets/img/ppsmb-fakultas/PPSMB-Filsafat.webp";
import BgFive from "../../assets/img/ppsmb-fakultas/PPSMB-Geografi.webp";
import BgSix from "../../assets/img/ppsmb-fakultas/PPSMB-Hukum.webp";
import BgSeven from "../../assets/img/ppsmb-fakultas/PPSMB-IlmuBudaya.webp";
import BgEight from "../../assets/img/ppsmb-fakultas/PPSMB-Fisipol.webp";
import BgNine from "../../assets/img/ppsmb-fakultas/PPSMB-KedokteranGigi.webp";
import BgTen from "../../assets/img/ppsmb-fakultas/PPSMB-KedokteranHewan.webp";
import BgEleven from "../../assets/img/ppsmb-fakultas/PPSMB-Kehutanan.webp";
import BgTwelve from "../../assets/img/ppsmb-fakultas/PPSMB-KKMK.webp";
import BgThirteen from "../../assets/img/ppsmb-fakultas/PPSMB-MIPA.webp";
import BgFourteen from "../../assets/img/ppsmb-fakultas/PPSMB-Pertanian.webp";
import BgFivteen from "../../assets/img/ppsmb-fakultas/PPSMB-Peternakan.webp";
import BgSixteen from "../../assets/img/ppsmb-fakultas/PPSMB-Psikologi.webp";
import BgSeventeen from "../../assets/img/ppsmb-fakultas/PPSMB-Teknik.webp";
import BgEighteen from "../../assets/img/ppsmb-fakultas/PPSMB-TeknologiPertanian.webp";
import BgNineteen from "../../assets/img/ppsmb-fakultas/PPSMB-SekolahVokasi.webp";

export default function Card(props) {
  const { day } = props;
  const [Text, setText] = useState(
    day === "one"
      ? "Fakultas Biologi"
      : day === "two"
      ? "Fakultas Ekonomi dan Bisnis"
      : day === "three"
      ? "Fakultas Farmasi"
      : day === "four"
      ? "Fakultas Filsafat"
      : day === "five"
      ? "Fakultas Geografi"
      : day === "six"
      ? "Fakultas Hukum"
      : day === "seven"
      ? "Fakultas Ilmu Budaya"
      : day === "eight"
      ? "Fakultas Ilmu Sosial dan Politik"
      : day === "nine"
      ? "Fakultas Kedokteran Gigi"
      : day === "ten"
      ? "Fakultas Kedokteran Hewan"
      : day === "eleven"
      ? "Fakultas Kehutanan"
      : day === "twelve"
      ? "Fakultas Kedokteran, Kesehatan, Masyarakat dan Keperawatan"
      : day === "thirteen"
      ? "Fakultas Matematika dan Ilmu pengetahuan Alam "
      : day === "fourteen"
      ? "Fakultas Pertanian"
      : day === "fivteen"
      ? "Fakultas Pertenakan"
      : day === "sixteen"
      ? "Fakultas Psikologi"
      : day === "seventeen"
      ? "Fakultas Teknik"
      : day === "eighteen"
      ? "Fakultas Teknologi Pertanian"
      : day === "nineteen"
      ? "Fakultas Sekolah Vokasi"
      : "PPSMB"
  );
  const [Title, setTitle] = useState(
    day === "one"
      ? "Hari Ke-1"
      : day === "two"
      ? "Hari Ke-2"
      : day === "three"
      ? "Hari Ke-3"
      : day === "four"
      ? "Hari Ke-4"
      : day === "five"
      ? "Hari Ke-5"
      : day === "six"
      ? "Hari Ke-6"
      : "Hari Ke-7"
  );

  return (
    <CardStyle day={day}>
     
      <div className="card-background">
        {
           day === "one"
           ? (
            <img src={BgOne} alt="" />
          )
           : day === "two"
           ? (
            <img src={BgTwo} alt="" />
          )
           : day === "three"
           ? (
            <img src={BgThree} alt="" />
          )
           : day === "four"
           ? (
            <img src={BgFour} alt="" />
          )
           : day === "five"
           ? (
            <img src={BgFive} alt="" />
          )
           : day === "six"
           ? (
            <img src={BgSix} alt="" />
          )
           : day === "seven"
           ? (
            <img src={BgSeven} alt="" />
          )
           : day === "eight"
           ? (
            <img src={BgEight} alt="" />
          )
           : day === "nine"
           ? (
            <img src={BgNine} alt="" />
          )
           : day === "ten"
           ? (
            <img src={BgTen} alt="" />
          )
           : day === "eleven"
           ? (
            <img src={BgEleven} alt="" />
          )
           : day === "twelve"
           ? (
            <img src={BgTwelve} alt="" />
          )
           : day === "thirteen"
           ? (
            <img src={BgThirteen} alt="" />
          )
           : day === "fourteen"
           ? (
            <img src={BgFourteen} alt="" />
          )
           : day === "fivteen"
           ? (
            <img src={BgFivteen} alt="" />
          )
           : day === "sixteen"
           ? (
            <img src={BgSixteen} alt="" />
          )
           : day === "seventeen"
           ? (
            <img src={BgSeventeen} alt="" />
          )
           : day === "eighteen"
           ? (
            <img src={BgEighteen} alt="" />
          )
           : day === "nineteen"
           ? (
            <img src={BgNineteen} alt="" />
          )
           : "PPSMB"
        }
     
      </div>
      <div className="card-shadow"></div>
      <div className="card-content">
        <h6>{Text}</h6>
      </div>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  height: 45vmin;
  width: 16vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  border-radius: 2.5vmin;
  box-shadow: 0px 0px 9px -2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition:  500ms ease;
  .card-background {
    height: 45vmin;
    width: 33vmin;
    position: absolute;
    z-index: -2;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .card-background > img {
    height: 30vmin;
    width: 30vmin;
    transform: ${(props) =>
    props.day === "one"
      ? `translate(0vmin,0vmin)`
      : props.day === "two"
      ? `translate(0vmin,0vmin)`
      : props.day === "three"
      ? `translate(0vmin,0vmin)`
      : props.day === "four"
      ? `translate(0vmin,0vmin)`
      : props.day === "five"
      ? `translate(0vmin,0vmin)`
      : props.day === "six"
      ? `translate(0vmin,0vmin)`
      : props.day === "seven"
      ? `translate(0vmin,0vmin)`
      : props.day === "eight"
      ? `translate(0vmin,0vmin)`
      : props.day === "nine"
      ? `translate(0vmin,0vmin)`
      : props.day === "ten"
      ? `translate(0vmin,0vmin)`
      : props.day === "eleven"
      ? `translate(0vmin,0vmin)`
      : props.day === "twelve"
      ? `translate(0vmin,0vmin)`
      : props.day === "thirteen"
      ? `translate(0vmin,0vmin)`
      : props.day === "fourteen"
      ? `translate(0vmin,0vmin)`
      : props.day === "fivteen"
      ? `translate(0vmin,0vmin)`
      : props.day === "sixteen"
      ? `translate(0vmin,0vmin)`
      : props.day === "seventeen"
      ? `translate(0vmin,0vmin)`
      : props.day === "eighteen"
      ? `translate(0vmin,0vmin)`
      : props.day === "nineteen"
      ? `translate(0vmin,0vmin)`
      : "PPSMB"
};

     
  }
  & .card-background > img {
    transition: transform 500ms ease;

  }
  & .card-shadow {
    transition: transform 500ms ease;
  }

  &:hover .card-background > img {
    transform: scale(1.25);
    transition: transform 500ms ease;

  }
  &:hover .card-shadow {
    transform: scale(1, 2);
    transition: transform 500ms ease;
  }
  .card-header {
    position: absolute;
    left: 0;
    top: 0;
  }
  .card-header > h6 {
    font-size: 2vmin;
    margin: 0;
    color: white;
    background-color: ${(props) =>

      props.day === "one"
        ? `#EE225A`
        : props.day === "two"
        ? `#FEBE10`
        : props.day === "three"
        ? `#0075AF`
        : props.day === "four"
        ? `#EE225A`
        : props.day === "five"
        ? `#448BCA`
        : props.day === "six"
        ? `#FEBE10`
        : `#FEBE10`
        
        };
    border-radius: 2vmin 0;
    padding: 1vmin 5vmin 1vmin 5vmin;
  }
  .card-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .card-content > h6 {
    width: 60%;
    text-align: right;
    font-size: 3vmin;
    color: white;
    margin: 0 3vmin 3vmin 0;
  }

  .card-shadow {
    height: 45vmin;
    width: 45vmin;
    position: absolute;
    z-index: -1;

    background: ${(props) => 
     props.day === "one"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #66A3FF 100%
    )`
      : props.day === "two"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 199, 0, 1) 100%
    )`
      : props.day === "three"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #FF0000 100%
    )`
      : props.day === "four"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
       #84E9FF 100%
    )`
      : props.day === "five"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #FF7A00 100%
    )`
      : props.day === "six"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #66A3FF 100%
    )`
      : props.day === "seven"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #FF7A00 100%
    )`
      : props.day === "eight"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
       #84E9FF 100%
    )`
      : props.day === "nine"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #FF7A00 100%
    )`
      : props.day === "ten"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #FF7A00 100%
    )`
      : props.day === "eleven"
      ?`linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 199, 0, 1) 100%
    )`
      : props.day === "twelve"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #66A3FF 100%
    )`
      : props.day === "thirteen"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #66A3FF 100%
    )`
      : props.day === "fourteen"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #FF0000 100%
    )`
      : props.day === "fivteen"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #66A3FF 100%
    )`
      : props.day === "sixteen"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 199, 0, 1) 100%
    )`
      : props.day === "seventeen"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #FF7A00 100%
    )`
      : props.day === "eighteen"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #66A3FF 100%
    )`
      : props.day === "nineteen"
      ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #FF0000 100%
    )`
      : "PPSMB"
    };

    /* background: ${(props) =>


      props.day === "one"
        ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 199, 0, 1) 100%
    )`
        : props.day === "two"
        ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #66A3FF 100%
    )`
        : props.day === "three"
        ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #FF4343 100%
    )`
        : props.day === "four"
        ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #FF0000 100%
    )`
        : props.day === "five"
        ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
      #FF7A00 100%
    )`
        : props.day === "six"
        ? `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
       #84E9FF 100%
    )`
        : `linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 30%,
     #84E9FF 100%
    )`}; */
  }
  @media screen and (max-width: 1200px) {
    width: 24vw;
    .card-background {
      width: 24vw;
    }
  }
  @media screen and (max-width: 992px) {
    height: 25vmin;
    width: 60vw;
    .card-background {
      height: 25vmin;
      width: 60vw;
    }
    .card-background > img {
      height: 70vmin;
      width: 70vmin;
      transform: ${(props) =>
        props.day === "one"
          ? `translate(0vmin,0vmin)`
          : props.day === "two"
          ? `translate(0vmin,0vmin)`
          : props.day === "three"
          ? `translate(0vmin,0vmin)`
          : props.day === "four"
          ? `translate(0vmin,0vmin)`
          : props.day === "five"
          ? `translate(0vmin,0vmin)`
          : props.day === "six"
          ? `translate(0vmin,0vmin)`
          : `translate(0vmin,0vmin)`};
    }
    .card-shadow {
      height: 25vmin;
      width: 70vmin;
    }
  }
  @media screen and (max-width: 768px) {
    height: 30vmin;
    width: 70vw;
    .card-background {
      height: 30vmin;
      width: 70vw;
    }
    .card-background > img {
      height: 70vmin;
      width: 70vmin;
    }
    .card-shadow {
      height: 30vmin;
      width: 70vmin;
    }
    .card-header > h6 {
      font-size: 3vmin;

      border-radius: 2vmin 0;
      padding: 1vmin 5vmin 1vmin 5vmin;
    }
  }
`;
