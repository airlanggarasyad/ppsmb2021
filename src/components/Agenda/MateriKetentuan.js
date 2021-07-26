import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import Card from "./CarouselCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Batik from "../../assets/images/agenda/Carousel/background.png";
import Breadcrumb from "../main/Breadcrumb";
import Fade from "react-reveal/Fade"

export default class AgendaPenugasan extends Component {
  state = {
    activeSlide: 0,
    activeSlide2: 0,
  };
  render() {
    const dataCard = [
      {
        title: "Materi",
        text: "PPSMB UGM ditampilkan dalam bentuk slides , dan video untuk memudahkan Gamada dalam mengerjakan penugasan PPSMB UGM. ",
        image: "agenda",
        link: "/2021/materi-ketentuan/materi",
        button:"selengkapnya",
        color:"yellow",
        hover :"none"
      },
      {
        title: "Ketentuan & Panduan Penugasan",
        text: "PPSMB UGM ditampilkan dalam bentuk slides , dan video untuk memudahkan Gamada dalam mengerjakan penugasan PPSMB UGM. ",
        link: "/2021/materi-ketentuan/ketentuan",
        image: "ketentuan",
        button:"selengkapnya",
        color:"yellow",
        hover :"none"
        // link: "/Competition/CompetitiveProgramming",
      },
      {
        title: "Materi Tambahan",
        text: "berisikan materi-materi PPSMB UGM sebagai penunjang untuk pengerjaan penugasan. Untuk mengaksesnya, Gamada harus login menggunakan email UGM masing-masing.",
        link: "/2021/materi-ketentuan",
        image: "materi",
        button:"Segera Hadir",
        color:"grey",
        hover :"none"
        // link: "/Competition/CompetitiveProgramming",
      },
    ];
    const DataBreadcrumb = [
      {
        text: "PPSMB UGM 2021 ",
        link: "/2021"
     
      },
      {
        text: "Materi & Ketentuan",
        link: "/2021/materi-ketentuan"
      },
  
    ];
    const SlickArrowLeft = ({ ...props }) => (
      <div {...props} className={"slick-prev"} type="button">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 101 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 48.5C3 73.5159 24.1511 94 50.5 94C76.8489 94 98 73.5159 98 48.5C98 23.4841 76.8489 3 50.5 3C24.1511 3 3 23.4841 3 48.5Z"
            fill="white"
            stroke="#0593F7"
            stroke-width="6"
          />
          <path
            d="M25.8408 48.496L44.2395 30.8255C44.7647 30.3211 45.4647 30.0443 46.2111 30.0443C46.9583 30.0443 47.6579 30.3215 48.1831 30.8255L49.8536 32.4302C50.3784 32.9338 50.6675 33.6065 50.6675 34.3237C50.6675 35.0406 50.3784 35.7359 49.8536 36.2395L39.12 46.5706H73.221C74.7585 46.5706 75.9734 47.7266 75.9734 49.2037V51.4723C75.9734 52.9493 74.7585 54.2218 73.221 54.2218H38.9983L49.8532 64.6107C50.378 65.1151 50.6671 65.7694 50.6671 66.4867C50.6671 67.2031 50.378 67.867 49.8532 68.371L48.1827 69.9705C47.6575 70.4749 46.9579 70.7498 46.2107 70.7498C45.4643 70.7498 44.7643 70.4714 44.2391 69.967L25.8404 52.2969C25.3139 51.7909 25.0244 51.1155 25.0265 50.3974C25.0248 49.677 25.3139 49.0012 25.8408 48.496Z"
            fill="#0593F7"
          />
        </svg>
      </div>
    );
    const SlickArrowRight = ({ ...props }) => (
      <div {...props} className={"slick-next "} type="button">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 97 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="48.5"
            cy="48.5"
            r="45.5"
            fill="white"
            stroke="#0593F7"
            stroke-width="6"
          />
          <path
            d="M72.1825 48.496L54.5125 30.8255C54.0081 30.3211 53.3358 30.0443 52.619 30.0443C51.9013 30.0443 51.2295 30.3215 50.7251 30.8255L49.1208 32.4302C48.6168 32.9338 48.3391 33.6065 48.3391 34.3237C48.3391 35.0406 48.6168 35.7359 49.1208 36.2395L59.4292 46.5706H26.6787C25.2021 46.5706 24.0354 47.7266 24.0354 49.2037V51.4723C24.0354 52.9493 25.2021 54.2218 26.6787 54.2218H59.5462L49.1212 64.6107C48.6171 65.1151 48.3395 65.7694 48.3395 66.4867C48.3395 67.2031 48.6171 67.867 49.1212 68.371L50.7255 69.9705C51.2299 70.4749 51.9017 70.7498 52.6194 70.7498C53.3362 70.7498 54.0085 70.4714 54.5129 69.967L72.1829 52.2969C72.6885 51.7909 72.9666 51.1155 72.9646 50.3974C72.9662 49.677 72.6885 49.0012 72.1825 48.496Z"
            fill="#0593F7"
          />
        </svg>
      </div>
    );

    const settings = {
      className: "",
      dots: true,
      // autoplay: true,
      // autoplaySpeed: 5000,
      infinite: true,

      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      arrows: true,
      customPaging: function (i) {
        return (
          <a>
            <div
              className={
                i + 1 === 1
                  ? "icon icon-red"
                  : i + 1 === 2
                  ? "icon icon-yellow"
                  : i + 1 === 3
                  ? "icon icon-blue"
                  : "icon"
              }
            >
              {" "}
              <img
                src={
                  require(`../../assets/images/agenda/Icon/icon-carousel-${
                    i + 1
                  }.png`).default
                }
              />
            </div>
          </a>
        );
      },
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: (current) => this.setState({ activeSlide2: current }),
    };
    return (
      <AgendaStyle>
        <div
          className={
            `${this.state.activeSlide2}` === `0`
              ? "carousel-container bg-red"
              : `${this.state.activeSlide2}` === `1`
              ? "carousel-container bg-yellow"
              : `${this.state.activeSlide2}` === `2`
              ? "carousel-container bg-blue"
              : "carousel-container"
          }
        >
          {" "}
        </div>
        <div className="breadcrumb-container">
          <div className="breadcrumb">
            <Breadcrumb data={DataBreadcrumb} secondary="black" back="/2021"/>
          </div>
        </div>
        <div className="batik-bg">
          <img src={Batik} alt="" />
        </div>
        <Slider {...settings}>
          {dataCard.map((item, index) => {
            return (
              <div className="card-carousel-container">
                {" "}
                
                <Card key={index} text={item.text} color={item.color} button={item.button} title={item.title} link={item.link} image={item.image} ></Card>
              </div>
            );
           
          } 
          )}

        
        </Slider>
      </AgendaStyle>
    );
  }
 
}


