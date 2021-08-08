import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function ArtikelPage(props) {
  const title = ["Jelajah UGM dari Rumah bersama Kembara Loka", "Gadjah Mada"];
  const text = [
    <span>
      Kembara Loka adalah sebuah konsep yang disajikan oleh Panitia PPSMB UGM
      2021 dalam bentuk peta virtual yang menampilkan kenampakan lingkungan UGM
      secara keseluruhan. Bertajuk ‘Discover UGM Differently’, Kembara Loka ini
      menjadi sebuah inovasi kolaboratif sebagai persembahan bagi Gadjah Mada
      Muda agar tetap dapat menjelajahi UGM walaupun secara virtual dari rumah
      masing-masing. Lebih lanjut, Kembara Loka ini didesain sesuai dengan
      keadaan dan bentuk nyata topografi lingkungan UGM. Sehingga, Gamada lebih
      dapat merasakan dan membayangkan Universitas Gadjah Mada secara imersif.
      <br />
      <br />
      Sebagai salah satu terobosan terbaru yang dibawakan di PPSMB UGM 2021,
      perancangan Kembara Loka membutuhkan waktu dan proses yang terbilang cukup
      lama, yakni sekitar 3 bulan dengan melibatkan Divisi Acara (konseptor), IT
      (eksekutor), DDD (eksekutor) dan Materi (pemberi informasi). Cara
      mengakses Kembara Loka ini pun terbilang cukup mudah, Gamada dapat
      menggunakan perangkat yang dimiliki seperti telepon genggam atau pc dalam
      mengakses peta virtual. Namun, untuk mendapatkan pengalaman menjelajah
      yang lebih baik, Gamada disarankan menggunakan pc/laptop disertai dengan
      koneksi jaringan yang stabil. Lebih lanjut, Gamada dapat mengunjungi laman
      resmi PPSMB UGM 2021, kemudian beralih menuju section peta UGM yang telah
      tertera dalam beranda laman resmi tersebut. Setelah berada di bagian Peta
      UGM, Gamada pun dapat menjelajah sesuai dengan keinginan yang dituju.
      <br />
      <br />
      Ketika menjelajah UGM menggunakan Kembara Loka, Gamada dapat menjumpai
      beberapa fitur yang telah tersedia dalam peta virtual. Fitur pertama,
      yaitu bangunan 3D modelling yang apabila dipilih akan muncul infografis
      yang berisi informasi seputar bangunan/fakultas tersebut. Diwujudkan dalam
      bentuk narasi singkat, informasi tersebut memuat jumlah program studi,
      asal mula terbentuknya bangunan/fakultas, hal-hal menarik, dan informasi
      semacamnya yang dapat membantu Gamada untuk mengetahui berbagai macam
      bangunan ikonik yang ada di UGM. Setelah muncul pop up infografis
      tersebut, di bagian sebelah kiri bawah, akan tertera ikon gambar 360 yang
      mana ketika bagian tersebut dipilih maka akan muncul kenampakan 360
      derajat dari bangunan dan lingkungan sekitar fakultas tersebut. Dengan
      memanfaatkan fitur 360, Gamada dapat melihat fakultas yang dipilih secara
      tiga dimensi. Selain itu, juga ada panorama list yang memuat kumpulan foto
      bangunan/fakultas dalam dua dimensi yang berisikan sudut-sudut UGM, spot
      favorit, dan fasilitas yang ada di lingkungan fakultas tersebut. Untuk
      melengkapi fitur-fitur dalam Kembara Loka, juga disediakan voice over yang
      dapat diaktifkan untuk menjelaskan kenampakan dari open space yang
      terdapat dalam fitur 360 dan panorama list tersebut.
      <br />
      <br />
      Selain fitur-fitur yang menunjang kebermanfaatan peta virtual UGM,
      kedepannya Kembara Loka akan mendapat beberapa pembaharuan fitur. Dengan adanya peta
      virtual yang dikemas secara lebih menarik ini, harapannya Gamada dapat
      memanfaatkan berbagai macam fitur untuk dapat menjelajahi UGM secara
      virtual beserta fasilitas dan informasi yang ada di dalamnya. Walaupun
      berada di situasi pandemi dengan segala rintangan yang harus dihadapi,
      Gamada tetap dapat mengenal lebih dekat universitas kebanggaan dengan
      menjelajahi peta virtual Kembara Loka.
    </span>,
  ];
  const photo = [require("../../assets/img/redaksi-palapa/kembaraloka.webp").default];
  let selectedTitle, selectedText, selectedPhoto;

  if (props.day === "one") {
    selectedTitle = title[0];
    selectedText = text[0];
    selectedPhoto = photo[0];
  }

  return (
    <ArtikelPageStyle>
      <Fade>
        <div className="artikel-content">
          <h1 className="title">{selectedTitle}</h1>
          <div className="hr"></div>
          <div className="image-content">
            <img src={selectedPhoto} alt="" srcset="" />
          </div>
          <div className="text-content">{selectedText}</div>
        </div>
      </Fade>
    </ArtikelPageStyle>
  );
}

export default ArtikelPage;

const ArtikelPageStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5vmin;
  min-height: 100vh;

  .artikel-content {
    width: 100%;
    min-height: 100vh;
  }

  .title {
    font-weight: bold;
    font-size: calc(0.5rem + 6.5vmin);
  }

  .hr {
    height: 4px;
    background-color: black;
    width: 100%;
  }

  .image-content img {
    width: 100%;
    height: auto;
    padding: 5vmin 0;
  }

  .text-content {
    text-align: justify;
    font-size: calc(0.5rem + 2.2vmin);
    line-height: 1.8;
  }

  @media (min-width: 992px) {
    .artikel-content {
      padding: 15vmin 0;
      max-width: 992px;
    }

    .text-content {
      font-size: calc(0.5rem + 1.5vmin);
    }
  }
`;
