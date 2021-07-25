import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    borderRadius: "25px",
    backgroundColor: "var(--color-darkblue)",
    height: "90vh",
    width: "80vw",
    fontSize: "calc(0.5rem + 1vmin)",
  },

  overlay: { zIndex: 1000 },
};

Modal.setAppElement("body");

export default function Announce(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <AnnounceContainer onClick={openModal}>
        <FontAwesomeIcon icon={faBullhorn} />
      </AnnounceContainer>

      <section className="modal">
        <Modal
          isOpen={modalIsOpen}
          closeTimeoutMS={500}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel={props.mainText}
        >
          <Fade>
            <h2 className="ppsmb-yellow">
              Pelatihan Pembelajar Sukses bagi Mahasiswa Baru (PPSMB) UGM 2021
            </h2>
            <p
              className="ppsmb-redpink"
              onClick={closeModal}
              style={{ cursor: "pointer" }}
            >
              Tutup
            </p>
            <ol
              className="content ppsmb-white"
              style={{
                textAlign: "left",
                fontSize: "calc(0.5rem + 1.5vmin)",
                lineHeight: "24px",
              }}
            >
              <li>
                Setiap mahasiswa baru Program Sarjana dan Diploma (calon
                mahasiswa teregistrasi) wajib mengikuti kegiatan Pelatihan
                Pembelajar Sukses bagi Mahasiswa Baru (PPSMB) UGM 2021.
                <ol type="a">
                  <li>
                    PPSMB UGM 2021 akan dilaksanakan pada tanggal 2-13 Agustus
                    2021
                  </li>
                  <li>
                    Ragam kegiatan PPSMB meliputi pembukaan, pemberian materi,
                    action plan dan penutupan.
                  </li>
                  <li>
                    Materi PPSMB disampaikan secara daring. Mahasiswa baru
                    diharap dapat mempersiapkan koneksi jaringan internet yang
                    baik agar dapat mengikuti kegiatan dengan lancar.
                  </li>
                </ol>
              </li>
              <li>
                Action plan dilakukan sesuai Protokol Kesehatan covid-19.{" "}
              </li>
              <li>
                Setiap mahasiswa baru Program Sarjana dan Diploma otomatis sudah
                terdaftar sebagai peserta PPSMB UGM 2021 (tanpa melakukan
                pengisian data lagi).
              </li>
              <li>
                Dalam rangka perlindungan data, setiap mahasiswa baru wajib
                tidak mengindahkan dan menolak segala macam pengumuman baik itu
                terkait teknis pelaksanaan, penugasan, maupun permintaan data
                pribadi (misal data diri, data kesehatan, nomor kontak, dsb);
                selain yang merujuk pada laman Sistem Ujian Masuk UGM (
                <a
                  className="ppsmb-yellow"
                  href="http://um.ugm.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://um.ugm.ac.id
                </a>
                ), SIMASTER UGM (
                <a
                  className="ppsmb-yellow"
                  href="http://simaster.ugm.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://simaster.ugm.ac.id
                </a>
                ) dan/atau laman PPSMB UGM 2021 (
                <a
                  className="ppsmb-yellow"
                  href="http://ppsmb.ugm.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://ppsmb.ugm.ac.id
                </a>
                ).
              </li>
              <li>
                Informasi resmi teknis pelaksanaan PPSMB UGM 2021 baik acara,
                materi, dan/atau penugasan tingkat Universitas maupun
                Fakultas/Sekolah Vokasi hanya melalui{" "}
                <a
                  className="ppsmb-yellow"
                  href="http://ppsmb.ugm.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://ppsmb.ugm.ac.id
                </a>
                .
              </li>
            </ol>
          </Fade>
        </Modal>
      </section>
    </div>
  );
}

const AnnounceContainer = styled.div`
  position: fixed;
  top: 15vmin;
  right: 3vmin;
  z-index: 20;
  transition: all 0.5s ease-in-out;
  background-color: var(--color-redpink);
  color: var(--color-white);
  font-size: calc(0.5rem + 2vmin);
  border-radius: 50%;
  width: 6vmin;
  height: 6vmin;
  padding: 4vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid var(--color-white);

  :hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    padding: 0vmin;
  }
`;
