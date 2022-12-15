import { Link } from "react-router-dom";

export const QuestionItems = [
    {
        category: 'Umum',
        question: [
            {
                title: 'Kapan PPSMB UGM 2021 dilaksanakan?',
                answer: <p>PPSMB UGM 2021 akan dilaksanakan pada tanggal 2-13 Agustus 2021. Dengan rincian sebagai berikut:<br/>PPSMB Universitas &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: 2-3 Agustus 2021.<br/>PPSMB Fakultas&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : 4-5 Agustus 2021.<br/><em>PPSMB Soft-skills</em>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;: 6-7 Agustus 2021.<br/>Pelaksanaan <em>Action Plan</em>: 8-13 Agustus 2021.</p>,
            },
            {
                title: 'Apa yang perlu Gamada lakukan pertama kali?',
                answer: <p>Gamada dapat mencermati konten yang terdapat pada laman resmi PPSMB UGM 2021, seperti video, lini masa, <i>virtual map</i> UGM, dan galeri. Selain itu, pastikan Gamada sudah memiliki SSO untuk dapat mengakses Simaster dan melihat materi di eLOK sejak tanggal 27 Juli 2021.</p>,
            },
            {
                title: 'Bagaimana saya bisa mengetahui alur kegiatan pada  PPSMB UGM 2021?',
                answer: <p>Gamada dapat memperhatikan <i>lesson learning</i> dan melaksanakan semua misi sebagai bekal Gamada dalam perkuliahan dan kelulusan PPSMB UGM  2021.</p>,
            },
        ]
    },
    {
        category: 'Akun dan Akses Kelas',
        question: [
            {
                title: 'Apa itu SSO?',
                answer: <p>SSO (<i>Single Sign On</i>) merupakan sistem terintegrasi dengan <i>e-mail</i> UGM yang dimiliki oleh seluruh mahasiswa. Mahasiswa dapat memiliki SSO ketika sudah melakukan registrasi ulang.</p>,
            },
            {
                title: 'Bagaimana jika tidak bisa melakukan <i>login</i> SSO padahal sudah memiliki akun tersebut?',
                answer: <p>Jika mengalami kesulitan <i>login</i> dengan SSO silakan hubungi DSSDI (Direktorat Sistem dan Sumber Daya Informasi) dengan nomor +62 (274) 515660 atau +62 (274) 515664 atau <i>e-mail</i> <a href="mailto:dssdi@ugm.ac.id">dssdi@ugm.ac.id</a></p>,
            },
            {
                title: 'Bagaimana jika belum memiliki akun SSO padahal sudah melakukan registrasi ulang?',
                answer: <p>Silahkan hubungi DPP (Direktorat Pendidikan dan Pengajaran) melalui kontak, berikut:<br/>WA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <a href="https://wa.me/6285709559730" target="_blank" rel="noreferrer">085709559730</a> atau <a href="https://wa.me/6285156358683" target="_blank" rel="noreferrer">085156358683</a><br/>E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <a href="mailto:umugm@ugm.ac.id.">umugm@ugm.ac.id</a><br/>Instagram : <a href="https://www.instagram.com/admisiugm/" target="_blank" rel="noreferrer">@admisiugm</a><br/>Twitter &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <a href="https://twitter.com/admisiugm" target="_blank" rel="noreferrer">@admisiugm</a><br/>Facebook &nbsp;: <a href="https://web.facebook.com/ujianmasukugm/" target="_blank" rel="noreferrer">Admisi Universitas Gadjah Mada</a></p>,
            },
            {
                title: 'Apa itu Simaster?',
                answer: <p>Simaster merupakan sistem terintegrasi yang memuat seluruh kebutuhan mahasiswa UGM seperti pengelolaan perkuliahan, kemahasiswaan, administrasi, hingga tugas akhir.</p>,
            },
            {
                title: 'Bagaimana cara login ke Simaster?',
                answer: <p>Silakan akses "Ketentuan dan Panduan" pada tautan berikut <Link to="/materi-ketentuan/ketentuan/">cara <i>login</i> Simaster</Link>.</p>,
            },
            {
                title: 'Apa yang akan Gamada peroleh setelah berhasil login ke Simaster?',
                answer: <p>Gamada akan mendapatkan data administrasi, pembagian gugus kelas, dan <em>enrollment key</em> atau kode tertentu untuk mengakses platform terkait.</p>,
            },
            {
                title: 'Apa itu eLOK?',
                answer: <p>eLOK (<em>e-Learning: Open for Knowledge Sharing</em>) adalah sebuah sistem <em>e-Learning</em> yang digunakan untuk implementasi MOOC (<em>Massive Open Online Course</em>) di Universitas Gadjah Mada.</p>,
            },
            {
                title: 'Bagaimana cara login eLOK?',
                answer: <p>Silakan akses &quot;Ketentuan &amp; Panduan&quot; pada tautan berikut <a href="http://elok.ugm.ac.id" rel="noopener noreferrer" target="_blank" rel="noreferrer"><em>login</em> eLOK</a> </p>,
            },
            {
                title: 'Bagaimana jika tidak bisa melakukan <em>login</em> eLOK dengan akun SSO dikarenakan sudah terlanjur melakukan registrasi mandiri pada platform eLOK?',
                answer: <p>Silahkan hubungi PIKA (Pusat Inovasi dan Kajian Akademik) melalui kontak berikut:<br/>E-mail&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<a href="mailto: pika@ugm.ac.id"> pika@ugm.ac.id</a> .<br/>Telepon&nbsp; &nbsp; : (0274) 6491850.</p>,
            },
            {
                title: "Apakah fungsi dari <em>enrollment</em> key?",
                answer: <p><em>Enrollment key</em> digunakan untuk dapat mengakses dan masuk pada <em>course</em> atau modul &ldquo;<em>Introductory</em>&rdquo;, <em>course</em> atau modul &ldquo;Jati Diri UGM Bangun Karakterku&rdquo;, <em>course </em>atau modul &ldquo;Peran Aktifku dalam Masyarakat&rdquo;, <em>course </em>atau modul &ldquo;Aku Mahasiswa Adaptif dan Sukses&rdquo;, dan <em>course </em>atau modul &ldquo;Aksi Nyataku untuk Masyarakat&rdquo;.</p>,
            },
            {
                title: 'Dimanakah saya bisa mendapatkan enrollment key?',
                answer: <p>Gamada dapat mengakses Simaster dan memilih bagian kemahasiswaan, lalu bagian PPSMB untuk mendapatkan <em>enrollment key</em>.</p>,
            },
            {
                title: 'Apa yang perlu Gamada lakukan setelah mendapatkan enrollment key',
                answer: <p>Gamada menginput <em>enrollment key</em> ke dalam kolom teks yang tertera di eLOK. Setelah itu, Gamada dapat memperhatikan prosedur yang terdapat pada tautan berikut<em> <a href="enrollment key" target="_blank" rel="noreferrer">enrollment key</a></em></p>,
            },
        ]
    },
    {
        category: 'Sesi Sinkronus',
        question: [
            {
                title: 'Apa itu sinkronus?',
                answer: <p><em>Video Conference</em> atau pembelajaran dalam jaringan (daring) dalam waktu yang bersamaan.</p>,
            },
            {
                title: 'Platform apa saja yang digunakan selama sesi sinkronus',
                answer: <p><em>Platform</em> yang akan digunakan pada sesi sinkronus PPSMB Universitas dan <em>Soft-skills</em> adalah Google Meet, <em>group </em>Line, dan beberapa<em> platform</em> pendukung lainnya, sedangkan untuk PPSMB Fakultas akan menggunakan berbagai <em>platform</em> yang ditentukan oleh fakultas masing-masing seperti Google Meet, Google Jamboard, Webex, Youtube Streaming, dan atau Zoom.</p>,
            },

            {
                title: 'Bagaimana ketentuan pakaian yang digunakan saat PPSMB UGM 2021 berlangsung?',
                answer: <p>Selama PPSMB UGM 2021, Gamada dapat menggunakan pakaian bebas, sopan, dan rapi dengan ketentuan pakaian atas sebagai berikut:<br />Hari ke-1 dan ke-2: kemeja putih.<br />Hari ke-5 dan ke-6: kemeja batik.<br />Untuk Gamada yang berhijab menggunakan hijab segi empat dengan warna bebas polos (tidak bermotif).</p>,
            },

            {
                title: 'Bagaimana ketentuan rambut?',
                answer: 'Rambut berwarna natural dan ditata rapi.',
            },
            {
                title: 'Apakah diperbolehkan untuk memakai penutup kepala?',
                answer: 'Untuk laki-laki tidak diperbolehkan, bagi perempuan yang berhijab silakan menggunakan hijab segi empat berwarna polos.',
            },
            {
                title: 'Apakah diperkenankan untuk menggunakan aksesoris saat kegiatan PPSMB UGM 2021?',
                answer: 'Gamada diperkenankan untuk memakai aksesoris tetapi tidak berlebihan sesuai dengan ketentuan.',
            },
        ]
    },
    {
        category: 'Sesi Asinkronus',
        question: [
            {
                title: 'Apa itu asinkronus?',
                answer: <p>Pembelajaran dalam waktu yang tidak bersamaan, yakni dengan melihat media materi baik video ataupun <em>booklet</em> maupun mengerjakan kuis menyelesaikan tugas secara mandiri sesuai dengan <em>pace</em>-nya masing-masing.</p>,
            },
            {
                title: 'Platform apa saja yang dipakai selama sesi asinkronus?',
                answer: <p>Platform yang akan digunakan pada sesi asinkronus PPSMB Universitas dan PPSMB Soft-skills adalah eLOK dan group Line, sedangkan untuk PPSMB Fakultas akan menggunakan berbagai platform yang ditentukan oleh fakultas masing-masing seperti eLOK, Flexiquiz, Gadjah Mada Medical e-Learning (GaMel), Google Classroom, Google Docs, Google Form, group Line, Google Meet, Google Slide, Whatsapp group Chat, dan atau Youtube.</p>,
            },
        ]
    },
    {
        category: 'Penugasan',
        question: [
            {
                title: 'Bagaimanakah bentuk pengerjaan penugasan?',
                answer: 'Penugasan dikerjakan dengan cara diketik, kecuali ada ketentuan khusus yang diminta dalam penugasan.',
            },
            {
                title: 'Apa format file jawaban penugasan?',
                answer: <p>Format pengumpulan file berupa .pdf, kecuali ada ketentuan khusus yang diminta dalam penugasan.</p>,
            },
            {
                title: 'Berapa ukuran maksimal file untuk jawaban penugasan?',
                answer: <p>Ukuran maksimal <em>file</em> jawaban penugasan adalah 20 mb.</p>,
            },
            {
                title: 'Apa format penamaan file jawaban penugasan?',
                answer: <p>Format penamaan file adalah sebagai berikut:<br />NIU_GUGUS KELAS_NAMA<br />(contoh: 123456_Kertanegara 5_Luqman Al-Hakim) .</p>,
            },
            {
                title: 'Apa perbedaan NIF dan NIU?',
                answer: <p>NIM adalah nomor induk mahasiswa sebagai contohnya, yaitu sebagai berikut 19-444444-EK-12345 yang terdiri dari susunan Angkatan-NIF-Fakultas-NIU.</p>,
            },
            {
                title: 'Apabila koneksi terputus saat mengerjakan penugasan melalui online text, apakah pekerjaan akan terhapus?',
                answer: <p>Hasil pekerjaan yang telah dituliskan akan terhapus sehingga diharapkan Gamada dapat menggunakan koneksi yang stabil dan memiliki cadangan jawaban.</p>,
            },
            {
                title: 'Dapatkah Gamada melakukan pengumpulan atau pengunggahan penugasan lebih dari satu kali?',
                answer: <p>Pengumpulan atau pengunggahan penugasan sesuai dengan ketentuan yang tertera di masing-masing <em>platform</em>.</p>,
            },
        ]
    },


    
]