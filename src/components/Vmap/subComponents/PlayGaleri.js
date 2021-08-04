import React from "react";
import { Modal, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonWeb from "./ButtonWeb";
import Loading from "./Loading";
import Slider from "react-slick";
import VideoContainer from "../../../components/VideoContainer";

export default function PlayGaleri(props) {
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
                width: 100%;
                position: relative;
                /* left: -10vmin; */
            }
        
            .video-list-galeri .video-carousel > div {
                /* width: 120vw; */
                justify-content: flex-start;
            }
            
            .slick-arrow::before {
                color: var(--color-redpink);
            }
        `}
      </style>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ margin: "0 auto" }}
          >
            <h1 className="modal-title">Galeri Palapa</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "70vh" }}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Loading />
            <div className="video-list-galeri">{video}</div>
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
    judul: "Terka Cerita",
    videoList: [
      { id: 1, videoUrl: "XOvvbs98g-k" },
      { id: 2, videoUrl: "NF8OsDbqhh8" },
      { id: 3, videoUrl: "jBL1FbcMmBs" },
    ],
  },
  {
    id: 2,
    judul: "Gadjah Mada dan Nusantara",
    videoList: [{ id: 1, videoUrl: "7LeFgVzb3B0" }],
  },
  {
    id: 3,
    judul: "Relung Kreasi",
    videoList: [{ id: 1, videoUrl: "M5sn2jmzqIY" }],
  },
  {
    id: 4,
    judul: "Bincang Prestasi",
    videoList: [
      { id: 1, videoUrl: "n_6Ighj3BX4" },
      { id: 2, videoUrl: "SOTE_iU2X14" },
      { id: 3, videoUrl: "E2_rfB187nM" },
      { id: 4, videoUrl: "rFbG09dk54k" },
    ],
  },
  {
    id: 5,
    judul: "Di Balik Himne Gadjah Mada",
    videoList: [{ id: 1, videoUrl: "DsCmGuCOhm0" }],
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
          dots={true}
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
