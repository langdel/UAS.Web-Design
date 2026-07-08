/* =====================================================================
   PUSTAKA DIGITAL — Universitas Potensi Utama
   main.js
   ===================================================================== */

/* =====================================================================
   DATA BUKU
   Catatan: linkDrive adalah placeholder. Ganti dengan tautan Google Drive
   nyata (format: https://drive.google.com/file/d/FILE_ID/view).
   ===================================================================== */
const dataBuku = [
  {
    id:"PD-0001",
    judul:"Seruan Zarathustra",
    penulis:"Friedrich Nietzsche",
    kategori:"Filsafat",
    isbn:"978-979-9289-86-6",
    tahun:2010, halaman:246, popular:true,
    deskripsi:"Buku Untuk Semua dan tidak untuk semua. Karya monumental Nietzsche yang menyuarakan gagasan Übermensch dan kehendak untuk berkuasa.",
    cover:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1qcMuZ-DnMjnAouSXs1CIuyWuwENim7mk/view?usp=drivesdk"
  },
  {
    id:"PD-0002",
    judul:"How To Win Friends & Influence People",
    penulis:"Dale Carnegie",
    kategori:"Pengembangan Diri",
    isbn:"-",
    tahun:1936, halaman:250, popular:true,
    deskripsi:"Salah satu buku pengembangan diri paling berpengaruh sepanjang masa, mengajarkan seni bergaul dan memengaruhi orang lain secara positif.",
    cover:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/16bvOkiAYXSPUULm9O0HVZVPLZIloD9rP/view?usp=drivesdk"
  },
  {
    id:"PD-0003",
    judul:"The Trial / Proses",
    penulis:"Franz Kafka",
    kategori:"Sastra",
    isbn:"978-602-03-2895-9",
    tahun:2016, halaman:25, popular:false,
    deskripsi:"Novel absurd Kafka yang menggambarkan seseorang yang ditangkap dan diadili tanpa tahu tuduhan terhadap dirinya.",
    cover:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1oTbm7t2gwzgUdiFCtvrYMzxDz3bb1Tsr/view?usp=drivesdk"
  },
  {
    id:"PD-0004",
    judul:"Rehat Dulu",
    penulis:"Syahid Muhammad",
    kategori:"Pengembangan Diri",
    isbn:"978-979-27-1766-2",
    tahun:2020, halaman:216, popular:true,
    deskripsi:"Buku yang mengajak pembaca untuk berhenti sejenak, mengevaluasi hidup, dan mengisi ulang energi sebelum melanjutkan perjalanan.",
    cover:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1_e4FqZX8wFOKrM6eVk4eGptS4s3ZlWCP/view?usp=drivesdk"
  },
  {
    id:"PD-0005",
    judul:"Super Memory — Brain Fitness",
    penulis:"-",
    kategori:"Sains",
    isbn:"978-602-0823-19-5",
    tahun:2016, halaman:166, popular:false,
    deskripsi:"Panduan ilmiah untuk melatih dan meningkatkan kemampuan memori otak melalui teknik-teknik brain fitness yang teruji.",
    cover:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1wTeTl1UFex3VXMsB6ByF4IPS0Xbf6yrR/view?usp=drivesdk"
  },
  {
    id:"PD-0006",
    judul:"Agama Dan Nusantara",
    penulis:"-",
    kategori:"Agama & Budaya",
    isbn:"978-602-6418-38-8",
    tahun:2019, halaman:306, popular:false,
    deskripsi:"Mengkaji relasi antara agama dan kebudayaan Nusantara dalam perspektif sejarah dan sosial.",
    cover:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1md-MsBaQezB6vL0F_-22NTnPH38pt0dG/view?usp=drivesdk"
  },
  {
    id:"PD-0007",
    judul:"Ajaib, Istimewa, Kacau",
    penulis:"Andre Moller",
    kategori:"Agama & Budaya",
    isbn:"978-623-241-021-3",
    tahun:2019, halaman:177, popular:false,
    deskripsi:"Esai-esai yang memandang keunikan dan kekacauan kehidupan beragama di Indonesia dari sudut pandang yang segar.",
    cover:"https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1fNkR3sVlTlJzvlfhgUffk8KvYF2xPf4B/view?usp=drivesdk"
  },
  {
    id:"PD-0008",
    judul:"Aku Tahu, Sadar & Berdaya",
    penulis:"-",
    kategori:"Pengembangan Diri",
    isbn:"978-623-90222-6-6",
    tahun:2020, halaman:281, popular:false,
    deskripsi:"Buku yang membimbing pembaca menuju kesadaran diri, pengetahuan yang lebih dalam, dan keberdayaan sebagai individu.",
    cover:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1r9NieAKprppjWVadWlNgK3horuMqpJ5_/view?usp=drivesdk"
  },
  {
    id:"PD-0009",
    judul:"Orang Asing",
    penulis:"Albert Camus",
    kategori:"Sastra",
    isbn:"978-979-461-862-2",
    tahun:2013, halaman:134, popular:true,
    deskripsi:"Novel eksistensialis ikonik Camus tentang Meursault, seorang pria yang tidak mampu merasakan emosi seperti orang pada umumnya.",
    cover:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1t0VpPhUpZNyg40YczWr4Ds6QLEAeC7DO/view?usp=drivesdk"
  },
  {
    id:"PD-0010",
    judul:"Orang-Orang Yang Terbungkam",
    penulis:"Albert Camus",
    kategori:"Sastra",
    isbn:"978-95978-35-X",
    tahun:1956, halaman:212, popular:false,
    deskripsi:"Kumpulan cerita pendek Camus yang mengeksplorasi tema keheningan, ketidakberdayaan, dan perlawanan diam dalam kehidupan sehari-hari.",
    cover:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/14Te7Uvbh_WD-5j5xRBAvg_PDXBjCYVLz/view?usp=drivesdk"
  },
  {
    id:"PD-0011",
    judul:"Aliran Dan Paradigma Pemikiran Pendidikan Agama Islam Kontemporer",
    penulis:"Dr. Hj. Evi Fatimatur Rusydiyah, M.Ag.",
    kategori:"Agama & Budaya",
    isbn:"978-602-332-116-2",
    tahun:2019, halaman:228, popular:false,
    deskripsi:"Mengulas berbagai aliran dan paradigma dalam pemikiran Pendidikan Agama Islam di era kontemporer secara akademis.",
    cover:"https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1DzpnHZxPVHjBPZ8DtTDiKBQN62Jmbj4v/view?usp=drivesdk"
  },
  {
    id:"PD-0012",
    judul:"Anak Muda Miliarder Saham",
    penulis:"Andika Sutoro Putra",
    kategori:"Ekonomi",
    isbn:"978-602-04-5704-8",
    tahun:2018, halaman:145, popular:true,
    deskripsi:"Panduan investasi saham praktis yang ditulis oleh investor muda, cocok untuk pemula yang ingin memulai perjalanan finansial.",
    cover:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1sDfAKVljq1Su0mFQigQnvIjF7rhxkszQ/view?usp=drivesdk"
  },
  {
    id:"PD-0013",
    judul:"Atomic Habits",
    penulis:"James Clear",
    kategori:"Pengembangan Diri",
    isbn:"978-602-06-3318-3",
    tahun:2018, halaman:356, popular:true,
    deskripsi:"Panduan perubahan kebiasaan berbasis sains: cara membangun kebiasaan baik dan menghilangkan kebiasaan buruk secara bertahap.",
    cover:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1DfMVKLT0nPLVO_3VbmVihLRhDomAUDc0/view?usp=drivesdk"
  },
  {
    id:"PD-0014",
    judul:"Baca Buku Ini Saat Engkau Gagal",
    penulis:"Kinanti Linda R.",
    kategori:"Pengembangan Diri",
    isbn:"978-623-244-342-6",
    tahun:2020, halaman:225, popular:false,
    deskripsi:"Sesungguhnya berpura-pura sukses itu melelahkan. Buku motivasi untuk bangkit dari kegagalan dan menemukan makna di baliknya.",
    cover:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/102Fs2j7Je1bm0ikW4hHULfEeI4G60xtJ/view?usp=drivesdk"
  },
  {
    id:"PD-0015",
    judul:"Baca Buku Ini Saat Engkau Ingin Berubah",
    penulis:"Rahma Kusharjanti",
    kategori:"Pengembangan Diri",
    isbn:"978-623-244-337-2",
    tahun:2020, halaman:265, popular:false,
    deskripsi:"Karena terjebak dalam kebiasaan buruk dapat menghancurkanmu pelan-pelan. Panduan transformasi diri yang penuh empati.",
    cover:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1LMH1s5QgizBFQR5T6rrJZzQAZiKiCAX_/view?usp=drivesdk"
  },
  {
    id:"PD-0016",
    judul:"Logika (Ilmu Mantiq)",
    penulis:"DRS. H. A. Basiq Djalil, S.H., M.A.",
    kategori:"Filsafat",
    isbn:"979-3465-08-5",
    tahun:2009, halaman:119, popular:false,
    deskripsi:"Pengantar ilmu logika klasik (mantiq) yang membahas dasar-dasar penalaran valid dalam tradisi filsafat Islam.",
    cover:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1hjgsoGrikZ9cH7FWfv600gbnlcd2kbR-/view?usp=drivesdk"
  },
  {
    id:"PD-0017",
    judul:"Belajar Cara Belajar — Keahlian Penting Manusia Modern",
    penulis:"Fikri, Syarif Rousyan, Mohammad Ikhsan & Aditya Banuaji",
    kategori:"Sains",
    isbn:"978-602-481-367-3",
    tahun:2020, halaman:172, popular:false,
    deskripsi:"Mengupas strategi dan teknik belajar efektif berdasarkan riset ilmu kognitif untuk menghadapi tantangan era modern.",
    cover:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1q0h8NY84ZQKFA65c6jYpTAfgYEuLcNsK/view?usp=drivesdk"
  },
  {
    id:"PD-0018",
    judul:"Ebook Belajar HTML & CSS Dasar",
    penulis:"Diki Alfarabi Hadi",
    kategori:"Teknologi",
    isbn:"-",
    tahun:null, halaman:null, popular:true,
    deskripsi:"Panduan praktis belajar HTML dan CSS dari nol untuk pemula yang ingin memulai perjalanan di dunia pengembangan web.",
    cover:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/14twh2GMnJHavJbKgQHn4n5fBX5-lbvWb/view?usp=drivesdk"
  },
  {
    id:"PD-0019",
    judul:"Berani Tidak Disukai",
    penulis:"Ichiro Kishimi & Fumitake Koga",
    kategori:"Filsafat",
    isbn:"978-602-06-3322-0",
    tahun:2017, halaman:350, popular:true,
    deskripsi:"Fenomena dari Jepang untuk membebaskan diri, mengubah hidup, dan meraih kebahagiaan sejati berdasarkan psikologi Adler.",
    cover:"https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1rq9klYYCpaywR9Ai3dqowcLo-qxEByyb/view?usp=drivesdk"
  },
  {
    id:"PD-0020",
    judul:"Berdamai Dengan Diri Sendiri",
    penulis:"Muthia Sayekti",
    kategori:"Pengembangan Diri",
    isbn:"978-623-244-334-1",
    tahun:2017, halaman:225, popular:false,
    deskripsi:"Perjalanan menuju penerimaan dan kedamaian batin melalui refleksi mendalam tentang hubungan kita dengan diri sendiri.",
    cover:"https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1Hee0-iszG9snRo3qg9vpF29XEwH4jR_T/view?usp=drivesdk"
  },
  {
    id:"PD-0021",
    judul:"Bermain Kata Beribadah — Puisi Joko Pinurbo",
    penulis:"Joko Pinurbo",
    kategori:"Sastra",
    isbn:"978-602-391-805-8",
    tahun:2019, halaman:265, popular:false,
    deskripsi:"Kumpulan puisi Joko Pinurbo yang memadukan kelucuan, spiritualitas, dan kepedihan dalam bahasa yang mengalir indah.",
    cover:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1vTDOVo7-3kvT8kxmUUqnYZcdQ9JOxDqf/view?usp=drivesdk"
  },
  {
    id:"PD-0022",
    judul:"Berpikir & Berjiwa Besar",
    penulis:"David J. Schwartz, Ph.D.",
    kategori:"Pengembangan Diri",
    isbn:"979-3253-09-6",
    tahun:2006, halaman:321, popular:true,
    deskripsi:"Klasik motivasi yang mengajarkan bahwa besarnya kesuksesan seseorang ditentukan oleh besarnya cara ia berpikir.",
    cover:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1WeUrA3WYEZTQuWWin_EzaXmdkc3CGKY2/view?usp=drivesdk"
  },
  {
    id:"PD-0023",
    judul:"A History Of Western Philosophy",
    penulis:"Bertrand Russell",
    kategori:"Filsafat",
    isbn:"978-1-4165-9915-9",
    tahun:1945, halaman:1211, popular:true,
    deskripsi:"Karya monumental Russell yang menelusuri sejarah filsafat Barat dari zaman Yunani Kuno hingga abad ke-20 secara komprehensif.",
    cover:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1WOSiwyS4kV8lbYwSMg8TKL9CHZSWugin/view?usp=drivesdk"
  },
  {
    id:"PD-0024",
    judul:"Better Me — Seni Untuk Menjadi Versi Terbaik Diri Sendiri",
    penulis:"Anna Silvia",
    kategori:"Pengembangan Diri",
    isbn:"978-623-00-2925-7",
    tahun:2021, halaman:314, popular:false,
    deskripsi:"Panduan reflektif dan praktis untuk menemukan potensi terbaik diri dan membangun versi diri yang lebih baik setiap harinya.",
    cover:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/14j-kb-q7UMDQNs7aFvWqC7ylAFE26LNk/view?usp=drivesdk"
  },
  {
    id:"PD-0025",
    judul:"Beyond Good And Evil",
    penulis:"Friedrich Nietzsche",
    kategori:"Filsafat",
    isbn:"978-623-400-854-8",
    tahun:2023, halaman:305, popular:true,
    deskripsi:"Nietzsche menantang moralitas konvensional dan mengajukan visi baru tentang nilai-nilai di luar dikotomi baik dan jahat.",
    cover:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1cndg-NTfW08JtvxjNifUFFTDOA6SGh6v/view?usp=drivesdk"
  },
  {
    id:"PD-0026",
    judul:"Kemiskinan Filsafat",
    penulis:"Karl Marx",
    kategori:"Filsafat",
    isbn:"978-623-400-854-8",
    tahun:2007, halaman:224, popular:false,
    deskripsi:"Respons kritis Marx terhadap Proudhon, mengupas hubungan antara ekonomi politik dan filsafat dari perspektif materialisme dialektis.",
    cover:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop",
    linkDrive:"https://drive.google.com/file/d/1Jd6WHdaknrcGiCHMuhgDyB6sNgFR44vI/view?usp=drivesdk"
  },
];

