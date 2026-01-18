import './Card.scss';
import { Badge, Button } from '../ui';

const Card = ({
  variant = 'default',
  image,
  badge,
  badgeVariant = 'primary',
  title,
  description,
  meta,
  authors,
  date,
  stats,
  actions,
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`card card--${variant} ${className}`} {...props}>
      {image && (
        <div className="card__image">
          <img src={image} alt={title || 'Card image'} />
          {badge && (
            <Badge variant={badgeVariant} className="card__badge">
              {badge}
            </Badge>
          )}
        </div>
      )}

      <div className="card__content">
        {!image && badge && (
          <Badge variant={badgeVariant} className="card__badge card__badge--inline">
            {badge}
          </Badge>
        )}

        {title && <h3 className="card__title">{title}</h3>}
        {description && <p className="card__description">{description}</p>}

        {meta && (
          <div className="card__meta">
            {meta}
          </div>
        )}

        {authors && (
          <div className="card__authors">
            {authors.map((author, index) => (
              <span key={index} className="card__author">{author}</span>
            ))}
          </div>
        )}

        {date && <span className="card__date">{date}</span>}

        {stats && (
          <div className="card__stats">
            {stats.map((stat, index) => (
              <div key={index} className="card__stat">
                <span className="card__stat-icon">{stat.icon}</span>
                <span className="card__stat-value">{stat.value}</span>
              </div>
            ))}
          </div>
        )}

        {children}

        {actions && (
          <div className="card__actions">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

// Sub-components
Card.Header = ({ children, className = '' }) => (
  <div className={`card__header ${className}`}>{children}</div>
);

Card.Body = ({ children, className = '' }) => (
  <div className={`card__body ${className}`}>{children}</div>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`card__footer ${className}`}>{children}</div>
);

export default Card;
