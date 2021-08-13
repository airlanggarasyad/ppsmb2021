import React, { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import AlbumPage from "./AlbumPage";
import SimpleReactLightbox from "simple-react-lightbox";
import { srcPhotos, srlPhotos } from "../ImageGallery/PhotoList";
import { albumPhotoList } from "./AlbumPhotoList";
const PageCover = React.forwardRef((props, ref) => {
  const handleFlip = () => {
    props.setOrientation(props.flip.pageFlip().getOrientation());
    props.flip.pageFlip().flipNext();
  };

  return (
    <div ref={ref}>
      <style>
        {`
          .cover{
            background: lightblue;
            height: 100%;
            width: 100%;
          }

          .content{
            padding: 5%;
            text-align: center;
          }

          .flipButton{
            position: absolute;
            z-index: 9000;
            top: 50%;
            right: 2%;
            transform: translate(0, -50%);
            border-radius: 50%;
          }
        `}
      </style>
      <div className="cover">
        <div className="content">
          <h2>{props.children}</h2>
        </div>
        <button className="flipButton" onClick={handleFlip}>
          >
        </button>
      </div>
    </div>
  );
});

const LastPage = React.forwardRef((props, ref) => {
  const handleFlip = () => {
    props.flip.pageFlip().flipPrev();
  };

  return (
    <div ref={ref}>
      <style>
        {`
          .last{
            background: lightblue;
            height: 100%;
            width: 100%;
          }

          .contentLast{
            padding: 5%;
            text-align: center;
          }

          .flipButtonLast{
            position: absolute;
            z-index: 9000;
            top: 50%;
            left: 5%;
            transform: translate(0, -50%);
            border-radius: 50%;
          }
        `}
      </style>
      <div className="last">
        <div className="contentLast">
          <h2>{props.children}</h2>
        </div>
        <button className="flipButtonLast" onClick={handleFlip}>
          {"<"}
        </button>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  //kiri
  const handleFlipPrev = () => {
    props.flip.pageFlip().flipPrev();
  };

  //kanan
  const handleFlipNext = () => {
    props.flip.pageFlip().flipNext();
  };

  const handleFlip = () => {
    if (props.count % 2 == 0) {
      handleFlipPrev();
    } else {
      handleFlipNext();
    }
  };

  return (
    <div ref={ref}>
      <style>
        {`
        .flipButton{
          border-radius: 50%;
        }

        .flipButtonLeft{
          position: absolute;
          z-index: 9000;
          top: 50%;
          left: 5%;
          transform: translateY(-50%);
        }

        .flipButtonRight{
          position: absolute;
          z-index: 9000;
          top: 50%;
          right: 2%;
          transform: translateY(-50%);
        }
      `}
      </style>
      <SimpleReactLightbox>
        {props.orientation === "landscape" && (
          <div
            className={
              props.count % 2 == 0 ? "flipButtonLeft" : "flipButtonRight"
            }
          >
            <button className="flipButton" onClick={handleFlip}>
              {props.count % 2 == 0 ? "<" : ">"}
            </button>
          </div>
        )}
        {props.orientation === "portrait" && (
          <>
            <div className="flipButtonLeft">
              <button className="flipButton" onClick={handleFlipPrev}>
                {"<"}
              </button>
            </div>
            <div className="flipButtonRight">
              <button className="flipButton" onClick={handleFlipNext}>
                {">"}
              </button>
            </div>
          </>
        )}
        <AlbumPage {...props} />
      </SimpleReactLightbox>
    </div>
  );
});

function AlbumPageFlip() {
  const [orientation, setOrientation] = useState();
  const flipRef = useRef();

  // render galeri
  const photoPerPage = 4;
  let pageCount = Math.ceil(albumPhotoList.length / photoPerPage);
  let start = 0;
  let end = 4;
  let pageList = [];
  for (let i = 0; i < pageCount; i++) {
    pageList.push(
      <Page
        key={i}
        photoList={albumPhotoList.slice(start, end)}
        count={i}
        flip={flipRef.current}
        orientation={orientation}
      />
    );
    start = end;
    end = end + photoPerPage;
  }
  // console.log(pageList);

  return (
    <>
      <style>
        {`
          .album-palapa{
            background: #01385E;
          }
        `}
      </style>
      <HTMLFlipBook
        ref={flipRef}
        width={550}
        height={window.screen.height * 0.7}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        mobileScrollSupport={true}
        showCover={true}
        useMouseEvents={false}
        className="album-palapa"
      >
        <PageCover flip={flipRef.current} setOrientation={setOrientation}>
          BOOK COVER
        </PageCover>
        {pageList}
        <LastPage flip={flipRef.current}>LAST PAGE</LastPage>
      </HTMLFlipBook>
    </>
  );
}

export default AlbumPageFlip;
