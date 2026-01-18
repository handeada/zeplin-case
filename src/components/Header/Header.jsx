import { Link } from "react-router-dom";
import { Button, Icon } from "../ui";
import "./Header.scss";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div>
        <div className="header__content">
          {/* Left Column - Logo */}
          <div className="header__logo-container">
            <Link to="/" className="header__logo">
              <img src={logo} alt="Profuture" />
            </Link>
          </div>

          {/* Right Column */}
          <div className="header__right">
            {/* Row 1 - Top Info */}
            <div className="header__top-row">
              <div className="header__email">
                <Icon name="email" size={16} />
                <span>profuture@gmail.com</span>
              </div>
              <div className="header__info">
                <span>
                  ISSN: <strong>345-255</strong>
                </span>
                <span>
                  Başlangıç <strong>2025</strong>
                </span>
                <span>
                  Periyot: <strong>Yılda 2 Sayı</strong>
                </span>
              </div>
            </div>

            {/* Row 2 - Navigation */}
            <div className="header__bottom-row">
              <nav className="header__nav">
                <Link
                  to="/"
                  className="header__nav-link header__nav-link--home"
                >
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

              <div className="header__actions">
                <Button variant="primary" size="medium">
                  <Icon name="users" size={18} />
                  Dergi Kurulu
                </Button>
                <Button variant="secondary" size="medium">
                  <Icon name="edit" size={18} />
                  Yazar Rehberi
                </Button>
                <button className="header__search-btn">
                  <Icon name="search" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