/* =====================================================================
   STATE & LOCALSTORAGE
   ===================================================================== */
const STORAGE_KEY = "pustakaDigital_state_v2";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { progres: {}, dipinjam: {}, tersimpan: {}, riwayat: [] };
    return JSON.parse(raw);
  } catch (e) {
    return { progres: {}, dipinjam: {}, tersimpan: {}, riwayat: [] };
  }
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();
let halamanAktif = 1;
const ITEM_PER_HALAMAN = 6;
let modeTampilan = "grid";

/* =====================================================================
   UTIL
   ===================================================================== */
function cariBuku(id) { return dataBuku.find(b => b.id === id); }

function tampilkanToast(pesan) {
  const body = document.getElementById("toastNotifBody");
  if (body) body.textContent = pesan;
  const toastEl = document.getElementById("toastNotif");
  if (toastEl) bootstrap.Toast.getOrCreateInstance(toastEl).show();
}

function formatTanggal(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

function sisaHari(tenggatIso) {
  const sekarang = new Date();
  const tenggat = new Date(tenggatIso);
  const diffMs = tenggat.setHours(0,0,0,0) - sekarang.setHours(0,0,0,0);
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

/* =====================================================================
   POPULAR E-BOOKS CAROUSEL
   ===================================================================== */
function renderPopular() {
  const track = document.getElementById("popularTrack");
  if (!track) return;
  const popularBooks = dataBuku.filter(b => b.popular);
  track.innerHTML = popularBooks.map((b, idx) => {
    const dipinjam = !!state.dipinjam[b.id];
    return `
    <div class="popular-book-card" role="button" tabindex="0"
      onclick="bukaDetailBuku('${b.id}')"
      onkeypress="if(event.key==='Enter') bukaDetailBuku('${b.id}')">
      <div class="popular-cover">
        <span class="popular-rank-badge">#${idx + 1}</span>
        <img src="${b.cover}" alt="Sampul ${b.judul}" loading="lazy">
        <div class="popular-read-overlay">
          <button class="btn btn-blue btn-sm" onclick="event.stopPropagation(); bukaDetailBuku('${b.id}')">
            <i class="bi bi-eye me-1"></i>Lihat
          </button>
        </div>
      </div>
      <div class="popular-info">
        <h4>${b.judul}</h4>
        <p>${b.penulis}</p>
        <div class="popular-rating">
          <i class="bi bi-star-fill"></i> ${b.rating}
          <span class="ms-auto ${dipinjam ? 'badge-borrowed' : 'badge-available'}" style="font-size:0.65rem;border-radius:999px;padding:2px 7px;">
            ${dipinjam ? 'Dipinjam' : 'Tersedia'}
          </span>
        </div>
      </div>
    </div>`;
  }).join("");
}

function scrollPopular(dir) {
  const track = document.getElementById("popularScrollTrack");
  if (!track) return;
  track.scrollBy({ left: dir * 200, behavior: "smooth" });
}

/* =====================================================================
   AKSI PINJAM / KEMBALIKAN
   ===================================================================== */
function pinjamBuku(id) {
  const b = cariBuku(id);
  if (!b) return;
  const sekarang = new Date();
  const tenggat = new Date();
  tenggat.setDate(tenggat.getDate() + 14);
  state.dipinjam[id] = {
    tanggalPinjam: sekarang.toISOString(),
    tenggat: tenggat.toISOString()
  };
  state.progres[id] = state.progres[id] || 0;
  saveState();
  renderSemua();
  tampilkanToast(`"${b.judul}" berhasil dipinjam. Tenggat: ${formatTanggal(tenggat)}.`);
}

function kembalikanBuku(id) {
  const b = cariBuku(id);
  if (!b) return;
  const info = state.dipinjam[id];
  if (info) {
    state.riwayat.unshift({
      id, judul: b.judul, penulis: b.penulis,
      tanggalPinjam: info.tanggalPinjam,
      tanggalKembali: new Date().toISOString()
    });
  }
  delete state.dipinjam[id];
  delete state.progres[id];
  saveState();
  renderSemua();
  tampilkanToast(`"${b.judul}" telah dikembalikan dan dipindahkan ke Riwayat.`);
}

function toggleSimpan(id) {
  const b = cariBuku(id);
  if (!b) return;
  if (state.tersimpan[id]) {
    delete state.tersimpan[id];
    tampilkanToast(`"${b.judul}" dihapus dari daftar tersimpan.`);
  } else {
    state.tersimpan[id] = true;
    tampilkanToast(`"${b.judul}" ditambahkan ke daftar tersimpan.`);
  }
  saveState();
  renderSemua();
}

function ubahProgres(id, nilai) {
  state.progres[id] = Math.max(0, Math.min(100, parseInt(nilai, 10) || 0));
  saveState();
  renderProgresBaca();
}

/* =====================================================================
   RENDER: PROGRES MEMBACA
   ===================================================================== */
function renderProgresBaca() {
  const idDipinjam = Object.keys(state.dipinjam);
  const wrap = document.getElementById("progressBacaWrap");
  const empty = document.getElementById("progressBacaEmpty");
  if (!wrap) return;

  if (idDipinjam.length === 0) {
    wrap.innerHTML = "";
    if (empty) empty.classList.remove("d-none");
    return;
  }
  if (empty) empty.classList.add("d-none");

  wrap.innerHTML = idDipinjam.map(id => {
    const b = cariBuku(id);
    if (!b) return "";
    const progres = state.progres[id] || 0;
    return `
    <div class="col-12 col-lg-6">
      <div class="bookmark-progress h-100">
        <div class="d-flex justify-content-between align-items-start mb-2 gap-2">
          <div>
            <h4 class="book-title h6 mb-0">${b.judul}</h4>
            <small class="text-muted">${b.penulis}</small>
          </div>
          <span class="fw-bold" style="color:var(--blue);">${progres}%</span>
        </div>
        <div class="bookmark-track mb-2">
          <div class="bookmark-fill" style="width:${progres}%;"></div>
        </div>
        <input type="range" class="form-range" min="0" max="100" value="${progres}"
          aria-label="Atur progres membaca ${b.judul}"
          oninput="ubahProgres('${id}', this.value)">
      </div>
    </div>`;
  }).join("");
}

/* =====================================================================
   RENDER: KATALOG GRID
   ===================================================================== */
function renderKatalog() {
  const teksCari = (document.getElementById("inputCariBuku")?.value || "").trim().toLowerCase();
  const kategori = document.getElementById("filterKategori")?.value || "semua";
  const status = document.getElementById("filterStatus")?.value || "semua";

  let hasil = dataBuku.filter(b => {
    const cocokTeks = !teksCari ||
      b.judul.toLowerCase().includes(teksCari) ||
      b.penulis.toLowerCase().includes(teksCari) ||
      b.isbn.toLowerCase().includes(teksCari);
    const cocokKategori = kategori === "semua" || b.kategori === kategori;
    const sedangDipinjam = !!state.dipinjam[b.id];
    const cocokStatus = status === "semua" ||
      (status === "dipinjam" && sedangDipinjam) ||
      (status === "tersedia" && !sedangDipinjam);
    return cocokTeks && cocokKategori && cocokStatus;
  });

  const totalHalaman = Math.max(1, Math.ceil(hasil.length / ITEM_PER_HALAMAN));
  if (halamanAktif > totalHalaman) halamanAktif = totalHalaman;
  const mulai = (halamanAktif - 1) * ITEM_PER_HALAMAN;
  const potongan = hasil.slice(mulai, mulai + ITEM_PER_HALAMAN);

  const grid = document.getElementById("grid-buku");
  const empty = document.getElementById("katalogEmpty");
  if (!grid) return;

  if (hasil.length === 0) {
    grid.innerHTML = "";
    if (empty) empty.classList.remove("d-none");
  } else {
    if (empty) empty.classList.add("d-none");
    grid.innerHTML = potongan.map(b => {
      const dipinjam = !!state.dipinjam[b.id];
      const colClass = modeTampilan === "grid"
        ? "col-12 col-sm-6 col-lg-4 col-xl-3"
        : "col-12";
      return `
      <div class="${colClass}">
        <div class="book-card d-flex ${modeTampilan === 'list' ? 'flex-row' : 'flex-column'}"
          role="button" tabindex="0"
          onclick="bukaDetailBuku('${b.id}')"
          onkeypress="if(event.key==='Enter') bukaDetailBuku('${b.id}')">
          <div class="book-cover-wrap ${modeTampilan === 'list' ? 'flex-shrink-0' : ''}"
            style="${modeTampilan === 'list' ? 'width:110px;' : ''}">
            <div class="dog-ear"></div>
            <img src="${b.cover}" alt="Sampul buku ${b.judul}" loading="lazy">
          </div>
          <div class="p-3 d-flex flex-column flex-grow-1">
            <span class="badge book-cat-badge mb-2 align-self-start">${b.kategori}</span>
            <h3 class="book-title h6 mb-1">${b.judul}</h3>
            <p class="text-muted small mb-1">${b.penulis}</p>
            <p class="book-isbn mb-2">${b.isbn}</p>
            <div class="d-flex align-items-center gap-2 mt-auto flex-wrap">
              <span class="${dipinjam ? 'badge-borrowed' : 'badge-available'}">
                ${dipinjam ? 'Dipinjam' : 'Tersedia'}
              </span>
              <span class="small" style="color:var(--gold);">
                <i class="bi bi-star-fill"></i> ${b.rating}
              </span>
            </div>
          </div>
        </div>
      </div>`;
    }).join("");
  }
  renderPaginasi(totalHalaman);
}

function renderPaginasi(totalHalaman) {
  const ul = document.getElementById("paginasiKatalog");
  if (!ul) return;
  let html = `<li class="page-item ${halamanAktif === 1 ? 'disabled' : ''}">
    <button class="page-link" onclick="gantiHalaman(${halamanAktif - 1})">
      <i class="bi bi-chevron-left"></i>
    </button></li>`;
  for (let i = 1; i <= totalHalaman; i++) {
    html += `<li class="page-item ${i === halamanAktif ? 'active' : ''}">
      <button class="page-link" onclick="gantiHalaman(${i})">${i}</button></li>`;
  }
  html += `<li class="page-item ${halamanAktif === totalHalaman ? 'disabled' : ''}">
    <button class="page-link" onclick="gantiHalaman(${halamanAktif + 1})">
      <i class="bi bi-chevron-right"></i>
    </button></li>`;
  ul.innerHTML = html;
}

function gantiHalaman(h) {
  halamanAktif = h;
  renderKatalog();
  document.getElementById("katalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* =====================================================================
   MODAL DETAIL BUKU
   ===================================================================== */
let bukuAktifId = null;

function bukaDetailBuku(id) {
  const b = cariBuku(id);
  if (!b) return;
  bukuAktifId = id;
  const dipinjam = !!state.dipinjam[id];

  const set = (elId, val) => { const el = document.getElementById(elId); if (el) el.textContent = val; };
  set("breadcrumbKategori", b.kategori);
  set("breadcrumbJudul", b.judul);
  set("modalKategori", b.kategori);
  set("modalJudul", b.judul);
  set("modalPenulis", b.penulis);
  set("modalIsbn", "ISBN: " + b.isbn);
  set("modalDeskripsi", b.deskripsi);
  set("modalRating", b.rating);
  set("modalHalaman", b.halaman);

  const cover = document.getElementById("modalCover");
  if (cover) { cover.src = b.cover; cover.alt = "Sampul buku " + b.judul; }

  const statusBadge = document.getElementById("modalStatusBadge");
  const btnPinjam = document.getElementById("btnPinjamModal");
  const btnUnduh = document.getElementById("btnUnduhModal");
  const btnKembalikan = document.getElementById("btnKembalikanModal");
  const alertDipinjam = document.getElementById("modalAlertDipinjam");

  if (dipinjam) {
    if (statusBadge) { statusBadge.textContent = "Dipinjam"; statusBadge.className = "badge badge-borrowed"; }
    btnPinjam?.classList.add("d-none");
    btnUnduh?.classList.remove("d-none");
    if (btnUnduh) btnUnduh.href = b.linkDrive;
    btnKembalikan?.classList.remove("d-none");
    alertDipinjam?.classList.remove("d-none");
  } else {
    if (statusBadge) { statusBadge.textContent = "Tersedia"; statusBadge.className = "badge badge-available"; }
    btnPinjam?.classList.remove("d-none");
    btnUnduh?.classList.add("d-none");
    btnKembalikan?.classList.add("d-none");
    alertDipinjam?.classList.add("d-none");
  }

  bootstrap.Modal.getOrCreateInstance(document.getElementById("modalDetailBuku")).show();
}

/* =====================================================================
   RENDER: PEMINJAMAN
   ===================================================================== */
function renderPeminjaman() {
  const idDipinjam = Object.keys(state.dipinjam);
  const listAktif = document.getElementById("listPinjamanAktif");
  const emptyAktif = document.getElementById("pinjamanAktifEmpty");

  if (idDipinjam.length === 0) {
    if (listAktif) listAktif.innerHTML = "";
    if (emptyAktif) emptyAktif.classList.remove("d-none");
  } else {
    if (emptyAktif) emptyAktif.classList.add("d-none");
    if (listAktif) {
      listAktif.innerHTML = idDipinjam.map(id => {
        const b = cariBuku(id);
        const info = state.dipinjam[id];
        const sisa = sisaHari(info.tenggat);
        const labelSisa = sisa < 0
          ? `Terlambat ${Math.abs(sisa)} hari`
          : (sisa === 0 ? "Jatuh tempo hari ini" : `${sisa} hari lagi`);
        const warnaSisa = sisa < 0 ? "text-danger" : (sisa <= 3 ? "text-warning" : "text-muted");
        return `
        <div class="list-group-item active-borrow d-flex justify-content-between align-items-center flex-wrap gap-2 py-3">
          <div>
            <h4 class="book-title h6 mb-1">${b.judul}</h4>
            <small class="text-muted d-block">Dipinjam: ${formatTanggal(info.tanggalPinjam)}</small>
            <small class="${warnaSisa}">Tenggat: ${formatTanggal(info.tenggat)} (${labelSisa})</small>
          </div>
          <div class="d-flex gap-2">
            <a href="${b.linkDrive}" target="_blank" rel="noopener" class="btn btn-sm btn-outline-blue">
              <i class="bi bi-cloud-arrow-down me-1"></i>Unduh
            </a>
            <button class="btn btn-sm btn-blue" onclick="kembalikanBuku('${id}')">
              <i class="bi bi-arrow-counterclockwise me-1"></i>Kembalikan
            </button>
          </div>
        </div>`;
      }).join("");
    }
  }

  const idTersimpan = Object.keys(state.tersimpan);
  const listTersimpan = document.getElementById("listTersimpan");
  const emptyTersimpan = document.getElementById("tersimpanEmpty");

  if (idTersimpan.length === 0) {
    if (listTersimpan) listTersimpan.innerHTML = "";
    if (emptyTersimpan) emptyTersimpan.classList.remove("d-none");
  } else {
    if (emptyTersimpan) emptyTersimpan.classList.add("d-none");
    if (listTersimpan) {
      listTersimpan.innerHTML = idTersimpan.map(id => {
        const b = cariBuku(id);
        if (!b) return "";
        return `
        <div class="list-group-item d-flex justify-content-between align-items-center flex-wrap gap-2 py-3">
          <div>
            <h4 class="book-title h6 mb-1">${b.judul}</h4>
            <small class="text-muted">${b.penulis} · ${b.kategori}</small>
          </div>
          <div class="d-flex gap-2">
            <button class="btn btn-sm btn-outline-blue" onclick="bukaDetailBuku('${id}')">Lihat Detail</button>
            <button class="btn btn-sm btn-outline-secondary" onclick="toggleSimpan('${id}')">
              <i class="bi bi-bookmark-x"></i>
            </button>
          </div>
        </div>`;
      }).join("");
    }
  }
}

/* =====================================================================
   RENDER: RIWAYAT
   ===================================================================== */
function renderRiwayat() {
  const list = document.getElementById("listRiwayat");
  const empty = document.getElementById("riwayatEmpty");
  if (!list) return;

  if (state.riwayat.length === 0) {
    list.innerHTML = "";
    if (empty) empty.classList.remove("d-none");
    return;
  }
  if (empty) empty.classList.add("d-none");
  list.innerHTML = state.riwayat.map(r => `
    <div class="list-group-item d-flex justify-content-between align-items-center flex-wrap gap-2 py-3">
      <div>
        <h4 class="book-title h6 mb-1">${r.judul}</h4>
        <small class="text-muted">${r.penulis}</small>
      </div>
      <div class="text-end">
        <small class="d-block text-muted">Dipinjam: ${formatTanggal(r.tanggalPinjam)}</small>
        <small class="d-block text-muted">Dikembalikan: ${formatTanggal(r.tanggalKembali)}</small>
      </div>
    </div>
  `).join("");
}

/* =====================================================================
   NAVBAR — NAMA PENGGUNA
   ===================================================================== */
function muatNamaPengguna() {
  const nama = localStorage.getItem("pustakaDigital_namaPengguna") || "Tamu";
  const el = document.getElementById("navUserName");
  if (el) el.textContent = nama;
}

/* =====================================================================
   RENDER SEMUA
   ===================================================================== */
function renderSemua() {
  renderPopular();
  renderKatalog();
  renderProgresBaca();
  renderPeminjaman();
  renderRiwayat();
}

/* =====================================================================
   EVENT LISTENERS
   ===================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Tooltip Bootstrap
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));

  // Filter katalog
  document.getElementById("inputCariBuku")?.addEventListener("input", () => { halamanAktif = 1; renderKatalog(); });
  document.getElementById("filterKategori")?.addEventListener("change", () => { halamanAktif = 1; renderKatalog(); });
  document.getElementById("filterStatus")?.addEventListener("change", () => { halamanAktif = 1; renderKatalog(); });

  // Toggle tampilan katalog
  document.getElementById("btnViewGrid")?.addEventListener("click", function () {
    modeTampilan = "grid";
    this.classList.add("active");
    document.getElementById("btnViewList")?.classList.remove("active");
    renderKatalog();
  });
  document.getElementById("btnViewList")?.addEventListener("click", function () {
    modeTampilan = "list";
    this.classList.add("active");
    document.getElementById("btnViewGrid")?.classList.remove("active");
    renderKatalog();
  });

  // Modal — pinjam & kembalikan
  document.getElementById("btnPinjamModal")?.addEventListener("click", () => {
    if (bukuAktifId) pinjamBuku(bukuAktifId);
    bukaDetailBuku(bukuAktifId);
  });
  document.getElementById("btnKembalikanModal")?.addEventListener("click", () => {
    if (bukuAktifId) kembalikanBuku(bukuAktifId);
    bootstrap.Modal.getOrCreateInstance(document.getElementById("modalDetailBuku")).hide();
  });

  // Form kontak
  const formKontak = document.getElementById("formKontak");
  formKontak?.addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!formKontak.checkValidity()) {
      formKontak.classList.add("was-validated");
      return;
    }
    const spinner = document.getElementById("spinnerKirim");
    if (spinner) spinner.classList.remove("d-none");
    setTimeout(() => {
      if (spinner) spinner.classList.add("d-none");
      formKontak.reset();
      formKontak.classList.remove("was-validated");
      tampilkanToast("Pesanmu berhasil terkirim. Tim pustakawan akan segera merespons.");
    }, 900);
  });

  // Navbar aktif saat scroll
  const sections = document.querySelectorAll("section[id], div[id='beranda']");
  const navLinks = document.querySelectorAll(".navbar-pustaka .nav-link[href^='#']");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(s => observer.observe(s));

  // Init
  muatNamaPengguna();
  renderSemua();
});
