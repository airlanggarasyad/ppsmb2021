import React, { useCallback } from "react";
import Gallery from "react-photo-gallery";

import { srcPhotos, srlPhotos } from "./PhotoList";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import Fade from "react-reveal/Fade";

export default function MasonryRow() {
  const { openLightbox, closeLightbox } = useLightbox();

  const options = {
    settings: {
      autoplaySpeed: 4000,
      transitionSpeed: 500,
      hideControlsAfter: 1000,
      slideAnimationType: "both",
      slideTransitionSpeed: 0.9,
    },
    buttons: {
      backgroundColor: "#F31958",
      iconColor: "#FFFFFF",
      showDownloadButton: false,
      showFullscreenButton: false,
    },
    caption: {
      captionColor: "#a6cfa5",
      captionFontFamily: "Raleway, sans-serif",
      captionFontWeight: "300",
      captionTextTransform: "uppercase",
    },
    thumbnails: {
      showThumbnails: false,
    },
  };

  const imageRenderer = useCallback(({ index, left, top, key, photo }) => (
    <Fade>
      <img
        alt={photo.alt}
        {...photo}
        onClick={() => openLightbox(index)}
        style={{ padding: "0.5vmin", cursor: "pointer" }}
      />
    </Fade>
  ));

  return (
    <>
      <Gallery photos={srcPhotos} renderImage={imageRenderer}></Gallery>
      <SRLWrapper elements={srlPhotos} options={options} />
    </>
  );
}
