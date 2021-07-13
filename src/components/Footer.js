import React from "react";
import styled from "styled-components";
import SocialMedia from "./SocialMedia";

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
          <a
            href="https://goo.gl/maps/NPeetPpr5vVcRTXr5"
            target="_blank"
            rel="noopener noreferrer"
            classname="ppsmb-yellow"
          >
            Jl. Asem Kranji Blok K-8 Sekip, Sendowo, Sinduadi, Mlati, Sleman, Yogyakarta 55281
          </a>
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
            <SocialMedia
              name="Twitter"
              faIcon={["fab", "twitter"]}
              link="http://twitter.com/ppsmb_ugm"
              secondaryColor='#ffffff'
            />
            <SocialMedia
              name="Instagram"
              faIcon={["fab", "instagram"]}
              link="http://instagram.com/ppsmb_ugm"
              secondaryColor='#ffffff'
            />
            <SocialMedia
              name="Tiktok"
              faIcon={["fab", "tiktok"]}
              link="https://vt.tiktok.com/ZSJ2VX4kJ/"
              secondaryColor='#ffffff'
            />
            <SocialMedia
              name="Facebook"
              faIcon={["fab", "facebook"]}
              link="https://www.facebook.com/PPSMB-UGM-325374494259950/"
              secondaryColor='#ffffff'
            />
            <SocialMedia
              name="Youtube"
              faIcon={["fab", "youtube"]}
              link="https://www.youtube.com/user/ppsmbpalapa"
              secondaryColor='#ffffff'
            />
          </div>
        </div>
      </div>
      
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  min-width: 140px;
  background-color: var(--color-footerblue);
  color: white;
  padding: 10vmin;
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

  @media (min-width: 576px) {
    .grid-container div:nth-child(1n) {
      grid-column: span 1;
      grid-row: span 2;
      width: 100%;
    }
  }
`;
