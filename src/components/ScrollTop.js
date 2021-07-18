import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(0);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(1);
    } else {
      setIsVisible(0);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <ScrollToTopContainer
      className={isVisible ? "show scroll-to-top" : "scroll-to-top"}
    >
      <div onClick={scrollToTop}>
        <svg
          width="265"
          height="180"
          viewBox="0 0 265 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              d="M173.706 42.4264L131.279 84.8528L173.706 127.279L216.132 84.8528L173.706 42.4264ZM161.2 97.1953C158.743 94.7395 157.069 91.6102 156.391 88.2031C155.712 84.7961 156.059 81.2642 157.387 78.0543C158.716 74.8443 160.966 72.1004 163.854 70.1695C166.742 68.2386 170.138 67.2075 173.612 67.2065C177.086 67.2055 180.483 68.2347 183.372 70.1639C186.261 72.0932 188.513 74.8358 189.843 78.045C191.174 81.2542 191.522 84.7859 190.846 88.1933C190.169 91.6008 188.497 94.7311 186.041 97.1883C184.411 98.8204 182.475 100.115 180.344 100.999C178.213 101.883 175.929 102.338 173.622 102.339C171.315 102.339 169.031 101.885 166.9 101.003C164.768 100.12 162.832 98.8265 161.2 97.1953V97.1953Z"
              fill="#01385E"
            />
            <path
              d="M186.038 72.3582C183.581 69.9005 180.451 68.2266 177.043 67.5481C173.636 66.8696 170.103 67.2171 166.893 68.5466C163.683 69.876 160.939 72.1278 159.009 75.0169C157.078 77.9061 156.048 81.3028 156.049 84.7775C156.049 88.2522 157.08 91.6486 159.011 94.5372C160.942 97.4258 163.687 99.6768 166.898 101.005C170.108 102.334 173.641 102.68 177.048 102.001C180.456 101.321 183.585 99.6466 186.041 97.1883C189.331 93.8941 191.179 89.4284 191.179 84.7725C191.178 80.1166 189.329 75.6514 186.038 72.3582V72.3582ZM166.861 91.5349C165.524 90.1995 164.613 88.4977 164.243 86.6446C163.874 84.7915 164.062 82.8705 164.784 81.1242C165.506 79.378 166.729 77.8851 168.299 76.8341C169.87 75.7832 171.717 75.2215 173.606 75.22C175.496 75.2185 177.343 75.7773 178.915 76.8258C180.487 77.8743 181.713 79.3653 182.438 81.1104C183.163 82.8555 183.354 84.7762 182.987 86.6299C182.62 88.4835 181.712 90.1868 180.377 91.5243C179.49 92.4128 178.437 93.1179 177.278 93.5993C176.119 94.0807 174.876 94.329 173.621 94.33C172.366 94.331 171.123 94.0846 169.963 93.6051C168.803 93.1255 167.749 92.422 166.861 91.5349V91.5349Z"
              fill="#0593F7"
            />
            <path
              d="M167.362 91.9994C171.349 95.4566 177.383 95.0272 180.841 91.0403C184.298 87.0534 183.868 81.0188 179.882 77.5616C175.895 74.1044 169.86 74.5338 166.403 78.5207C162.946 82.5076 163.375 88.5422 167.362 91.9994Z"
              fill="#F31958"
            />
            <path
              d="M131.279 84.8528H46.4264L88.8528 42.4264L131.279 84.8528Z"
              fill="#0593F7"
            />
            <path
              d="M46.4264 84.8528H131.279L88.8528 127.279L46.4264 84.8528V84.8528Z"
              fill="#0074AF"
            />
            <path
              d="M72.7028 101.003C63.7985 92.0985 63.7985 77.6071 72.7028 68.7028C81.6071 59.7985 96.0984 59.7985 105.003 68.7028C113.907 77.6071 113.907 92.0985 105.003 101.003C96.0984 109.907 81.6071 109.907 72.7028 101.003Z"
              fill="#01385E"
            />
            <path
              d="M103.548 70.1578C111.666 78.2764 111.666 91.4292 103.548 99.5478C95.4292 107.666 82.2764 107.666 74.1578 99.5478C66.0391 91.4292 66.0391 78.2764 74.1578 70.1578C82.2764 62.0391 95.4292 62.0391 103.548 70.1578ZM106.458 67.2479C96.7386 57.5288 80.9669 57.5288 71.2479 67.2479C61.5288 76.9669 61.5288 92.7386 71.2479 102.458C80.9669 112.177 96.7386 112.177 106.458 102.458C116.177 92.7386 116.177 76.9669 106.458 67.2479Z"
              fill="white"
            />
            <path
              d="M88.8527 42.4263L131.248 84.8212L173.674 42.3948C162.318 31.039 147.584 25.2067 132.69 24.8336C116.912 24.4608 100.943 30.3361 88.8527 42.4263Z"
              fill="#F31958"
            />
            <path
              d="M105.129 58.7029L131.279 84.8527L157.448 58.6835C150.446 51.6807 141.359 48.0868 132.177 47.8693C122.426 47.5889 112.611 51.2215 105.129 58.7029Z"
              fill="#01385E"
            />
            <path
              d="M216.132 84.8528L173.706 127.279L216.132 169.706C227.492 158.345 233.363 143.59 233.712 128.707C234.061 112.873 228.222 96.9429 216.132 84.8528Z"
              fill="#FF7C02"
            />
            <path
              d="M199.885 101.1L173.706 127.279L199.885 153.458C206.898 146.446 210.484 137.338 210.706 128.168C210.96 118.394 207.342 108.557 199.885 101.1Z"
              fill="#01385E"
            />
            <path
              d="M46.4264 169.706L88.8528 127.279L46.4264 84.8528C35.0622 96.217 29.2189 110.956 28.8347 125.85C28.4817 141.659 34.3451 157.624 46.4264 169.706Z"
              fill="#01385E"
            />
            <path
              d="M43.4409 136.668C48.6324 141.86 57.0526 141.856 62.248 136.661C67.4434 131.466 67.4465 123.045 62.255 117.854C57.0635 112.662 48.6433 112.666 43.4479 117.861C38.2525 123.056 38.2494 131.477 43.4409 136.668Z"
              fill="#F31958"
              stroke="white"
              stroke-width="6.1917"
              stroke-miterlimit="10"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="-0.00012207"
              width="264.558"
              height="179.706"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="1" dy="5" />
              <feGaussianBlur stdDeviation="2.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </ScrollToTopContainer>
  );
}

const ScrollToTopContainer = styled.div`
  position: fixed;
  bottom: 14vmin;
  right: 3vmin;
  z-index: 20;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;

  &.show {
    visibility: visible;
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }

  & > div {
    display: flex;
    width: 8vmin;
    height: 8vmin;
    border-radius: 20px;
    background-color: var(--color-white);
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
