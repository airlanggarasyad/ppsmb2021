import React from "react";
import HTMLFlipBook from "react-pageflip";
import AlbumPage from "./AlbumPage";
import SimpleReactLightbox from "simple-react-lightbox";
import { srcPhotos, srlPhotos } from "../ImageGallery/PhotoList";
import { albumPhotoList } from "./AlbumPhotoList";

const Page = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <SimpleReactLightbox>
        <AlbumPage {...props} />
      </SimpleReactLightbox>
    </div>
  );
});

function AlbumPageFlip() {
  const photoPerPage = 4;
  let pageCount = Math.ceil(albumPhotoList.length / photoPerPage);
  let start = 0;
  let end = 4;
  let pageList = [];
  for (let i = 0; i < pageCount; i++) {
    pageList.push(
      <Page key={i} photoList={albumPhotoList.slice(start, end)} />
    );
    start = end;
    end = end + photoPerPage;
  }
  console.log(pageList);
  return (
    <HTMLFlipBook
      width={550}
      height={733}
      size="stretch"
      minWidth={315}
      maxWidth={1000}
      minHeight={400}
      maxHeight={1533}
      maxShadowOpacity={0.5}
      mobileScrollSupport={true}
      className="album-palapa"
    >
      {pageList}
    </HTMLFlipBook>
  );
}

export default AlbumPageFlip;
