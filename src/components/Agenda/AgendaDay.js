import React, { useState } from "react";
import styled from "styled-components";
import one from "../../assets/images/agenda/DayContainer/one.png";
import two from "../../assets/images/agenda/DayContainer/two.png";
import three from "../../assets/images/agenda/DayContainer/three.png";
import four from "../../assets/images/agenda/DayContainer/four.png";
import five from "../../assets/images/agenda/DayContainer/five.png";
import six from "../../assets/images/agenda/DayContainer/six.png";
import Button from "../main/Button";
import Breadcrumb from "../main/Breadcrumb";
import Fade from "react-reveal/Fade"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";


export default function Day(props) {
  // const { day } = props;

  const {day} = useParams();

  const [BreadcrumbText, setBreadcrumbText] = useState(
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
      : "Hari Ke-1"
  );
  const DataBreadcrumb = [
    {
      text: "PPSMB UGM 2021",
    },
    {
      text: "Agenda",
    },
    {
      text: `${BreadcrumbText}`,
    },
  ];
  const [BreadcrumbPrimer, setBreadcrumbPrimer] = useState(
    day === "one"
      ? "white"
      : day === "two"
      ? "white"
      : day === "three"
      ? "white"
      : day === "four"
      ? "white"
      : day === "five"
      ? "white"
      : day === "six"
      ? "white"
      : "white"
  );

  const [BreadcrumbSecondary, setBreadcrumbSecondary] = useState(
    day === "one"
      ? "yellow"
      : day === "two"
      ? "white"
      : day === "three"
      ? "white"
      : day === "four"
      ? "white"
      : day === "five"
      ? "white"
      : day === "six"
      ? "white"
      : "white"
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

  const [TextColor, setTextColor] = useState(
    day === "one"
      ? "orange"
      : day === "two"
      ? "blue"
      : day === "three"
      ? "red"
      : day === "four"
      ? "blue"
      : day === "five"
      ? "red"
      : day === "six"
      ? "red"
      : "orange"
  );

  const [Color, setColor] = useState(
    day === "one"
      ? "orange"
      : day === "two"
      ? "yellow"
      : day === "three"
      ? "red"
      : day === "four"
      ? "blue"
      : day === "five"
      ? "orange"
      : day === "six"
      ? "red"
      : "orange"
  );
  const [Pdf, setPdf] = useState(
    day === "one"
      ? "https://drive.google.com/file/d/13sra5N2F8C38bRfwIQrbrlOwpMWZ1Vow/preview"
      : day === "two"
      ? "https://drive.google.com/file/d/13sra5N2F8C38bRfwIQrbrlOwpMWZ1Vow/preview"
      : day === "three"
      ? "https://drive.google.com/file/d/13sra5N2F8C38bRfwIQrbrlOwpMWZ1Vow/preview"
      : day === "four"
      ? "https://drive.google.com/file/d/13sra5N2F8C38bRfwIQrbrlOwpMWZ1Vow/preview"
      : day === "five"
      ? "https://drive.google.com/file/d/13sra5N2F8C38bRfwIQrbrlOwpMWZ1Vow/preview"
      : day === "six"
      ? "https://drive.google.com/file/d/13sra5N2F8C38bRfwIQrbrlOwpMWZ1Vow/preview"
      : ""
  );

  return (
    <DayStyle day={day}>
      <div className="day-container">
        <Breadcrumb
          data={DataBreadcrumb}
          primer={BreadcrumbPrimer}
          secondary={BreadcrumbSecondary}
        />
        <Fade bottom>
        <div className="title-container">
          <h1>Agenda </h1>
          <div className="diamond">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="14.6206"
                width="20.6765"
                height="20.6765"
                transform="rotate(-45 0 14.6206)"
                fill="white"
              />
            </svg>
          </div>
          <h3>{Title}</h3>
        </div>
        </Fade>

        <div className="pdf-container">
          <div className="pdf-content">
          <Fade >
            <iframe id="pdf" src={Pdf} frameborder="0" cellspacing="0"></iframe>
            </Fade>
            <Fade bottom>
            <p className="noted">
              *Login menggunakan akun SSO UGM untuk melihat dokumen-dokumen di
              atas
            </p>
            </Fade>
          </div>

        </div>
        <div className="button-container">
          <div className="button-content">
          <Fade bottom>
            <div className="back-button">
              <Button text="kembali" textColor={TextColor}>
                <div className="back-icon">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 40 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.639351 18.0412L15.0848 32.3666C15.4971 32.7755 16.0467 33 16.6327 33C17.2194 33 17.7686 32.7752 18.181 32.3666L19.4925 31.0657C19.9046 30.6574 20.1315 30.1121 20.1315 29.5306C20.1315 28.9495 19.9046 28.3858 19.4925 27.9775L11.0653 19.6021L37.839 19.6021C39.0462 19.6021 40 18.6649 40 17.4675V15.6283C40 14.4309 39.0462 13.3992 37.839 13.3992L10.9697 13.3992L19.4922 4.97702C19.9042 4.5681 20.1312 4.0376 20.1312 3.45615C20.1312 2.87534 19.9042 2.3371 19.4922 1.9285L18.1807 0.631763C17.7683 0.222843 17.219 0 16.6324 0C16.0464 0 15.4968 0.225742 15.0844 0.634663L0.639023 14.9598C0.225693 15.37 -0.00162125 15.9176 7.62939e-06 16.4997C-0.00129318 17.0837 0.225693 17.6316 0.639351 18.0412Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </Button>
            </div>
            </Fade>
            <Fade bottom>
            <div className="download-button">
              <Button text="Download" color={Color}>
                <div className="download-icon">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 464 464"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M215.029 360.97C217.258 363.199 219.904 364.967 222.815 366.173C225.727 367.379 228.848 368 232 368C235.152 368 238.273 367.379 241.185 366.173C244.097 364.967 246.742 363.199 248.971 360.97L339.48 270.461C343.981 265.96 346.509 259.856 346.509 253.491C346.509 247.125 343.981 241.021 339.48 236.52C334.979 232.019 328.875 229.491 322.51 229.491C316.144 229.491 310.04 232.019 305.539 236.52L256 286.059V24C256 17.6348 253.472 11.5303 248.971 7.02944C244.47 2.52856 238.365 0 232 0C225.635 0 219.53 2.52856 215.03 7.02944C210.529 11.5303 208 17.6348 208 24V286.059L158.461 236.52C153.96 232.019 147.856 229.491 141.491 229.491C135.125 229.491 129.021 232.019 124.52 236.52C120.019 241.021 117.491 247.125 117.491 253.491C117.491 259.856 120.019 265.96 124.52 270.461L215.029 360.97Z"
                      fill="white"
                    />
                    <path
                      d="M440 208C433.635 208 427.53 210.529 423.029 215.029C418.529 219.53 416 225.635 416 232V416H48V232C48 225.635 45.4714 219.53 40.9706 215.029C36.4697 210.529 30.3652 208 24 208C17.6348 208 11.5303 210.529 7.02944 215.029C2.52856 219.53 0 225.635 0 232V424C0 434.609 4.21427 444.783 11.7157 452.284C19.2172 459.786 29.3913 464 40 464H424C434.609 464 444.783 459.786 452.284 452.284C459.786 444.783 464 434.609 464 424V232C464 225.635 461.471 219.53 456.971 215.029C452.47 210.529 446.365 208 440 208Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Button>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </DayStyle>
  );
}

const DayStyle = styled.div`
  height: 150vmin;
  width: 100%;
  background-image: ${(props) =>
    props.day === "one"
      ? `url(${one})`
      : props.day === "two"
      ? `url(${two})`
      : props.day === "three"
      ? `url(${three})`
      : props.day === "four"
      ? `url(${four})`
      : props.day === "five"
      ? `url(${five})`
      : props.day === "six"
      ? `url(${six})`
      : `url(${one})`};

  background-repeat: no-repeat;
  background-size: 100% 150vmin;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .day-container {
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title-container {
    width: 80%;
    display: flex;
    align-items: center;
  }
  .diamond {
    display: flex;
    width: 3vmin;
    height: 3vmin;
    margin-right: 2vmin;
  }
  .title-container > h1 {
    color: white;
    margin-right: 2vmin;
    font-size: 7vmin;
  }
  .title-container > h3 {
    color: white;
    font-size: 7vmin;
  }
  .pdf-container {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pdf-content {
    padding: 5% 5% 2.5% 5%;
    width: 90%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 5vmin;
    border-style: solid;
    border-color: white;
    border-width: 1vmin;
    justify-content: center;

    background: ${(props) =>
      props.day === "one"
        ? "linear-gradient(180deg, #FEBE10 0%, #FE6610 100%)"
        : props.day === "two"
        ? "#FEBE10"
        : props.day === "three"
        ? "#F31958"
        : props.day === "four"
        ? "#448BCA"
        : props.day === "five"
        ? "linear-gradient(180deg, #FEBE10 0%, #FE6610 100%)"
        : props.day === "six"
        ? "#F31958"
        : "black"};
  }

  .noted {
    color: white;
    width: 100%;
    font-size: 2.5vmin;
  }
  #pdf {
    height: 75vmin;
    width: 100%;
  }

  .button-container {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 7vmin;
  }
  .button-content {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .back-icon {
    height: 2vmin;
    width: 3vmin;
    margin-right: 2vmin;
  }

  .download-icon {
    height: 3vmin;
    width: 3vmin;
    margin-right: 2vmin;
  }
  .back-icon > svg > path {
    fill: ${(props) =>
      props.day === "one"
        ? "#FF7C02"
        : props.day === "two"
        ? "#0593F7"
        : props.day === "three"
        ? "#F31958"
        : props.day === "four"
        ? "#448BCA"
        : props.day === "five"
        ? "#FF7C02"
        : props.day === "six"
        ? "#F31958"
        : "black"};
  }

  .download-icon > svg > path {
    fill: white;
  }

  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 992px) {
    .diamond {
      width: 2vmin;
      height: 2vmin;
    }
    .title-container > h1 {
      font-size: 5vmin;
    }
    .title-container > h3 {
      font-size: 5vmin;
    }
    .noted {
      font-size: 2vmin;
      text-align: center;
    }
    .button-container {
      width: 80%;

      justify-content: center;
    }
    .button-content {
      width: 90%;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 768px) {
    height: 200vmin;
    background-size: 100% 200vmin;
    .day-container {
      width: 90%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .back {
      width: 4vmin;
      height: 4vmin;
    }
    .breadcrumb-content > a {
      font-size: 3.5vmin;
    }
    .diamond {
      width: 3.5vmin;
      height: 3.5vmin;
    }
    .title-container > h1 {
      font-size: 6vmin;
    }
    .title-container > h3 {
      font-size: 6vmin;
    }
    .noted {
      font-size: 2.5vmin;
    }
    #pdf {
      height: 90vmin;
      width: 100%;
    }
    .button-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 7vmin;
    }
    .button-content {
      width: 90%;

      flex-direction: column-reverse;
    }
    .back-icon {
      height: 5vmin;
      width: 5vmin;
    }

    .download-icon {
      height: 5vmin;
      width: 5vmin;
    }
    .back-button {
      margin-top: 6vmin;
    }
    .download-button {
    }
  }
  @media screen and (max-width: 500px) {
    height: 100vmax;
    background-size: 100% 100vmax;
  }
`;
