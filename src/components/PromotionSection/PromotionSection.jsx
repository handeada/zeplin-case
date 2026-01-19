import "./PromotionSection.scss";
import { Button, Icon } from "../ui";
import leftImage from "../../assets/images/ChatGPT Image 12 Oca 2026 17_22_36 1.png";
import rightImage from "../../assets/images/Ekran Resmi 2025-12-16 18.29.30 1.png";
import backgroundImage from "../../assets/images/Mask group.png";

const PromotionSection = () => {
  return (
    <section className="promotion-section">
      <div className="container">
        <div className="promotion-section__content">
          <div className="promotion-section__background">
            <img src={backgroundImage} alt="" />
          </div>

          <div className="promotion-section__left">
            <img src={leftImage} alt="Dergi Kapakları" />
          </div>

          <div className="promotion-section__center">
            <div className="promotion-section__icon">
              <Icon name="megaphone" size={48} />
            </div>
            <span className="promotion-section__category">Makale Çağrısı</span>
            <h2 className="promotion-section__title">
              Türkiye Ulusal Dijital Veri ve Altyapıları
            </h2>
            <p className="promotion-section__description">
              Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve
              özel sektörde teknoloji altyapıları, yapay zekâ uygulamaları,
              büyük veri analitiği, siber güvenlik, akıllı sistemler ve dijital
              dönüşüm odaklı özgün, güncel ve disiplinlerarası akademik
              çalışmalar değerlendirilecektir.
            </p>
            <Button
              variant="warning-filled"
              size="large"
              rightIcon={<Icon name="arrowRight" size={20} />}
            >
              Makale Gönder
            </Button>
          </div>

          <div className="promotion-section__right">
            <img src={rightImage} alt="Bilgi ve Teknoloji Araştırmaları" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
