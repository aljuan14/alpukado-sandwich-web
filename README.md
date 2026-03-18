# Avocado Sandwich | Official Band Website 🥑🎸

Selamat datang di repositori resmi untuk website **Avocado Sandwich**! Website ini dirancang khusus untuk merepresentasikan band dengan tampilan modern, interaktif, dan sentuhan efek *cyberpunk/glitch* premium pada halaman masuk (preloader) yang berkesan.

## 🌟 Fitur Utama (Features)

1. **Extreme Glitch Preloader**
   Dilengkapi dengan animasi *broken CRT TV* dan teks *tearing* (RGB split merah/biru) yang agresif menggunakan teknik CSS `clip-path` tingkat lanjut, dengan tambahan *overlay* garis putus (scanlines).
2. **Desain Menawan & Responsif**
   Tampilan berkelas menggunakan skema warna gelap (*dark mode*) dengan aksen merah cerah (`--accent-color`). Teks menonjol menggunakan perpaduan Google Font *Oswald* dan *Poppins*.
3. **Sticky Navigation Bar**
   Menu bagian atas yang otomatis menempel dan menambahkan efek blur (kaca mika) saat halaman di-*scroll* ke bawah.
4. **Spotify Integration**
   Tersedia pemutar lagu langsung (*iframe*) dari artis Avocado Sandwich, memungkinkan pengunjung memutar *latest tracks* tanpa harus keluar website.
5. **Interactive Photo Gallery**
   Galeri foto khusus menggunakan native JavaScript. Klik gambar pratinjau (thumbnail) untuk melihat foto besar dengan transisi yang halus.
6. **YouTube Video Grid**
   Tampilan daftar putar *music video* yang tertata dengan apik menggunakan kontainer grid responsif yang dapat menyesuaikan berbagai ukuran layar otomatis.

## 🛠️ Bahasa & Teknologi (Tech Stack)

Website ini adalah website statis yang murni (native) dibuat tanpa *framework* yang berat, sehingga **sangat ringan dan cepat diakses**:
- **HTML5** (Semantik Murni)
- **CSS3** (Variabel CSS, Animasi Keyframes kompleks, Grid/Flexbox)
- **Vanilla JavaScript** (ES6+ interaktivitas untuk navigasi, galeri, preloader)

## 🚀 Cara Menjalankan Proyek (How to Run)

Karena ini adalah proyek berbasis **Native HTML**, Anda **tidak perlu menginstal** hal-hal rumit seperti Node.js atau Composer.

1. Buka folder proyek ini (`alpukado-web`).
2. Klik ganda pada file `index.html`.
3. Website akan langsung terbuka sempurna di web browser default Anda!

Untuk pengalaman pengembangan terbaik (*development*), Anda dapat menggunakan ekstensi **Live Server** di Visual Studio Code.

## 📂 Struktur Direktori

```text
alpukado-web/
├── assets/
│   ├── fonts/
│   ├── gallery/ (Berisi aset gambar band)
│   ├── logo.png (Gambar logo asli)
│   ├── favicon.png (Logo yang telah dicrop)
│   └── fotoband.png (Gambar utama latar belakang)
├── index.html (Halaman utama website)
├── style.css (Kode lengkap styling & animasi desain)
└── script.js (Logika fungsionalitas & iterasi frontend)
```

## 🎨 Modifikasi Tema (Theming)

Jika Anda ingin mengubah skema warna, bisa dengan sangat mudah dilakukan. Buka file `style.css` pada bagian `:root` dan sesuaikan nilainya:
```css
:root {
    --bg-color: #050505;
    --text-main: #ffffff;
    --accent-color: #e63946; /* Ubah ini untuk warna kustom lain */
}
```

---
*Dibuat khusus untuk Avocado Sandwich.* ✨
