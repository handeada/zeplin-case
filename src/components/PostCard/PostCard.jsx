import { Badge, Button, Icon } from '../ui';
import './PostCard.scss';

const PostCard = ({
  category,
  categoryVariant = 'primary',
  articleType,
  title,
  pageRange,
  authors = [],
  onPrint,
  onDownload,
  onView,
  className = '',
  ...props
}) => {
  return (
    <div className={`post-card ${className}`} {...props}>
      {/* Header Section */}
      <div className="post-card__header">
        <div className="post-card__tags">
          {category && (
            <Badge variant={categoryVariant} size="md">
              {category}
            </Badge>
          )}
          {articleType && (
            <span className="post-card__article-type">{articleType}</span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="post-card__content">
        <div className="post-card__title-wrapper">
          <Icon name="file" size={24} className="post-card__file-icon" />
          <h3 className="post-card__title">{title}</h3>
        </div>

        <div className="post-card__meta">
          <div className="post-card__meta-item">
            <Icon name="book" size={16} className="post-card__meta-icon" />
            <span className="post-card__page-range">Sayfa: {pageRange}</span>
          </div>
          {authors.length > 0 && (
            <div className="post-card__meta-item">
              <Icon name="users" size={16} className="post-card__meta-icon" />
              <span className="post-card__authors">{authors.join(', ')}</span>
            </div>
          )}
        </div>
      </div>

      {/* Actions Section */}
      <div className="post-card__actions">
        <Button
          variant="icon"
          size="md"
          onClick={onPrint}
          aria-label="Yazdır"
        >
          <Icon name="printer" size={20} />
        </Button>
        <Button
          variant="icon"
          size="md"
          onClick={onDownload}
          aria-label="İndir"
        >
          <Icon name="download" size={20} />
        </Button>
        <Button
          variant="primary"
          size="md"
          onClick={onView}
          leftIcon={<Icon name="eye" size={20} />}
        >
          Görüntüle
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
