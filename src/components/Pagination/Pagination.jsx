import { useMemo } from 'react';
import './Pagination.scss';
import Icon from '../Icon/Icon';

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  siblingCount = 1,
  showFirstLast = true,
  size = 'md',
  navigationOnly = false,
  className = '',
  ...props
}) => {
  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const pages = useMemo(() => {
    const totalPageNumbers = siblingCount * 2 + 3;

    if (totalPages <= totalPageNumbers) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, '...', totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [1, '...', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [1, '...', ...middleRange, '...', totalPages];
    }

    return range(1, totalPages);
  }, [currentPage, totalPages, siblingCount]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange?.(page);
    }
  };

  return (
    <nav
      className={`pagination pagination--${size} ${navigationOnly ? 'pagination--navigation-only' : ''} ${className}`}
      aria-label="Pagination"
      {...props}
    >
      {!navigationOnly && showFirstLast && (
        <button
          type="button"
          className="pagination__button pagination__button--nav"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          aria-label="First page"
        >
          <Icon name="arrowLeft" size={14} />
          <Icon name="arrowLeft" size={14} />
        </button>
      )}

      <button
        type="button"
        className="pagination__button pagination__button--nav"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <Icon name="arrowLeft" size={14} />
      </button>

      {!navigationOnly && (
        <div className="pagination__pages">
          {pages.map((page, index) => (
            page === '...' ? (
              <span key={`dots-${index}`} className="pagination__dots">...</span>
            ) : (
              <button
                key={page}
                type="button"
                className={`pagination__button ${currentPage === page ? 'pagination__button--active' : ''}`}
                onClick={() => handlePageChange(page)}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            )
          ))}
        </div>
      )}

      <button
        type="button"
        className="pagination__button pagination__button--nav"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <Icon name="arrowRight" size={14} />
      </button>

      {!navigationOnly && showFirstLast && (
        <button
          type="button"
          className="pagination__button pagination__button--nav"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Last page"
        >
          <Icon name="arrowRight" size={14} />
          <Icon name="arrowRight" size={14} />
        </button>
      )}
    </nav>
  );
};

export default Pagination;
