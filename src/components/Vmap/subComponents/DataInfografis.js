const infografis = [
  // Start Kelas 1
  {
    objectName: "Perpustakaan_Pusat",
    name: "Perpustakaan Universitas Gadjah Mada",
    isFakultas: false,
    gambarFakultas: "/images/gambarInfografis/perpusat-min.jpg",
    narasi: `
    Perpustakaan Universitas Gadjah Mada yang berdiri pada tanggal 1 Maret 1951 pada mulanya bertempat di gedung pada Jl. 
    Senopati dan saat ini berkedudukan di kampus Bulaksumur, Yogyakarta. Perpustakaan Universitas Gadjah Mada yang sering 
    disebut Perpusat mendukung aktivitas pembelajaran, penelitian, dan pengabdian masyarakat sivitas akademika UGM melalui 
    berbagai literatur dan fasilitas yang dimilikinya. Terdapat dua kategori fasilitas yakni Fasilitas Belajar Mandiri 
    (Quiet Area) dan Fasilitas Belajar Ruang Diskusi (Noisy Area).
            `,
    image360Location: "./images/image360/PERPUSAT 360.webp",
    voiceOver: "./assets/voice-over/24 Perpus.mp3",
    target: { x: -0.15, z: -1.35 },
    camera: { x: -1.5, y: 1.75, z: 3 },
  },
  {
    objectName: "Balairung",
    name: "Kantor Pusat Universitas Gadjah Mada",
    isFakultas: false,
    gambarFakultas: "/images/gambarInfografis/balairung.jpg",
    narasi: `
    Gedung Pusat Universitas Gadjah Mada atau Balairung merupakan kantor utama penyelenggaraan urusan vital Universitas 
    Gadjah Mada. Beberapa kantor yang berada di gedung ini antara lain Kantor Rektorat, Direktorat Keuangan, Direktorat 
    Pengelolaan dan Pemeliharaan Aset, Kantor Jaminan Mutu, dan Kantor Urusan Internasional Universitas Gadjah Mada. 
    Balairung merupakan salah satu ikon Universitas Gadjah Mada yang menandai berdirinya perguruan tinggi pertama yang 
    dibangun oleh Pemerintah Republik Indonesia pasca kemerdekaan. Gedung ini diresmikan oleh Presiden Ir. Soekarno pada 
    19 Desember 1959. Karakter konstruksi Balairung merepresentasikan bangunan modern awal yang ada di Indonesia. Sosok 
    arsitek dibalik kemegahan Balairung yaitu GPH Hadinegoro.
          `,
    image360Location: "./images/image360/BALAIRUNG 360.webp",
    voiceOver: "./assets/voice-over/24 Balairung.mp3",
    target: { x: 0.35, z: -2.5 },
    camera: { x: -1.5, y: 1.75, z: -5 },
  },
  {
    objectName: "Masjid_Kampus",
    name: "Masjid Kampus",
    isFakultas: false,
    gambarFakultas: "/images/gambarInfografis/maskam.jpg",
    narasi: `
    Masjid Kampus Universitas Gadjah Mada terletak di Jalan Tevesia 1, Kompleks Bulaksumur, Depok, Sleman, DIY.  
    Masjid megah ini didirikan pada tahun 1998. Ide pembangunan masjid berawal dari keinginan pada masa kepemimpinan 
    Rektor Prof. Koesnadi Hardjasoemantri. Masjid ini mulai digunakan pada 4 Desember 1999 dengan nama Masjid Kampus 
    Universitas Gadjah Mada. Selain memiliki tempat shalat, Masjid Kampus Universitas Gadjah Mada juga dilengkapi dengan 
    tempat wudhu, kelas, sekretariat, perpustakaan, lanskap, lahan parkir, serta menara.
            `,
    image360Location: "./images/image360/MASKAM 360.webp",
    voiceOver: "./assets/voice-over/23 Masjid Kampus.mp3",
    target: { x: 1.6, z: 1.25 },
    camera: { x: 6, y: 2.5, z: 6 },
  },
  {
    objectName: "Grha_Sabha_Pramana",
    name: "Grha Sabha Pramana",
    isFakultas: false,
    gambarFakultas: "/images/gambarInfografis/gsp.jpg",
    narasi: `
    Grha Sabha Pramana atau GSP adalah gedung pertemuan serbaguna Universitas Gadjah Mada yang berkapasitas hingga 5000 
    orang, terdiri atas dua lantai yaitu lantai dasar yang memiliki beberapa area pertemuan berkapasitas terbatas dan 
    lantai dua berupa aula besar yang dilengkapi dengan panggung serta tribun yang mengelilinginya. Bangunan bernuansa 
    joglo ini memiliki luas lantai hingga 11.069,80 m2. GSP tidak hanya digunakan untuk keperluan kegiatan akademik 
    Universitas Gadjah Mada namun juga difungsikan untuk kegiatan lain seperti penyelenggaraan kuliah umum, seminar nasional, 
    job fair, hingga acara hiburan seperti konser musik. Gedung Grha Sabha Pramana mulai didirikan pada 1 Mei 1993 dan selesai 
    pada 8 September 1994. Peresmian GSP diselenggarakan pada 20 Desember 1994 oleh Presiden Soeharto.
            `,
    image360Location: "./images/image360/GSP 360.webp",
    voiceOver: "./assets/voice-over/21 GSP.mp3",
    target: { x: -0.4, z: -0.2 },
    camera: { x: -2.5, y: 2, z: 4 },
  },
  {
    objectName: "Gerbang_UGM",
    name: "Gerbang Utama",
    isFakultas: false,
    gambarFakultas: "/images/gambarInfografis/gerbang.jpg",
    narasi: `
    Gerbang Utama UGM memiliki filosofi, yakni Gapura Gadjah Mada terinspirasi oleh Candi Bentar. Candi Bentar adalah pemisah 
    antara bagian luar dan bagian dalam. Gapura UGM terbuat dari Stainless maksudnya berpijak di masa lalu tetapi juga harus 
    berkembang dan terinspirasi ke masa depan.
            `,
    image360Location: "./images/image360/BUNDERAN 360.webp",
    voiceOver: "./assets/voice-over/26 Gerbang UGM.mp3",
    target: { x: -0.5, z: 2.25 },
    camera: { x: 0, y: 2.5, z: 8 },
  },
  {
    objectName: "Stadion_Pancasila",
    name: "Stadion Pancasila",
    isFakultas: false,
    gambarFakultas: "/images/gambarInfografis/stadion.jpg",
    narasi: `
    Stadion Pancasila merupakan salah satu fasilitas penunjang kegiatan kemahasiswaan Stadion ini terletak di kawasan lembah 
    UGM dan digunakan untuk kegiatan olahraga sepak bola,  atletik, hoki, serta kegiatan-kegiatan lain yang diizinkan oleh 
    Rektor UGM.
            `,
    image360Location: "./images/image360/STAD PANCAS 360.webp",
    voiceOver: "./assets/voice-over/25 Stadion Pancasila.mp3",
    target: { x: 3.6, z: -1.925 },
    camera: { x: 5.75, y: 0.5, z: -0.25 },
  },
  {
    objectName: "Hospital",
    name: "Gadjah Mada Medical Center (GMC)",
    isFakultas: false,
    gambarFakultas: "/images/gambarInfografis/gmc.jpg",
    narasi: `
    GMC adalah badan pengelola santunan kesehatan sivitas akademika UGM yang bersifat not for profit. GMC terletak di Jalan 
    SEKIP Blok L3, Sendowo, Sinduadi, Mlati, Sinduadi, Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta .
            `,
    image360Location: "./images/image360/GMC 360.webp",
    voiceOver: "./assets/voice-over/27 GMC.mp3",
  },
  // Start Kelas 2
  {
    objectName: "Fakultas_Biologi",
    name: "Fakultas Biologi",
    isFakultas: true,
    jumlahProdi: 1,
    listProdi: ["Biologi"],
    gambarFakultas: "/images/gambarInfografis/biologi.jpg",
    narasi: `
    Fakultas Biologi Universitas Gadjah Mada didirikan pada 19 September 1955 dengan mencakup dua seksi yaitu seksi zoologi 
    dan seksi botani. Fakultas ini pada awalnya terletak di Kompleks Mangkubumen, Yogyakarta dan pada tahun 1970 menempati 
    kawasan Sekip Utara, Yogyakarta. Pada awalnya pula Fakultas Biologi menyelenggarakan tiga program studi yaitu Program 
    Studi Zoologi, Botani, dan Lingkungan. Namun setelah tahun akademik 1994/1995 hanya terdapat satu program studi yakni 
    Program Studi Biologi. Fakultas Biologi juga dilengkapi dengan berbagai laboratorium penelitian, perpustakaan, auditorium, 
    museum biologi, dan kebun biologi untuk menunjang pengembangan ilmu biologi.
            `,
    image360Location: "./images/image360/BIOLOGI 360.webp",
    voiceOver: "./assets/voice-over/11 Biologi.mp3",
    target: { x: -1.7, z: -2.1 },
    camera: { x: 1, y: 1.5, z: -4 },
  },
  {
    objectName: "Fakultas_Geografi",
    name: "Fakultas Geografi",
    isFakultas: true,
    jumlahProdi: 3,
    listProdi: [
      "Geografi dan Ilmu Lingkungan",
      "Kartografi dan Penginderaan Jauh",
      "Pembangunan Wilayah",
    ],
    gambarFakultas: "/images/gambarInfografis/geografi.jpg",
    narasi: `
    Fakultas Geografi didirikan pada 1 September 1963. Pada mulanya Fakultas Geografi terdiri dari Jurusan Geografi Fisik 
    dan Geografi Manusia. Namun pada saat ini, Fakultas Geografi terdiri dari tiga program studi jenjang sarjana, antara 
    lain Program Studi Geografi dan Ilmu Lingkungan, Kartografi dan Penginderaan Jauh, serta Pembangunan Wilayah. Fasilitas 
    yang dimiliki guna mendukung kelancaran proses studi antara lain berbagai jenis laboratorium, studio, perpustakaan, 
    auditorium, sarana olahraga, taman, serta kantor sekretariat kegiatan mahasiswa.
            `,
    image360Location: "./images/image360/GEOGRAFI 360.webp",
    voiceOver: "./assets/voice-over/1 Fakultas Geografi.mp3",
    target: { x: -1.15, z: -2.65 },
    camera: { x: 2, y: 1.35, z: 0 },
  },
  {
    objectName: "Fakultas_Kedokteran_Gigi",
    name: "Fakultas Kedokteran Gigi",
    isFakultas: true,
    jumlahProdi: 2,
    listProdi: ["Higiene Gigi", "Kedokteran Gigi"],
    gambarFakultas: "/images/gambarInfografis/fkg.jpg",
    narasi: `
    Fakultas Kedokteran Gigi bermula dari berdirinya Perguruan Tinggi Kedokteran Gigi pada 1948. Pada 1949, perguruan tinggi 
    ini bergabung dengan Yayasan Balai Perguruan Tinggi Gadjah Mada. Fakultas Kedokteran Gigi mulai berdiri sebagai satu 
    fakultas terpisah pada 29 Desember 1960 dengan bertempat di Mangkubumen. Setelah mengalami proses pemindahan, mulai 1970 
    akultas Kedokteran Gigi secara resmi menempati daerah Sekip Utara. Selain fasilitas berupa gedung kuliah, perpustakaan, 
    serta laboratorium klinik, Fakultas Kedokteran Gigi juga memiliki Rumah Sakit Gigi dan Mulut Prof. Soedomo sebagai tempat 
    proses pembelajaran pendidikan dokter gigi.
            `,
    image360Location: "./images/image360/FKG 360.webp",
    voiceOver: "./assets/voice-over/12 FKG.mp3",
    target: { x: -1.5, z: 0.5 },
    camera: { x: -5, y: 1.15, z: -1.25 },
  },
  {
    objectName: "Fakultas_Matematika_dan_Ilmu_Pengetahuan_Alam",
    name: "Fakultas MIPA",
    isFakultas: true,
    jumlahProdi: 7,
    listProdi: [
      "Geofisika",
      "Fisika",
      "Elektronika dan Instrumentasi",
      "Kimia",
      "Matematika",
      "Statistika",
      "Ilmu Komputer",
    ],
    gambarFakultas: "/images/gambarInfografis/mipa-min.jpg",
    narasi: `
    Fakultas Matematika dan Ilmu Pengetahuan Alam pada mulanya bersatu dengan Fakultas Teknik dan kemudian berpisah pada 
    tanggal 1 September 1956. Fakultas Matematika dan Ilmu Pengetahuan Alam telah mengalami banyak perubahan dan penambahan 
    program studidaan hingga kini terdapat 7 program studi. Selain fasilitas berupa gedung kuliah, Fakultas Matematika dan 
    Ilmu Pengetahuan Alam juga memiliki perpustakaan, berbagai laboratorium sesuai bidangnya, dan Student Internet Center.   
            `,
    image360Location: "./images/image360/FMIPA 360.webp",
    voiceOver: "./assets/voice-over/13 FMIPA.mp3",
    target: { x: -0.925, z: -2.5 },
    camera: { x: -2.5, y: 1.25, z: 1.75 },
  },
  {
    objectName: "Fakultas_Psikologi",
    name: "Fakultas Psikologi",
    isFakultas: true,
    jumlahProdi: 1,
    listProdi: ["Psikologi"],
    gambarFakultas: "/images/gambarInfografis/psikologi.jpg",
    narasi: `
    Pada awal pembentukannya, Fakultas Psikologi berada di bawah Fakultas Ilmu Pendidikan Universitas Gadjah Mada yang 
    didirikan pada tahun ajaran 1958/1959. Setelah jurusan Psikologi sempat bergabung dengan IKIP Yogyakarta dan dipimpin 
    secara langsung oleh rektor, Fakultas Psikologi diresmikan pada 19 Desember 1964. Meskipun merupakan fakultas dengan 
    program studi klaster sosial-humaniora, Fakultas Psikologi memiliki laboratorium eksperimen untuk menunjang jalannya 
    perkuliahan. Selain itu, fakultas ini juga memiliki beberapa unit pengembangan dan juga unit konsultasi psikologis.
            `,
    image360Location: "./images/image360/PSIKOLOGI 360.webp",
    voiceOver: "./assets/voice-over/15 Psikologi.mp3",
    target: { x: 1.95, z: 0.15 },
    camera: { x: -3, y: 3.25, z: -0.25 },
  },
  {
    objectName: "Fakultas_Ekonomika_dan_Bisnis",
    name: "Fakultas Ekonomika dan Bisnis",
    isFakultas: true,
    jumlahProdi: 3,
    listProdi: ["Akuntansi", "Ilmu Ekonomi", "Manajemen"],
    gambarFakultas: "/images/gambarInfografis/feb.jpg",
    narasi: `
    Pada mulanya, Fakultas Ekonomi dan Bisnis merupakan bagian dari Fakultas Hukum, Ekonomi, Sosial, dan Politik. Pada 19 
    September 1955, Fakultas Ekonomi resmi berdiri dengan pelaksanaan kegiatan belajar mengajar bertempat pada sekitar 
    Pagelaran Keraton Yogyakarta. Mulai tahun 1989, Fakultas Ekonomi bertempat pada gedung baru di Jalan Humaniora dan pada 
    tahun 2007 mengalami perubahan nama menjadi Fakultas Ekonomika dan Bisnis. Guna mendukung proses pembelajaran, Fakultas 
    Ekonomika dan Bisnis dilengkapi dengan berbagai sarana seperti auditorium, student lounge, perpustakaan, lab komputer, 
    serta lab bahasa.
            `,
    image360Location: "./images/image360/FEB 360.webp",
    voiceOver: "./assets/voice-over/4 FEB.mp3",
    target: { x: 0.3, z: -0.125 },
    camera: { x: 4, y: 4, z: 3.5 },
  },
  {
    objectName: "Fakultas_Hukum",
    name: "Fakultas Hukum",
    isFakultas: true,
    jumlahProdi: 2,
    listProdi: [
      "Program S1 Reguler",
      "Program International Undergraduate Program (IUP)",
    ],
    gambarFakultas: "/images/gambarInfografis/hukum.jpg",
    narasi: `
    Fakultas Hukum pada mulanya bergabung dengan Fakultas Ekonomi, Sosial dan Politik. Mulai tanggal 15 September 1953, 
    Fakultas Hukum berdiri sendiri dan bertempat pada lingkungan keraton. Mulai tahun 1973, kegiatan penyelenggaraan kegiatan 
    perkuliahan dipindahkan ke Bulaksumur. Selain gedung-gedung perkuliahan, fasilitas yang dapat ditemukan di Fakultas Hukum 
    Universitas Gadjah Mada yaitu perpustakaan, Internet Corner, serta ruang sidang peradilan semu.  
            `,
    image360Location: "./images/image360/HUKUM 360.webp",
    voiceOver: "./assets/voice-over/10 Hukum.mp3",
    target: { x: 1.7, z: -0.5 },
    camera: { x: 2.5, y: 0.75, z: -3 },
  },
  {
    objectName: "Fakultas_Kedokteran_Hewan",
    name: "Fakultas Kedokteran Hewan",
    isFakultas: true,
    jumlahProdi: 1,
    listProdi: ["Kedokteran Hewan"],
    gambarFakultas: "/images/gambarInfografis/fkh.jpg",
    narasi: `
    Awal mula pendirian Fakultas Kedokteran Hewan Universitas Gadjah Mada adalah Indische Veeartsen School yang didirikan 
    pada tahun 1910 dan sempat bergabung dengan Fakultas peternakan. Pada tanggal 10 November 1969, Fakultas Kedokteran Hewan 
    resmi berdiri dan mulai tahun 2003, kegiatan belajar mengajar dipindahkan menuju gedung baru di daerah Karangmalang. 
    Selain fasilitas berupa gedung kuliah, perpustakaan, serta laboratorium diagnostik, Fakultas Kedokteran Hewan juga 
    dilengkapi dengan Rumah Sakit Hewan Prof. Soeparwi dan teaching farm. 
            `,
    image360Location: "./images/image360/FKH 360.webp",
    voiceOver: "./assets/voice-over/16 FKH.mp3",
    target: { x: 2.3, z: -3.5 },
    camera: { x: 4, y: 2, z: 2.5 },
  },
  {
    objectName: "Fakultas_Farmasi",
    name: "Fakultas Farmasi",
    isFakultas: true,
    jumlahProdi: 1,
    listProdi: ["Farmasi"],
    gambarFakultas: "/images/gambarInfografis/farmasi.jpg",
    narasi: `
    Fakultas Farmasi Universitas Gadjah Mada pada mulanya berdiri dengan nama Perguruan Tinggi Ahli Obat (PTAO) pada tanggal 
    27 September 1946. Fakultas Farmasi sempat bergabung dengan Fakultas Kedokteran dan Fakultas Kedokteran Gigi, bertempat 
    ada Mangkubumen. Mulai tanggal 18 Desember 1955, Fakultas Farmasi resmi berdiri dan menempati gedung baru di Jalan Sekip 
    Utara mulai tahun 1973. Untuk menunjang kegiatan sivitas akademika dalam rangka melaksanakan Tri Dharma Perguruan Tinggi, 
    Fakultas Farmasi dilengkapi dengan berbagai jenis laboratorium, perpustakaan, auditorium, Student Corner, dan Student 
    Supporting Center.
            `,
    image360Location: "./images/image360/FARMASI 360.webp",
    voiceOver: "./assets/voice-over/14 Farmasi.mp3",
    target: { x: -1.25, z: -0.825 },
    camera: { x: 1.1, y: 1, z: 2.1 },
  },
  {
    objectName: "Fakultas_Ilmu_dan_Budaya",
    name: "Fakultas Ilmu Budaya",
    isFakultas: true,
    jumlahProdi: 11,
    listProdi: [
      "Antropologi Budaya",
      "Arkeologi",
      "Bahasa Korea",
      "Ilmu Sejarah",
      "Pariwisata",
      "Sastra Arab",
      "Sastra Indonesia",
      "Sastra Inggris",
      "Sastra Jepang",
      "Sastra Nusantara",
      "Sastra Perancis",
    ],
    gambarFakultas: "/images/gambarInfografis/fib.jpg",
    narasi: `
    Fakultas Ilmu Budaya Universitas Gadjah Mada didirikan pada 3 Maret 1946 dengan nama Fakulteit Sastra, Filsafat, dan 
    Keboedajaan. Fakultas ini mengalami beberapa kali perubahan nama hingga mulai tanggal 23 Juni 2001, nama Fakultas Ilmu 
    Budaya resmi digunakan. Saat ini, Fakultas Ilmu Budaya terdiri atas 11 program studi untuk jenjang sarjana, antara lain 
    Antropologi Budaya, Arkeologi, Ilmu Sejarah, Sastra Arab, Sastra Indonesia, Sastra Inggris, Sastra Jepang, Bahasa Korea, 
    Sastra Nusantara, Sastra Prancis, dan Pariwisata. Keberadaan Rumah Sumba pada fakultas ini menambah kesan budaya yang 
    terkandung.
            `,
    image360Location: "./images/image360/FIB 360.webp",
    voiceOver: "./assets/voice-over/2 Fakultas Ilmu Budaya.mp3",
    target: { x: 0.9, z: 0.2 },
    camera: { x: -1.5, y: 1.75, z: 3 },
  },
  {
    objectName: "Fakultas_Kehutanan",
    name: "Fakultas Kehutanan",
    isFakultas: true,
    jumlahProdi: 1,
    listProdi: ["Kehutanan"],
    gambarFakultas: "/images/gambarInfografis/fkt.jpg",
    narasi: `
    Pendirian Fakultas Kehutanan pada mulanya bergabung dengan Fakultas Pertanian. Mulai tanggal 17 Agustus 1963, Fakultas 
    Pertanian dan Kehutanan dipecah menjadi tiga fakultas meliputi Fakultas Pertanian, Fakultas Teknologi Pertanian, dan 
    Fakultas Kehutanan. Pada 1 Februari 2010, ditetapkan satu program studi untuk jenjang sarjana yakni program studi Kehutanan 
    dengan empat departemen meliputi Departemen Manajemen Hutan, Silvikultur, Teknologi Hasil Hutan, dan Konservasi Sumberdaya 
    Hutan. Fasilitas penunjang kegiatan akademik yang dimiliki Fakultas Kehutanan antara lain berbagai macam laboratorium 
    sesuai dengan bidangnya, perpustakaan, pusat kegiatan mahasiswa, hingga laboratorium lapangan yang tersebar di beberapa 
    wilayah seperti Gunung Kidul, Blora, dan Jambi.
            `,
    image360Location: "./images/image360/KEHUTANAN 360.webp",
    voiceOver: "./assets/voice-over/7 Kehutanan.mp3",
    target: { x: 0.5, z: -2.4 },
    camera: { x: 5.0, y: 1.75, z: 0.0 },
  },
  {
    objectName: "Fakultas_Pertanian",
    name: "Fakultas Pertanian",
    isFakultas: true,
    jumlahProdi: 3,
    listProdi: [
      "Agronomi",
      "Budidaya Perikanan",
      "Ilmu Hama dan Penyakit Tumbuhan",
      "Ilmu Tanah",
      "Manajemen Sumber Daya Perikanan",
      "Mikrobiologi Pertanian",
      "Pemuliaan Tanaman",
      "Penyuluhan dan Komunikasi Pertanian",
      "Sosial Ekonomi Pertanian",
      "Teknologi Hasil Perikanan",
    ],
    gambarFakultas: "/images/gambarInfografis/pertanian-min.jpg",
    narasi: `
    Fakultas Pertanian merupakan salah satu dari keenam fakultas pertama Universitas Gadjah Mada. Didirikan pada tanggal 27 
    September 1946 dan bertempat di Klaten. Pada tanggal 1 November 1949, Fakultas Pertanian diresmikan oleh Presiden Soekarno 
    dengan kegiatan perkuliahan yang diselenggarakan di Kadipaten Ngasem. Bersatunya berbagai Perguruan Tinggi Pertanian 
    membentuk Fakultas Pertanian Universitas Gadjah Mada dengan berbagai fasilitas pendukung seperti perpustakaan dan 
    bermacam-macam laboratorium guna mendukung proses akademik.
            `,
    image360Location: "./images/image360/PERTANIAN 360.webp",
    voiceOver: "./assets/voice-over/8 Pertanian.mp3",
  },
  {
    objectName: "Fakultas_Teknik",
    name: "Fakultas Teknik",
    isFakultas: true,
    jumlahProdi: 14,
    listProdi: [
      "Arsitektur",
      "Perencanaan Wilayah dan Kota",
      "Teknik Biomedis",
      "Teknik Elektro",
      "Teknik Fisika",
      "Teknik Geodesi",
      "Teknik Geologi",
      "Teknik Industri",
      "Teknik Infrastruktur Lingkungan",
      "Teknik Kimia",
      "Teknik Mesin",
      "Teknik Nuklir",
      "Teknik Sipil dan Lingkungan",
      "Teknologi Informasi",
    ],
    gambarFakultas: "/images/gambarInfografis/teknik.jpg",
    narasi: `
    Fakultas Teknik Universitas Gadjah Mada berawal dari pendirian Sekolah Tinggi Teknik Bandung yang kemudian dipindahkan 
    menuju Yogyakarta pada tahun 1946. Setelah sempat mengalami beberapa kali perubahan nama dan lokasi, pada 1949 Sekolah 
    Tinggi Teknik bergabung dengan perguruan tinggi lainnya menjadi satu dalam Universiteit Gadjah Mada dengan nama Fakultas 
    Teknik. Terdapat tiga bagian utama yakni Infrastruktur, Manufaktur, dan Energi dengan 8 Departemen meliputi DTAP, DTETI, 
    DTMTI, DTNTF, DTGD, DTGL, DTK, dan DTSL. Fasilitas yang dimiliki Fakultas Teknik dalam rangka mendukung kegiatan sivitas 
    akademika antara lain berbagai jenis laboratorium, perpustakaan, ruang referensi, hingga Posbindu sebagai fasilitas 
    kesehatan.
            `,
    image360Location: [
      "./images/image360/teknik/ENERGI 360.webp",
      "./images/image360/teknik/INFRAS 360.webp",
      "./images/image360/teknik/MANUF 360.webp",
    ],
    voiceOver: "./assets/voice-over/20 Teknik.mp3",
    target: { x: -3.3, z: -3 },
    camera: { x: -2.5, y: 2, z: 3 },
  },
  {
    objectName: "Fakultas_Filsafat",
    name: "Fakultas Filsafat",
    isFakultas: true,
    jumlahProdi: 1,
    listProdi: ["Ilmu Filsafat"],
    gambarFakultas: "/images/gambarInfografis/filsafat.jpg",
    narasi: `
    Fakultas Filsafat pada awalnya bernama Fakultas Sastra, Paedagogik, dan Filsafat yang diresmikan pada 23 Januari 1951. 
    Setelah mengalami beberapa perubahan, pada tanggal 18 Agustus 1967, Fakultas Filsafat kembali didirikan dan diresmikan. 
    Fakultas Filsafat memiliki akses fisik pendukung layanan publik bagi penyandang disabilitas yang ada di seluruh fakultas 
    sehingga fakultas ini ditetapkan sebagai salah satu zona integritas di Universitas Gadjah Mada.
            `,
    image360Location: "./images/image360/FILSAFAT 360.webp",
    voiceOver: "./assets/voice-over/5 Filsafat.mp3",
    target: { x: 1.875, z: -0.375 },
    camera: { x: -0.5, y: 0.8, z: 1 },
  },
  {
    objectName: "Fakultas_Ilmu_Sosial_dan_Politik",
    name: "Fakultas Ilmu Sosial dan Politik",
    isFakultas: true,
    jumlahProdi: 6,
    listProdi: [
      "Hubungan Internasional",
      "Ilmu Politik dan Pemerintahan",
      "Ilmu Komunikasi",
      "Sosiologi",
      "Manajemen Kebijakan Publik",
      "Pengembangan Sosial dan Kesejahteraan",
    ],
    gambarFakultas: "/images/gambarInfografis/fisipol.jpg",
    narasi: `
    Pada awalnya, FISIPOL merupakan salah satu bagian dari gabungan Fakultas Hukum, Ekonomi, Sosial dan Politik yang kemudian 
    berdiri sendiri mulai tahun 1955. Pada FISIPOL UGM, terdapat pula jurusan-jurusan IUP atau dikenal dengan International 
    Undergraduate Programs seperti IUP Hubungan Internasional dan IUP Manajemen Kebijakan Publik. Berbagai fasilitas yang 
    terdapat pada FISIPOL UGM guna mendukung proses pendidikan dan pengembangan kompetensi yang dimiliki oleh sivitas 
    akademikanya meliputi auditorium, sport corner, Fisipoint, Fisipmart, Digilib Cafe dan Coworking Space.
            `,
    image360Location: "./images/image360/FISIPOL 360.webp",
    voiceOver: "./assets/voice-over/3 Fisipol.mp3",
    target: { x: 0.65, z: -1.25 },
    camera: { x: -1.25, y: 1, z: 2 },
  },
  {
    objectName: "Fakultas_Kedokteran,_Kesehatan_Masyarakat_,dan_Keperawatan",
    name: "Fakultas KKMK",
    isFakultas: true,
    jumlahProdi: 3,
    listProdi: ["Pendidikan Dokter", "Ilmu Keperawatan", "Gizi dan Kesehatan"],
    gambarFakultas: "/images/gambarInfografis/fkkmk.jpg",
    narasi: `
    Fakultas Kedokteran, Kesehatan Masyarakat, dan Keperawatan berawal dari pendirian Geneeskundige Hooge School (GHS) yang 
    kemudian berubah nama menjadi Perguruan Tinggi Kedokteran. Pada 1949, perguruan tinggi ini bergabung dengan Yayasan Balai 
    Perguruan Tinggi Gadjah Mada membentuk satu kesatuan Universitas Gadjah Mada. Istilah Perguruan Tinggi berubah menjadi 
    Fakultas Kedokteran, Kedokteran Gigi, dan Farmasi yang di kemudian hari berpisah membentuk fakultas yang baru. Mulai tahun 
    1982, Fakultas Kedokteran menempati daerah Sekip Utara. Selain fasilitas berupa gedung kuliah, perpustakaan, serta 
    laboratorium klinik, Fakultas Kedokteran, Kesehatan Masyarakat, dan Keperawatan juga dilengkapi dengan RSUP Dr. Sardjito 
    dan RS Akademik.
            `,
    image360Location: "./images/image360/FKKMK 360.webp",
    voiceOver: "./assets/voice-over/6 FKKMK.mp3",
    target: { x: -2.75, z: -0.4 },
    camera: { x: 2, y: 2.5, z: 3 },
  },
  {
    objectName: "Fakultas_Peternakan",
    name: "Fakultas Peternakan",
    isFakultas: true,
    jumlahProdi: 7,
    listProdi: ["Ilmu dan Industri Peternakan"],
    gambarFakultas: "/images/gambarInfografis/pertanian-min.jpg",
    narasi: `
    Fakultas Peternakan Universitas Gadjah Mada pada mulanya bergabung dengan Fakultas Kedokteran Hewan dan berpisah mulai 
    tanggal 1 September 1966. Fakultas Peternakan diresmikan pada 10 November 1969 dengan menyelenggarakan satu program studi 
    yaitu Program Studi Peternakan yang mengalami perkembangan menjadi Ilmu dan Industri Peternakan. Berbagai sarana prasarana 
    yang dimiliki Fakultas Peternakan Universitas Gadjah Mada antara lain laboratorium, perpustakaan, auditorium, Unit 
    Peternakan, Unit Pelaksana Teknis (UPT) Perah, hingga minimarket (AgroMart).
            `,
    image360Location: "./images/image360/FAPET 360.webp",
    voiceOver: "./assets/voice-over/17 Peternakan.mp3",
  },
  {
    objectName: "Fakultas_Teknologi_Pertanian",
    name: "Fakultas Teknologi Pertanian",
    isFakultas: true,
    jumlahProdi: 3,
    listProdi: [
      "Teknik Pertanian dan Biosistem",
      "Teknologi Pangan Hasil Pertanian",
      "Teknologi Industri Pertanian",
    ],
    gambarFakultas: "/images/gambarInfografis/ftp.jpg",
    narasi: `
    Pada awal pembentukannya, Fakultas Teknologi Pertanian bergabung dengan Fakultas Kehutanan dan Fakultas Pertanian. 
    Setelah berpisah dari fakultas Kehutanan dan Pertanian, Fakultas Teknologi Pertanian Universitas Gadjah Mada resmi berdiri 
    pada 19 September 1963. Fasilitas penunjang akademik yang ada di Fakultas Teknologi Pertanian Universitas Gadjah Mada 
    antara lain perpustakaan dan berbagai jenis laboratorium.
            `,
    image360Location: "./images/image360/FTP 360.webp",
    voiceOver: "./assets/voice-over/9 FTP.mp3",
    target: { x: 0.6, z: -2.25 },
    camera: { x: 2.5, y: 1, z: 1.5 },
  },
  {
    objectName: "Sekolah_Pascasarjana",
    name: "Fakultas Pascasarjana",
    isFakultas: true,
    jumlahProdi: "-",
    listProdi: ["-"],
    gambarFakultas: "/images/gambarInfografis/pau.jpg",
    narasi: `
    Berawal dengan nama Lembaga Pendidikan Doktor (LPD), Sekolah Pascasarjana Universitas Gadjah Mada memulai sejarahnya pada 
    tahun 1950. Setelahnya sempat beberapa kali mengalami pergantian nama menjadi Fakultas Pascasarjana dan Program 
    Pascasarjana, hiditetapanlah nama Sekolah Pascasarjana yang terdiri atas pendidikan pada tingkat magister dan tingkat 
    doktoral. Keberadaan sekolah ini merupakan penegasan terhadap perlunya penyelenggaraan tingkat lanjutan dari jenjang 
    sarjana berdasarkan kompetensi bidang ilmu yang bersifat monodisiplin dan Multidisiplin.
            `,
    image360Location: "./images/image360/PASCA 360.webp",
    voiceOver: "./assets/voice-over/19 Sekolah Pascasarjana.mp3",
    target: { x: -3.1, z: -4.15 },
    camera: { x: -0.65, y: 1.25, z: -0.95 },
  },
  {
    objectName: "Sekolah_Vokasi",
    name: "Sekolah Vokasi",
    isFakultas: true,
    jumlahProdi: 1,
    listProdi: ["-"],
    gambarFakultas: "/images/gambarInfografis/sv.jpg",
    narasi: `
    Pelaksanaan kegiatan belajar mengajar program diploma dari tahun 1992 pada mulanya dilaksanakan di dalam fakultas 
    masing-masing hingga pada akhirnya, Sekolah Vokasi Universitas Gadjah Mada diresmikan pada 2009. Saat ini Sekolah Vokasi 
    terdiri dari 8 departemen yang membawahi 27 program studi. Setiap departemen dari Sekolah Vokasi memiliki berbagai macam 
    laboratorium sesuai dengan kekhususannya masing-masing yang dapat dikelompokkan dalam tiga kategori yaitu Laboratorium 
    Teknik, Laboratorium Bahasa, dan Laboratorium Komputer.
            `,
    image360Location: "./images/image360/SV 360.webp",
    voiceOver: "./assets/voice-over/18 Sekolah Vokasi.mp3",
    target: { x: -1.5, z: 2.5 },
    camera: { x: -5, y: 0.65, z: 2.65 },
  },
];

export { infografis };
