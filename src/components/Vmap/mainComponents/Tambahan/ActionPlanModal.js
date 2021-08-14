import React from "react";
import { Modal, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonWeb from "../../subComponents/ButtonWeb";
import Loading from "../../subComponents/Loading";
import Slider from "react-slick";
import VideoContainer from "../../../VideoContainer";

export default function ActionPlanModal(props) {
  return (
    <>
      <style type="text/css">
        {`
            h5 {
                font-family: 'Kollektif-Bold';
                font-size: 16pt;
            }

            p {
                font-weight: 100;
                font-size: 12pt;
            }

            ,judul h3 {
              font-size: 4vmin;
            }

            .video-list-galeri {
                position: relative;
                display: flex;
                flex-direction: column;
                padding: 5vmin;
                color: var(--color-redpink);
            }
        
            .video-list-galeri .video {
                position: relative;
                padding: 0 1.5vmin;
            }
        
            .video-list-galeri .judul {
                h3 {
                    font-size: calc(0.5rem + 3vmin);
                }
            }
        
            .video-list-galeri .video-carousel {
                width: 90%;
                margin: 0 auto;
                position: relative;
                /* left: -10vmin; */
            }
        
            .video-list-galeri .video-carousel > div {
                /* width: 120vw; */
                justify-content: flex-start;
            }
            
            .slick-arrow::before {
                color: var(--color-redpink);
                font-size: 4vmin;
                display: flex;
                justify-content: center;
            }
        `}
      </style>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ margin: "0 auto" }}
          >
            <h1 className="modal-title">Video Action Plan Terbaik</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "70vh" }}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Loading />
            <div
              className="video-list-galeri"
              style={{ padding: "1.5vmin 2.5vmin" }}
            >
              {video}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonWeb
            className="introButton mulai"
            startVmap={props.onHide}
            color="var(--color-redpink)"
            bg="var(--color-white)"
            text="Kembali"
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

var galeriVideos = [
  {
    id: 1,
    judul: "Khairun Nida Halid",
    videoList: [
      { id: 1, videoUrl: "KoKu8JXpw_4" },
    ],
  },
  {
    id: 2,
    judul: "Jennifer Cecilia Santoso",
    videoList: [{ id: 1, videoUrl: "rBqQbrDAHyQ" }],
  },
  {
    id: 3,
    judul: "BRA Kusuma Maharani",
    videoList: [{ id: 1, videoUrl: "yFSQz_Hp0mU" }],
  },
  {
    id: 4,
    judul: "Muhammad Hafidz Radhea",
    videoList: [
      { id: 1, videoUrl: "gJZBglZngBw" },
    ],
  },
  {
    id: 5,
    judul: "Alya Claudina Anggun Nandarie",
    videoList: [{ id: 1, videoUrl: "R7oGT3DEA84" }],
  },
];

var video = galeriVideos.map(function (obj) {
  let videoSection = obj.videoList.map(function (videoContent) {
    let noMaxRes = videoContent.nomaxres;
    return (
      <div key={videoContent.id} className="video">
        <VideoContainer
          bgcolor={"var(--color-redpink)"}
          id={videoContent.videoUrl}
          noDecor
          nomaxres={noMaxRes}
        ></VideoContainer>
      </div>
    );
  });

  return (
    <div className="judul">
      <h3>{obj.judul}</h3>
      <div className="video-carousel">
        <Slider
          slidesToShow={1}
          slidesToScroll={1}
          arrows={true}
          dots={false}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                dots: false,
              },
            },
          ]}
        >
          {videoSection}
        </Slider>
      </div>
    </div>
  );
});
