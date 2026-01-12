# System Patterns - Egepen AkçaYapı Web Sitesi

## Mimari Yapı

```
sineklikbeylikduzu.com.tr/
├── index.html              # Ana sayfa
├── pvc-dograma.html        # PVC pencere/kapı
├── aluminyum-dograma.html  # Alüminyum sistemler
├── cam-balkon.html         # Cam balkon
├── sineklik.html           # Sineklik sistemleri
├── dusakabin.html          # Duşakabin
├── panjur.html             # Panjur/kepenk
├── robots.txt              # Arama motoru kuralları
├── sitemap.xml             # Site haritası
├── css/
│   └── style.css           # Tüm stiller
├── js/
│   └── script.js           # JavaScript
└── images/
    ├── slider/             # Hero slider görselleri
    └── gallery/            # Ürün galeri görselleri
```

## Sayfa Yapısı Şablonu

Her hizmet sayfası aynı yapıyı takip eder:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <!-- SEO Meta Tags -->
    <!-- Open Graph Tags -->
    <!-- Schema.org JSON-LD -->
</head>
<body>
    <header>
        <!-- Top bar (telefon, email) -->
        <!-- Navbar (logo, menü) -->
    </header>
    
    <main>
        <section class="page-header">
            <!-- Breadcrumb -->
            <!-- Sayfa başlığı -->
        </section>
        
        <section class="page-content">
            <!-- content-intro: Giriş metni + görsel -->
            <!-- info-box: Önemli bilgiler -->
            <!-- product-section: Ürün kartları -->
            <!-- comparison-section: Karşılaştırma tablosu -->
            <!-- benefits-section: Avantajlar grid -->
            <!-- service-areas-section: Hizmet bölgeleri -->
            <!-- page-cta: Çağrı aksiyonu -->
            <!-- gallery-section: Galeri -->
        </section>
    </main>
    
    <footer>
        <!-- 4 sütunlu footer grid -->
        <!-- Copyright -->
    </footer>
    
    <!-- WhatsApp float button -->
    <!-- Back to top button -->
</body>
</html>
```

## CSS Tasarım Sistemi

### Renk Paleti
```css
--primary: #004785;       /* Ana mavi */
--primary-dark: #003366;  /* Koyu mavi */
--accent: #FF8C00;        /* Turuncu vurgu */
--text-dark: #333333;
--text-light: #666666;
--bg-light: #f8f9fa;
--white: #ffffff;
```

### Tipografi
- Font: Segoe UI, system-ui
- H1: 2.5rem
- H2: 2rem
- Body: 1rem (16px)

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1024px
- Mobile: < 768px

## Component Patterns

### Product Card
```html
<div class="product-card">
    <span class="product-badge">Önerilen</span>
    <div class="product-image">
        <img src="..." alt="..." loading="lazy">
    </div>
    <div class="product-content">
        <h3>Ürün Adı</h3>
        <p class="product-tagline">Kısa açıklama</p>
        <ul class="product-specs">...</ul>
        <div class="product-features">...</div>
        <a href="#" class="btn btn-primary">Teklif Al</a>
    </div>
</div>
```

### Benefit Item
```html
<div class="benefit-item">
    <div class="benefit-icon">
        <i class="fa-solid fa-icon"></i>
    </div>
    <h4>Avantaj Başlığı</h4>
    <p>Açıklama metni</p>
</div>
```

## SEO Patterns

### Meta Tags
Her sayfada mutlaka:
- title (60 karakter)
- description (160 karakter)
- canonical URL
- robots meta
- geo tags

### Schema.org
- LocalBusiness (tüm sayfalarda)
- Product (ürün sayfalarında)
- FAQPage (SSS bölümlerinde)
- BreadcrumbList (sayfa navigasyonu)

### İç Bağlantılar
- Her sayfa footer'dan bağlantılı
- Dropdown menüden tüm hizmetlere erişim
- CTA bölümlerinde çapraz bağlantılar
