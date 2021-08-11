import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";

function ArtikelPage(props) {
  const title = [
    "Jelajah UGM dari Rumah bersama Kembara Loka",
    "Formasi Rubik Karsa : Ekspresi dalam Kreasi ",
  ];
  const text = [
    <span>
      Kembara Loka adalah sebuah konsep yang disajikan oleh Panitia PPSMB UGM
      2021 dalam bentuk peta virtual yang menampilkan kenampakan lingkungan UGM
      secara keseluruhan. Bertajuk <i>‘Discover UGM Differently’</i>, Kembara
      Loka ini menjadi sebuah inovasi kolaboratif sebagai persembahan bagi
      Gadjah Mada Muda agar tetap dapat menjelajahi UGM walaupun secara virtual
      dari rumah masing-masing. Lebih lanjut, Kembara Loka ini didesain sesuai
      dengan keadaan dan bentuk nyata topografi lingkungan UGM. Sehingga, Gamada
      lebih dapat merasakan dan membayangkan Universitas Gadjah Mada secara
      imersif.
      <br />
      <br />
      Sebagai salah satu terobosan terbaru yang dibawakan di PPSMB UGM 2021,
      perancangan Kembara Loka membutuhkan waktu dan proses yang terbilang cukup
      lama, yakni sekitar 3 bulan dengan melibatkan Divisi Acara (konseptor), IT
      (eksekutor), DDD (eksekutor) dan Materi (pemberi informasi). Cara
      mengakses Kembara Loka ini pun terbilang cukup mudah, Gamada dapat
      menggunakan perangkat yang dimiliki seperti telepon genggam atau pc dalam
      mengakses peta virtual. Namun, untuk mendapatkan pengalaman menjelajah
      yang lebih baik, Gamada disarankan menggunakan PC/laptop disertai dengan
      koneksi jaringan yang stabil. Lebih lanjut, Gamada dapat mengunjungi laman
      resmi PPSMB UGM 2021, kemudian beralih menuju <i>section</i> peta UGM yang
      telah tertera dalam beranda laman resmi tersebut. Setelah berada di bagian
      Peta UGM, Gamada pun dapat menjelajah sesuai dengan keinginan yang dituju.
      <br />
      <br />
      Ketika menjelajah UGM menggunakan Kembara Loka, Gamada dapat menjumpai
      beberapa fitur yang telah tersedia dalam peta virtual. Fitur pertama,
      yaitu bangunan <i>3D modelling</i> yang apabila dipilih akan muncul
      infografis yang berisi informasi seputar bangunan/fakultas tersebut.
      Diwujudkan dalam bentuk narasi singkat, informasi tersebut memuat jumlah
      program studi, asal mula terbentuknya bangunan/fakultas, hal-hal menarik,
      dan informasi semacamnya yang dapat membantu Gamada untuk mengetahui
      berbagai macam bangunan ikonik yang ada di UGM. Setelah muncul{" "}
      <i>pop up</i> infografis tersebut, di bagian sebelah kiri bawah, akan
      tertera ikon gambar 360 yang mana ketika bagian tersebut dipilih maka akan
      muncul kenampakan 360 derajat dari bangunan dan lingkungan sekitar
      fakultas tersebut. Dengan memanfaatkan fitur 360, Gamada dapat melihat
      fakultas yang dipilih secara tiga dimensi. Selain itu, juga ada{" "}
      <i>panorama list</i> yang memuat kumpulan foto bangunan/fakultas dalam dua
      dimensi yang berisikan sudut-sudut UGM, spot favorit, dan fasilitas yang
      ada di lingkungan fakultas tersebut. Untuk melengkapi fitur-fitur dalam
      Kembara Loka, juga disediakan <i>voice over</i> yang dapat diaktifkan
      untuk menjelaskan kenampakan dari <i>open space</i> yang terdapat dalam
      fitur 360 dan <i>panorama list</i> tersebut.
      <br />
      <br />
      Selain fitur-fitur yang menunjang kebermanfaatan peta virtual UGM,
      kedepannya Kembara Loka akan mendapat beberapa pembaharuan fitur. Dengan
      adanya peta virtual yang dikemas secara lebih menarik ini, harapannya
      Gamada dapat memanfaatkan berbagai macam fitur untuk dapat menjelajahi UGM
      secara virtual beserta fasilitas dan informasi yang ada di dalamnya.
      Walaupun berada di situasi pandemi dengan segala rintangan yang harus
      dihadapi, Gamada tetap dapat mengenal lebih dekat universitas kebanggaan
      dengan menjelajahi peta virtual Kembara Loka.
    </span>,
    <div>
      <span>
        Setiap tahunnya, rangkaian kegiatan Upacara Pembukaan PPSMB UGM adalah
        hal yang paling dinantikan dan banyak menarik perhatian, tidak hanya
        bagi Gadjah Mada Muda tetapi juga masyarakat luas. Kejutan yang dikemas
        dengan menarik dan mengedepankan kreativitas tiap tahunnya tentu
        memiliki konsep, alur cerita, dan makna tersendiri. Panitia PPSMB UGM
        terus berinovasi dalam menyajikan upacara penyambutan yang berkesan
        sehingga akan selalu diingat bagi Gadjah Mada Muda. Tidak melupakan
        fakta pada tahun 2020, panitia PPSMB UGM 2020 bahkan berhasil mencetak
        rekor Museum Rekor Indonesia (MURI) melalui penampilan formasinya yakni
        Formasi Pelita Gadjah Mada. Rangkaian lampu yang ditampilkan berhasil
        mencetak rekor dengan kolase digital terbanyak.
        <br />
        <br />
        Tahun ini, Formasi Rubik Karsa merupakan salah satu bentuk kreasi
        panitia sebagai jawaban dari kejutan untuk Gadjah Mada Muda di Upacara
        Pembukaan PPSMB UGM 2021. Formasi Rubik Karsa ini terinspirasi dari
        suatu permainan daring kontemporer yaitu <i>Minecraft</i>. Selain itu,
        gagasan akan konsep balok yang bergerak ini berasal ide liar yang
        berujung pada suatu kreasi spektakuler. Seperti yang telah disaksikan
        bersama, formasi tahun ini memaparkan suatu alur cerita penuh pesan yang
        mengajak Gadjah Mada Muda agar terus berani berinovasi dan menjadi
        manusia yang kreatif, unggul, dan berdaya cipta tinggi. Sesuai dengan
        tema besar PPSMB UGM 2021 itu sendiri yaitu “Ragam Kreasi UGM Pancarkan
        Pesona Pertiwi”.
        <br />
        <br />
        Formasi Rubik Karsa ini merupakan hasil kreasi kolaboratif dari beberapa
        divisi kepanitiaan PPSMB UGM 2021 diantaranya, Acara, IT, Perlengkapan,
        dan DDD. Dalam persiapan teknis maupun nonteknis, terdapat proses
        panjang dengan kompleksitas dibaliknya. Divisi Perlengkapan sebagai
        penyedia dan tim yang merangkai perangkat keras dalam proyek ini
        memiliki banyak kendala dan cerita tersendiri dalam prosesnya. Berbagai
        macam kendala berhasil dilewati oleh panitia, salah satunya proses
        akurasi dalam pembuatan bingkai berukuran 2,5 x 2,75 meter yang
        disesuaikan dengan ukuran dari setiap balok yaitu 10 cm x 10 cm
        berjumlah 400 buah yang diproduksi secara <i>handmade</i> oleh divisi
        perlengkapan sendiri. Selain itu, kelistrikan dalam rangkaian perangkat
        Formasi Rubik Karsa pernah mengalami kerusakan pada saat uji coba,
        “Beberapa <i>servo</i> dan salah satu <i>power supply</i>
        yang digunakan untuk membuat balok tersebut dapat bergerak dinamis
        mengalami kerusakan, sehingga proses pembuatan formasi ini sempat
        terhambat. Namun, sekali lagi hal tersebut dapat ditangani dengan baik.”
        terang Dendi, salah satu Staf divisi Perlengkapan.
        <br />
      </span>
      <img
        className="image-inside"
        src={
          require("../../assets/img/redaksi-palapa/bts-rubikkarsa.webp").default
        }
        alt=""
      />
      <span>
        <br />
        Tidak terbatas hanya pada satu divisi, kendala dan rintangan juga muncul
        di divisi-divisi lain seperti IT dan DDD. Pada proses <i>coding</i>,
        “Tim IT, melakukan <i>image processing</i> untuk pengubahan gambar yang
        sebelumnya telah disiapkan oleh divisi acara agar dapat menjadi matriks
        dan selanjutnya
        <i>coding</i> di-<i>input</i> ke Arduino yang bekerja untuk pengaturan
        motor servo.” ujar Angga yang merupakan staf divisi IT. Proses peng-
        <i>coding</i>-an juga mengalami beberapa kendala yang harus dilewati hal
        tersebut berimbas pula pada divisi DDD yang juga perlu menyesuaikan{" "}
        <i>editing</i>-nya. Selain itu, pengaturan pencahayaan yang tepat dari
        berbagai arah yang sangat menentukan efek 3D dari formasi tersebut juga
        menjadi tantangan tersendiri bagi panitia. Namun, melihat hasil kreasi
        luar biasa Rubik Karsa tersebut, tentu segala kendala dan rintangan yang
        telah dilewati berhasil menjadi pelajaran dan pengalaman luar biasa bagi
        setiap panitia yang terlibat.
        <br />
        <br />
        Alur cerita Formasi Rubik Karsa sendiri diawali dengan animasi yang
        menggambarkan perubahan dari zaman dahulu hingga saat ini yang
        menunjukan bahwa aspek kreativitas di Indonesia masih berada pada titik
        yang cukup rendah. Formasi Rubik Karsa menyampaikan pesan bahwa
        Universitas Gadjah Mada memiliki andil dalam menangani isu tersebut.
        Selain itu, juga ditampilkan bukti-bukti penting bahwa UGM merupakan
        tempat yang tepat untuk menyalurkan segala minat maupun bakat yang
        dimiliki oleh generasi emas di Indonesia dan siap untuk menjadi
        perguruan tinggi yang menyediakan sarana dan prasarana untuk membentuk
        civitas akademika yang dapat berkreasi demi kemajuan bangsa. Pihak
        panitia berharap setelah menonton penampilan Formasi Rubik Karsa, Gadjah
        Mada Muda atau bahkan masyarakat secara luas dapat terdorong untuk
        menjadi individu yang lebih kreatif dan berani untuk berekspresi melalui
        karya dan ciptaannya.
      </span>
    </div>,
  ];
  const photo = [
    [require("../../assets/img/redaksi-palapa/kembaraloka.webp").default],
    [require("../../assets/img/redaksi-palapa/rubikkarsa.webp").default],
  ];

  const writer = ["Nabila Maharani Naumi", "Herera Aribah Respati"];
  let selectedTitle, selectedText, selectedPhoto, selectedWriter;

  if (props.day === "one") {
    selectedTitle = title[0];
    selectedText = text[0];
    selectedPhoto = photo[0];
    selectedWriter = writer[0];
  } else if (props.day === "two") {
    selectedTitle = title[1];
    selectedText = text[1];
    selectedPhoto = photo[1][0];
    selectedWriter = writer[1];
  }

  return (
    <ArtikelPageStyle>
      <Helmet>
        <title>Redaksi Palapa | PPSMB UGM 2021</title>
      </Helmet>
      <Fade>
        <div className="artikel-content">
          <h1 className="title">{selectedTitle}</h1>
          <h2 className="writer">
            <p>Oleh: {selectedWriter}</p>
          </h2>
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

  .writer {
    font-weight: normal;
    font-size: calc(0.5rem + 2vmin);
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

  .image-inside {
    width: 100%;
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
