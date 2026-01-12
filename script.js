document.addEventListener('DOMContentLoaded', () => {
    // Performance: Cache DOM queries
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const backToTop = document.getElementById('backToTop');

    // Mobile Menu Toggle
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Change icon from bars to xmark
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Back to Top Button - Throttled scroll
    if (backToTop) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > 300) {
                        backToTop.classList.add('visible');
                    } else {
                        backToTop.classList.remove('visible');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
        
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Smooth Scroll for Anchor Links (Backup for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                // Account for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Hero Image Slider - Performance optimized
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 saniye
    let sliderTimer = null;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Only start slider if visible and slides exist
    if (slides.length > 0) {
        // Use requestAnimationFrame for smoother animations
        sliderTimer = setInterval(nextSlide, slideInterval);
        
        // Pause slider when tab is not visible (save resources)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                clearInterval(sliderTimer);
            } else {
                sliderTimer = setInterval(nextSlide, slideInterval);
            }
        });
    }

    /* Lightbox Implementation - Lazy loaded */
    const galleryImages = Array.from(document.querySelectorAll('.gallery-item img, .content-img img'));
    
    // Only initialize lightbox if gallery images exist
    if (galleryImages.length > 0) {
        let lightboxInitialized = false;
        let lightbox, lightboxImage, lightboxClose, lightboxPrev, lightboxNext;
        let currentImageIndex = 0;
        
        function initLightbox() {
            if (lightboxInitialized) return;
            
            // 1. Inject Lightbox HTML
            const lightboxHTML = `
                <div id="lightbox" class="lightbox">
                    <span id="lightboxClose" class="lightbox-close">&times;</span>
                    <div class="lightbox-prev" id="lightboxPrev"><i class="fa-solid fa-chevron-left"></i></div>
                    <div class="lightbox-content">
                        <img src="" alt="Tam Ekran" id="lightboxImage" class="lightbox-image">
                    </div>
                    <div class="lightbox-next" id="lightboxNext"><i class="fa-solid fa-chevron-right"></i></div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', lightboxHTML);

            // 2. Select Elements
            lightbox = document.getElementById('lightbox');
            lightboxImage = document.getElementById('lightboxImage');
            lightboxClose = document.getElementById('lightboxClose');
            lightboxPrev = document.getElementById('lightboxPrev');
            lightboxNext = document.getElementById('lightboxNext');
            
            // 4. Event Listeners for Controls
            lightboxClose.addEventListener('click', closeLightbox);

            // Close on background click
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });

            // Navigation Buttons
            lightboxPrev.addEventListener('click', (e) => {
                e.stopPropagation();
                showImage(currentImageIndex - 1);
            });

            lightboxNext.addEventListener('click', (e) => {
                e.stopPropagation();
                showImage(currentImageIndex + 1);
            });

            // Keyboard Navigation
            document.addEventListener('keydown', (e) => {
                if (!lightbox || !lightbox.classList.contains('active')) return;

                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') showImage(currentImageIndex - 1);
                if (e.key === 'ArrowRight') showImage(currentImageIndex + 1);
            });

            // Touch Navigation (Swipe)
            let touchStartX = 0;

            lightbox.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            lightbox.addEventListener('touchend', (e) => {
                const touchEndX = e.changedTouches[0].screenX;
                if (touchEndX < touchStartX - 50) {
                    showImage(currentImageIndex + 1);
                }
                if (touchEndX > touchStartX + 50) {
                    showImage(currentImageIndex - 1);
                }
            }, { passive: true });
            
            lightboxInitialized = true;
        }

        function openLightbox(src) {
            initLightbox();
            lightboxImage.src = src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            if (lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        function showImage(index) {
            if (index >= galleryImages.length) index = 0;
            if (index < 0) index = galleryImages.length - 1;

            currentImageIndex = index;
            const src = galleryImages[currentImageIndex].src;

            lightboxImage.style.opacity = 0;
            setTimeout(() => {
                lightboxImage.src = src;
                lightboxImage.style.opacity = 1;
            }, 200);
        }

        // 3. Open Lightbox on Click
        galleryImages.forEach((img, index) => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', (e) => {
                e.preventDefault();
                currentImageIndex = index;
                openLightbox(img.src);
            });
        });
    }
});
