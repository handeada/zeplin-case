import Icon from '../Icon/Icon';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Contact Info */}
        <div className="footer__contact">
          {/* Editor */}
          <div className="footer__contact-item">
            <div className="footer__icon">
              <Icon name="graduation" size={24} />
            </div>
            <div className="footer__contact-content">
              <h4>Dergi Editörü</h4>
              <p className="footer__name">Prof. Dr. Elif Başkaya Acar</p>
              <a href="mailto:elif@gmail.com" className="footer__email-link">
                <Icon name="email" size={14} />
                elif@gmail.com
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="footer__contact-item">
            <div className="footer__icon">
              <Icon name="email" size={24} />
            </div>
            <div className="footer__contact-content">
              <h4>Mail Adresi</h4>
              <p className="footer__email">profuture@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="footer__contact-item">
            <div className="footer__icon">
              <Icon name="location" size={24} />
            </div>
            <div className="footer__contact-content">
              <h4>Profuture Teknoloji Yayınevi</h4>
              <p>Ahmet Kemal Mahallesi 1245. Cadde No: 10</p>
              <p>Çankaya/Ankara</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="footer__disclaimer">
          <p>
            Bu sitede yer alan tüm yazılı, görsel ve uygulama içerikleri kaynak gösterilmeden kullanılamaz.
            Site içerisinde sunulan bilgiler yalnızca bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin
            kullanımından doğabilecek her türlü sorumluluk kullanıcıya aittir. Siteye erişim sağlayan
            kullanıcılar, bu şartları okumuş, anlamış ve kabul etmiş sayılır.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__copyright">
        <div className="container">
          <p>Profuture Teknoloji - Tüm Hakları Saklıdır. © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
