import './ListingSection.scss';
import { useRef } from 'react';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import PublicationCard from '../PublicationCard/PublicationCard';
import Pagination from '../Pagination/Pagination';

const ListingSection = ({
  title = "Sayılar",
  subtitle = "Dergiler",
  publications = [],
  onViewAll,
  currentPage = 1,
  totalPages = 1,
  onPageChange
}) => {
  const scrollContainerRef = useRef(null);

  return (
    <section className="listing-section">
      <div className="container">
        {/* Header with title and navigation */}
        <div className="listing-section__header">
          <div className="listing-section__header-left">
            <div className="listing-section__title-wrapper">
              <div className="listing-section__title-content">
                <Typography variant="small" weight="regular" className="listing-section__label">
                  {title}
                </Typography>
                <Typography variant="h2" weight="bold" className="listing-section__subtitle">
                  {subtitle}
                </Typography>
              </div>

              {/* Navigation arrows using Pagination component */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
                navigationOnly
                className="listing-section__navigation"
              />
            </div>
          </div>

          {/* View all button */}
          <Button
            variant="outline"
            className="listing-section__view-all"
            onClick={onViewAll}
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
