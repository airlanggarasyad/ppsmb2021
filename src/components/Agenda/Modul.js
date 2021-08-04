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
  Link,
} from "react-router-dom";


export default function Day(props) {
  const { day } = props;

  // const {day} = useParams();

  const [BreadcrumbText, setBreadcrumbText] = useState(
    day === "one"
    ? "Introductory"
    : day === "two"
    ? "Jati Diri UGM Bangun Karakterku"
    : day === "three"
    ? "Peran Aktifku dalam Masyarakat"
    : day === "four"
    ? "Aku Mahasiswa Adaptif dan Sukses"
    : day === "five"
    ? "Aksi Nyataku untuk Masyarakat"
    : day === "six"
    ? "PPSMB Fakultas"
    : "PPSMB"
  );

  const [LinkText, setLinkText] = useState(
    day === "one"
    ? "/2021/materi-ketentuan/materi/ppsmb-universitas/modul-1"
    : day === "two"
    ? "/2021/materi-ketentuan/materi/ppsmb-universitas/modul-2"
    : day === "three"
    ? "/2021/materi-ketentuan/materi/ppsmb-universitas/modul-3"
    : day === "four"
    ? "/2021/materi-ketentuan/materi/ppsmb-universitas/modul-4"
    : day === "five"
    ? "/2021/materi-ketentuan/materi/ppsmb-universitas/modul-5"
    : day === "six"
    ? "PPSMB Fakultas"
    : "PPSMB"
  );
  
  
  const DataBreadcrumb = [
    {
      text: "PPSMB UGM 2021",
      link: "/2021"
    },
    {
      text: "PPSMB Universitas",
      link: "/2021/materi-ketentuan/materi/ppsmb-universitas"
    },
    {
      text: `${BreadcrumbText}`,
      link: `${LinkText}`
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
    ? "Introductory"
    : day === "two"
    ? "Jati Diri UGM Bangun Karakterku"
    : day === "three"
    ? "Peran Aktifku dalam Masyarakat"
    : day === "four"
    ? "Aku Mahasiswa Adaptif dan Sukses"
    : day === "five"
    ? "Aksi Nyataku untuk Masyarakat"
    : day === "six"
    ? "PPSMB Fakultas"
    : "PPSMB"
  );

  const [Elok, setElok] = useState(
    day === "one"
    ? "https://elok.ugm.ac.id/enrol/index.php?id=6717"
    : day === "two"
    ? "https://elok.ugm.ac.id/enrol/index.php?id=6719"
    : day === "three"
    ? "https://elok.ugm.ac.id/enrol/index.php?id=6721"
    : day === "four"
    ? "https://elok.ugm.ac.id/enrol/index.php?id=6722"
    : day === "five"
    ? "https://elok.ugm.ac.id/enrol/index.php?id=6723"
    : day === "six"
    ? " https://elok.ugm.ac.id/course/index.php?categoryid=52"
    : "PPSMB"
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
  const [Text, setText] = useState(
    day === "one"
      ? "Diawali dengan modul “Introductory”, Gamada memperoleh gambaran awal yang berisi informasi lengkap tentang proses pembelajaran yang akan dilakukan oleh Gamada selama PPSMB UGM 2021 berlangsung. Di dalamnya juga terdapat alur dan capaian pembelajaran dari PPSMB UGM 2021."
      : day === "two"
      ? "Modul kedua dengan judul “Jati Diri UGM Bangun Karakterku” mengenalkan sejarah, filosofi, dan nilai-nilai luhur Universitas Gadjah Mada. Selain itu, dibahas juga mengenai peraturan tertulis yang berlaku di Universitas Gadjah Mada sehingga sebagai mahasiswa, Gamada dapat memperoleh informasi mengenai tata cara berkegiatan dalam lingkungan Universitas Gadjah Mada."
      : day === "three"
      ? "Modul ketiga, “Peran Aktifku dalam Masyarakat”, mengajak Gamada untuk mempelajari mengenai empat pokok bahasan, yaitu kesehatan mental dan fisik, isu gender dan kekerasan seksual, multikulturalisme dan jiwa Pancasila, serta kesadaran sosial dan antikorupsi. Empat pokok bahasan tersebut berkaitan erat dengan pengembangan diri Gamada sebagai salah satu faktor penentu keberhasilan karena Gamada merupakan bagian dari akademisi dan komunitas. "
      : day === "four"
      ? "Modul “Aku Mahasiswa Adaptif dan Sukses” yang akan dibahas pada sesi PPSMB Softskills. Melalui modul ini, Gamada diharapkan dapat memperluas wawasan intrapersonal dan interpersonal sebagai bekal untuk menghadapi perkuliahan. Keterampilan-keterampilan tersebut tentu diperlukan oleh Gamada untuk menjadi pembelajar yang sukses di berbagai bidang yang diminati."
      : day === "five"
      ? "Modul “Aksi Nyataku untuk Masyarakat”. Modul tersebut mengupas secara tuntas bagaimana pelaksanaan Action Plan sebagai implementasi atas social awareness dan poin ketiga Tri Dharma Perguruan Tinggi, yaitu pengabdian kepada masyarakat."
      : ""
  );

  return (
    <DayStyle day={day}>
      <div className="day-container">
        <Breadcrumb
          data={DataBreadcrumb}
          primer={BreadcrumbPrimer}
          secondary={BreadcrumbSecondary}
          back="/2021/materi-ketentuan/materi/ppsmb-universitas"
        />
        <Fade bottom>
        <div className="title-container">
          <h1>Modul </h1>
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
          <h3 className="font-indonesia-script">{Title}</h3>
        </div>
        </Fade>

        <div className="text-container">
          <div className="text-content">
        <p >{Text}</p>
          </div>

        </div>
        <div className="button-container">
          <div className="button-content">
          <Fade bottom>
            <div className="back-button">
              <Link style={{ textDecoration: 'none' }} to="/2021/materi-ketentuan/materi/ppsmb-universitas" >
              <Button text="Kembali" textColor={TextColor}>
        
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
              </Button>      </Link>
            </div>
            </Fade>
            <Fade bottom>
            <div className="download-button">
              <a style={{ textDecoration: 'none' }} href={Elok} target="_blank" rel="noreferrer">
              <Button text="Akses Elok" color={Color}>
                <div className="download-icon">
                <svg width="100%" height="100%" viewBox="0 0 163 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0125 82.1168C10.4983 85.2898 6.31673 84.6631 6.21853 79.2481C6.17674 76.9275 5.92531 68.0656 6.66566 66.4995C8.03597 63.6005 12.3729 63.9268 12.4366 69.5147C12.4683 72.2894 12.9022 80.2526 12.0125 82.1168ZM18.7829 27.955C19.1234 27.6274 19.0305 27.6636 19.6611 27.2747C20.3151 26.8715 19.7969 27.1487 20.6316 26.7932L67.5588 10.9599C71.4938 9.67584 80.5779 5.62196 84.9274 6.81135C102.996 11.7524 124.809 19.9507 143.085 25.171L150.893 28.0348C149.712 28.7029 138.595 32.8843 136.661 33.2359C133.864 33.745 132.428 31.3606 130.335 30.1012C128.253 28.8485 125.981 27.9512 123.583 27.1998C102.436 20.576 67.5643 21.083 46.5041 27.0637C37.5022 29.62 35.7531 33.8557 33.0083 33.5388C32.5677 33.488 19.9958 29.243 18.7829 27.955ZM7.60137 25.9882C6.53751 29.5657 7.08807 39.171 7.08807 43.43C7.08807 46.3314 7.08807 49.2331 7.08807 52.1345C7.08807 54.1181 7.9893 59.1741 6.10291 60.0665C2.21034 61.8742 1.20359 64.254 1.01101 69.0367C0.876943 72.3722 0.608805 79.8658 1.26627 82.8755C3.13281 91.4185 15.1121 91.611 17.4498 82.6405C18.1553 79.934 17.9882 71.7121 17.8367 68.5565C17.5282 62.1434 13.9194 61.4832 12.6835 59.7336C11.0437 57.4123 11.8975 36.7585 12.0006 32.2533C14.8993 32.0361 20.6665 34.7735 23.2343 35.6808C25.3704 36.4353 31.9775 38.2724 32.9139 40.0335C35.0009 44.3638 31.3907 76.0052 34.4674 78.6399C38.0883 81.7404 38.1127 75.6984 38.9446 74.1257C39.8897 72.3392 42.4064 71.1846 44.5791 70.1199C63.3058 60.9425 102.119 61.3154 122.189 68.7132C124.519 69.5718 126.475 71.6038 129.017 71.334C131.576 66.8264 128.479 65.3062 124.26 63.7826C102.975 56.0968 70.0525 55.9478 48.5378 62.5361C45.5576 63.4487 41.0535 66.2404 38.5776 66.6683C38.4655 61.385 37.3051 57.0178 41.4826 54.4896C59.5532 43.5536 98.3874 44.3206 118.445 50.2286C123.95 51.8501 126.689 54.2229 129.064 54.0032C131.421 49.097 128.389 48.1882 124.101 46.4633C114.136 42.454 97.9155 40.686 87.0318 40.6978C49.7316 40.7378 43.5553 48.5886 38.6295 49.2791C37.8258 35.7832 38.3053 35.9883 44.4812 33.7926C62.111 27.5254 80.8074 26.8896 100.109 28.3666C108.204 28.9857 118.957 30.7948 126.386 34.0566C133.37 37.123 126.845 42.4641 139.841 37.708C145.716 35.5576 158.542 31.8822 162.618 29.1002L162.521 26.3673C159.208 24.1682 148.059 21.1404 143.151 19.6836L84.4346 1.04615C80.6946 -0.162041 69.0861 4.81522 64.8102 6.23998C58.535 8.3315 51.8847 10.5679 45.7439 12.6974C40.4403 14.5365 9.45293 24.1438 7.60137 25.9882Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.09647 60.0663C7.98287 59.1739 7.08163 54.1176 7.08163 52.1344C7.08163 49.233 7.08163 46.3312 7.08163 43.4298C7.08163 39.1712 6.53142 29.5656 7.59493 25.988C5.70958 27.0002 6.37715 29.8413 6.37715 33.758C6.3775 39.7555 6.76195 56.2206 6.09647 60.0663Z" fill="white"/>
</svg>

                </div>
              </Button>
              </a>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </DayStyle>
  );
}

const DayStyle = styled.div`
  height: auto;
  padding:10vmin 0 10vmin 0;
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
    font-size: 5vmin;
  }
  .text-container {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text-content {
    padding: 2.5% 5% 2.5% 5%;
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

  .text-content > p {
    color: white;
    font-size: 2.5vh;
    line-height: 2;
 
    text-align:center;
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
    height: 4vmin;
    width: 4vmin;
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
      line-height: 1.3;
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
    .text-content > p {
    color: white;
    font-size: 2vh;
    line-height: 2;
    text-align:center;
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
    .download-button > a { text-decoration:none;
    }
  }
  @media screen and (max-width: 500px) {
    height: 100vmax;
    background-size: 100% 100vmax;
  }
`;
