import { Button, Icon, PostCard } from "../ui";
import "./CTASection.scss";
import magazineImage from "../../assets/images/image 1.png";

const CTASection = () => {
  const articles = [
    {
      id: 1,
      category: "İklim",
      articleType: "Araştırma Makalesi",
      title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
      pageRange: "12-28",
      authors: ["Elif Başkaya Acar", "Emre Taran", "Halil Başar"],
    },
    {
      id: 2,
      category: "İklim",
      articleType: "Araştırma Makalesi",
      title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
      pageRange: "12-28",
      authors: ["Elif Başkaya Acar", "Emre Taran", "Halil Başar"],
    },
    {
      id: 3,
      category: "İklim",
      articleType: "Araştırma Makalesi",
      title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
      pageRange: "12-28",
      authors: ["Elif Başkaya Acar", "Emre Taran", "Halil Başar"],
    },
    {
      id: 4,
      category: "İklim",
      articleType: "Araştırma Makalesi",
      title: "Türkiye'nin Teknoloji Politikaları ve Döngüsel Ekonomi",
      pageRange: "12-28",
      authors: ["Elif Başkaya Acar", "Emre Taran", "Halil Başar"],
    },
  ];

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-section__grid">
          {/* Magazine Card */}
          <div className="cta-section__magazine">
            <div className="cta-section__magazine-card">
              <img src={magazineImage} alt="Profuture Teknoloji Dergisi" />
              <div className="cta-section__magazine-actions">
                <Button variant="icon" size="md">
                  <Icon name="download" size={20} />
                </Button>
                <Button
                  variant="primary-filled"
                  size="md"
                  leftIcon={<Icon name="eye" size={20} />}
                >
                  Görüntüle
                </Button>
              </div>
            </div>
          </div>

          {/* Articles List */}
          <div className="cta-section__articles">
            <div className="cta-section__header">
              <div>
                <p className="cta-section__subtitle">
                  Profuture Teknoloji Dergisi
                </p>
                <h2 className="cta-section__title">Güncel Yazılar</h2>
              </div>
              <Button
                variant="default-filled"
                size="md"
                rightIcon={<Icon name="arrowRight" size={18} />}
              >
                Tümünü Görüntüle
              </Button>
            </div>

            <div className="cta-section__list">
              {articles.map((article) => (
                <PostCard
                  key={article.id}
                  category={article.category}
                  categoryVariant="primary"
                  articleType={article.articleType}
                  title={article.title}
                  pageRange={article.pageRange}
                  authors={article.authors}
                  onPrint={() => console.log("Print")}
                  onDownload={() => console.log("Download")}
                  onView={() => console.log("View")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
