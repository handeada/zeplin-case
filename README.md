# Profuture Teknoloji Dergisi - Frontend Projesi

Bu proje, Profuture Teknoloji Dergisi için geliştirilmiş modern bir web uygulamasıdır. React ve Vite kullanılarak oluşturulmuş, responsive ve kullanıcı dostu bir arayüz sunar.

## 🚀 Teknolojiler

- **React 18** - Modern UI geliştirme
- **Vite** - Hızlı geliştirme ortamı
- **SCSS** - Gelişmiş stil yönetimi
- **ESLint** - Kod kalitesi
- **Component-Based Architecture** - Yeniden kullanılabilir bileşenler

## 📦 Kurulum

Projeyi yerel ortamınızda çalıştırmak için:

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Production build oluşturun
npm run build

# Build önizlemesi
npm run preview
```

## 🎨 Proje Yapısı

```
src/
├── assets/          # Görseller ve medya dosyaları
├── components/      # React bileşenleri
│   ├── ui/         # Yeniden kullanılabilir UI bileşenleri
│   │   ├── Badge/
│   │   ├── Button/
│   │   ├── Icon/
│   │   ├── PublicationCard/
│   │   └── ...
│   ├── Header/     # Ana navigasyon
│   ├── Footer/     # Alt bilgi
│   ├── Hero/       # Ana banner bölümü
│   ├── ListingSection/      # Dergi listesi
│   ├── PromotionSection/    # Makale çağrısı
│   └── CTASection/          # Call-to-action
├── pages/          # Sayfa bileşenleri
├── styles/         # Global stil dosyaları
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── main.scss
└── App.jsx         # Ana uygulama bileşeni
```

## 🎯 Özellikler

### UI Bileşenleri

- **Button** - Çoklu variant'lar (primary, secondary, error, outline, ghost, icon)
- **Badge** - Farklı renk ve boyut seçenekleri
- **Icon** - 50+ SVG ikon seti
- **PublicationCard** - Dergi kartları (YENİ badge, Son Sayı badge desteği)
- **Typography** - Tutarlı tipografi sistemi
- **Pagination** - Sayfa navigasyonu

### Ana Bölümler

- **Header** - Responsive navigasyon menüsü
- **Hero Section** - Ana banner ve dergi tanıtımı
- **Listing Section** - Dergi arşivi (navigasyon arrow'ları ile)
- **Promotion Section** - Makale çağrısı banner'ı
- **CTA Section** - Son sayı ve öne çıkan makaleler
- **Footer** - İletişim bilgileri ve sosyal medya linkleri

## 🎨 Tasarım Sistemi

### Renkler

```scss
// Birincil Renkler
$primary: #273d89       // Ana mavi
$primary-dark: #112053  // Koyu mavi
$primary-light: #ebefff // Açık mavi

// İkincil Renkler
$secondary: #a8b95e     // Yeşil/Zeytin
$error: #db0d15         // Kırmızı
$warning: #de8536       // Turuncu

// Nötr Renkler
$gray-300: #acb1c6
$gray-500: #2a2c31
$bg-light: #fbfbfd
```

### Tipografi

- **Font Family:** Inter
- **Font Weights:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Font Sizes:** 10px - 32px arası responsive boyutlar

## 🔧 Geliştirme Notları

### Stil Yönetimi

- SCSS modülleri kullanılmıştır
- BEM metodolojisi ile class isimlendirme
- Mixin ve variable'lar ile yeniden kullanılabilir stiller
- Mobile-first responsive tasarım

### Component Yapısı

- Her component kendi klasöründe (Component.jsx + Component.scss)
- Props ile esnek ve yeniden kullanılabilir bileşenler
- Default props ile güvenli kullanım

### Tamamlanan Görevler

- ✅ Component-based mimari kurulumu
- ✅ SCSS ile gelişmiş stil yönetimi
- ✅ Responsive tasarım implementasyonu
- ✅ Reusable UI component library
- ✅ Icon sistemi entegrasyonu
- ✅ Tutarlı tasarım sistemi (colors, typography, spacing)
- ✅ BEM metodolojisi ile temiz CSS
- ✅ Modern React patterns (hooks, props, composition)

## 📄 Lisans

Bu proje bir assignment projesidir.

## 👨‍💻 Geliştirici

Profuture Teknoloji Dergisi Frontend Assignment
