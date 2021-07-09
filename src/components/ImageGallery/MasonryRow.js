import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
// import Gallery from 'react-grid-gallery';
import Modal from "react-modal";
import styled from "styled-components";
import Sliders from "../Slider/Slider";
import { srcPhotos } from "./Photo-Thumbnail";

export default function MasonryRow() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  Modal.setAppElement("#root");

  let imagesCarousel = srcPhotos.map(function (photo, index) {
    console.log(photo.fwSrc);
    return (
      <div key={index} className="photo">
        <img src={photo.fwSrc} alt="" />
      </div>
    );
  });

  return (
    <GalleryContainer>
      <Gallery photos={srcPhotos} onClick={openLightbox}></Gallery>
      <Modal
        isOpen={viewerIsOpen}
        onRequestClose={closeLightbox}
        className="modalContent"
      >
        <Sliders>{imagesCarousel}</Sliders>
      </Modal>
      {/* <Gallery images={srcPhotos}></Gallery> */}
    </GalleryContainer>
  );
}

const GalleryContainer = styled.div``;
