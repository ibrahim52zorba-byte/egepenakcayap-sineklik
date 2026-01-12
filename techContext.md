# Tech Context - Egepen AkçaYapı Web Sitesi

## Kullanılan Teknolojiler

### Frontend
| Teknoloji | Versiyon | Kullanım Amacı |
|-----------|----------|----------------|
| HTML5 | - | Semantic yapı |
| CSS3 | - | Styling, responsive |
| JavaScript | ES6+ | Interaktivite |
| Font Awesome | 6.4.0 | İkonlar |

### SEO
| Teknoloji | Kullanım | Durum |
|-----------|----------|-------|
| Schema.org | Yapısal veri (JSON-LD) | ✅ |
| Open Graph | Facebook/LinkedIn paylaşım | ✅ Tüm sayfalarda |
| Twitter Cards | Twitter paylaşım | ✅ Tüm sayfalarda |
| sitemap.xml | Arama motoru indeksleme | ✅ Güncellendi |
| robots.txt | Crawler yönetimi | ✅ |
| Meta Keywords | Yerel SEO | ✅ Genişletildi |

## Dosya Yapısı

```
d:\sineklikbeylikduzu.com.tr--main\
├── HTML Dosyaları (7 adet)
│   ├── index.html (787 satır)
│   ├── pvc-dograma.html
│   ├── aluminyum-dograma.html
│   ├── cam-balkon.html
│   ├── sineklik.html
│   ├── dusakabin.html
│   └── panjur.html
│
├── Yedek Dosyalar (*-old.html)
│
├── SEO Dosyaları
│   ├── robots.txt (31 satır)
│   └── sitemap.xml (64 satır)
│
├── css/
│   ├── style.css (yeni, temiz)
│   └── style-old.css (yedek, encoding hatası)
│
├── js/
│   └── script.js (185 satır)
│
└── images/
    ├── Ana görseller (47 adet)
    ├── slider/ (7 adet)
    └── gallery/ (36 adet)
```

## Geliştirme Ortamı

### Gereksinimler
- VS Code veya benzeri editör
- Web tarayıcı (Chrome DevTools)
- HTTP sunucu (test için)

### Test Sunucusu
```bash
# Node.js ile
npx http-server . -p 8080

# Python ile
python -m http.server 8080
```

### Dosya Encoding
- Tüm dosyalar UTF-8
- BOM karakteri yok
- Unix satır sonları (LF)

## Harici Bağımlılıklar

### CDN Kaynakları
```html
<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### Harici API'ler
- WhatsApp: `https://wa.me/902128801507`
- Google Maps: (henüz entegre değil)

## Performans Optimizasyonları

### Uygulanan ✅
- `loading="lazy"` tüm görsellerde
- CSS değişkenleri (DRY prensibi)
- Semantic HTML (SEO için)
- Preconnect hints
- Slider overlay kaldırıldı (performans)
- Görsel yolları optimize edildi

### Yapılabilecek (Gelecekte)
- Görsel sıkıştırma (WebP format)
- CSS/JS minification
- Service Worker (PWA)
- CDN kullanımı
- Favicon eklenmesi

## Son Güncelleme
**Tarih:** 12 Ocak 2026
**Durum:** Site yayına hazır 🚀

## Bilinen Teknik Sorunlar

### Çözülenler
1. ✅ CSS encoding hatası (UTF-16) - Yeni dosya oluşturuldu
2. ✅ Telefon numarası tutarsızlığı - Tüm sayfalarda düzeltildi
3. ✅ Eksik görseller - 83 görsel eklendi

### Açık Sorunlar
- [ ] Favicon (.ico) henüz yok
- [ ] Google Analytics entegrasyonu yok
- [ ] Google Maps embed yok
- [ ] Form işlevselliği yok (statik site)
