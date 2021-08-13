import React, { useState, useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import AlbumPage from "./AlbumPage";
import SimpleReactLightbox from "simple-react-lightbox";
import { srcPhotos, srlPhotos } from "../ImageGallery/PhotoList";
import { albumPhotoList } from "./AlbumPhotoList";
import styled from "styled-components";
const SlickArrowLeft = ({ ...props }) => (
  <div {...props} className={"slick-prev"} type="button">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 101 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 48.5C3 73.5159 24.1511 94 50.5 94C76.8489 94 98 73.5159 98 48.5C98 23.4841 76.8489 3 50.5 3C24.1511 3 3 23.4841 3 48.5Z"
        fill="white"
        stroke="#0593F7"
        stroke-width="6"
      />
      <path
        d="M25.8408 48.496L44.2395 30.8255C44.7647 30.3211 45.4647 30.0443 46.2111 30.0443C46.9583 30.0443 47.6579 30.3215 48.1831 30.8255L49.8536 32.4302C50.3784 32.9338 50.6675 33.6065 50.6675 34.3237C50.6675 35.0406 50.3784 35.7359 49.8536 36.2395L39.12 46.5706H73.221C74.7585 46.5706 75.9734 47.7266 75.9734 49.2037V51.4723C75.9734 52.9493 74.7585 54.2218 73.221 54.2218H38.9983L49.8532 64.6107C50.378 65.1151 50.6671 65.7694 50.6671 66.4867C50.6671 67.2031 50.378 67.867 49.8532 68.371L48.1827 69.9705C47.6575 70.4749 46.9579 70.7498 46.2107 70.7498C45.4643 70.7498 44.7643 70.4714 44.2391 69.967L25.8404 52.2969C25.3139 51.7909 25.0244 51.1155 25.0265 50.3974C25.0248 49.677 25.3139 49.0012 25.8408 48.496Z"
        fill="#0593F7"
      />
    </svg>
  </div>
);
const SlickArrowRight = ({ ...props }) => (
  <div {...props} className={"slick-next "} type="button">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 97 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="48.5"
        cy="48.5"
        r="45.5"
        fill="white"
        stroke="#0593F7"
        stroke-width="6"
      />
      <path
        d="M72.1825 48.496L54.5125 30.8255C54.0081 30.3211 53.3358 30.0443 52.619 30.0443C51.9013 30.0443 51.2295 30.3215 50.7251 30.8255L49.1208 32.4302C48.6168 32.9338 48.3391 33.6065 48.3391 34.3237C48.3391 35.0406 48.6168 35.7359 49.1208 36.2395L59.4292 46.5706H26.6787C25.2021 46.5706 24.0354 47.7266 24.0354 49.2037V51.4723C24.0354 52.9493 25.2021 54.2218 26.6787 54.2218H59.5462L49.1212 64.6107C48.6171 65.1151 48.3395 65.7694 48.3395 66.4867C48.3395 67.2031 48.6171 67.867 49.1212 68.371L50.7255 69.9705C51.2299 70.4749 51.9017 70.7498 52.6194 70.7498C53.3362 70.7498 54.0085 70.4714 54.5129 69.967L72.1829 52.2969C72.6885 51.7909 72.9666 51.1155 72.9646 50.3974C72.9662 49.677 72.6885 49.0012 72.1825 48.496Z"
        fill="#0593F7"
      />
    </svg>
  </div>
);
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
        <BookNav onClick={handleFlip}>
          <SlickArrowRight/>
        </BookNav>
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
        <BookNav onClick={handleFlip}>
          <SlickArrowLeft/>
        </BookNav>
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
    <>
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
        <AlbumPage {...props} />
      </SimpleReactLightbox>
      {(props.orientation === 'landscape') ?       
      <BookNav>
        {(props.count % 2 === 0 ) ? <SlickArrowLeft onClick={handleFlip}/> : <SlickArrowRight onClick={handleFlip}/>}
      </BookNav> : 
      <BookNav>
        <SlickArrowLeft onClick={handleFlipPrev}/>
        <SlickArrowRight onClick={handleFlipNext}/>
      </BookNav> 
      }

    </div>
    </>
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
        pageMax={pageCount - 1}
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

const BookNav = styled.div`
   position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3vmin;
    font-size: calc(0.5rem + 1.5vmin);

  .slick-prev:before {
    content: "";
  }
  .slick-next:before {
    content: "";
  }
  .slick-prev {
    left: 2vw;
  }
  .slick-next {
    right: 2vw;
  }
  .slick-prev,
  .slick-next {
    z-index: 3;
    width: 5vmin;
    height: 5vmin;
    padding: 0;
  }
`

export default AlbumPageFlip;
