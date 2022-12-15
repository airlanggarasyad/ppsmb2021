import React from "react";
import styled from "styled-components";
import Breadcrumb from "../../components/main/Breadcrumb";
import VideoContainer from "../../components/VideoContainer";
import Helmet from "react-helmet";

export default function KetentuanPenugasan() {
  const DataBreadcrumb = [
    {
      text: "PPSMB UGM 2021",
      link: "/",
    },
    {
      text: "Materi & Ketentuan",
      link: "/materi-ketentuan",
    },
    {
      text: "Ketentuan & Panduan Penugasan  ",
      link: "/materi-ketentuan/ketentuan",
    },
  ];
  return (
    <KetentuanStyle>
       <Helmet>
        <title>Ketentuan & Penugasan | PPSMB UGM 2021</title>
      </Helmet>
      <div className="agenda-container">
        <Breadcrumb
          data={DataBreadcrumb}
          primer="black"
          secondary="red"
          back="/materi-ketentuan"
        />
        <div className="agenda-title">
          <h1>
            {" "}
            Ketentuan & Panduan <br /> Penugasan{" "}
          </h1>{" "}
          <div className="flower-icon">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 153 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M101.98 0.0202637C101.98 6.7731 99.2972 13.2494 94.5222 18.0243C89.7472 22.7993 83.271 25.4819 76.5181 25.4819C76.5181 18.729 79.2007 12.2528 83.9757 7.47779C88.7507 2.70282 95.2269 0.0202634 101.98 0.0202637V0.0202637Z"
                fill="#0593F7"
              />
              <path
                d="M51 51C51 44.2472 53.6826 37.7709 58.4575 32.9959C63.2325 28.221 69.7088 25.5384 76.4616 25.5384C76.4616 32.2912 73.779 38.7675 69.0041 43.5425C64.2291 48.3174 57.7528 51 51 51Z"
                fill="#FF7C02"
              />
              <path
                d="M51.0161 0C57.769 2.95176e-07 64.2452 2.68255 69.0202 7.45753C73.7952 12.2325 76.4777 18.7088 76.4777 25.4616C69.7249 25.4616 63.2486 22.7791 58.4736 18.0041C53.6987 13.2291 51.0161 6.75284 51.0161 0V0Z"
                fill="#FFBE00"
              />
              <path
                d="M102 50.9839C95.2471 50.9839 88.7708 48.3013 83.9959 43.5264C79.2209 38.7514 76.5383 32.2751 76.5383 25.5223C83.2912 25.5223 89.7674 28.2048 94.5424 32.9798C99.3174 37.7548 102 44.231 102 50.9839V50.9839Z"
                fill="#F31958"
              />
              <path
                d="M152.98 0.0202637C152.98 6.7731 150.297 13.2494 145.522 18.0243C140.747 22.7993 134.271 25.4819 127.518 25.4819C127.518 18.729 130.201 12.2528 134.976 7.47779C139.751 2.70282 146.227 0.0202634 152.98 0.0202637V0.0202637Z"
                fill="#0593F7"
              />
              <path
                d="M102 51C102 44.2472 104.683 37.7709 109.458 32.9959C114.233 28.221 120.709 25.5384 127.462 25.5384C127.462 32.2912 124.779 38.7675 120.004 43.5425C115.229 48.3174 108.753 51 102 51Z"
                fill="#FF7C02"
              />
              <path
                d="M102.016 0C108.769 2.95176e-07 115.245 2.68255 120.02 7.45753C124.795 12.2325 127.478 18.7088 127.478 25.4616C120.725 25.4616 114.249 22.7791 109.474 18.0041C104.699 13.2291 102.016 6.75284 102.016 0V0Z"
                fill="#FFBE00"
              />
              <path
                d="M153 50.9839C146.247 50.9839 139.771 48.3013 134.996 43.5264C130.221 38.7514 127.538 32.2751 127.538 25.5223C134.291 25.5223 140.767 28.2048 145.542 32.9798C150.317 37.7548 153 44.231 153 50.9839V50.9839Z"
                fill="#F31958"
              />
              <path
                d="M50.9798 0.0202637C50.9798 6.7731 48.2972 13.2494 43.5223 18.0243C38.7473 22.7993 32.271 25.4819 25.5182 25.4819C25.5182 18.729 28.2007 12.2528 32.9757 7.47779C37.7507 2.70282 44.227 0.0202634 50.9798 0.0202637V0.0202637Z"
                fill="#0593F7"
              />
              <path
                d="M6.10352e-05 51C6.13303e-05 44.2472 2.68261 37.7709 7.45759 32.9959C12.2326 28.221 18.7088 25.5384 25.4617 25.5384C25.4617 32.2912 22.7791 38.7675 18.0041 43.5425C13.2292 48.3174 6.7529 51 6.10352e-05 51Z"
                fill="#FF7C02"
              />
              <path
                d="M0.0161743 0C6.76901 2.95176e-07 13.2453 2.68255 18.0202 7.45753C22.7952 12.2325 25.4778 18.7088 25.4778 25.4616C18.7249 25.4616 12.2487 22.7791 7.47371 18.0041C2.69873 13.2291 0.016174 6.75284 0.0161743 0L0.0161743 0Z"
                fill="#FFBE00"
              />
              <path
                d="M51 50.9839C44.2472 50.9839 37.7709 48.3013 32.9959 43.5264C28.2209 38.7514 25.5384 32.2751 25.5384 25.5223C32.2912 25.5223 38.7675 28.2048 43.5425 32.9798C48.3174 37.7548 51 44.231 51 50.9839V50.9839Z"
                fill="#F31958"
              />
            </svg>{" "}
          </div>{" "}
        </div>{" "}
        <div className="ketentuan-title">
          <div className="flower">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.9797 0.0202637C50.9797 6.7731 48.2972 13.2494 43.5222 18.0243C38.7472 22.7993 32.271 25.4819 25.5181 25.4819C25.5181 18.729 28.2007 12.2528 32.9757 7.47779C37.7506 2.70282 44.2269 0.0202634 50.9797 0.0202637V0.0202637Z"
                fill="#0593F7"
              />
              <path
                d="M0 51C2.95176e-07 44.2472 2.68255 37.7709 7.45753 32.9959C12.2325 28.221 18.7088 25.5384 25.4616 25.5384C25.4616 32.2912 22.779 38.7675 18.0041 43.5425C13.2291 48.3174 6.75284 51 0 51Z"
                fill="#FF7C02"
              />
              <path
                d="M51 50.9839C44.2472 50.9839 37.7709 48.3013 32.9959 43.5264C28.2209 38.7514 25.5384 32.2751 25.5384 25.5223C32.2912 25.5223 38.7675 28.2048 43.5425 32.9798C48.3174 37.7548 51 44.231 51 50.9839V50.9839Z"
                fill="#F31958"
              />
              <path
                d="M0.0161133 0C6.76895 2.95176e-07 13.2452 2.68255 18.0202 7.45753C22.7952 12.2325 25.4777 18.7088 25.4777 25.4616C18.7249 25.4616 12.2486 22.7791 7.47364 18.0041C2.69867 13.2291 0.016113 6.75284 0.0161133 0L0.0161133 0Z"
                fill="#FFBE00"
              />
            </svg>
          </div>{" "}
          <h1>Lesson Map</h1>
        </div>
        <hr/>
        <div className="pdf-container">
        <iframe title="lesson-map "src="https://prezi.com/embed/gxsxdd2k4uuy/" id="iframe_container" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" allow="autoplay; fullscreen" height="100%" width="100%"></iframe></div>

        <div className="ketentuan-title">
          <div className="flower">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.9797 0.0202637C50.9797 6.7731 48.2972 13.2494 43.5222 18.0243C38.7472 22.7993 32.271 25.4819 25.5181 25.4819C25.5181 18.729 28.2007 12.2528 32.9757 7.47779C37.7506 2.70282 44.2269 0.0202634 50.9797 0.0202637V0.0202637Z"
                fill="#0593F7"
              />
              <path
                d="M0 51C2.95176e-07 44.2472 2.68255 37.7709 7.45753 32.9959C12.2325 28.221 18.7088 25.5384 25.4616 25.5384C25.4616 32.2912 22.779 38.7675 18.0041 43.5425C13.2291 48.3174 6.75284 51 0 51Z"
                fill="#FF7C02"
              />
              <path
                d="M51 50.9839C44.2472 50.9839 37.7709 48.3013 32.9959 43.5264C28.2209 38.7514 25.5384 32.2751 25.5384 25.5223C32.2912 25.5223 38.7675 28.2048 43.5425 32.9798C48.3174 37.7548 51 44.231 51 50.9839V50.9839Z"
                fill="#F31958"
              />
              <path
                d="M0.0161133 0C6.76895 2.95176e-07 13.2452 2.68255 18.0202 7.45753C22.7952 12.2325 25.4777 18.7088 25.4777 25.4616C18.7249 25.4616 12.2486 22.7791 7.47364 18.0041C2.69867 13.2291 0.016113 6.75284 0.0161133 0L0.0161133 0Z"
                fill="#FFBE00"
              />
            </svg>
          </div>{" "}
          <h1>Alur Prosedur</h1>
        </div>
        <hr/>
        <div className="pdf-container">
        <iframe title="alur-prosedur" id="pdf" src="https://drive.google.com/file/d/1FCRakOtwWP3SErJbYNKXPI33Q805yiKd/preview" frameborder="0" cellspacing="0"></iframe>
   
        </div>

        <div className="ketentuan-title">
          <div className="flower">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.9797 0.0202637C50.9797 6.7731 48.2972 13.2494 43.5222 18.0243C38.7472 22.7993 32.271 25.4819 25.5181 25.4819C25.5181 18.729 28.2007 12.2528 32.9757 7.47779C37.7506 2.70282 44.2269 0.0202634 50.9797 0.0202637V0.0202637Z"
                fill="#0593F7"
              />
              <path
                d="M0 51C2.95176e-07 44.2472 2.68255 37.7709 7.45753 32.9959C12.2325 28.221 18.7088 25.5384 25.4616 25.5384C25.4616 32.2912 22.779 38.7675 18.0041 43.5425C13.2291 48.3174 6.75284 51 0 51Z"
                fill="#FF7C02"
              />
              <path
                d="M51 50.9839C44.2472 50.9839 37.7709 48.3013 32.9959 43.5264C28.2209 38.7514 25.5384 32.2751 25.5384 25.5223C32.2912 25.5223 38.7675 28.2048 43.5425 32.9798C48.3174 37.7548 51 44.231 51 50.9839V50.9839Z"
                fill="#F31958"
              />
              <path
                d="M0.0161133 0C6.76895 2.95176e-07 13.2452 2.68255 18.0202 7.45753C22.7952 12.2325 25.4777 18.7088 25.4777 25.4616C18.7249 25.4616 12.2486 22.7791 7.47364 18.0041C2.69867 13.2291 0.016113 6.75284 0.0161133 0L0.0161133 0Z"
                fill="#FFBE00"
              />
            </svg>
          </div>{" "}
          <h1>Ketentuan Umum</h1>
        </div>
        <hr/>
        <div className="pdf-container">
        <iframe title="ketentuan-umum" id="pdf" src="https://drive.google.com/file/d/15Y2zrTB8ebOwL1oV2wdIwEG3HVhPR5a2/preview?usp=sharing" frameborder="0" cellspacing="0"></iframe>
        </div>

        <div className="ketentuan-title">
          <div className="flower">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.9797 0.0202637C50.9797 6.7731 48.2972 13.2494 43.5222 18.0243C38.7472 22.7993 32.271 25.4819 25.5181 25.4819C25.5181 18.729 28.2007 12.2528 32.9757 7.47779C37.7506 2.70282 44.2269 0.0202634 50.9797 0.0202637V0.0202637Z"
                fill="#0593F7"
              />
              <path
                d="M0 51C2.95176e-07 44.2472 2.68255 37.7709 7.45753 32.9959C12.2325 28.221 18.7088 25.5384 25.4616 25.5384C25.4616 32.2912 22.779 38.7675 18.0041 43.5425C13.2291 48.3174 6.75284 51 0 51Z"
                fill="#FF7C02"
              />
              <path
                d="M51 50.9839C44.2472 50.9839 37.7709 48.3013 32.9959 43.5264C28.2209 38.7514 25.5384 32.2751 25.5384 25.5223C32.2912 25.5223 38.7675 28.2048 43.5425 32.9798C48.3174 37.7548 51 44.231 51 50.9839V50.9839Z"
                fill="#F31958"
              />
              <path
                d="M0.0161133 0C6.76895 2.95176e-07 13.2452 2.68255 18.0202 7.45753C22.7952 12.2325 25.4777 18.7088 25.4777 25.4616C18.7249 25.4616 12.2486 22.7791 7.47364 18.0041C2.69867 13.2291 0.016113 6.75284 0.0161133 0L0.0161133 0Z"
                fill="#FFBE00"
              />
            </svg>
          </div>{" "}
          <h1>Panduan Akses Simaster</h1>
        </div>
        <hr/>
        <div className="pdf-container">
        <iframe title="panduan-simaster" id="pdf" src="https://drive.google.com/file/d/1-Btvz_AUoWOfQUkO0XlDN0voNrK6HoQ4/preview" frameborder="0" cellspacing="0"></iframe>
        </div>

        <div className="ketentuan-title">
          <div className="flower">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.9797 0.0202637C50.9797 6.7731 48.2972 13.2494 43.5222 18.0243C38.7472 22.7993 32.271 25.4819 25.5181 25.4819C25.5181 18.729 28.2007 12.2528 32.9757 7.47779C37.7506 2.70282 44.2269 0.0202634 50.9797 0.0202637V0.0202637Z"
                fill="#0593F7"
              />
              <path
                d="M0 51C2.95176e-07 44.2472 2.68255 37.7709 7.45753 32.9959C12.2325 28.221 18.7088 25.5384 25.4616 25.5384C25.4616 32.2912 22.779 38.7675 18.0041 43.5425C13.2291 48.3174 6.75284 51 0 51Z"
                fill="#FF7C02"
              />
              <path
                d="M51 50.9839C44.2472 50.9839 37.7709 48.3013 32.9959 43.5264C28.2209 38.7514 25.5384 32.2751 25.5384 25.5223C32.2912 25.5223 38.7675 28.2048 43.5425 32.9798C48.3174 37.7548 51 44.231 51 50.9839V50.9839Z"
                fill="#F31958"
              />
              <path
                d="M0.0161133 0C6.76895 2.95176e-07 13.2452 2.68255 18.0202 7.45753C22.7952 12.2325 25.4777 18.7088 25.4777 25.4616C18.7249 25.4616 12.2486 22.7791 7.47364 18.0041C2.69867 13.2291 0.016113 6.75284 0.0161133 0L0.0161133 0Z"
                fill="#FFBE00"
              />
            </svg>
          </div>{" "}
          <h1>Panduan Akses eLOK</h1>
        </div>
        <hr/>
        <div className="pdf-container">
        <iframe title="panduan-elok" id="pdf" src="https://drive.google.com/file/d/1T__QWRHp-8uY9PJTrnGNiX0YpiCkMNuW/preview?usp=sharing" frameborder="0" cellspacing="0"></iframe>
        </div>
        
        <div className="ketentuan-title">
          <div className="flower">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.9797 0.0202637C50.9797 6.7731 48.2972 13.2494 43.5222 18.0243C38.7472 22.7993 32.271 25.4819 25.5181 25.4819C25.5181 18.729 28.2007 12.2528 32.9757 7.47779C37.7506 2.70282 44.2269 0.0202634 50.9797 0.0202637V0.0202637Z"
                fill="#0593F7"
              />
              <path
                d="M0 51C2.95176e-07 44.2472 2.68255 37.7709 7.45753 32.9959C12.2325 28.221 18.7088 25.5384 25.4616 25.5384C25.4616 32.2912 22.779 38.7675 18.0041 43.5425C13.2291 48.3174 6.75284 51 0 51Z"
                fill="#FF7C02"
              />
              <path
                d="M51 50.9839C44.2472 50.9839 37.7709 48.3013 32.9959 43.5264C28.2209 38.7514 25.5384 32.2751 25.5384 25.5223C32.2912 25.5223 38.7675 28.2048 43.5425 32.9798C48.3174 37.7548 51 44.231 51 50.9839V50.9839Z"
                fill="#F31958"
              />
              <path
                d="M0.0161133 0C6.76895 2.95176e-07 13.2452 2.68255 18.0202 7.45753C22.7952 12.2325 25.4777 18.7088 25.4777 25.4616C18.7249 25.4616 12.2486 22.7791 7.47364 18.0041C2.69867 13.2291 0.016113 6.75284 0.0161133 0L0.0161133 0Z"
                fill="#FFBE00"
              />
            </svg>
          </div>{" "}
          <h1>Panduan Akses E-lok</h1>
        </div>
        <hr/>
        <div className="pdf-container">
         <VideoContainer id="QZubBNmJYyk" noDecor/>
        </div>
        
      </div>{" "}
      
    </KetentuanStyle>
  );
}

const KetentuanStyle = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding:10vh 0 10vh 0;

hr {width:80%;}

.pdf-container {
    width: 80%;
    height:80vmin ;
    display: flex ;
    justify-content: center;
    margin:5vmin 0 5vmin 0;
}
#pdf {
    width: 90%;
    height:100%;
}
  img {
    height: 100%;
    width: 100%;
  }
  .agenda-container {
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .agenda-title {
    width: 80%;
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 7vmin;
    margin-bottom: 5vh;
  }
  .agenda-title > h1 {
    margin: 0;
    color: black;
    margin-right: 2vmin;
    font-size: 7vmin;
  }
  .flower-icon {
    height: 9vmin;
    width: 12vmin;
    position: absolute;
    bottom: -1vmin;
    left: 37vmin;
  }

  .ketentuan-title {
    width: 80%;
    display: flex;
    align-items: center;
  }
  .ketentuan-title > h1 {
    font-size: 5vmin;
    margin-left: 3vh;
  }

  .flower {
    height: 5vmin;
    width: 5vmin;
  }
  @media screen and (max-width: 1200px) {
    height: auto;
  }
  @media screen and (max-width: 992px) {
    height: auto;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    .agenda-title {
      width: 90%;
    }
  }
`;
