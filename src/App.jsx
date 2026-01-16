import { useState } from 'react';
import './styles/main.scss';
import {
  Typography,
  Button,
  Badge,
  Card,
  ToggleButtonGroup,
  Pagination,
} from './components';

// Icons
const ShareIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>
  </svg>
);

const BookmarkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M22 6l-10 7L2 6"/>
  </svg>
);

const CopyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2"/>
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
  </svg>
);

const HourglassIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e5aa8" strokeWidth="2">
    <path d="M5 22h14M5 2h14M17 22v-4.172a2 2 0 00-.586-1.414L12 12l-4.414 4.414A2 2 0 007 17.828V22M7 2v4.172a2 2 0 00.586 1.414L12 12l4.414-4.414A2 2 0 0017 6.172V2"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);

const FileIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 5v14M5 12h14"/>
  </svg>
);

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedToggle, setSelectedToggle] = useState('tumu');

  const toggleOptions = [
    { value: 'tumu', label: 'Tümü' },
    { value: 'arastirma', label: 'Araştırma Makalesi' },
    { value: 'inceleme', label: 'İnceleme Makalesi' },
    { value: 'deneme', label: 'Deneme' },
  ];

  const titleToggleOptions = [
    { value: 'inter', label: 'Inter' },
    { value: 'bold', label: 'Bold' },
    { value: 'semibold', label: 'Semibold' },
    { value: 'medium', label: 'Medium' },
    { value: 'regular', label: 'Regular' },
    { value: 'light', label: 'Light' },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-10">

          {/* COLOR SECTION */}
          <section>
            <Typography variant="h4" weight="bold" className="mb-4 text-gray-400">COLOR</Typography>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="success-solid">Success</Badge>
              <Badge variant="error-solid">Error</Badge>
              <Badge variant="warning-solid">Warning</Badge>
              <Badge variant="primary-solid">Primary</Badge>
              <Badge variant="dark">Stroke Medium</Badge>
              <Badge variant="teal">#62E3E3</Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="success">Success Light</Badge>
              <Badge variant="error">Error Light</Badge>
              <Badge variant="warning">Warning Light</Badge>
              <Badge variant="primary">Primary Light</Badge>
            </div>
          </section>

          {/* TOGGLE BUTTON GROUP SECTION */}
          <section>
            <Typography variant="h4" weight="bold" className="mb-4">ToggleButtonGroup</Typography>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 w-12">Default</span>
                <span className="text-xs text-gray-400 w-12">Hover</span>
                <span className="text-xs text-gray-400 w-12">Active</span>
                <span className="text-xs text-gray-400 w-12">Inactive</span>
              </div>
              <ToggleButtonGroup
                options={toggleOptions}
                value={selectedToggle}
                onChange={setSelectedToggle}
              />
            </div>
          </section>

          {/* TITLE / TYPOGRAPHY SECTION */}
          <section>
            <Typography variant="h4" weight="bold" className="mb-4" style={{ color: '#1e5aa8' }}>TITLE</Typography>
            <div className="mb-4">
              <ToggleButtonGroup options={titleToggleOptions} />
            </div>
            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="w-8 text-sm font-semibold" style={{ color: '#1e5aa8' }}>H1</span>
                <Typography variant="h1">32 px font-size / 38 line height</Typography>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="w-8 text-sm font-semibold" style={{ color: '#1e5aa8' }}>H2</span>
                <Typography variant="h2">28 px font-size / 36 line height</Typography>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="w-8 text-sm font-semibold" style={{ color: '#1e5aa8' }}>H3</span>
                <Typography variant="h3">26 px font-size / 32 line height</Typography>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="w-8 text-sm font-semibold" style={{ color: '#1e5aa8' }}>H4</span>
                <Typography variant="h4">24 px font-size / 30 line height</Typography>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="w-8 text-sm text-gray-400">H5</span>
                <Typography variant="h5" className="text-gray-400">22 px font-size / 28 line height</Typography>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="w-8 text-sm text-gray-400">H6</span>
                <Typography variant="h6" className="text-gray-400">20 px font-size / 26 line height</Typography>
              </div>
            </div>
          </section>

          {/* CATEGORY BADGE SECTION */}
          <section>
            <Typography variant="h4" weight="bold" className="mb-4">Category Badge</Typography>
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary" size="sm">Araştırma Makalesi</Badge>
              <Badge variant="success" size="sm">Deneme</Badge>
              <Badge variant="warning" size="sm">İnceleme Makalesi</Badge>
              <Badge variant="info" size="sm">İnceleme Makalesi</Badge>
            </div>
          </section>

          {/* PAGINATION SECTION */}
          <section>
            <Typography variant="h4" weight="bold" className="mb-4">Pagination</Typography>
            <div className="flex items-center gap-4">
              <Pagination
                currentPage={currentPage}
                totalPages={99}
                onPageChange={setCurrentPage}
                showFirstLast={false}
              />
              <div className="flex items-center gap-1 ml-4">
                <span className="w-6 h-6 rounded bg-primary-light flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1e5aa8" strokeWidth="2">
                    <path d="M15 19l-7-7 7-7"/>
                  </svg>
                </span>
                <span className="w-6 h-6 rounded bg-primary-light flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1e5aa8" strokeWidth="2">
                    <path d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </div>
          </section>

          {/* BUTTONS SECTION */}
          <section>
            <Typography variant="h4" weight="bold" className="mb-4">Buttons</Typography>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Badge variant="gray" size="sm">Sayfa: 10-59</Badge>
                <span className="text-sm text-gray-500">Yazar Adı Soyadı</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="icon"><ShareIcon /></Button>
                <Button variant="icon"><BookmarkIcon /></Button>
              </div>
            </div>
          </section>

          {/* PROJE FONTU */}
          <section>
            <Typography variant="h4" weight="bold" className="mb-3">Proje Fontu</Typography>
            <a
              href="https://fonts.google.com/specimen/Inter?query=inter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
              style={{ color: '#1e5aa8' }}
            >
              https://fonts.google.com/specimen/Inter?query=inter
            </a>
          </section>

        </div>

        {/* RIGHT COLUMN - CARDS */}
        <div className="space-y-6">
          <Typography variant="h4" weight="bold" className="mb-4">Cards</Typography>

          {/* Card 1 - Article Card */}
          <Card variant="bordered">
            <Card.Body>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="primary" size="sm">Araştırma Makalesi</Badge>
              </div>
              <Typography variant="body" weight="semibold" className="mb-2 text-gray-800">
                Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi
              </Typography>
              <div className="text-xs text-gray-500 mb-3">
                <span>Sayfa: 12-28</span>
                <span className="mx-2">|</span>
                <span>Elif Baykan Acar, Emre Taner, Halil Bayar</span>
              </div>
              <Button variant="primary" size="sm" className="w-full">
                Görüntüle
              </Button>
            </Card.Body>
          </Card>

          {/* Card 2 - Magazine Card */}
          <Card variant="elevated">
            <Card.Body>
              <div className="flex gap-3">
                {/* Magazine Cover */}
                <div className="w-16 flex-shrink-0">
                  <div className="rounded overflow-hidden relative" style={{ background: 'linear-gradient(180deg, #1e3a5f 0%, #0d2847 100%)' }}>
                    <div className="aspect-[3/4] flex items-center justify-center p-2">
                      <HourglassIcon />
                    </div>
                    <div className="absolute bottom-1 left-1 right-1">
                      <span className="text-white text-[6px] font-medium block text-center">DIGITAL JOURNAL</span>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Header with logo and badge */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      <span className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-[8px] font-bold text-blue-600">P</span>
                      </span>
                      <span className="text-[10px] text-gray-400">profuture</span>
                    </div>
                    <Badge variant="info" size="sm">Sayı</Badge>
                  </div>
                  {/* Title */}
                  <Typography variant="body" weight="semibold" className="text-gray-800 text-sm leading-tight mb-2">
                    Teknoloji ve Dijital Dönüşüm
                  </Typography>
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-[11px] text-gray-500">
                    <span className="flex items-center gap-1">
                      <CalendarIcon />
                      Cilt 1
                    </span>
                    <span className="flex items-center gap-1">
                      <FileIcon />
                      Sayı: 1
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-400 block mt-1">Aralık 2023</span>
                </div>
              </div>
              {/* Footer Actions */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                <div className="flex gap-1">
                  <Button variant="icon"><ShareIcon /></Button>
                  <Button variant="icon"><BookmarkIcon /></Button>
                </div>
                <Button variant="icon"><PlusIcon /></Button>
              </div>
            </Card.Body>
          </Card>

          {/* Card 3 - Cookie Consent */}
          <Card variant="bordered">
            <Card.Body>
              <div className="flex items-start gap-3 mb-3">
                <span className="text-xl">🍪</span>
                <div>
                  <Typography variant="small" className="text-gray-700 leading-relaxed">
                    We use cookies to ensure that we give you the best experience on our website. <a href="#" className="hover:underline" style={{ color: '#1e5aa8' }}>Read cookies policies</a>.
                  </Typography>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <Button variant="outline" size="sm">Decline</Button>
                <Button variant="primary" size="sm">Allow</Button>
              </div>
            </Card.Body>
          </Card>

          {/* Social Share Buttons */}
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <Button variant="social"><XIcon /></Button>
              <Button variant="social"><LinkedInIcon /></Button>
              <Button variant="social"><FacebookIcon /></Button>
              <Button variant="social"><MailIcon /></Button>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <Button variant="icon"><ShareIcon /></Button>
              <Button variant="icon"><BookmarkIcon /></Button>
              <Button variant="icon"><CopyIcon /></Button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