const AgendaStyle = styled.div`
  height: auto;
  
  width: 100%;
  overflow: hidden;
  position: relative;
  .breadcrumb-container {
    display: flex;
    height: 10vmin;
    width: 100vw;
    position: absolute;
    justify-content: center;
    z-index: 3;
  }
  .breadcrumb {
    width: 85%;
    margin-top: 5vmin;
  }
  .carousel-container {
    display: flex;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -2;
    justify-content: center;
  }
  .bg-red {
    transition: ease 0.5s;
    background: #ea0446;
  }
  .bg-yellow {
    transition: ease 0.5s;
    background: #ffbe00;
  }
  .bg-blue {
    transition: ease 0.5s;
    background: #0593f7;
  }

  .batik-bg {
    position: absolute;
    height: 100vmin;
    width: 100vw;
    z-index: -1;
    pointer-events: none;
  }

  .batik-bg > img {
    height: 100%;
    width: 100%;
    opacity: 0.7;
  }
  .card-carousel-container {
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vmin;
  }
  .slick-prev:before {
    content: "";
  }
  .slick-next:before {
    content: "";
  }
  .slick-prev {
    left: 7.5vw;
  }
  .slick-next {
    right: 7.5vw;
  }
  .slick-prev,
  .slick-next {
    z-index: 3;
    width: 10vmin;
    height: 10vmin;
    padding: 0;
  }
  .slick-dots {
    width: 65vmin;
    left: 15vw;
    bottom: 10vh;
    display: flex !important;
    justify-content: space-evenly;
  }
  .slick-dots li {
    width: 14vmin;
    height: 14vmin;
    overflow: hidden;
    border-radius: 3vmin;
    border: white solid 0.5vh;
  }
  .slick-dots > .slick-active {
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.3);
  }
  .icon {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon > img {
    width: 85%;
    height: 85%;
  }
  .icon-red {
    background: #ea0446;
  }
  .icon-yellow {
    background: #ffbe00;
  }
  .icon-blue {
    background: #0593f7;
  }
  .icon-red:hover {
    background: #f31958;
  }
  .icon-yellow:hover {
    background: #fe9f10;
  }
  .icon-blue:hover {
    background: #4472ca;
  }
  @media screen and (max-width: 1200px) {
    .slick-prev,
    .slick-next {
      width: 8vmin;
      height: 8vmin;
    }
    .slick-prev {
      left: 7vw;
    }
    .slick-next {
      right: 7vw;
    }
    .slick-dots li {
      width: 12vmin;
      height: 12vmin;
    }
    .slick-dots {
      width: 100vw;
      left: 0;
      bottom: 10vmin;
      display: flex !important;
      justify-content: center;
    }
    .slick-dots li {
      margin: 0 5vw 0 5vw;
    }
  }
  @media screen and (max-width: 992px) {
    height: auto;
    .breadcrumb {
      margin-top: 10vmin;
    }
    .batik-bg {
      position: absolute;
      height: 130vmin;
    }
    .card-carousel-container {
      height: 130vmin;
    }
    .slick-dots {
      bottom: 25vmin;
    }
  }
  @media screen and (max-width: 768px) {
    height: auto;
    .breadcrumb {
      margin-top: 10vmin;
    }
    .batik-bg {
      position: absolute;
      height: 200vmin;
    }
    .card-carousel-container {
      height: 200vmin;
    }
    .slick-prev,
    .slick-next {
      width: 10vmin;
      height: 10vmin;
    }
    .slick-dots li {
      width: 14vmin;
      height: 14vmin;
    }
    .slick-dots {
      width: 100vw;
      left: 0;
      bottom: 14vmin;
      display: flex !important;
      justify-content: center;
    }
  }
  @media screen and (max-width: 500px) {
    height: auto;
    .batik-bg {
      position: absolute;
      height: 220vmin;
    }
    .card-carousel-container {
      height: 220vmin;
    }
    .slick-dots {
      bottom: 22vmin;
    }
  }
  @media screen and (max-width: 300px) {
    height: 240vmin;
    .batik-bg {
      position: absolute;
      height: 240vmin;
    }
    .card-carousel-container {
      height: 240vmin;
    }
  }
`;
