document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. PRELOADER LOGIC
    // ----------------------------------------------------
    const preloader = document.getElementById('preloader');
    // Stagger span lama telah dihapus karena menggunakan efek class glitch pada HTML baru

    // Menghilangkan preloader setelah beberapa detik
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 4000); // 4 detik agar sesuai dengan efek glitch yang terjadi pada 2 detik terakhir

    // ----------------------------------------------------
    // 2. STICKY NAVBAR LOGIC
    // ----------------------------------------------------
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ----------------------------------------------------
    // 3. INTERACTIVE GALLERY LOGIC
    // ----------------------------------------------------
    // Daftar gambar placeholder berkualitas tinggi dari Unsplash untuk suasana konser
    const galleryImages = [
        'assets/gallery/gallery.JPG', // Main
        'assets/gallery/gallery 1.JPG', // Stage
        'assets/gallery/gallery2.JPG', // Guitar
        'assets/gallery/gallery3.jpeg', // Singer
        'assets/gallery/gallery 4.jpeg'  // Drums
    ];

    let currentImgIndex = 0;
    const mainImg = document.getElementById('main-gallery-img');
    const thumbnailsContainer = document.getElementById('thumbnails-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Generate thumbnails secara dinamis
    galleryImages.forEach((src, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = `thumb-wrapper ${index === 0 ? 'active' : ''}`;
        wrapper.onclick = () => updateGallery(index);

        const img = document.createElement('img');
        img.src = src;
        img.alt = `Avocado Sandwich Gallery Image ${index + 1}`;
        img.loading = "lazy";

        wrapper.appendChild(img);
        thumbnailsContainer.appendChild(wrapper);
    });

    const updateGallery = (index) => {
        currentImgIndex = index;

        // Transisi pergantian gambar galeri utama
        mainImg.style.opacity = 0;

        setTimeout(() => {
            mainImg.src = galleryImages[currentImgIndex];
            mainImg.style.opacity = 1;
        }, 250); // Kecepatan efek fade-in/out 0.25s

        // Update indikator gambar aktif pada thumbnail
        document.querySelectorAll('.thumb-wrapper').forEach((thumb, i) => {
            if (i === currentImgIndex) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    };

    // Navigasi Previous Button
    prevBtn.addEventListener('click', () => {
        let newIndex = currentImgIndex - 1;
        if (newIndex < 0) newIndex = galleryImages.length - 1;
        updateGallery(newIndex);
    });

    // Navigasi Next Button
    nextBtn.addEventListener('click', () => {
        let newIndex = currentImgIndex + 1;
        if (newIndex >= galleryImages.length) newIndex = 0;
        updateGallery(newIndex);
    });
});
