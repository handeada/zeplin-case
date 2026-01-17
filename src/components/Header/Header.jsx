import { Link } from 'react-router-dom';
import Button from '../Button';
import Icon from '../Icon';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header__top">
        <div className="container">
          <div className="header__top-content">
            <div className="header__email">
              <Icon name="email" size={16} />
              <span>profuture@gmail.com</span>
            </div>
            <div className="header__info">
              <span>ISSN: <strong>345-255</strong></span>
              <span>Başlangıç <strong>2025</strong></span>
              <span>Periyot: <strong>Yılda 2 Sayı</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header__main">
        <div className="container">
          <div className="header__main-content">
            {/* Logo */}
            <Link to="/" className="header__logo">
              <div className="header__logo-icon">
                <span>P</span>
              </div>
              <span className="header__logo-text">profuture</span>
            </Link>

            {/* Navigation */}
            <nav className="header__nav">
              <Link to="/" className="header__nav-link header__nav-link--home">
                <Icon name="home" size={20} />
              </Link>
              <Link to="/amac-kapsam" className="header__nav-link">
                Amaç ve Kapsam
              </Link>
              <Link to="/etik-ilkeler" className="header__nav-link">
                Etik İlkeler ve Yayın Politikası
              </Link>
              <Link to="/makale-cagrilari" className="header__nav-link">
                Makale Çağrıları
              </Link>
              <Link to="/sayilar" className="header__nav-link">
                Sayılar
              </Link>
              <Link to="/iletisim" className="header__nav-link">
                İletişim
              </Link>
            </nav>

            {/* Actions */}
            <div className="header__actions">
              <Button variant="primary" size="md" leftIcon={<Icon name="users" size={18} />}>
                Dergi Kurulu
              </Button>
              <Button variant="secondary" size="md" leftIcon={<Icon name="edit" size={18} />}>
                Yazar Rehberi
              </Button>
              <button className="header__search-btn">
                <Icon name="search" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
