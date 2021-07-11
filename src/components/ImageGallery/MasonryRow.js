import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";

import { srcPhotos } from "./PhotoList";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

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

  return (
    <>
      <Gallery photos={srcPhotos} onClick={openLightbox}></Gallery>
      {viewerIsOpen && (
          <Lightbox
            mainSrc={srcPhotos[currentImage].fwSrc}
            nextSrc={srcPhotos[(currentImage + 1) % srcPhotos.length].fwSrc}
            prevSrc={srcPhotos[(currentImage + srcPhotos.length - 1) % srcPhotos.length].fwSrc}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={() =>
              setCurrentImage((currentImage + srcPhotos.length - 1) % srcPhotos.length)
            }
            onMoveNextRequest={() =>
              setCurrentImage((currentImage + 1) % srcPhotos.length)
            }               
          />
        )}
    </>
  );
}