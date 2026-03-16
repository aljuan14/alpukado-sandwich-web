document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. PRELOADER LOGIC
    // ----------------------------------------------------
    const preloader = document.getElementById('preloader');
    const spans = document.querySelectorAll('.preloader-text span');
    
    // Memberikan penundaan stagger untuk animasi huruf "Avocado Sandwich"
    spans.forEach((span, index) => {
        span.style.animationDelay = `${index * 0.1}s`;
    });

    // Menghilangkan preloader setelah beberapa detik
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 2800); // 2.8 detik untuk menampilkan dengan megah nama band

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
        'https://images.unsplash.com/photo-1540039155733-d71efd544026?q=80&w=1200&auto=format&fit=crop', // Main
        'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop', // Stage
        'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop', // Guitar
        'https://images.unsplash.com/photo-1493225457124-a1a2a5f5cb39?q=80&w=1200&auto=format&fit=crop', // Singer
        'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1200&auto=format&fit=crop',  // Drums
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop'   // Crowd
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
