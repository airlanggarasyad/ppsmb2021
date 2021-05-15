import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <FooterContainer>
      <div className="grid-container p-3">
        <div className="m-0">
          <h2>Sekretariat PPSMB</h2>
          <p>
            Panitia Pusat PPSMB UGM
            <br />
            Subdit.Pengembangan Karakter Mahasiswa Direktorat Kemahasiswaan
            <br />
            Universitas Gadjah Mada
          </p>
          <p className="ppsmb-yellow">
            Jl. Asem Kranji Blok K-8 Sekip, Bulaksumur, Sleman, Yogyakarta 55281
          </p>
          <p>
            Jam kerja pukul:
            <span className="ppsmb-yellow"> 08:00 - 16:00 WIB</span>
          </p>
        </div>
        <div className="m-0">
          <h2>Pusat Informasi</h2>
          <p>Help Desk PPSMB: +62-822-8433-1119</p>
          <p className="font-bold">Official Account PPSMB:</p>
          <div className="social-media">
            <a
              href="http://twitter.com/ppsmb_ugm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FontAwesomeIcon icon={faTwitter} />
                <span>Twitter</span>
              </div>
            </a>
            <a
              href="http://instagram.com/ppsmb_ugm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FontAwesomeIcon icon={faInstagram} />
                <span>Instagram</span>
              </div>
            </a>
            <a
              href="https://vt.tiktok.com/ZSJ2VX4kJ/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FontAwesomeIcon icon={faTiktok} />
                <span>Tiktok</span>
              </div>
            </a>
            <a
              href="https://www.facebook.com/PPSMB-UGM-325374494259950/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FontAwesomeIcon icon={faFacebook} />
                <span>Facebook</span>
              </div>
            </a>
            <a
              href="https://www.youtube.com/user/ppsmbpalapa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <FontAwesomeIcon icon={faYoutube} />
                <span>Youtube</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  width: 100vw;
  min-width: 140px;
  background-color: var(--color-footerblue);
  color: white;

  font-size: calc(0.5rem + 2vmin);

  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0px, 1fr));
    grid-template-rows: repeat(2, auto);
    gap: 30px;
  }

  .grid-container div:nth-child(1n) {
    grid-column: span 2;
    width: 100%;
  }

  .grid-container div {
    margin: inherit;
    font-weight: normal;
  }

  .grid-container div h2 {
    margin: inherit;
  }

  .grid-container a {
    display: block;
    color: var(--color-yellow);
    text-decoration: none;
  }

  .social-media {
  }

  .social-media a {
    text-decoration: none;
  }

  .social-media a div {
    display: flex;
    align-items: center;
  }

  .social-media a div * {
    display: inline;
  }

  .social-media a div span {
    display: inline;
    transition: all 0.4s ease;
  }

  .social-media a svg {
    color: var(--color-yellow);
    border: 2px solid var(--color-yellow);
    border-radius: 11px;
    padding: 5px;
    margin: 2px;
    transition: all 0.4s ease;
    width: calc(0.5rem + 3vmin);
    height: auto;
  }

  .social-media a:hover > div svg {
    border: 2px solid white;
    color: white;
  }

  .social-media a:hover > div span {
    color: white;
  }

  @media (min-width: 576px) {
    .grid-container div:nth-child(1n) {
      grid-column: span 1;
      grid-row: span 2;
      width: 100%;
    }
  }
`;
