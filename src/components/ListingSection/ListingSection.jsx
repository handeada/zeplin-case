import './ListingSection.scss';
import { useRef, useState } from 'react';
import { Typography, Button, Icon, PublicationCard, Pagination } from '../ui';
import magazineImage from '../../assets/images/1_1,6176.png';

const ListingSection = () => {
  const scrollContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const publications = [
    {
      id: 1,
      image: magazineImage,
      isNew: true,
      type: "Dergi",
      title: "Teknoloji ve Dijital Dergisi",
      volume: 1,
      issue: 1,
      date: "Aralık 2022",
      onView: () => console.log("View clicked"),
      onDownload: () => console.log("Download clicked"),
      onNavigate: () => console.log("Navigate clicked"),
    },
    {
      id: 2,
      image: magazineImage,
      isNew: false,
      type: "Dergi",
      title: "Teknoloji ve Dijital Dergisi",
      volume: 1,
      issue: 2,
      date: "Ocak 2023",
      onView: () => console.log("View clicked"),
      onDownload: () => console.log("Download clicked"),
      onNavigate: () => console.log("Navigate clicked"),
    },
    {
      id: 3,
      image: magazineImage,
      isNew: false,
      type: "Dergi",
      title: "Teknoloji ve Dijital Dergisi",
      volume: 1,
      issue: 3,
      date: "Şubat 2023",
      onView: () => console.log("View clicked"),
      onDownload: () => console.log("Download clicked"),
      onNavigate: () => console.log("Navigate clicked"),
    },
    {
      id: 4,
      image: magazineImage,
      isNew: false,
      type: "Dergi",
      title: "Teknoloji ve Dijital Dergisi",
      volume: 1,
      issue: 4,
      date: "Mart 2023",
      onView: () => console.log("View clicked"),
      onDownload: () => console.log("Download clicked"),
      onNavigate: () => console.log("Navigate clicked"),
    },
    {
      id: 5,
      image: magazineImage,
      isNew: false,
      type: "Dergi",
      title: "Teknoloji ve Dijital Dergisi",
      volume: 1,
      issue: 5,
      date: "Nisan 2023",
      onView: () => console.log("View clicked"),
      onDownload: () => console.log("Download clicked"),
      onNavigate: () => console.log("Navigate clicked"),
    },
    {
      id: 6,
      image: magazineImage,
      isNew: false,
      type: "Dergi",
      title: "Teknoloji ve Dijital Dergisi",
      volume: 1,
      issue: 6,
      date: "Mayıs 2023",
      onView: () => console.log("View clicked"),
      onDownload: () => console.log("Download clicked"),
      onNavigate: () => console.log("Navigate clicked"),
    },
  ];

  const totalPages = 2;

  const handlePageChange = (page) => {
    if (scrollContainerRef.current) {
      const cardWidth = 465; // PublicationCard width
      const gap = 24; // space('6') = 24px
      const scrollAmount = (cardWidth + gap) * 3 * (page - 1);

      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }

    setCurrentPage(page);
  };

  const handleViewAll = () => {
    console.log("View all clicked");
  };

  return (
    <section className="listing-section">
      <div className="container">
        {/* Header with title and navigation */}
        <div className="listing-section__header">
          <div className="listing-section__header-left">
            <div className="listing-section__title-wrapper">
              <div className="listing-section__title-content">
                <Typography variant="small" weight="regular" className="listing-section__label">
                  Sayılar
                </Typography>
                <Typography variant="h2" weight="bold" className="listing-section__subtitle">
                  Dergiler
                </Typography>
              </div>

              {/* Navigation arrows using Pagination component */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                navigationOnly
                className="listing-section__navigation"
              />
            </div>
          </div>

          {/* View all button */}
          <Button
            variant="outline"
            className="listing-section__view-all"
            onClick={handleViewAll}
          >
            Tümünü Görüntüle
            <Icon name="arrowRight" size={20} />
          </Button>
        </div>

        {/* Scrollable cards container */}
        <div
          className="listing-section__cards"
          ref={scrollContainerRef}
        >
          {publications.map((publication, index) => (
            <PublicationCard
              key={publication.id || index}
              image={publication.image}
              isNew={publication.isNew}
              type={publication.type}
              title={publication.title}
              volume={publication.volume}
              issue={publication.issue}
              date={publication.date}
              onView={publication.onView}
              onDownload={publication.onDownload}
              onNavigate={publication.onNavigate}
              className="listing-section__card"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingSection;
