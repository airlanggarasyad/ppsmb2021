import React, { useEffect, useRef } from "react";

export default function Storyboard(props) {
  const progressRef = useRef();

  //if loading awal
  useEffect(() => {
    if (props.loading === false) {
      progressFadeOut();
    }
  }, [props.loading]);

  //if loading component
  if (!props.load) {
    const authenticate = () => {
      return new Promise((resolve) => setTimeout(resolve, 1000));
    };
    authenticate().then(() => {
      progressFadeOut();
    });
  }

  // fade out transition
  const progressFadeOut = () => {
    if (progressRef.current) {
      progressRef.current.classList.add("available");
      setTimeout(() => {
        if (progressRef.current) {
          progressRef.current.remove();
        }
      }, 500);
    }
  };

  return (
    <>
      <style>
        {`
          	.ipl-progress-indicator.available {
              opacity: 0
            }
            
            .ipl-progress-indicator {
              background-color: #f5f5f5;
              width: 100%;
              height: 100%;
              position: absolute;
              opacity: 1;
              pointer-events: none;
              -webkit-transition: opacity cubic-bezier(.4, 0, .2, 1) 436ms;
              -moz-transition: opacity cubic-bezier(.4, 0, .2, 1) 436ms;
              transition: opacity cubic-bezier(.4, 0, .2, 1) 436ms;
              z-index: 9999
            }
            
            .ipl-progress-indicator {
              background-image: url('./assets/loading-screen/background.webp');
              background-size: 100%;
            }
            
            .insp-logo-frame {
              position: absolute;
              left: 50%;
              top: 50%;
              -webkit-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
            }
            
            .insp-logo-frame .logo {
              width: 20vmin;
              animation: blink 2s;
              animation-iteration-count: infinite;
            }
            
            @keyframes blink {
              0% {
                opacity: 1;
              }
              50% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
          `}
      </style>
      <div class="ipl-progress-indicator" ref={progressRef}>
        <div class="insp-logo-frame">
          <img
            src="./assets/loading-screen/logo-ppsmb-official.png"
            alt=""
            class="logo"
          />
        </div>
      </div>
    </>
  );
}
