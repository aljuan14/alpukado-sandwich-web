# Avocado Sandwich | Official Band Website

## Fitur Utama

1. **Glitch Preloader**
   Preloader CSS tingkat lanjut yang menampilkan animasi glitch gaya layar CRT dan efek pemisahan warna RGB (red/blue) menggunakan teknik modern clip-path.

2. **Desain Visual Responsif**
   Antarmuka bertema gelap (*dark mode*) dengan aksen warna yang kontras, dioptimalkan untuk memberikan dampak visual tinggi di berbagai ukuran layar perangkat.

3. **Navigasi Multi-Platform**
   Bilah navigasi berbasis *glassmorphism* yang menempel (sticky) dan bertransisi secara halus saat digulir, dilengkapi dengan menu hamburger khusus untuk aksesibilitas perangkat seluler.

4. **Integrasi Media**
   * **Spotify:** Pemutar lagu bawaan untuk akses langsung ke karya lagu terbaru tanpa harus meninggalkan situs.
   * **YouTube:** Grid video responsif yang tertata rapi untuk pemutaran video musik berkualitas tinggi di perangkat manapun.

5. **Galeri Foto Interaktif**
   Galeri gambar kustom menggunakan JavaScript murni (vanilla) untuk memastikan transisi yang ringan dan halus serta pemuatan gambar yang optimal.

## Teknologi (Tech Stack)

Proyek ini dibuat menggunakan teknologi web murni untuk memastikan performa yang cepat dan beban yang ringan:
- HTML5 (Semantik dan optimasi SEO)
- CSS3 (Custom properties, animasi keyframe, Flexbox, dan Grid)
- Vanilla JavaScript (Modern ES6+ untuk seluruh interaksi dinamis)

## Memulai (Getting Started)

Sebagai proyek berbasis native HTML, tidak diperlukan dependensi eksternal atau alat bantu pengembangan tambahan.

1. Salin atau unduh repositori ini.
2. Buka file `index.html` menggunakan peramban web modern manapun.

Untuk pengalaman pengembangan terbaik, disarankan menggunakan server lokal (seperti ekstensi Live Server pada VS Code).

## Struktur Proyek

```text
alpukado-web/
├── assets/
│   ├── gallery/ (Aset fotografi band)
│   ├── favicon.png (Ikon situs)
│   └── fotoband.png (Latar belakang utama hero section)
├── index.html (Halaman utama)
├── style.css (Kode lengkap styling dan animasi)
└── script.js (Logika interaktif dan fungsionalitas galeri)
```

## Kustomisasi Tema

Untuk mengubah skema warna utama atau variabel desain, Anda dapat memperbarui bagian `:root` di dalam file `style.css`:

```css
:root {
    --bg-color: #050505;
    --text-main: #ffffff;
    --accent-color: #2ed573;
}
```

---
Portofolio Proyek Resmi Avocado Sandwich.
