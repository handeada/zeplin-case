import "./PublicationCard.scss";
import Badge from "../Badge/Badge";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

const PublicationCard = ({
  image,
  isNew = false,
  isLatest = false,
  type = "Dergi",
  title,
  volume,
  issue,
  date,
  onView,
  onDownload,
  onNavigate,
  className = "",
  ...props
}) => {
  return (
    <div className={`publication-card ${className}`} {...props}>
      {isLatest && (
        <div className="publication-card__latest-badge">Son Sayı</div>
      )}
      {/* Left side - Magazine cover image */}
      <div className="publication-card__image">
        <img src={image} alt={title} />
      </div>

      {/* Right side - Content */}
      <div className="publication-card__content">
        {/* NEW badge */}
        {isNew && (
          <Badge variant="teal" size="md" className="publication-card__badge">
            YENİ
          </Badge>
        )}

        {/* PDF Icon and Type */}
        <div className="publication-card__type">
          <Icon name="file" size={24} />
          <Typography
            variant="small"
            weight="regular"
            className="publication-card__type-text"
          >
            {type}
          </Typography>
        </div>

        {/* Title */}
        <Typography
          variant="h5"
          weight="bold"
          className="publication-card__title"
        >
          {title}
        </Typography>

        {/* Meta information */}
        <div className="publication-card__meta">
          <div className="publication-card__meta-item">
            <Icon name="file" size={16} />
            <Typography variant="small" weight="medium">
              Cilt: {volume}
            </Typography>
          </div>
          <div className="publication-card__meta-item">
            <Icon name="list" size={16} />
            <Typography variant="small" weight="medium">
              Sayı: {issue}
            </Typography>
          </div>
        </div>

        {/* Date */}
        <div className="publication-card__date">
          <Icon name="calendar" size={16} />
          <Typography variant="small" weight="regular">
            {date}
          </Typography>
        </div>

        {/* Action buttons */}
        <div className="publication-card__actions">
          <Button
            variant="primary"
            className="publication-card__action-btn publication-card__action-btn--view"
            onClick={onView}
          >
            <Icon name="eye" size={24} />
          </Button>
          <Button
            variant="outline"
            className="publication-card__action-btn publication-card__action-btn--download"
            onClick={onDownload}
          >
            <Icon name="download" size={24} />
          </Button>
          <Button
            variant="outline"
            className="publication-card__action-btn publication-card__action-btn--navigate"
            onClick={onNavigate}
          >
            <Icon name="arrow-right" size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
