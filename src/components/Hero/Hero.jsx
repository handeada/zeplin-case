import './Hero.scss';
import { Button, Badge } from '../index';
import slideBackground from '../../assets/images/slide 1.png';
import magazineImage from '../../assets/images/dergison 1.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        {/* First Row - Latest Issue */}
        <div className="hero__top-row">
          <div className="hero__background">
            <img src={slideBackground} alt="" />
          </div>

          <div className="hero__latest-issue">
            <Badge variant="secondary" size="small">
              Profuture Teknoloji Dergisi
            </Badge>
            <h1 className="hero__title">Son Sayı Yayında</h1>
            <p className="hero__description">
              Profuture teknoloji mekanizmaları değişikliği alanlarında özgün
              akademik çalışmalar içeren yeni sayıya şimdi erişin.
            </p>

            <div className="hero__issue-details">
              <div className="hero__detail-item">
                <span className="hero__detail-label">Cilt:</span>
                <span className="hero__detail-value">2</span>
              </div>
              <div className="hero__detail-item">
                <span className="hero__detail-label">Sayı:</span>
                <span className="hero__detail-value">7</span>
              </div>
              <div className="hero__detail-item">
                <span className="hero__detail-label">Haziran 2025</span>
              </div>
            </div>

            <Button variant="primary" size="large">
              Dergiyi Görüntüle
            </Button>
          </div>

          <div className="hero__magazine-image">
            <img src={magazineImage} alt="Profuture Teknoloji Dergisi Son Sayı" />
          </div>
        </div>

        {/* Second Row - About */}
        <div className="hero__bottom-row">
          <div className="hero__about">
            <span className="hero__about-label">Dergi Amacı ve Kapsamı</span>
            <h2 className="hero__about-title">Profuture Teknoloji Dergisi</h2>
            <p className="hero__about-description">
              Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan;
              teknoloji, inovasyon, dijital dönüşüm ve geleceğin üretim modelleri
              ekseninde sosyal bilimler ile mühendislik ve fen bilimlerini bir araya
              getiren, uluslararası hakemli ve açık erişimli bir akademik yayındır.
            </p>
            <Button variant="secondary" size="medium">
              Detay
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
